







import Banner from "./Banner"
import {useContext, useEffect, useState} from 'react'
import { DataServiceContext } from "backend";
import { DataService } from "service/DataService";
import { HatimGetirCustomResponse } from "backend/types/responses/HatimGetirCustomResponse";
import styled from "@emotion/styled";

const Yillik = () => {


  const dataService = useContext( DataServiceContext );
  
  const [hatimData, setHatimData] = useState<HatimGetirCustomResponse|undefined>(undefined)

  const getKhatm = async () => {
    const {data, error} = await dataService.hatimGetirCustom();
    setHatimData(data);
    console.log(data);
  }
  
  useEffect(() => {
    getKhatm();
  }, [])

  const YillikTemplate = styled.div`
    display: flex;
    justify-content: center;
  `

  const BannerTemplate = styled.div`
  display: flex;
  justify-content: center;
`

  return (
    <>
      <BannerTemplate>
        <Banner hatimRootData={hatimData} />
      </BannerTemplate>
    </>
  )
}

export default Yillik