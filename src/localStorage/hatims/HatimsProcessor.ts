





import LocDb from '@yusuf-yeniceri/easy-storage'
import { isEmptyObjectLocDb } from '../../common'

export default class HatimsProcessor{

    setHatimTitle({key, title}: {key:string, title: string}){
        LocDb.ref(`Hatim/hatimKeys/${key}/title`).set({value: title})
    }

    getHatimTitle({key}: {key: string}){
        let title = LocDb.ref(`Hatim/hatimKeys/${key}/title`).get()

        if(isEmptyObjectLocDb(title)){
            return undefined;
        }
        
        return title;
    }

}