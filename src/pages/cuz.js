

import React, {useState, useEffect} from 'react'
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar'
import Question from '../components/main/Question'
import Footer from '../components/common/Footer';
import Cuzler from '../components/cuz/Cuzler';
import Pwa from '../components/common/Pwa';
import SorryMessage from 'components/common/SorryMessage';

export const Cuz = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <SorryMessage />
            <Pwa />
            <Cuzler />
            <Footer/>
        </>
    )
}

