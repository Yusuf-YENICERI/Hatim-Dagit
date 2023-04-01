







import Banner from "./Banner"
import {useContext, useEffect} from 'react'
import { DataServiceContext } from "backend";
import { DataService } from "service/DataService";

const Yillik = () => {


  const dataService = useContext( DataServiceContext );

  const getKhatm = async () => {
    const result = await dataService.hatimGetirCustom();
    console.log(result)
  }
  
useEffect(() => {
  getKhatm();
}, [])


  return (
    <>
        {/* <Banner /> */}
    </>
  )
}

export default Yillik