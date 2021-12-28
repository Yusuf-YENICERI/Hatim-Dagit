

import app from 'firebase/app';
import 'firebase/database';

import {dataFormat} from '../../strings/dataFormat';
require('dotenv').config()

const config = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    databaseURL: process.env.REACT_APP_databaseURL,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId
  };


class Firebase{
  constructor(){
    app.initializeApp(config);

    this.db = app.database();
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
    return link.substr(index+4, link.length);
  }

  /**
   * Api functions
   */

  hatimGetir = async () => {
    try {
      let hatimKey = this.extractKey();
      let Hatim = await this.db.ref( "hatim/" + hatimKey ).get();
      console.log(Hatim.val());
      return Hatim.val(); 
    } catch (error) {
      return "error";
    }
  }

  hatimBasligiGetir = async (hatimKey) => {
    let baslik = await this.db.ref( "hatim/" + hatimKey + "/baslik" ).get();
    return baslik.val();
  }

  yeniHatim = async (baslik, bitisTarihi) => {
    dataFormat.baslik = baslik;
    dataFormat.bitisTarihi = bitisTarihi;

    console.log(dataFormat)
    console.log(baslik)

    let hatimKey = await this.db.ref("hatim").push().key;
    await this.db.ref( "hatim/" + hatimKey ).set(dataFormat);


    let localStorageCuzKeylerArr = JSON.parse(localStorage.getItem("CuzKeyler"));
    if(localStorageCuzKeylerArr == null)  localStorageCuzKeylerArr = [];
    localStorageCuzKeylerArr.push(hatimKey);
    localStorage.setItem("CuzKeyler", JSON.stringify(localStorageCuzKeylerArr))

    let localStorageCuzKeylerArrBaslik = JSON.parse(localStorage.getItem("CuzKeylerBaslik"));
    if(localStorageCuzKeylerArrBaslik == null)  localStorageCuzKeylerArrBaslik = [];
    localStorageCuzKeylerArrBaslik.push(baslik);
    localStorage.setItem("CuzKeylerBaslik", JSON.stringify(localStorageCuzKeylerArrBaslik))
    
    
    return hatimKey;
  }

  cuzAlindi = async (isim, no) => {
    let hatimKey = this.extractKey();
    let sira = this.hatimSiraBelirle(no);

    await this.db.ref("hatim/" + hatimKey + "/" + sira + "/cevaplar/" + (no-((sira-1)*10+1))).set({
                cevap: no,
                isim: isim,
                alindi: true,
    });
  }


  cuzIptal = async (no) => {
    let hatimKey = this.extractKey();
    let sira = this.hatimSiraBelirle(no);

    await this.db.ref("hatim/" + hatimKey + "/" + sira + "/cevaplar/" + (no-((sira-1)*10+1))).set({
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

export default Firebase;

