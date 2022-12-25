const { expect } = require("chai");
import {getResponse} from './NETLIFY_take_cuz_helper'




describe('NETLIFY functions test', () => {

    let dev = Cypress.env('DEV_MODE') == "true";
    let params = {
        key: dev ? '-NIZ501BTdCZDmj4kdh7' : '-NK76or4L73tCuf2wx3b',
        subKey: dev ? '-NJOSY6pcGEKRU3nnFl9' :  '-NK76oxIUV1je0c6dbc2',
        cuzNo: '1',
        name: 'asd',
        alindi: 'true',
        ownerId: '16',
        makeNewHatimArg: undefined,
        dev: Cypress.env('DEV_MODE'),
    };


    it('user should be able to take Cuz and other user shouldn\'t be able to take', async ()=>{
        
          
        let response = await getResponse(params);
        

        expect(response.data[params.subKey][1]["cevaplar"][0].alindi).to.equal(true);
        expect(response.data[params.subKey][1]["cevaplar"][0].isim).to.equal(params.name);

        let originalName = params.name;
        params.ownerId = '12';
        params.name = 'other';

        response = await getResponse(params);


        expect(response.code).to.equal(401)
        
    })

   
    it('user should be able to release Cuz and other should be able to take', async ()=>{
        
        params = {
            key: dev ? '-NIZ501BTdCZDmj4kdh7' : '-NK76or4L73tCuf2wx3b',
            subKey: dev ? '-NJOSY6pcGEKRU3nnFl9' :  '-NK76oxIUV1je0c6dbc2',
            cuzNo: '1',
            name: '',
            alindi: 'false',
            ownerId: '16',
            makeNewHatimArg: undefined,
            dev: Cypress.env('DEV_MODE'),
        };    

        let response = await getResponse(params);
        

        expect(response.data[params.subKey][1]["cevaplar"][0].alindi).to.equal(false);
        expect(response.data[params.subKey][1]["cevaplar"][0].isim).to.equal(params.name);

        params.ownerId = '12';
        params.alindi = 'true';
        params.name = 'other';

        response = await getResponse(params);

        expect(response.data[params.subKey][1]["cevaplar"][0].alindi).to.equal(true);
        expect(response.data[params.subKey][1]["cevaplar"][0].isim).to.equal(params.name);


        params.ownerId = '16';
        params.alindi = 'true';
        params.name = 'asd';

        response = await getResponse(params);
    
        expect(response.code).to.equal(401);

        params.ownerId = '12';
        params.alindi = 'false';
        params.name = '';

        response = await getResponse(params);

        expect(response.data[params.subKey][1]["cevaplar"][0].alindi).to.equal(false);
        expect(response.data[params.subKey][1]["cevaplar"][0].isim).to.equal(params.name);

    })

    it('user should be able to take Cuz and new Hatim should be made', async ()=>{

        params = {
            key: dev ? '-NIZ501BTdCZDmj4kdh7' : '-NK76or4L73tCuf2wx3b',
            subKey: dev ? '-NJOSY6pcGEKRU3nnFl9' :  '-NK76oxIUV1je0c6dbc2',
            cuzNo: '1',
            name: '',
            alindi: 'false',
            ownerId: '16',
            makeNewHatimArg: 'true',
            dev: Cypress.env('DEV_MODE'),
        };

        let response = await getResponse(params);

        let oldResponseLength = Object.keys(response.data).length;

        params.alindi = 'true';

        response = await getResponse(params);

        expect(Object.keys(response.data)).to.have.lengthOf(oldResponseLength+1);

        params.makeNewHatimArg = undefined;
        params.alindi = 'false';

        response = await getResponse(params);

        expect(response.data[params.subKey][1]["cevaplar"][0].alindi).to.equal(false);
        expect(response.data[params.subKey][1]["cevaplar"][0].isim).to.equal(params.name);


    })

    it('user should be able to take Cuz and new Hatim shouldn\'t be made', async ()=>{
        params = {
            key: dev ? '-NIZ501BTdCZDmj4kdh7' : '-NK76or4L73tCuf2wx3b',
            subKey: dev ? '-NJOSY6pcGEKRU3nnFl9' :  '-NK76oxIUV1je0c6dbc2',
            cuzNo: '1',
            name: '',
            alindi: 'false',
            ownerId: '16',
            makeNewHatimArg: undefined,
            dev: Cypress.env('DEV_MODE'),
        };

        let response = await getResponse(params);

        let oldResponseLength = Object.keys(response.data).length;

        params.alindi = 'true';

        response = await getResponse(params);

        expect(Object.keys(response.data)).to.have.lengthOf(oldResponseLength);

        params.alindi = 'false';

        response = await getResponse(params);

        expect(Object.keys(response.data)).to.have.lengthOf(oldResponseLength);
        expect(response.data[params.subKey][1]["cevaplar"][0].alindi).to.equal(false);
        expect(response.data[params.subKey][1]["cevaplar"][0].isim).to.equal(params.name);

    })

})