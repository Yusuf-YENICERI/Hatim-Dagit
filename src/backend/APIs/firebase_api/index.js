




import {dataFormat} from '../../../strings/dataFormat';
import { countNumberOfCuzs } from "../../utils";
import { generateHash } from "random-hash";
import LocDb from "@yusuf-yeniceri/easy-storage";
import app from 'firebase/app';
import 'firebase/database';
import {sFunctions} from '../../sFunctions'

require('dotenv').config()

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
  };

const netlifyParams = {
    dev: process.env.REACT_APP_dev
}

class FirebaseAPI{
    
    constructor(){
      
        app.initializeApp(config);
        this.db = app.database();
        this.countNumberOfCuzs = countNumberOfCuzs;
    
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
      if(index != -1) return link.substr(index+4, link.length).replace('/', '');
      index = link.indexOf("/ramazan")
      return link.substr(index+8, link.length).replace('/', '');
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
  
    yeniHatim = async (baslik, bitisTarihi, mevcutHatim = false, isRamazan = false, description = "") => {
      dataFormat.baslik = baslik;
      dataFormat.bitisTarihi = bitisTarihi;
      dataFormat.isRamazan = isRamazan;
      dataFormat.description = description;
    
      // console.log(dataFormat)
      // console.log(baslik)
  
      let hatimKey, adminToken;
      if(!mevcutHatim){
        hatimKey = await this.db.ref("hatim").push().key;
        adminToken = generateHash({length: 16});
        await this.db.ref(`hatim/${hatimKey}/adminToken`).set(adminToken)
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

        LocDb.ref("Hatim/adminToken").modify((aD)=>{
          if(!Array.isArray(aD)) aD = []
          let obj = {}
          obj[hatimKey] = adminToken
          aD.push(obj)
          return aD;
        })
      }
      
      
      return hatimKey;
    }


    hatimDegistir = async (baslik, bitisTarihi, description, subKey) => {
      try {
        await this.db.ref(`hatim/${this.extractKey()}/${subKey}`).update({baslik: baslik, bitisTarihi: bitisTarihi, description: description});
        return 0;        
      } catch (error) {
        return -1;
      }
    }
  
    cuzAl = async (isim, no, subKey, alindi = true) => {
      let hatimKey = this.extractKey().replace('/','');
      let sira = this.hatimSiraBelirle(no);

      let ownerId = LocDb.ref(`Hatim/hatimKeys/${hatimKey}/${subKey}/ownerId`).get()

      if((typeof ownerId) == "object"){
        ownerId = generateHash({length: 8});
        LocDb.ref(`Hatim/hatimKeys/${hatimKey}/${subKey}/ownerId`).set(ownerId);
      }

      let params = {
            key: hatimKey.toString(),
            subKey: subKey.toString(),
            cuzNo: no.toString(),
            name: isim,
            alindi: alindi.toString(),
            ownerId: ownerId,
            dev: netlifyParams.dev
      }

      console.log(`params: ${params.dev}`)

      try {
        let result = await sFunctions.takeCuz(params);
        if(result.code == 200){
         // 0 means taking Cuz is successfull
          return 0;
        }else{
          return -1;
        }
      } catch (error) {
        //-1 means Cuz is already taken
        return -1;
      }
      
       
        
      
    }

    cuzIsimDegistir = async (isim, no, subKey) => {
      return this.cuzAl(isim, no, subKey);
    }
  
  
    cuzIptal = async (no, subKey) => {
      return this.cuzAl('', no, subKey, false);
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

    deleteHatim = async () => {
      try {
        let aD = LocDb.ref("Hatim/adminToken").get();
        let filtered = aD.filter(x=>Object.keys(x)[0].toString() == this.extractKey().replace("/","").toString());

        await this.db.ref(`hatim/${this.extractKey()}/delete`).set({adminToken: filtered[0][Object.keys(filtered[0])]});
        await this.db.ref(`hatim/${this.extractKey()}`).set({adminToken: filtered[0][Object.keys(filtered[0])]});

        return 0;  
      } catch (error) {
        console.error(error)
        return -1;
      }
    }


    hatimListener = (callback) => {
      return this.db.ref(`hatim/${this.extractKey()}`).on('value', callback);
    }
  }

  export default FirebaseAPI;