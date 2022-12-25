




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
    
        let response = await fetch(url);
        let data = await response.text();
    
        if(response.status == 200){
            data = JSON.parse(data);
        }
    
        return {
            code: response.status,
            data: data
        }
    }
}


export default Netlify;