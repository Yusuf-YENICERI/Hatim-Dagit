




import dataMonths3 from "./strings/dataMonths3";

const detectLanguage = () => {
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
  return Object.keys(obj).filter(x=>(x!="adminToken") && (x!="subKey") && (x!="makeNewHatim")).map((key) => {
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

const extractKey = () => {
  let link = window.location.toString();
  let index = link.indexOf("/cuz")
  if(index != -1) return link.substr(index+5, link.length);
  index = link.indexOf("/ramazan")
  return link.substr(index+9, link.length);
}


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
      return data.startingDate1
    }
    return data.startingDate2;
  }else{
    return data.startingDate;
  }
}

const version = "1.1.5";

export default detectLanguage;

export {setLanguage, removeAll, removeAll_v1, objectToArray, isSafari, isStandalone, extractKey,
   initializeLocalStorage, getMonths3Date, version};