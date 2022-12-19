







const getResponse = async (params) => {

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

export {getResponse}