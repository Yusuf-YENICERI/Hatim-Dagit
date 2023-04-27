







import { HatimType } from 'backend/types/HatimType'
import { HatimGetirCustomResponse } from 'backend/types/responses/HatimGetirCustomResponse'
import { getCurrentIndexV3, objectToArrayV3 } from 'common'
import React, { useEffect, useState } from 'react'
import PartWithChart from './PartWithChart'
import Part from './PartWithChart/Part'
import { HatimContainer, HatimIconContainer, HideHatimIcon, QuestionItem, RespondContainer, RespondInnerContainer, RespondOuterContainer, ShowHatimIcon } from './styles'

const Parts = ({hatimRootData}: {hatimRootData:HatimGetirCustomResponse|undefined}) => {

  const [hatimsData, setHatimsData] = useState<HatimType[]|undefined>(undefined)
  const [hatimlerVisibilities, setHatimlerVisibilities] = useState<boolean[]>([]);
  const [hideRespond, setHideRespond] = useState(true);
 
  useEffect(() => {
  
    const processedHatimsData = objectToArrayV3(hatimRootData);
    setHatimsData(processedHatimsData);

    setHatimlerVisibilities((()=>{
        let newArr = [];
        for (let i = 0; i < processedHatimsData.length; i++) {
            newArr[i] = false;
        }
        let currentIndex = getCurrentIndexV3(processedHatimsData);
        newArr[currentIndex] = true;
        return newArr;
    })());
  }, [])
  


  return (
    <>
        { hatimsData != undefined && 
        hatimsData.map((hatim, index) => {
            return (
            <>
            <QuestionItem >
                    {index+1}. hatim
            {
                hatimlerVisibilities.length > 0 ?
                    (hatimlerVisibilities[index]
                        ?
                    <>
                        <HatimIconContainer>
                            <HideHatimIcon onClick={()=>{
                                    setHatimlerVisibilities(prevState=>{
                                    let _newState = [...prevState];
                                    _newState[index] = !hatimlerVisibilities[index];
                                    return _newState;
                                    });
                                }} />
                        </HatimIconContainer>
                    </>
                        :
                    <>
                        <HatimIconContainer>
                            <ShowHatimIcon onClick={()=>setHatimlerVisibilities(prevState=>{
                                let _newState = [...prevState];
                                _newState[index] = !hatimlerVisibilities[index];
                                return _newState;
                            })} />
                        </HatimIconContainer>
                    </>)
                :
                    <></>
            }
            </QuestionItem>
            
            <HatimContainer className="hatimContainer"  visibility={hatimlerVisibilities[index]} >


                <RespondContainer visibility={hatimlerVisibilities[index]}>
                    <RespondOuterContainer>
                    <RespondInnerContainer>
                        {Object.values(hatim.parts).map((part,index) => {
                            return <PartWithChart data={part} no={index+1} subKey={hatim.subKey} />
                        })}
                    </RespondInnerContainer>
                    </RespondOuterContainer>
                </RespondContainer>

            </HatimContainer>

            </>
        )})}

    </>
    )
}

export default Parts