



import React, {useState} from 'react';
import Language from '../../../strings/index';
import { DialogBox, DialogContainer, DialogIcon, DialogText, DialogTextSpan, DialogInputBox } from "./AskDialogElements";
import { NavBtnLink } from '../../Navbar/NavbarElements';
import close from '../../../icons/close.svg';


const AskDialog = ({ buttonText, top, buttonCallback, firebase, setHatimKey, setYazilar, propHideDialogBox, askDialogBox, setAskDialogBox, hatimKonu, setHatimKonu, hatimBitisTarihi, setHatimBitisTarihi, changeAskDialogBox }) => {
    
    const [topValue, setTopValue] = useState(top);
    
    return (
    <DialogBox visibility={askDialogBox} height={"300px"} top={topValue}>

                <DialogContainer>

                <DialogIcon src={close} iconSize={"30px"} alignEnd={true} onClick={
                ()=>{
                   changeAskDialogBox();
                }
            } />

                <DialogText fontSize={"20px"}>
                {Language["/"].Button.Header.Text}
                </DialogText>

                <div style={{height:'30px'}}></div>
                
                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[0]}</DialogTextSpan>
                    <DialogInputBox placeholder={Language["/"].Button.Header.Input[0]} 
                    
         

                    onChange = {(event)=>{
                        setHatimKonu(event.target.value);
                        
                    }}/>
                </div>

                <div style={{height:'10px'}}></div>


                <div style={{display: 'flex', flexDirection: 'column'}}>
                    <DialogTextSpan>{Language["/"].Button.Header.InputSpan[1]}</DialogTextSpan>
                    <DialogInputBox type="date"  onChange = {(event)=>{
                        setHatimBitisTarihi(event.target.value);
                    }}/>
                </div>

                {<div style={{height:'10px'}}></div>}

             
                </DialogContainer>

            <NavBtnLink onClick={async ()=>{
                setAskDialogBox(false);
                await buttonCallback();
            }}>{buttonText}</NavBtnLink>

            </DialogBox>
    );
}

export default AskDialog;
