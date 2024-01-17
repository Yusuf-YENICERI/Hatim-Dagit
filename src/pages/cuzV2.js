









import React, {useState, useEffect} from 'react'
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar'
import Footer from '../components/common/Footer';
import Cuzler from '../components/cuzV2/Cuzler';
import Pwa from '../components/common/Pwa';

export const CuzV2 = () => {

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