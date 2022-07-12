import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {FirebaseContext, db} from './components/Firebase';
import { isSafari, isStandalone } from "./common";
import detectLanguage from './common';
import Language from "./strings";
import localDb from '@yusuf-yeniceri/easy-storage';
import { store } from "./redux/store";
import { Provider } from "react-redux";
import { NotificationsProvider } from '@mantine/notifications';


ReactDOM.render(
  <FirebaseContext.Provider value={db}>
    <Provider store={store}>
      <NotificationsProvider position="top-right">
        <App />
      </NotificationsProvider>
    </Provider>
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
// if(navigator.userAgent.indexOf("ASUS_T00J")){
//   localStorage.setItem("user","test")
// }
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

/**
 * message part
 */

// if(localDb.ref("message").get().read || ( ! detectLanguage().includes("tr")) ){
//   document.getElementById('message').style.zIndex = -1;
// }

/**
 * message part end
 */