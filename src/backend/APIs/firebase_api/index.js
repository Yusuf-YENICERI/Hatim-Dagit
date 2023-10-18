




import {dataFormat} from '../../datas/dataFormat';
import {dataFormat_yillikHatim} from '../../datas/dataFormat_yillikHatim';

import { countNumberOfCuzs, countNumberOfCuzsV3 } from "../../utils";
import { generateHash } from "random-hash";
import LocDb from "@yusuf-yeniceri/easy-storage";
import app from 'firebase/app';
import 'firebase/database';
import 'firebase/analytics';
import {sFunctions} from '../../sFunctions'
import Logger from './logger'

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
        this.countNumberOfCuzsV3 = countNumberOfCuzsV3;
        this.analytics = app.analytics();
        this.logger = new Logger(this.db);
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
      const link = window.location.toString();
      const substring = ['/cuz','/ramazan','/ucaylarhergun1cuz', '/yillik'];
      const found = substring.find(substring => link.indexOf(substring) !== -1);
      if(found){
        const index = link.indexOf(found);
        return link.substr(index + found.length, link.length).replace('/', '');
      }
      return '';
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
        console.log('gelen Hatim:')
        console.log(data);
        
        return data;
      } catch (error) {
        return "error";
      }
    }

    altHatimGetir = async (altHatimKey) => {
      try {
        let hatimKey = this.extractKey();
        let Hatim = await this.db.ref( `hatim/${hatimKey}/${altHatimKey}` ).get();
        let data = Hatim.val();
  
        console.log('gelen alt Hatim:')
        console.log(data);
  
        return data;
            
      } catch (error) {
        return "error"
      }
    }
  
    hatimBasligiGetir = async (hatimKey) => {
      let baslik = await this.db.ref( "hatim/" + hatimKey + "/baslik" ).get();
      return baslik.val();
    }
  
    yeniHatim = async (baslik, bitisTarihi, mevcutHatim = false, isRamazan = false, description = "", makeNewHatim = false, hatimCount, isMonths3) => {
      dataFormat.baslik = baslik;
      dataFormat.bitisTarihi = bitisTarihi;
      dataFormat.isRamazan = isRamazan;
      dataFormat.description = description;
      dataFormat.isMonths3 = isMonths3;

      console.log(dataFormat)
      // console.log(baslik)
  
      let hatimKey, adminToken;
      if(!mevcutHatim){
        hatimKey = await this.db.ref("hatim").push().key;
        adminToken = generateHash({length: 16});
        await this.db.ref(`hatim/${hatimKey}/adminToken`).set(adminToken)
        await this.db.ref(`hatim/${hatimKey}/makeNewHatim`).set(makeNewHatim)
      }else{
        hatimKey = this.extractKey();
        hatimKey = hatimKey.replace("/", "");
       
      }

      console.log(`hatimKey: ${hatimKey}`)
      
      for (let i = 0; i < hatimCount; i++) {
              let hatimAltKey = await this.db.ref(`hatim/${hatimKey}`).push().key;
              await this.db.ref( `hatim/${hatimKey}/${hatimAltKey}` ).set(dataFormat);
              console.log(`hatimAltKey: ${hatimAltKey}`)
      }
  
  
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

    yeniYillikHatim = async ({header, description, startingDate, howManyDays, totalKhatmsBeDistributed, donerli, makeNewHatim, mevcutHatim}) => {

      // console.log(dataFormat_yillikHatim)
      // console.log(baslik)
      try {
        let hatimKey, adminToken;
      if(!mevcutHatim){
        hatimKey = await this.db.ref("hatim").push().key;
        adminToken = generateHash({length: 16});
        await this.db.ref(`hatim/${hatimKey}`).set({
          type: "yillik",
          version: 3.0,
          adminToken:adminToken,
          header:header,
          description:description,
          startingDate: startingDate,
          howManyDays: howManyDays,
          totalKhatmsBeDistributed: totalKhatmsBeDistributed,
          donerli: donerli,
          makeNewHatim: makeNewHatim
        });
      }else{
        hatimKey = this.extractKey();
        hatimKey = hatimKey.replace("/", "");
       
      }

      // console.log(`hatimKey: ${hatimKey}`)
      
      let hatimSubKeys = [];
      let hatimCount = 1;
      for (let i = 0; i < hatimCount; i++) {
              let hatimAltKey = await this.db.ref(`hatim/${hatimKey}`).push().key;
              await this.db.ref( `hatim/${hatimKey}/${hatimAltKey}` ).set(dataFormat_yillikHatim);
              console.log(`hatimAltKey: ${hatimAltKey}`)

              hatimSubKeys.push(hatimAltKey);
      }
      
      
      return {
        data: {
          hatimKey: hatimKey,
          hatimSubKeys: hatimSubKeys,
          adminToken: adminToken,
          header: header,
        },
        error: undefined
      };
      } catch (error) {
        return {
          data: undefined,
          error: error
        }
      }

      
    }


    hatimDegistir = async (baslik, bitisTarihi, description, subKey) => {
      try {
        await this.db.ref(`hatim/${this.extractKey()}/${subKey}`).update({baslik: baslik, bitisTarihi: bitisTarihi, description: description});
        return 0;        
      } catch (error) {
        return -1;
      }
    }

    hatimDegistirV3 = async (baslik, bitisTarihi, description, subKey) => {
      try {
        await this.db.ref(`hatim/${this.extractKey()}/${subKey}`).update({baslik: baslik, bitisTarihi: bitisTarihi, description: description});
        return 0;        
      } catch (error) {
        return -1;
      }
    }

    yillikHatimDegistirV3 = async (header, startingDate, description) => {
      try {
        await this.db.ref(`hatim/${this.extractKey()}/`).update({header: header, startingDate: startingDate, description: description});
        return {data: "success", error: undefined};        
      } catch (error) {
        return {data: undefined, error: error};
      }
    }
  
    cuzAl = async (isim, no, subKey, alindi = true, makeNewHatim = false) => {
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
            version: 2,
            dev: netlifyParams.dev,
            makeNewHatimArg: makeNewHatim ?? undefined,
      }

      // console.log(`params: ${params.dev}`)

      try {
        let result = await sFunctions.takeCuz(params);
        let _errorKey = undefined;

        if(result.error != undefined)
        {
          let errorRef = "cuzAl";
          let errorKey = this.db.ref(`logging/errors/${errorRef}`).push().key;
          
          result.error.errorKey = errorKey;
          this.logger.logError(errorRef ,errorKey, result.error);
          this.analytics.logEvent("cuz_al", result.error);
          
          _errorKey = `${errorRef}/${errorKey}`;
        }
         // 0 means taking Cuz is successfull
        if(result.code == 200){
          return {code: 0};
        }else{
          return {code: -1, errorKey: _errorKey};
        }

      } catch (error) {
        //-1 means Cuz is already taken
        return {code: -1, errorKey: undefined};
      }
      
       
        
      
    }
    

    cuzIsimDegistir = async (isim, no, subKey) => {
      return this.cuzAl(isim, no, subKey);
    }
  
  
    cuzIptal = async (no, subKey) => {
      return this.cuzAl('', no, subKey, false);
    }


    cuzAlV3 = async (isim, no, subKey, alindi = true, makeNewHatim = false) => {
      let hatimKey = this.extractKey().replace('/','');

      let ownerId = LocDb.ref(`Hatim/${hatimKey}/${subKey}/ownerId`).get()

      if(["object", "undefined"].includes(typeof ownerId) == true){
        ownerId = generateHash({length: 8});
        LocDb.ref(`Hatim/${hatimKey}/${subKey}`).modify((data) => {
          if(typeof data == "boolean") data = {}
          data.ownerId = ownerId;
          return data;
        });
      }

      let params = {
            key: hatimKey.toString(),
            subKey: subKey.toString(),
            cuzNo: no.toString(),
            name: isim,
            alindi: alindi.toString(),
            ownerId: ownerId,
            dev: netlifyParams.dev,
            makeNewHatimArg: makeNewHatim ?? undefined,
            version: 3
      }

      // console.log(`params: ${params.dev}`)

      try {
        let result = await sFunctions.takeCuz(params);
        let _errorKey = undefined;

        if(result.error != undefined)
        {
          let errorRef = "cuzAl";
          let errorKey = this.db.ref(`logging/errors/${errorRef}`).push().key;
          
          result.error.errorKey = errorKey;
          this.logger.logError(errorRef ,errorKey, result.error);
          this.analytics.logEvent("cuz_al_v3", result.error);
          
          _errorKey = `${errorRef}/${errorKey}`;
        }
         // 0 means taking Cuz is successfull
        if(result.code == 200){
          return {data: 200, error: undefined};
        }else{
          return {data: undefined, error: _errorKey};
        }

      } catch (error) {
        //-1 means Cuz is already taken
        return {data: undefined, error: error};
      }
      
       
        
      
    }
  

    cuzIsimDegistirV3 = async (isim, no, subKey) => {
      return this.cuzAlV3(isim, no, subKey);
    }
  
  
    cuzIptalV3 = async (no, subKey) => {
      return this.cuzAlV3('', no, subKey, false);
    }
    cuzBitti = async (hatimKey) => {
      await this.db.ref("hatim/" + hatimKey + "/bitti").set(true);
    }
  
    ziyaretSayisiGetir = async () => {
      while(true){
      try {
        let ziyaretSayisi = await this.db.ref( "ziyaretSayisi" ).get();
        return ziyaretSayisi.val();
      } catch (error) {
        //wait until it works
      }
     }
    }
  
    ziyaretSayisiArtir = async () => {
      await this.db.ref("ziyaretSayisi").set(Number(await this.ziyaretSayisiGetir()) + 1);
    }

    deleteHatim = async () => {
      try {
        let aD = LocDb.ref("Hatim/adminToken").get();
        let filtered = aD.filter(x=>Object.keys(x)[0].toString() == this.extractKey().replace("/","").toString());
        console.log('test')

        await this.db.ref(`hatim/${this.extractKey()}/delete`).set({adminToken: filtered[0][Object.keys(filtered[0])]});
        await this.db.ref(`hatim/${this.extractKey()}`).set({adminToken: filtered[0][Object.keys(filtered[0])]});

        return 0;  
      } catch (error) {
        console.error(error)
        return -1;
      }
    }

    deleteHatimV3 = async () => {
      try {

        const adminToken = LocDb.ref(`Hatim/${this.extractKey()}/adminToken`).get();
        console.log('test')
        await this.db.ref(`hatim/${this.extractKey()}/delete`).set({adminToken: adminToken});
        // await this.db.ref(`hatim/${this.extractKey()}`).set({adminToken: filtered[0][Object.keys(filtered[0])]});

        return 0;  
      } catch (error) {
        console.error(error)
        return -1;
      }
    }


    hatimListener = (callback) => {
      return this.db.ref(`hatim/${this.extractKey()}`).on('value', callback);
    }

    stopMakingNewKhatm = async () => {
      const hatimKey = this.extractKey();

      try {
        await this.db.ref(`hatim/${hatimKey}/makeNewHatim`).set(false);
        return 200;
      } catch (error) {
        console.error(error)
        return 500;
      }
    }

    markChart = async ({subKey, partNo, itemNo, value}) => {
      try {
        let key = this.extractKey();
        await this.db.ref(`hatim/${key}/${subKey}/charts/${partNo}/${itemNo}`).set(value);        
        
        return {data: 'Alhamdulillah', error: undefined};
      } catch (error) {
        return {data: undefined, error: error};
      }
    }

    fetchChart = async ({subKey, partNo}) => {
      try {
        let key = this.extractKey();
        let result = await this.db.ref(`hatim/${key}/${subKey}/charts/${partNo}`).get();        
        
        return {data: result.val(), error: undefined};
      } catch (error) {
        return {data: undefined, error: error};
      }
    }
  }

  export default FirebaseAPI;