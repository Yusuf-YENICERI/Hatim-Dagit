



export interface BaseResponse<T>{
    data:T|undefined;
    error:string|undefined|unknown
}