







import { ILocalDatabase } from "./interfaces/ILocalDatabase";
import { YeniYillikHatimParams } from "./types/params/YeniYillikHatimParams";
import { BaseResponse } from "./types/responses/BaseResponse";
import { YeniYillikHatimResponse } from "./types/responses/YeniYillikHatimResponse";
import db from '@yusuf-yeniceri/easy-storage';
import { HatimType } from "./types/HatimType";
import {extractKey, objectToArrayV3} from 'common'

export class LocalDatabase implements ILocalDatabase{
    hatimSiraBelirle(no: number): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    hatimGetir(): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    hatimBasligiGetir(hatimKey: string): Promise<BaseResponse<string>> {
        throw new Error("Method not implemented.");
    }
    yeniHatim(baslik: string, bitisTarihi: string, mevcutHatim: boolean, isRamazan: boolean, description: string, makeNewHatim: boolean, hatimCount: number, isMonths3: { eachday1part: boolean; }): Promise<BaseResponse<string>> {
        throw new Error("Method not implemented.");
    }
    yeniYillikHatim(args: YeniYillikHatimParams): Promise<BaseResponse<YeniYillikHatimResponse>> {
        throw new Error("Method not implemented.");
    }
    async yeniYillikHatimCustom(params: YeniYillikHatimResponse): Promise<BaseResponse<string>> {
        try {
            params.hatimSubKeys.map(hatimSubKey=>{
                db.ref(`Hatim/${params.hatimKey}/`).modify((data) => {
                    data[hatimSubKey] = true;
                    return data;
                })
            })
            
            db.ref(`Hatim/${params.hatimKey}/`).modify((data) => {
                data["adminToken"] = params.adminToken;
                data["header"] = params.header;
                data["type"] = params.type;
                return data;
            });

            return {data: "Alhamdulillah", error: undefined};
    
        } catch (error) {
            return {data:undefined, error: error};            
        }
    }
    cuzAl(isim: string, no: number, subKey: string, alindi: boolean, makeNewHatim: boolean): BaseResponse<any> {
        try {
            let key = extractKey();
            db.ref(`Hatim/${key}/${subKey}/parts/${no}`).set({isTaken: alindi, name:isim});
            return {data: "Alhamdulillah", error: undefined}
        } catch (error) {
            return {data: undefined, error: error}
        }
        
    }
    cuzIsimDegistir(isim: string, no: number, subKey: string): BaseResponse<any> {
        try {
            let {data, error} = this.cuzAl(isim, no, subKey, true, false)
            if(data != undefined){
                return {data: "Alhamdulillah", error: undefined}    
            }
            return {data: undefined, error: error}
        } catch (error) {
            return {data: undefined, error: error}
        }
    }
    cuzIptal(no: number, subKey: string): BaseResponse<any> {
        try {
            let key = extractKey();
            db.ref(`Hatim/${key}/${subKey}/parts`).modify((data)=>{
                delete data[no];
                return data;
            });
            return {data: "Alhamdulillah", error: undefined}    
        } catch (error) {
            return {data: undefined, error: error}
        }
    }

    cuzBitti(hatimKey: string): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    ziyaretSayisiGetir(): Promise<BaseResponse<number>> {
        throw new Error("Method not implemented.");
    }
    ziyaretSayisiArtir(): Promise<BaseResponse<void>> {
        throw new Error("Method not implemented.");
    }
    countNumberOfCuzs(hatimsData: HatimType[]): BaseResponse<number> {
        throw new Error("Method not implemented.");
    }
    hatimDegistir(baslik: string, bitisTarihi: string, description: string, subKey: string): Promise<BaseResponse<number>> {
        throw new Error("Method not implemented.");
    }
    deleteHatim(): Promise<BaseResponse<number>> {
        throw new Error("Method not implemented.");
    }
    hatimListener(callback: Promise<BaseResponse<any>>): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    stopMakingNewKhatm(): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    
    partExists(no:number, subKey: string): BaseResponse<boolean> {
        try {
            const key = extractKey();
            const part = db.ref(`Hatim/${key}/${subKey}/parts/${no}`).get()
    
            const result = Object.keys(part).length > 0;
    
            return {data:result, error: undefined};            
        } catch (error) {
            return {data:false, error: error};            
        }

    }

    showAndMarkWarning(message: string, path: string): BaseResponse<string> {
        try {
            db.ref(`Hatim/${path}`).set({warning: true});
            alert(message);
            return {data: "Alhamdulillah", error: undefined}
        } catch (error) {
            return {data: undefined, error: error}
        }
    }

    doesWarningExists(path: string): BaseResponse<string> {
        try {
            let result = db.ref(`Hatim/${path}/warning`).get();
            if(result == true){
                return {data: "Alhamdulillah", error: undefined}
            }else{
                return {data: undefined, error: "error"}
            }
        } catch (error) {
            return {data: undefined, error: error}
        }
    }

    getParts(originalAllHatims:HatimType[]): BaseResponse<{[key:number]:string[]}[]>{
        try {
            const key = extractKey();
            const allHatims = db.ref(`Hatim/${key}`).get()
            const allHatimsProcessed = objectToArrayV3(allHatims)
            const result = allHatimsProcessed.map((hatim:any, index) => { 
              const responseKey =  originalAllHatims.map(_hatim => _hatim.subKey).findIndex(x => x == hatim.subKey)
              const responseValue = Object.keys(hatim.parts).filter(partKey => hatim.parts[partKey].isTaken != undefined)
              return {[responseKey]: responseValue};
            })
            return {data: result, error: undefined};
        } catch (error) {
            return {data: undefined, error: error};
        }
    }

    getTitles(): BaseResponse<string[]> {
        try {
            let hatims = db.ref(`Hatim`).get();
            return {data:Object.keys(hatims).filter(hatimKey => hatims[hatimKey].type == "yillikHatim").map(hatimKey => hatims[hatimKey].header), 
            error: undefined}
        } catch (error) {
            return {data: undefined, error: error}
        }
    }
    
}