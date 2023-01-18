





import HatimsProcessor from "../HatimsProcessor";
import LocDb from '@yusuf-yeniceri/easy-storage'
import { isEmptyObjectLocDb } from "../../../common";



export default class UcAylarHatimsProcessor extends HatimsProcessor{

    getAllHatimTitlesForHerGun1Cuz(){
        let allCharts = LocDb.ref(`Hatim/cizelgeler/ucAylar/herGun1Cuz`).get();

        if(!isEmptyObjectLocDb(allCharts)){
            
            let hatimKeys = Object.keys(allCharts).filter(key => key != 'undefined');
            return hatimKeys.map(key => ({key: key, title: this.getHatimTitle({key: key})})).filter(obj => obj.title != undefined);

        }else{
            return []
        }

    }

    getHatimSubKeysAndParts({key}:{key:string}) {
        let allSubKeysAndData = LocDb.ref(`Hatim/cizelgeler/ucAylar/herGun1Cuz/${key}`).get();

        let subKeys = Object.keys(allSubKeysAndData);

        let newSubKeys = subKeys.map( subKey => ({ [subKey]: Object.keys(allSubKeysAndData[subKey]) }) )
        
        return newSubKeys;
    }
    
}