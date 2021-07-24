

import app from 'firebase/app';
import 'firebase/database';

import {dataFormat} from '../../strings';

const config = {
    apiKey: "AIzaSyDSXq8DZse788Uob2MtzDYdhqdStUnOYtc",
    authDomain: "hatim-dagit.firebaseapp.com",
    databaseURL: "https://hatim-dagit-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "hatim-dagit",
    storageBucket: "hatim-dagit.appspot.com",
    messagingSenderId: "451534794471",
    appId: "1:451534794471:web:0e88acf014a028d92afc42",
    measurementId: "G-MS0MHLJC86"
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
    let hatimKey = this.extractKey();
    let Hatim = await this.db.ref( "hatim/" + hatimKey ).get();
    console.log(Hatim.val());
    return Hatim.val();
  }

  yeniHatim = async () => {
    let hatimKey = await this.db.ref("hatim").push().key;
    await this.db.ref( "hatim/" + hatimKey ).set(dataFormat);
    
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

  cuzBitti = async (hatimKey) => {
    await this.db.ref("hatim/" + hatimKey + "/bitti").set(true);
  }
}

export default Firebase;
