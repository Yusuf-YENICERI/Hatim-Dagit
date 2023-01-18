




export type paramsType = {key: string, subKey: string, partId: number};
export type paramsTypeGet = {key: string, subKey: string};

import LocDb from '@yusuf-yeniceri/easy-storage'


export default class PartsProcessor{

    takePart = ({key, subKey, partId}: paramsType) => {
        LocDb.ref(`Hatim/hatimKeys/${key}/${subKey}/parts`).modify((parts) => {
            if(typeof parts == "object" && Object.keys(parts).length == 0){
                let newParts = [partId];
                return newParts;
            }else{
                parts.push(partId);
                return parts;
            }
        })
    }

    cancelPart = ({key, subKey, partId}: paramsType) => {
        LocDb.ref(`Hatim/hatimKeys/${key}/${subKey}/parts`).modify((parts) => {
            if(typeof parts == "object" && Object.keys(parts).length == 0){
                return [];
            }else{
                return parts.filter((part:string) => part.toString() != partId.toString());
            }
        })
    }

    partExists = ({key, subKey, partId}: paramsType): boolean => {
        let parts = LocDb.ref(`Hatim/hatimKeys/${key}/${subKey}/parts`).get();
        if(typeof parts == "object" && Object.keys(parts).length == 0){
            return false;
        }else{
            return parts.includes(partId.toString());
        }
    }

    getParts = ({key, subKey}: paramsTypeGet) => {
        let parts = LocDb.ref(`Hatim/hatimKeys/${key}/${subKey}/parts`).get();
        if(typeof parts == "object" && Object.keys(parts).length == 0){
            return undefined;
        }else{
            return parts;
        }
    }

}