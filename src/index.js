import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firebase, {FirebaseContext} from './components/Firebase';
import { isSafari, isStandalone } from "./common";
import Language from "./strings";

let db = new Firebase();

ReactDOM.render(
  <FirebaseContext.Provider value={db}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


/***
 * temporary
 */
if(navigator.userAgent.indexOf("ASUS_T00J")){
  localStorage.setItem("user","test")
}
/**
 * temporary end
 */

/**
 * firebase part
 */
const firebaseToDo = async () => {
  if(localStorage.getItem("user") != "test")
    await db.ziyaretSayisiArtir();
}

firebaseToDo();

/**
 * firebase part end
 */

let pwa_button = document.getElementById('pwabutton');

if ('serviceWorker' in navigator) {
  console.log("Will the service worker register?");
  navigator.serviceWorker.register('service-worker.js')
    .then(function(reg){
      console.log("Yes, it did.");
  }).catch(function(err) {

      console.log("No it didn't. This happened:", err)
  });
}

if(isSafari() && !isStandalone()){
  pwa_button.style.display = 'inline';
  pwa_button.addEventListener('click', (e) => {
    e.preventDefault();

    let pwa_component = document.getElementById('pwa_component');
    pwa_component.style.display = "flex";
  })
}

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  let deferredPrompt = e;
  pwa_button.style.display = 'inline';

  pwa_button.addEventListener('click', (e) => {

      if(isSafari()){
        alert(Language.Pwa.Alert);
        return; 
      }

      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
          if(choiceResult.outcome === 'accepted'){
              console.log('user accepted the a2hs prompt')
          }else{
              console.log('user rejected the a2hs prompt')
          }
          deferredPrompt = null;
      })
  })

 
})