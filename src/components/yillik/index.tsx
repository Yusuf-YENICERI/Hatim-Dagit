







import Banner from "./Banner"
import {useContext, useEffect, useState} from 'react'
import { DataServiceContext } from "backend";
import { DataService } from "service/DataService";
import { HatimGetirCustomResponse } from "backend/types/responses/HatimGetirCustomResponse";
import styled from "@emotion/styled";
import { Text } from "@mantine/core";
import Language from "strings";
import { LoadingContainer, LoadingItem } from "./styles";
import { objectToArrayV3, typeCheck } from "common";
import { useEditCuzlerModal } from "features/editCuzlerModal";
import { HatimType } from "backend/types/HatimType";
import Parts from "./Parts";
import CuzModal from "./CuzModal"
import { useDispatch } from "react-redux";
import { cuzModalActions } from "features/cuzModal";
import NewKhatmPart from "./NewKhatmPart";
import Table from "./Table";

const Yillik = () => {


  const dataService = useContext( DataServiceContext );
  
  const [hatimData, setHatimData] = useState<HatimGetirCustomResponse|undefined>(undefined)
  // const [hatimsData, setHatimsData] = useState<HatimType[]|undefined>(undefined)
  const [loadingVisibility, setLoadingVisibility] = useState(true);
  const [waitText, setWaitText] = useState(Language["/cuz"].Before.Wait);

  const {refetchData} = useEditCuzlerModal();
  const dispatch = useDispatch();

  const isKhatmDeleted = (data: HatimGetirCustomResponse) => {
    return Object.keys(data).filter(x=> x == "delete").length > 0;
  }



  const getKhatm = async () => {
    const {data, error} = await dataService.hatimGetirCustom();


    if(data == "error"){
    }else if(typeof data == "object"){

      if(isKhatmDeleted(data)){
        setWaitText(Language["/cuz"].Before.Deleted)
        return;
      }

      // const preprocessedData = objectToArrayV3(data);

      setHatimData(data);
      // setHatimsData(preprocessedData)
      setLoadingVisibility(false);
    
      dispatch(cuzModalActions.changeMakeNewKhatm(data.makeNewHatim))
      
      console.log(data);
    }
  }
  
  useEffect(() => {
    getKhatm();
  }, [refetchData])

  const YillikTemplate = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: #91ffbb;
    position: relative;
  `

  const BannerTemplate = styled.div`
  display: flex;
  justify-content: center;
  `

  const NewKhatmWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  `;

if(loadingVisibility){
  return (
    <YillikTemplate>
      <BannerTemplate>
        <LoadingContainer visibility={loadingVisibility}>
              <LoadingItem >{waitText}</LoadingItem>
          </LoadingContainer>
      </BannerTemplate>
    </YillikTemplate>
  )
}

  return (
    <>
    <YillikTemplate>
    <Table data={undefined} />

        <CuzModal />
        <BannerTemplate>
          <Banner hatimRootData={hatimData} />
        </BannerTemplate>
        <Parts hatimRootData={hatimData} />
        <NewKhatmWrapper>
          <NewKhatmPart />
        </NewKhatmWrapper>
      </YillikTemplate>
    </>
  )
}

export default Yillik