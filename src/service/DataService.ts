import Database from "backend";
import { IDatabase } from "backend/interfaces/IDatabase";
import { LocalDatabase } from "backend/LocalDatabase";
import { BaseResponse } from "backend/types/responses/BaseResponse";
import { YeniYillikHatimParams } from "backend/types/params/YeniYillikHatimParams";
import { YeniYillikHatimResponse } from "backend/types/responses/YeniYillikHatimResponse";
import { HatimGetirCustomResponse } from "backend/types/responses/HatimGetirCustomResponse";
import { HatimType } from "backend/types/HatimType";







export class DataService implements IDatabase{

    remoteDatabase: IDatabase;
    localDatabase: LocalDatabase;

    constructor(remoteDatabase:IDatabase, localDatabase:LocalDatabase){
        this.remoteDatabase = remoteDatabase;
        this.localDatabase = localDatabase;
    }
    hatimSiraBelirle(no: number): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.")
    }
    extractKey(): Promise<BaseResponse<string>> {
        throw new Error("Method not implemented.");
    }
    async hatimGetir(): Promise<BaseResponse<any>> {
        let remoteDbResult = await this.remoteDatabase.hatimGetir();
        return remoteDbResult;
    }

    async hatimGetirCustom(): Promise<BaseResponse<HatimGetirCustomResponse|string>> {
        try {
            let remoteDbResult:HatimGetirCustomResponse = await this.remoteDatabase.hatimGetir();
            return {data: remoteDbResult, error: undefined};     
        } catch (error) {
            return {data: undefined, error: error}
        }
    }

    hatimBasligiGetir(hatimKey: string): Promise<BaseResponse<string>> {
        throw new Error("Method not implemented.");
    }
    yeniHatim(baslik: string, bitisTarihi: string, mevcutHatim: boolean, isRamazan: boolean, description: string, makeNewHatim: boolean, hatimCount: number, isMonths3: { eachday1part: boolean; }): Promise<BaseResponse<string>> {
        throw new Error("Method not implemented.");
    }
    
    async yeniYillikHatim(args: YeniYillikHatimParams): Promise<BaseResponse<YeniYillikHatimResponse>> {
        let remoteDbResult = await this.remoteDatabase.yeniYillikHatim(args)
        if(remoteDbResult.data !== undefined){
            this.localDatabase.yeniYillikHatimCustom(remoteDbResult.data);
        }
        return remoteDbResult;

    }
    cuzAl(isim: string, no: number, subKey: string, alindi: boolean, makeNewHatim: boolean): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    cuzIsimDegistir(isim: string, no: number, subKey: string): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
    }
    cuzIptal(no: number, subKey: string): Promise<BaseResponse<any>> {
        throw new Error("Method not implemented.");
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
        let remoteDbResult = this.remoteDatabase.countNumberOfCuzs(hatimsData);
        return remoteDbResult;
    }

    /**
     * This function needs to be rewritten
     * @param hatimsData 
     * @returns 
     */
    countNumberOfCuzsV3(hatimsData: HatimType[]): number {
        let remoteDbResult = this.remoteDatabase.countNumberOfCuzsV3(hatimsData);
        return remoteDbResult;
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