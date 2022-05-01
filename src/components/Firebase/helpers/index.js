






export const countNumberOfCuzs = (allHatimler) => {
    let totalCuz = 0
    for (let i = 0; i < allHatimler.length; i++) {
        
        totalCuz += allHatimler[i][1].cevaplar.filter((cevap)=>cevap.alindi).length + 
        allHatimler[i][2].cevaplar.filter((cevap)=>cevap.alindi).length + 
        allHatimler[i][3].cevaplar.filter((cevap)=>cevap.alindi).length;

    }

    return totalCuz;
}