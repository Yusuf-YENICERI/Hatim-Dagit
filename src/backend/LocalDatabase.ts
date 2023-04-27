







import { ILocalDatabase } from "./interfaces/ILocalDatabase";
import { YeniYillikHatimParams } from "./types/params/YeniYillikHatimParams";
import { BaseResponse } from "./types/responses/BaseResponse";
import { YeniYillikHatimResponse } from "./types/responses/YeniYillikHatimResponse";
import db from '@yusuf-yeniceri/easy-storage';
import { HatimType } from "./types/HatimType";
import {extractKey} from 'common'

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
    
    
    
}