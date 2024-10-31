






import React, {useState, useEffect} from 'react'
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar'
import Question from '../components/main/Question'
import Footer from '../components/common/Footer';
import Pwa from '../components/common/Pwa';
import Cizelgelerim from '../components/cizelgelerim';
import { MantineProvider } from '@mantine/core';
import SorryMessage from 'components/common/SorryMessage';
import { CookiesBanner } from 'components/common/CookieConsent';

export const CizelgelerimPage = () => {
    

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
        setIsOpen(!isOpen);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <SorryMessage />
            <CookiesBanner />
            <Pwa />
            <MantineProvider
                theme={{
                    headings:{
                        fontFamily: 'Righteous'
                    },
                    
                }}
                >
                <Cizelgelerim />
            </MantineProvider>
            <Footer/>
        </>
    )
}

