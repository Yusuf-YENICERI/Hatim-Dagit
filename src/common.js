




import dataMonths3 from "./strings/dataMonths3";
import { db } from "./backend";

const detectLanguage = () => {
  if(navigator.userAgent.indexOf("googlebot")){
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
  return Object.keys(obj).filter(x=>(x!="adminToken") && (x!="delete") && (x!="subKey") && (x!="makeNewHatim")).map((key) => {
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

const version = "1.2.1";

export default detectLanguage;

export {setLanguage, removeAll, removeAll_v1, objectToArray, isSafari, isStandalone, extractKey,
   initializeLocalStorage, getMonths3Date, version, isEmptyObjectLocDb};