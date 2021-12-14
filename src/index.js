import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Firebase, {FirebaseContext} from './components/Firebase';

ReactDOM.render(
  <FirebaseContext.Provider value={new Firebase()}>
    <App />
  </FirebaseContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


if ('serviceWorker' in navigator) {
  console.log("Will the service worker register?");
  navigator.serviceWorker.register('service-worker.js')
    .then(function(reg){
      console.log("Yes, it did.");
      alert('did work')
  }).catch(function(err) {
      console.log("No it didn't. This happened:", err)
      alert('did not work')
  });
}

let pwa_button = document.getElementById('pwabutton');

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  let deferredPrompt = e;

  pwa_button.addEventListener('click', (e) => {
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