




import React, {useState, useContext} from 'react'
import {DialogBox, DialogContainer, DialogHeader, DialogIcon, DialogText, OptionContainer,
        Option, } from './styles'
import {DialogTextSpan, DialogTextArea, DialogInputBox} from '../Question/QuestionElements'
import { NavBtnLink } from '../../common/Navbar/NavbarElements';
import Counter from '../Counter';
import close from '../../../icons/close.svg';
import Language from '../../../strings';
import { Checkbox } from "@mantine/core";
import { getMonths3Date } from "../../../common";
import {DatabaseContext} from '../../../backend'

const Months3Dialog = ({months3DialogVisible, setMonths3DialogVisible, setHatimKey, setYazilar, setHideDialogBox}) => {

  const [value, setValue] = useState([])
  const [type, setType] = useState("options")
  
  const [hatimKonu, setHatimKonu] = useState('')
  const [hatimDescription, setHatimDescription] = useState('')
  const [hatimCount, setHatimCount] = useState(1);
  const [makeNewHatim, setMakeNewHatim] = useState(false)

  const database = useContext(DatabaseContext)


  return (
    <DialogBox visibility={months3DialogVisible}  top={"5%"}>

        <DialogContainer>

            <DialogHeader>
                <DialogText fontSize={"20px"}>
                    {Language["/"].Button.Header.Text3MonthProgram}
                </DialogText>

                <DialogIcon src={close} iconSize={"30px"} alignEnd={true} onClick={
                    ()=>{
                    setMonths3DialogVisible();
                    setType("options")
                    }
                } />

                
            </DialogHeader>


            { type=="options" && 
                <OptionContainer>
                    <Option onClick={()=>setType("hergun1cuz")} id="#eachday1part">3 aylar boyunca günde 1 cüz</Option>
                    <Option notExist={true} >Recep ve Şaban aylarında günde 10 sayfa, Ramazan'da günde 1 cüz</Option>
                    <Option notExist={true} >Recep ve Şaban aylarında günde 5 sayfa, Ramazan'da günde 10 sayfa</Option>
                    <Option notExist={true} >3 aylar boyunca her gün aynı sayfa</Option>
                    <Option notExist={true} >3 aylar boyunca her gün aynı sure</Option>
                </OptionContainer>
            }

            {type=="hergun1cuz" && 
            <>
                        <div style={{height:'10px'}}></div>

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <DialogTextSpan>{Language["/"].Button.Header.InputSpan[0]}</DialogTextSpan>
                            <DialogInputBox placeholder={Language["/"].Button.Header.Input[0]} onChange = {(event)=>{
                                setHatimKonu(event.target.value);
                                
                            }}/>
                        </div>
        
                        <div style={{height:'10px'}}></div>
        
                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <DialogTextSpan>{Language["/"].Button.Header.InputSpan[1]}</DialogTextSpan>
                            <DialogTextArea rows="2" type="" placeholder={Language["/"].Button.Header.Input[1]} onChange = {(event)=>{
                                setHatimDescription(event.target.value);
                                
                            }}/>
                        </div>

                        {<div style={{height:'10px'}}></div>}
                

                        <div style={{display: 'flex', flexDirection: 'column'}}>
                            <DialogTextSpan>{Language["/"].Button.Header.InputSpan[3]}</DialogTextSpan>
                            <Counter hatimCount={hatimCount} setHatimCount={setHatimCount} />
                        </div>

                        <div style={{display: 'flex', flexDirection: 'column', width: '250px', marginTop: '10px'}}>
                            <Checkbox styles={{ label: {fontSize: '0.8em', fontFamily: 'Righteous'}}} color='lime' value={false} 
                            onChange={(event) => {
                                                    setMakeNewHatim(event.currentTarget.checked)
                                                    }} label="Hatim bittiğinde otomatik olarak yeni hatim oluştur" />
                        </div>

                        <NavBtnLink onClick={async ()=>{
                            setMonths3DialogVisible(false);
                            setHideDialogBox(true);
                            
                            let dateData = getMonths3Date();
                            
                            let fillString = ''
                            if( dateData.chosen != undefined){
                                fillString = dateData.chosen;
                            }

                            let _date = dateData[`startingDate${fillString}`];
                            _date = new Date(_date);

                            _date.setDate(_date.getDate() + dateData[`monthDays${fillString}`].reduce((a,b)=>a+b));
                            
                            let _dateString =  _date.getFullYear() + "-" + ("0"+(_date.getMonth()+1)).slice(-2) + "-" + ("0" + _date.getDate()).slice(-2)
                            
                            

                            let _hatimKey = await database.yeniHatim(hatimKonu, _dateString, false, false, 
                                                                    hatimDescription, makeNewHatim, hatimCount, {eachday1part: true});
                            setHatimKey(_hatimKey);
                            const route = "ucaylarhergun1cuz"
                            setYazilar({
                                baslik:Language["/"].Button.Final.After.Header,
                                link: `https://hatimdagit.com/${route}/` + _hatimKey,
                                cevap:Language["/"].Button.Final.After.Button
                            })
                        }}>{Language["/"].Button.Header.Button}</NavBtnLink>
            </>
            }
        </DialogContainer>
    </DialogBox>
  )
}

export default Months3Dialog