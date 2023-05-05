






export interface HatimType{
    parts: {[key:string]:{isTaken:boolean, name:string}},
    subKey: string,
    charts?: {[key:string]:{[key:string]:boolean}}
}