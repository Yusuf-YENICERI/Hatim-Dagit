

import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar'
import Question from '../components/Question'
import Footer from '../components/Footer';
import RamazanDonerli from '../components/RamazanDonerli';
import Pwa from '../components/Pwa';
import RamazanTable from '../components/Table';

import button from "../icons/button.svg";

export const Ramazan = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [cizelge, setCizelge] = useState(false);
    const [cizelgeId, setCizelgeId] = useState(1);
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



    const data = [
        { name: '1.Gün', email: '1.cüz', job: '2 Nisan 2022', id:'1'},
        { name: '2.Gün', email: '1.cüz', job: '3 Nisan 2022', id:'2'},
        { name: '3.Gün', email: '1.cüz', job: '4 Nisan 2022', id:'3'},
        { name: '4.Gün', email: '1.cüz', job: '5 Nisan 2022', id:'4'},
        { name: '5.Gün', email: '1.cüz', job: '6 Nisan 2022', id:'5'},
        { name: '6.Gün', email: '1.cüz', job: '7 Nisan 2022', id:'6'},
        { name: '7.Gün', email: '1.cüz', job: '8 Nisan 2022', id:'7'},
        { name: '8.Gün', email: '1.cüz', job: '9 Nisan 2022', id:'8'},
        { name: '9.Gün', email: '1.cüz', job: '10 Nisan 2022', id:'9'},
        { name: '10.Gün', email: '1.cüz', job: '11 Nisan 2022', id:'1'},
        { name: '11.Gün', email: '1.cüz', job: '12 Nisan 2022', id:'1'},
        { name: '12.Gün', email: '1.cüz', job: '13 Nisan 2022', id:'1'},
        { name: '13.Gün', email: '1.cüz', job: '14 Nisan 2022', id:'1'},
        { name: '14.Gün', email: '1.cüz', job: '15 Nisan 2022', id:'1'},
        { name: '15.Gün', email: '1.cüz', job: '16 Nisan 2022', id:'1'},
        { name: '16.Gün', email: '1.cüz', job: '17 Nisan 2022', id:'1'},
        { name: '17.Gün', email: '1.cüz', job: '18 Nisan 2022', id:'1'},
        { name: '18.Gün', email: '1.cüz', job: '19 Nisan 2022', id:'1'},
        { name: '19.Gün', email: '1.cüz', job: '20 Nisan 2022', id:'1'},
        { name: '20.Gün', email: '1.cüz', job: '21 Nisan 2022', id:'1'},
        { name: '21.Gün', email: '1.cüz', job: '22 Nisan 2022', id:'1'},
        { name: '22.Gün', email: '1.cüz', job: '23 Nisan 2022', id:'1'},
        { name: '23.Gün', email: '1.cüz', job: '24 Nisan 2022', id:'1'},
        { name: '24.Gün', email: '1.cüz', job: '25 Nisan 2022', id:'1'},
        { name: '25.Gün', email: '1.cüz', job: '26 Nisan 2022', id:'1'},
        { name: '26.Gün', email: '1.cüz', job: '27 Nisan 2022', id:'1'},
        { name: '27.Gün', email: '1.cüz', job: '28 Nisan 2022', id:'1'},
        { name: '28.Gün', email: '1.cüz', job: '29 Nisan 2022', id:'1'},
        { name: '29.Gün', email: '1.cüz', job: '30 Nisan 2022', id:'1'},
        { name: '30.Gün', email: '1.cüz', job: '1 Mayıs 2022', id:'1'},
    ]

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Pwa />
            <RamazanTable data={data} cizelgeRef={cizelgeRef} toggleCizelge={toggleCizelge} cizelgeId={cizelgeId} toggleCizelgeId={toggleCizelgeId}
                            />
            <RamazanDonerli toggleCizelge={toggleCizelge} cizelgeId={cizelgeId} toggleCizelgeId={toggleCizelgeId}/>
            <Footer/>
        </>
    )
}

