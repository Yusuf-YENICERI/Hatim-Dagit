



import CommonButton from '../../../../components/main/CommonButton'
import { cizelgelerimActions } from '../../../../features/cizelgelerim';
import { partsProcessor } from '../../../../localStorage/parts';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { ucAylarHatimsProcessor } from '../../../../localStorage/hatims';

const UcAylarCizelgeleri = () => {
  
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cizelgelerimActions.changePreviousComponentName('tumcizelgeler'))
  })
  
  
  return (
    <div style={{paddingTop: '10px'}}>
      <CommonButton text="Her Gün 1 Cüz" onClick={()=>{

        let allHatimTitles = ucAylarHatimsProcessor.getAllHatimTitlesForHerGun1Cuz();

        dispatch(cizelgelerimActions.changeChartNames(allHatimTitles))
        dispatch(cizelgelerimActions.changePreviousComponentName('ucaylarcizelgeleri'))
        dispatch(cizelgelerimActions.changeComponentName('cizelgelistesi'))

      }} ></CommonButton>
    </div>
  )
}

export default UcAylarCizelgeleri