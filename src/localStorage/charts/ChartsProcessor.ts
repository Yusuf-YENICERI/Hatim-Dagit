



import HerGun1Cuz, { cizelgeDataType } from "./UcAylar/HerGun1Cuz";
import {paramsType} from './types/params';


export default class LocalStorageProcessor{

    cizelge: HerGun1Cuz;

    constructor(cizelge: HerGun1Cuz){
        this.cizelge = cizelge;
    }

    processDatas = (params: paramsType) => {
        this.cizelge.processDatas(params);
    }

    getDatas = (params: paramsType):undefined|[cizelgeDataType] => {
        return this.cizelge.getAllDatasFromLocalStorage(params);
    }

    setDatas = (params: cizelgeDataType[]) => {
        this.cizelge.setAllDatas(params);
    }

    setRecep = (value: cizelgeDataType) => {
        this.cizelge.recepData = value;
    }

    setSaban = (value: cizelgeDataType) => {
        this.cizelge.sabanData = value;
    }

    setRamazan = (value: cizelgeDataType) => {
        this.cizelge.ramazanData = value;
    }

}