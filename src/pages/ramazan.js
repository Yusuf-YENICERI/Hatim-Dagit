

import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Question from '../components/Question'
import Footer from '../components/Footer';
import RamazanDonerli from '../components/RamazanDonerli';
import Pwa from '../components/Pwa';

export const Ramazan = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Pwa />
            <RamazanDonerli />
            <Footer/>
        </>
    )
}

