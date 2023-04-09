import { HatimType } from "backend/types/HatimType";







export const countNumberOfCuzs = (allHatimler:any) => {
    let totalCuz = 0
    for (let i = 0; i < allHatimler.length; i++) {
        
        totalCuz += allHatimler[i][1].cevaplar.filter((cevap:any)=>cevap.alindi).length + 
        allHatimler[i][2].cevaplar.filter((cevap:any)=>cevap.alindi).length + 
        allHatimler[i][3].cevaplar.filter((cevap:any)=>cevap.alindi).length;

    }

    return totalCuz;
}

export const countNumberOfCuzsV3 = (hatimsData:HatimType[]) => {
    return hatimsData.map(
        (hatimData:HatimType) => Object.values(hatimData.parts).filter(part => part.isTaken === true).length)
        .reduce((a,b) => a+b, 0);
}