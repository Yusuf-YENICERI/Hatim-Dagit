//                          BİSMİLLAHİRRAHMANİRRAHİM






import LocDb from '@yusuf-yeniceri/easy-storage'
import {paramsType} from '../types/params';

export type cizelgeDataType = [{[key:string]: string}];


export default class HerGun1Cuz{

    _recepData: cizelgeDataType|undefined = undefined
    _sabanData: cizelgeDataType|undefined = undefined;
    _ramazanData: cizelgeDataType|undefined = undefined;

    get recepData(): cizelgeDataType|undefined {
        return this._recepData;
    }

    set recepData(value: cizelgeDataType|undefined){
        this._recepData = value;
    }

    get sabanData(): cizelgeDataType|undefined {
        return this._sabanData;
    }

    set sabanData(value: cizelgeDataType|undefined){
        this._sabanData = value;
    }

    get ramazanData(): cizelgeDataType|undefined {
        return this._ramazanData;
    }

    set ramazanData(value: cizelgeDataType|undefined){
        this._ramazanData = value;
    }

    setAllDatas = (value: cizelgeDataType[]) => {
        this._recepData = value[0];
        this._sabanData = value[1];
        this._ramazanData = value[2];
    }

    getAllDatas = () => {
        return [this._recepData, this._sabanData, this._ramazanData];
    }

    processDatas = ({key, subKey, partId}: paramsType) => {
        LocDb.ref(`Hatim/cizelgeler/ucAylar/herGun1Cuz/${key}/${subKey}/${partId}`).set(this.getAllDatas());
    }

    getAllDatasFromLocalStorage = ({key, subKey, partId}: paramsType): undefined|[cizelgeDataType] => {
        let result = LocDb.ref(`Hatim/cizelgeler/ucAylar/herGun1Cuz/${key}/${subKey}/${partId}`).get();
        if(typeof result == "object" && Object.keys(result).length == 0){
            return undefined
        }else{
            return result;
        }
    }
}