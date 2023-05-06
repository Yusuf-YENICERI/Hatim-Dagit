





import { Title } from '@mantine/core'
import React, {useState} from 'react'
import { Container, Template, RespondContainer, RespondInnerContainer, ResponseItem, ResponseText } from './styles'
import Language from '../../../strings'
import { useDispatch } from 'react-redux'
import { cizelgelerimActions } from '../../../features/cizelgelerim'

const Cizelgeler = () => {

  const [hideMevcutHatimler, setHideMevcutHatimler] = useState<boolean>(false)
  const dispatch = useDispatch();

  return (
    <div>
          {/* <RespondContainer>  
                           <RespondInnerContainer hatimExists={hideMevcutHatimler}>
                                    <ResponseItem onClick={ ()=>{
                                        dispatch(cizelgelerimActions.changePreviousComponentName('tumcizelgeler'))
                                        // more stuff here, inshaALLAH                                        
                                    }}>
                                        <ResponseText>
                                        Ramazan Çizelgeleri
                                        </ResponseText>
                                    </ResponseItem>
                            </RespondInnerContainer>
            </RespondContainer> */}

            <RespondContainer>  
                           <RespondInnerContainer hatimExists={hideMevcutHatimler}>
                                    <ResponseItem onClick={()=>{
                                        dispatch(cizelgelerimActions.changePreviousComponentName('tumcizelgeler'))
                                        dispatch(cizelgelerimActions.changeComponentName('ucaylarcizelgeleri'))
                                    }}>
                                        <ResponseText>
                                        3 Aylar Çizelgeleri
                                        </ResponseText>
                                    </ResponseItem>
                            </RespondInnerContainer>
            </RespondContainer>
{/* 
            <RespondContainer>  
                           <RespondInnerContainer hatimExists={hideMevcutHatimler}>
                                    <ResponseItem onClick={()=>{
                                        dispatch(cizelgelerimActions.changePreviousComponentName('tumcizelgeler'))

                                        

                                        dispatch(cizelgelerimActions.changeComponentName('yillikhatimcizelgeleri'))
                                    }}>
                                        <ResponseText>
                                        Yıllık Hatim Çizelgeleri
                                        </ResponseText>
                                    </ResponseItem>
                            </RespondInnerContainer>
            </RespondContainer> */}
    </div>
  )
}

export default Cizelgeler