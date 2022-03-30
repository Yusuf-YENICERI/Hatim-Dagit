




import {dataFormat} from '../../../../strings/dataFormat';



class Api_v2{
    
    constructor(_db){
  
        this.db = _db;
    
    }
  
  
    /**
     * Api helpers Biiznillah
     */
  
    hatimSiraBelirle = (no) => {
      let hatimSira = 1;
      switch(true){
        case no < 11:
          break;
        case no < 21:
          hatimSira = 2;
          break;
        case no <= 30:
          hatimSira = 3;
          break;
      }
      
      return hatimSira;
    }
  
    extractKey = () => {
      let link = window.location.toString();
      let index = link.indexOf("/cuz")
      if(index != -1) return link.substr(index+4, link.length);
      index = link.indexOf("/ramazan")
      return link.substr(index+8, link.length);
    }
  
    /**
     * Api functions
     */
  
    hatimGetir = async () => {
      try {
        let hatimKey = this.extractKey();
        let Hatim = await this.db.ref( "hatim/" + hatimKey ).get();
        // console.log(Hatim.val());
        let data = Hatim.val();
        
        if(data.baslik != null){
          data = [data];
        }
  
        console.log(data);
        
        return data;
      } catch (error) {
        return "error";
      }
    }
  
    hatimBasligiGetir = async (hatimKey) => {
      let baslik = await this.db.ref( "hatim/" + hatimKey + "/baslik" ).get();
      return baslik.val();
    }
  
    yeniHatim = async (baslik, bitisTarihi, mevcutHatim = false, isRamazan = false) => {
      dataFormat.baslik = baslik;
      dataFormat.bitisTarihi = bitisTarihi;
      dataFormat.isRamazan = isRamazan;
  
      console.log(dataFormat)
      console.log(baslik)
  
      let hatimKey;
      if(!mevcutHatim){
        hatimKey = await this.db.ref("hatim").push().key;
      }else{
        hatimKey = this.extractKey();
        hatimKey = hatimKey.replace("/", "");
      }
      let hatimAltKey = await this.db.ref(`hatim/${hatimKey}`).push().key;
      await this.db.ref( `hatim/${hatimKey}/${hatimAltKey}` ).set(dataFormat);
  
      console.log(`hatimKey: ${hatimKey}`)
      console.log(`hatimAltKey: ${hatimAltKey}`)
  
      if(!mevcutHatim){
        let localStorageCuzKeylerArr = JSON.parse(localStorage.getItem("CuzKeyler"));
        if(localStorageCuzKeylerArr == null)  localStorageCuzKeylerArr = [];
        localStorageCuzKeylerArr.push(hatimKey);
        localStorage.setItem("CuzKeyler", JSON.stringify(localStorageCuzKeylerArr))
  
        let localStorageCuzKeylerArrBaslik = JSON.parse(localStorage.getItem("CuzKeylerBaslik"));
        if(localStorageCuzKeylerArrBaslik == null)  localStorageCuzKeylerArrBaslik = [];
        localStorageCuzKeylerArrBaslik.push(baslik);
        localStorage.setItem("CuzKeylerBaslik", JSON.stringify(localStorageCuzKeylerArrBaslik))
      }
      
      
      return hatimKey;
    }
  
    cuzAlindi = async (isim, no, subKey) => {
      let hatimKey = this.extractKey();
      let sira = this.hatimSiraBelirle(no);
  
      await this.db.ref("hatim/" + hatimKey + "/" + subKey + "/" + sira + "/cevaplar/" + (no-((sira-1)*10+1))).set({
                  cevap: no,
                  isim: isim,
                  alindi: true,
      });
    }
  
  
    cuzIptal = async (no, subKey) => {
      let hatimKey = this.extractKey();
      let sira = this.hatimSiraBelirle(no);
  
      await this.db.ref("hatim/" + hatimKey + "/" + subKey + "/" + sira + "/cevaplar/" + (no-((sira-1)*10+1))).set({
                  cevap: no,
                  isim: '',
                  alindi: false,
      });
    }
  
    cuzBitti = async (hatimKey) => {
      await this.db.ref("hatim/" + hatimKey + "/bitti").set(true);
    }
  
    ziyaretSayisiGetir = async () => {
      let ziyaretSayisi = await this.db.ref( "ziyaretSayisi" ).get();
      return ziyaretSayisi.val();
    }
  
    ziyaretSayisiArtir = async () => {
      await this.db.ref("ziyaretSayisi").set(Number(await this.ziyaretSayisiGetir()) + 1);
    }
  }

  export default Api_v2;