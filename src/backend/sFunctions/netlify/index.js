




// let params = {
//     key: '-NIZ501BTdCZDmj4kdh7',
//     subKey: '-NJOSY6pcGEKRU3nnFl9',
//     cuzNo: '1',
//     name: 'asd',
//     alindi: 'true',
//     ownerId: '16',
//     makeNewHatimArg: undefined,
//     dev: dev.toString(),
// };

import LocDb from "@yusuf-yeniceri/easy-storage";



class Netlify{
    
    takeCuz = async (params) => {
        
        if(this.isQueryFine(params)){

            return (await this.getResponse(params));

        }

        throw new Error("Netlify.takeCuz: parameters are wrong!");
    }

    isQueryFine = ({key, subKey, cuzNo, name, alindi, ownerId, dev}) => {
        if((key === undefined) || (subKey === undefined) || (cuzNo === undefined) || (name === undefined) ||
        (alindi === undefined)  || (ownerId === undefined)  || (dev == undefined)){
            return false;
        }
    
        return true;
    }
    
    
    getResponse = async (params) => {

        let url = undefined;
        if(params.makeNewHatimArg === undefined){
            url = `https://playful-malasada-5142b3.netlify.app/.netlify/functions/takeCuz?key=${params.key}&subKey=${params.subKey}&cuzNo=${params.cuzNo}&name=${params.name}&alindi=${params.alindi}&ownerId=${params.ownerId}&dev=${params.dev}`;
        }else{
            url = `https://playful-malasada-5142b3.netlify.app/.netlify/functions/takeCuz?key=${params.key}&subKey=${params.subKey}&cuzNo=${params.cuzNo}&name=${params.name}&alindi=${params.alindi}&ownerId=${params.ownerId}&makeNewHatimArg=${params.makeNewHatimArg}&dev=${params.dev}`;   
        }
    
        let response = undefined
        let error = undefined
        try {
            response = await fetch(url);            
        } catch (error) {
            error = error;

            let ownerId = LocDb.ref(`Hatim/hatimKeys/${params.key}/${params.subKey}/ownerId`).get()
                if(typeof ownerId == "object"){
                    ownerId = undefined;
                }
            let userAgent = window.navigator.userAgent ?? undefined
            return {
                code: undefined,
                error: {"data": error, params: params, localOwnerId: ownerId, userAgent: userAgent, dateTime: (new Date()).toString()}
            }
        }

        let data = await response.text();
        switch (response.status) {
            case 200:
                data = JSON.parse(data);
                break;
            case 400:
            case 401:
            case 500:
                let ownerId = LocDb.ref(`Hatim/hatimKeys/${params.key}/${params.subKey}/ownerId`).get()
                if(typeof ownerId == "object"){
                    ownerId = undefined;
                }
                
                let userAgent = window.navigator.userAgent ?? undefined

                error = {code: response.status, data: data, params: params, localOwnerId: ownerId, userAgent: userAgent, dateTime: (new Date()).toString()}
            default:
                break;
        }

        return {
            code: response.status,
            data: data,
            error: error
        }
    }
}


export default Netlify;
