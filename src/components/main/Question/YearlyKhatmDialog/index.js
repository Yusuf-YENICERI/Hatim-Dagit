





import Language from '../../../../strings/index';
import {DialogBox, DialogContainer, DialogIcon, DialogText, DialogTextSpan, DialogInputBox,
        DialogTextArea, DialogLink} from '../../Question/QuestionElements'
import { NavBtnLink } from '../../../common/Navbar/NavbarElements';
import close from '../../../../icons/close.svg';
import { Checkbox } from "@mantine/core";
import { useState, useEffect, useContext } from "react";
import Counter from '../../Counter';
import { useForm } from '@mantine/form';
import copy from '../../../../icons/copy.svg';
import {DataServiceContext} from '../../../../backend'


const AskDialog = ({ firebase, visible, setVisible }) => {

        const dataService = useContext( DataServiceContext );

        const [makeNewHatim, setMakeNewHatim] = useState(false);
        const [pageName, setPageName] = useState("enterInfo");
        const [linkKopyala, setLinkKopyala] = useState(Language["/"].Button.Final.Before.Copy) 


        const currentDate = new Date();
        const form = useForm({
            initialValues: {
              header: '',
              description: '',
              startingDate: currentDate.getFullYear() + "-" + String(currentDate.getMonth()+1).padStart(2,'0') + "-" + String(currentDate.getDate()).padStart(2,'0'),
              howManyDays: 7,
              totalKhatmsBeDistributed: 30,
              donerli: false,
              makeNewHatim: false,
              linkGenerated:{
                hatimKey: '',
                baslik: Language["/"].Button.Final.Before.Header,
                link: Language["/"].Button.Final.Before.LinkReady,
                cevap: Language["/"].Button.Final.Before.Button,
              }
            }
          });

        let EnterInfo = <>
        
        <DialogBox visibility={visible} height={"640px"} top={"5%"}>

                <DialogContainer>

                <DialogIcon src={close} iconSize={"30px"} alignEnd={true} onClick={
                ()=>{
                setVisible(false);
                }
                } />

                <DialogText fontSize={"20px"}>
                {Language["/"].Button.Header.Text}
                </DialogText>

                <div style={{height:'30px'}}></div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[0]}</DialogTextSpan>
                    <DialogInputBox placeholder={Language["/"].Button.Header.Input[0]} onChange = {(event)=>{
                        form.setFieldValue('header', event.target.value)
                    }}/>
                </div>

                <div style={{height:'10px'}}></div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[1]}</DialogTextSpan>
                    <DialogTextArea rows="2" type="" placeholder={Language["/"].Button.Header.Input[1]} onChange = {(event)=>{
                        form.setFieldValue('description', event.target.value)
                        
                    }}/>
                </div>

                <div style={{height:'10px'}}></div>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[5]}</DialogTextSpan>
                    <DialogInputBox type="date" placeholder={form.values.startingDate}  onChange = {(event)=>{
                        form.setFieldValue('startingDate', event.target.value)
                    }}/>
                </div>

                {<div style={{height:'10px'}}></div>}

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[6]}</DialogTextSpan>
                    <DialogInputBox type="number" placeholder={form.values.howManyDays}  onChange = {(event)=>{
                        form.setFieldValue('howManyDays', event.target.value)
                    }}/>
                </div>

                {<div style={{height:'10px'}}></div>}

                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[7]}</DialogTextSpan>
                    <DialogInputBox type="number" placeholder={form.values.totalKhatmsBeDistributed}  onChange = {(event)=>{
                        form.setFieldValue('totalKhatmsBeDistributed', event.target.value)
                    }}/>
                </div>

                {<div style={{height:'10px'}}></div>}
                

                <div style={{display: 'flex', flexDirection: 'column', width: '250px', marginTop: '10px'}}>
                     <Checkbox styles={{ label: {fontSize: '0.8em', fontFamily: 'Righteous'}}} color='lime' value={false} 
                     onChange={(event) => {
                        form.setFieldValue('donerli', !form.values.donerli)
                                            }} label={Language["/"].Button.Header.InputSpan[8]} />
                </div>

                <div style={{display: 'flex', flexDirection: 'column', width: '250px', marginTop: '10px'}}>
                     <Checkbox styles={{ label: {fontSize: '0.8em', fontFamily: 'Righteous'}}} color='lime' value={false} 
                     onChange={(event) => {
                        form.setFieldValue('makeNewHatim', !form.values.makeNewHatim)
                                            }} label={Language["/"].Button.Header.InputSpan[4]} />
                </div>

                </DialogContainer>

                <NavBtnLink onClick={async ()=>{
                setPageName("linkGenerated")
                let result = await dataService.yeniYillikHatim({
                    header:form.values.header,
                    description: form.values.description,
                    startingDate: form.values.startingDate,
                    howManyDays: form.values.howManyDays,
                    totalKhatmsBeDistributed: form.values.totalKhatmsBeDistributed,
                    donerli: form.values.donerli,
                    makeNewHatim: form.values.makeNewHatim,
                    mevcutHatim: false
                });
                if(result.data !== undefined){
                    form.setFieldValue('linkGenerated', 
                        {hatimKey: result.data.hatimKey, baslik: Language["/"].Button.Final.After.Header,
                        link: `https://hatimdagit.com/yillik/` + result.data.hatimKey, 
                        cevap: Language["/"].Button.Final.After.Button,}
                    );
                    alert('Yıllık Hatim linkinizi kaydedin! Şimdilik sistem otomatik kaydetmiyor.')
                }else{
                    alert('Bir hata oluştu!')
                }
                }}>{Language["/"].Button.Header.Button}</NavBtnLink>

                </DialogBox>
                </>;

        let LinkGenerated = (
            <DialogBox visibility={visible} height={"290px"} top={"10%"}>

                <DialogIcon src={close} iconSize={"30px"} alignEnd={true} onClick={
                    ()=>{
                        setVisible(false);
                    }
                } />

                <DialogText fontSize={"20px"}>
                    {form.values.linkGenerated.baslik}
                </DialogText>

                <DialogContainer>
                <DialogText fontSize={"15px"}>
                    {Language["/"].Button.Final.Before.Link}
                </DialogText>

                {<div style={{height:'10px'}}></div>}

                <DialogLink fontSize={"11px"}>
                    {form.values.linkGenerated.link}
                </DialogLink>

                {<div style={{height:'10px'}}></div>}

                <DialogText fontSize={"15px"}>
                    {linkKopyala}
                </DialogText>


                <DialogIcon src={copy} iconSize={"30px"} onClick={()=>{
                   var text = `https://hatimdagit.com/yillik` + form.values.linkGenerated.hatimKey;
                   navigator.clipboard.writeText(text).then(function() {
                        setLinkKopyala(Language["/"].Button.Final.After.Copy)
                   }, function(err) {
                   
                });
                }}>

                </DialogIcon>
                </DialogContainer>

            <NavBtnLink to={form.values.linkGenerated.link.replace("https://hatimdagit.com", "")}>{form.values.linkGenerated.cevap}</NavBtnLink>

            </DialogBox>
        )

        return (
            <>
             {pageName == "enterInfo" ? EnterInfo : LinkGenerated}
            </>
        )
}

export default AskDialog;