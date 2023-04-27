




import dataMonths3 from "./strings/dataMonths3";
import { db } from "./backend";

const detectLanguage = () => {
  if(navigator.userAgent.toLowerCase().indexOf("googlebot") != -1){
    return "tr";
  }
    let language = window.navigator.userLanguage || window.navigator.language;
    if (localStorage.getItem('language') != null)
        return localStorage.getItem('language')
    return language;
}

const setLanguage = (lang) => localStorage.setItem("language", lang)

const removeAll = (obj, item, subKey) => {
    let arr = obj[subKey];
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    obj[subKey] = arr;
    return obj;
  }


  const removeAll_v1 = (arr, item) => {
    let i = 0;
    while (i < arr.length) {
      if (arr[i] === item) {
        arr.splice(i, 1);
      } else {
        ++i;
      }
    }
    return arr;
  }

const objectToArray = (obj) => {
  return Object.keys(obj).filter(x=> ["adminToken", "delete", "subKey", "makeNewHatim"].includes(x) == false).map((key) => {
    obj[key].subKey = key;
    return obj[key];
  });
}

const objectToArrayV3 = (obj) => {

  const keys = [
    'header',
    'description',
    'adminToken',
    'donerli',
    'howManyDays',
   'makeNewHatim',
   'startingDate',
    'totalKhatmsBeDistributed',
    'type',
   'version'
  ];
  

  return Object.keys(obj).filter(x=> keys.includes(x) == false).map((key) => {
    obj[key].subKey = key;
    return obj[key];
  });
}


const isSafari = () => {
  let userAgentString = navigator.userAgent;
  let chromeAgent = userAgentString.indexOf("Chrome") > -1;
  let safariAgent = userAgentString.indexOf("Safari") > -1;
  if ((chromeAgent) && (safariAgent)) safariAgent = false;
  return safariAgent;
}

const isStandalone = () => {
  return ('standalone' in window.navigator) && window.navigator.standalone;
}

const extractKey = db.api.extractKey;


const initializeLocalStorage = (type) => {
  switch(type){
    case "cuz":
        localStorage.setItem("cuz", JSON.stringify({}));        
        break;
    case "cuz_v1":
      localStorage.setItem("cuz_v1", JSON.stringify(JSON.parse(localStorage.getItem("cuz")) || []) );
      initializeLocalStorage("cuz");
      break;
  }
}

/** current index for Hatimler visibilities */
const getCurrentIndex = (allLanguage) => {
  let currentIndex = 0;
  for (let i = 0; i < allLanguage.length; i++) {

      let totalCevap = allLanguage[i][1].cevaplar.filter((cevap)=>cevap.alindi).length +
      allLanguage[i][2].cevaplar.filter((cevap)=>cevap.alindi).length +
      allLanguage[i][3].cevaplar.filter((cevap)=>cevap.alindi).length;

      if(totalCevap != 30){
          currentIndex = i;
          break;
      }
  }

  return currentIndex;
}

/** current index for Hatimler visibilities */
const getCurrentIndexV3 = (hatims) => {
  let currentIndex = 0;
  for (let i = 0; i < hatims.length; i++) {

      let totalCevap = hatims[i].parts.filter(part => part.isTaken).length

      if(totalCevap != 30){
          currentIndex = i;
          break;
      }
  }

  return currentIndex;
}



const getMonths3Date = () => {
  const data = dataMonths3[(new Date()).getFullYear()];
  if(data.double){
    if ((new Date()) < new Date(data.startingDate2)){
      data.chosen = 1;
    }else{
    data.chosen = 2;
    }
    return data;
  }else{
    return data;
  }
}


const isEmptyObjectLocDb = (value) => {
  if(typeof value == "object" && Object.keys(value).length == 0){
    return true;
  }

  return false;
}

const typeCheck = (data, type) => {
  if(typeof data == type){
    return true;
  }
  
  return false;
}

const version = "1.2.1";

export default detectLanguage;

export {setLanguage, removeAll, removeAll_v1, objectToArray, objectToArrayV3, isSafari, isStandalone, extractKey,
   initializeLocalStorage, getMonths3Date, version, isEmptyObjectLocDb, typeCheck, getCurrentIndex, getCurrentIndexV3};
