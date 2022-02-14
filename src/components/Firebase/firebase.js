//                                    BİSMİLLAHİRRAHMANİRRAHİM

import app from 'firebase/app';
import 'firebase/database';
import Api_v1 from './api/v1';
import Api_v2 from './api/v2';


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
    this.api = new Api_v2(this.db);
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
      // console.log(Hatim.val());
      let data = Hatim.val();
      
      if(data.baslik != null){
        data = [data];
        this.api = new Api_v1(this.db);
      }

      
      return data;

    } catch (error) {
      
      console.log(`firebase.js: ${error}`);
      return "error";

    }
  }

  hatimBasligiGetir = async (hatimKey) => {
    let baslik = await this.db.ref( "hatim/" + hatimKey + "/baslik" ).get();
    return baslik.val();
  }

  yeniHatim = async (baslik, bitisTarihi, mevcutHatim = false) => {
    return (await this.api.yeniHatim(baslik, bitisTarihi, mevcutHatim));
  }

  cuzAlindi = async (isim, no, subKey) => {
    await this.api.cuzAlindi(isim, no, subKey);
  }


  cuzIptal = async (no, subKey) => {
    await this.api.cuzIptal(no, subKey);
  }

  cuzBitti = async (hatimKey) => {
    await this.api.cuzBitti(hatimKey);
  }

  ziyaretSayisiGetir = async () => {
    return (await this.api.ziyaretSayisiGetir());
  }

  ziyaretSayisiArtir = async () => {
    await this.api.ziyaretSayisiArtir();
  }
}

export default Firebase;

