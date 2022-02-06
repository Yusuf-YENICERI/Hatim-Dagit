

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

const objectToArray = (obj) => {
  return Object.keys(obj).map((key) => {
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
  return link.substr(index+4, link.length);
}

export default detectLanguage;

export {setLanguage, removeAll, objectToArray, isSafari, isStandalone, extractKey};