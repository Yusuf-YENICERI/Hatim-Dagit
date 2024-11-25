

import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar'
import Question from '../components/main/Question'
import Footer from '../components/common/Footer';
import UcAylarHerGun1CuzDonerli from '../components/ucaylarhergun1cuz/UcAylarHerGun1CuzDonerli';
import Pwa from '../components/common/Pwa';
import UcAylarHerGun1CuzTable from '../components/ucaylarhergun1cuz/Table';
import button from "../icons/button.svg";
import SorryMessage from 'components/common/SorryMessage';
import { CookiesBanner } from 'components/common/CookieConsent';

export const UcAylarHerGun1Cuz = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [cizelge, setCizelge] = useState(false);
    const [cizelgeId, setCizelgeId] = useState(0);
    const [keyHolder, setKeyHolder] = useState({key:undefined, subKey:undefined})
    const cizelgeRef = useRef();


    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const toggleCizelge = () => {
        cizelgeRef.current.style.zIndex = cizelge ? -10 : 20;
        setCizelge(!cizelge)
    }

    const toggleCizelgeId = (id) => {
        setCizelgeId(id);
    }

    const changeKeyHolder = (value) => {
        setKeyHolder(value);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            {/* <SorryMessage /> */}
            <CookiesBanner />
            <Pwa />
            <UcAylarHerGun1CuzTable keyHolder={keyHolder}  cizelgeRef={cizelgeRef} toggleCizelge={toggleCizelge} cizelgeId={cizelgeId} toggleCizelgeId={toggleCizelgeId}
                            />
            <UcAylarHerGun1CuzDonerli changeKeyHolder={changeKeyHolder} toggleCizelge={toggleCizelge} cizelgeId={cizelgeId} toggleCizelgeId={toggleCizelgeId}/>
            <Footer/>
        </>
    )
}

