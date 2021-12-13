

import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Question from '../components/Question'
import Footer from '../components/Footer';


export const Home = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
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

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Question />
            <Footer/>
        </>
    )
}

