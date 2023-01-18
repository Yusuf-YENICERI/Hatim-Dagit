





import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { cizelgelerimActions, useCizelgelerim } from '../../../../features/cizelgelerim'
import { ucAylarHatimsProcessor } from '../../../../localStorage/hatims';
import { ChartNameItem, ChartNamesContainer, ItemContainer, ItemTemplate } from './styles';

const CizelgeListesi = () => {

  const {chartNames} = useCizelgelerim();
  
  const dispatch = useDispatch();

  useEffect(() => {

    dispatch(cizelgelerimActions.changePreviousComponentName('ucaylarcizelgeleri'))
    
  })
  

  return (
    <ChartNamesContainer>
        {chartNames.map((chartName: {key: string, title: {value: string}}, index: number) => 
            <ChartNameItem onClick={()=>{
                dispatch(cizelgelerimActions.changeCurrentKhatmKey(chartName.key))
                dispatch(cizelgelerimActions.changeComponentName('cuzlistesi'))
                let subKeysAndParts = ucAylarHatimsProcessor.getHatimSubKeysAndParts({key: chartName.key});
                dispatch(cizelgelerimActions.changeSubKeysAndParts(subKeysAndParts));

            }}>
            
            <span style={{width: '20px'}}>
            {index+1}-
            </span>

            <ItemContainer>
                <ItemTemplate>
                {chartName.title.value}
                </ItemTemplate>
            </ItemContainer>
            </ChartNameItem>
        )}
    
    </ChartNamesContainer>
  )
}

export default CizelgeListesi