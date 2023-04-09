import { HatimType } from "../HatimType"








export interface HatimGetirCustomResponse{
    [key:string]: string|boolean|number|undefined|HatimType,
    header:string,
    description?:string,
    adminToken: string,
    donerli: boolean
    howManyDays: number
    makeNewHatim: boolean
    startingDate?: string
    totalKhatmsBeDistributed: number
    type?: string
    version: number

}