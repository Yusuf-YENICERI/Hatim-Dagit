

import React, {useState, useEffect, useRef} from 'react'
import Navbar from '../components/common/Navbar';
import Sidebar from '../components/common/Sidebar'
import Question from '../components/main/Question'
import Footer from '../components/common/Footer';
import YillikDonerli from 'components/yillik';
import Pwa from '../components/common/Pwa';
import YillikTable from 'components/yillik/Table'
import button from "../icons/button.svg";

export const Yillik = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [cizelge, setCizelge] = useState(false);
    const [cizelgeId, setCizelgeId] = useState(0);
    const [keyHolder, setKeyHolder] = useState<{key:string|undefined, subKey:string|undefined}>({key:undefined, subKey:undefined})
    const cizelgeRef = useRef<HTMLDivElement>(null);


    const toggle = () => {
        setIsOpen(!isOpen);
    }

    const toggleCizelge = () => {
        if(cizelgeRef.current == null) return;
        cizelgeRef.current.style.zIndex = cizelge ? '-10' : '20';
        setCizelge(!cizelge)
    }

    const toggleCizelgeId = (id:number) => {
        setCizelgeId(id);
    }

    const changeKeyHolder = (value:{key:string|undefined, subKey:string|undefined}) => {
        setKeyHolder(value);
    }

    return (
        <>
            <Sidebar isOpen={isOpen} toggle={toggle}/>
            <Navbar toggle={toggle}/>
            <Pwa />
            {/* <YillikTable cizelgeRef={cizelgeRef} toggleCizelge={toggleCizelge} cizelgeId={cizelgeId} data={undefined} /> */}
            <YillikDonerli />
            {/* <YillikDonerli  toggleCizelge={toggleCizelge} cizelgeId={cizelgeId} toggleCizelgeId={toggleCizelgeId}/> */}
            <Footer/>
        </>
    )
}

