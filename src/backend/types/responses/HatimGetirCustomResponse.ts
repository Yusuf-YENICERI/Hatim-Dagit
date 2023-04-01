







export interface HatimGetirCustomResponse{
    [key:string]: string|boolean|number| {
        parts:
        {[key:string]:{isTaken:boolean, name:string}}
    }
}