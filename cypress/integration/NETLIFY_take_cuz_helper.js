const getResponse = async params => {
  let url = undefined;
  if (params.makeNewHatimArg === undefined) {
    url = `https://sfunction.hatimdagit.com/.netlify/functions/takeCuz?key=${params.key}&subKey=${params.subKey}&cuzNo=${params.cuzNo}&name=${params.name}&alindi=${params.alindi}&ownerId=${params.ownerId}&dev=${params.dev}&writeTotalReadParts=false`;
  } else {
    url = `https://sfunction.hatimdagit.com/.netlify/functions/takeCuz?key=${params.key}&subKey=${params.subKey}&cuzNo=${params.cuzNo}&name=${params.name}&alindi=${params.alindi}&ownerId=${params.ownerId}&makeNewHatimArg=${params.makeNewHatimArg}&dev=${params.dev}&writeTotalReadParts=false`;
  }

  let response = await fetch (url);
  let data = await response.text ();

  if (response.status == 200) {
    data = JSON.parse (data);
  }

  return {
    code: response.status,
    data: data,
  };
};

export {getResponse};
