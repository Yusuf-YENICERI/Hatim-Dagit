





import { ActionIcon, Title } from '@mantine/core'
import React, {useState} from 'react'
import { Container, Template, RespondContainer, RespondInnerContainer, ResponseItem, ResponseText } from './styles'
import Language from '../../strings'
import TumCizelgeler from './TumCizelgeler'
import UcAylarCizelgeleri from './TumCizelgeler/UcAylarÇizelgeleri'
import { cizelgelerimActions, useCizelgelerim } from '../../features/cizelgelerim'
import { useDispatch } from 'react-redux'
import { ArrowBigLeftLine } from 'tabler-icons-react';
import CizelgeListesi from './TumCizelgeler/CizelgeListesi'
import CuzListesi from './TumCizelgeler/CizelgeListesi/CuzListesi'

const Cizelgelerim = () => {

  const [hideMevcutHatimler, setHideMevcutHatimler] = useState<boolean>(false)
  const {componentName, previousComponentName} = useCizelgelerim();
  
  const dispatch = useDispatch();

  const renderComponent = (name: string) => {
    switch(name){
      case "tumcizelgeler":
        return <TumCizelgeler />
        break;
      case "ucaylarcizelgeleri":
        return <UcAylarCizelgeleri />
        break;
      case "cizelgelistesi":
        return <CizelgeListesi />
        break;
      case "cuzlistesi":
        return <CuzListesi />
        break;
    }
  }

  return (
    <Container>
      <Template>
        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
            <ActionIcon 
            style={{position: 'absolute', left: '10px'}}
            variant='filled'
            color="green"
            size={"xl"}
            onClick={()=>{

              if(componentName == "tumcizelgeler"){
                window.location.href = "/";
              }

              dispatch(cizelgelerimActions.changeComponentName(previousComponentName))
            }}
            >
          <ArrowBigLeftLine
              size={30}
              strokeWidth={2}
              color={'black'}
            />
            </ActionIcon>


          <Title align='center' order={1}>Çizelgelerim</Title>
        
        </div>
        
        
        {renderComponent(componentName)}
      
      </Template>
    </Container>
  )
}

export default Cizelgelerim