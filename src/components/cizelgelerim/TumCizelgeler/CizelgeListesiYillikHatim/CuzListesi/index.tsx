





import React, { useRef, useState } from 'react'
import { useCizelgelerim } from '../../../../../features/cizelgelerim'
import { Container, CuzItem, CuzlerContainer, HatimContainer, HatimTitle, Template } from './styles';
import Table from './Table'

const CuzListesi = () => {

  const {subKeysAndParts, currentKhatmKey} = useCizelgelerim();
  const cizelgeRef = useRef<HTMLDivElement>();
  const [cizelgeVisible, setCizelgeVisible] = useState(false);
  const [currentKeySubKeyAndPart, setCurrentKeySubKeyAndPart] = useState({
    key: '',
    subKey: '',
    part: ''
  })

  const toggleCizelge = () => {
    if(cizelgeRef.current != undefined){
      cizelgeRef.current.style.zIndex = cizelgeVisible ? '-10' : '20';
      setCizelgeVisible(!cizelgeVisible)
    }
}

  return (
    <>

    <Table toggleCizelge={toggleCizelge} cizelgeRef={cizelgeRef} cizelgeId={currentKeySubKeyAndPart.part} keyHolder={{
      key: currentKeySubKeyAndPart.key,
      subKey: currentKeySubKeyAndPart.subKey
    }}  />

    <Container>
      <Template>

        
      
      {subKeysAndParts.map((subKeyData: {[key:string]: string[]}, index: number) => 
      
      <HatimContainer>
        <HatimTitle>
          {index+1}. Hatim
        </HatimTitle>
        
        <CuzlerContainer>
          {subKeyData[Object.keys(subKeyData)[0]].map((part:string) => 
            
              <CuzItem onClick={()=>{
                setCurrentKeySubKeyAndPart({
                  key: currentKhatmKey,
                  subKey: Object.keys(subKeyData)[0],
                  part: part
                })
                toggleCizelge();
              }}>

                {part}

              </CuzItem>

            )}
        </CuzlerContainer>
      </HatimContainer>

      )}
      
      </Template>
    </Container>
    </>
  )
}

export default CuzListesi