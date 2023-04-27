




import { YeniYillikHatimParams } from "backend/types/params/YeniYillikHatimParams";
import { BaseResponse } from "backend/types/responses/BaseResponse";
import { YeniYillikHatimResponse } from "backend/types/responses/YeniYillikHatimResponse";
import { IDatabase } from "./IDatabase";
export interface ILocalDatabase{
    yeniYillikHatimCustom(params: YeniYillikHatimResponse): Promise<BaseResponse<string>>;
}