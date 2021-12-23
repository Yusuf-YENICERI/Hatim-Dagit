

const detectLanguage = () => {
    let language = window.navigator.userLanguage || window.navigator.language;
    if (localStorage.getItem('language') != null)
        return localStorage.getItem('language')
    return language;
}

const setLanguage = (lang) => localStorage.setItem("language", lang)

const removeAll = (arr, item) => {
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

export default detectLanguage;

export {setLanguage, removeAll, isSafari, isStandalone};