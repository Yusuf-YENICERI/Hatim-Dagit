

import React, {useState, useEffect} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Question from '../components/Question'
import Footer from '../components/Footer';
import Cuzler from '../components/cuz/Cuzler';
import Pwa from '../components/Pwa';

export const Cuz = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Pwa />
            <Cuzler />
            <Footer/>
        </>
    )
}

