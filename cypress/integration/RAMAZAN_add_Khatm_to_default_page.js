








describe('add Khatm to default page', ()=>{

    let Part = 8;
    let username = "test kullanıcı"
    let other_user = "diğer kullanıcı";


    it('user should be able to add khatm to default page, should be able to take Part and release', ()=>{
        cy.visit('http://localhost:3000/', {onBeforeLoad: function (window) {
            window.localStorage.setItem('language', 'en');
        }})
        //click on the button
        cy.get("#newDonerliRamazanKhatm").click()
        //type Khatm header
        cy.get('#root > div:nth-child(4) > div:nth-child(2) > div > div:nth-child(4) > input').type('test')
        //type description
        cy.get('#root > div:nth-child(4) > div:nth-child(2) > div > div:nth-child(6) > textarea').type('description')
        //click Continue
        cy.findByRole('link', {  name: /continue/i}).click()
        //click Continue again
        cy.findByText(/new khatm is ready!/i, {timeout: 10000}).should('be.visible')
        cy.findByRole('link', {  name: /continue/i}).click()
        
        cy.get("#NewSubKhatm").click()

        let newDonerliRamazanKhatm = "2.hatim"
        cy.findByRole('textbox').type(newDonerliRamazanKhatm)

        cy.get('#questionContainer > div:nth-child(6) > div > div:nth-child(6) > input').type('2009-12-12')

        cy.findByRole('link', {  name: /continue/i}).click()


             //click on some Part
        // cy.visit('http://localhost:3000/cuz/-Mr3hOiBGujMegW033tQ')
        cy.get(`#questionContainer > div:nth-child(10) > div:nth-child(2) > div > div > div:nth-child(${Part})`).click()
        //type the name
        let username = "test kullanıcı"
        cy.findByRole('textbox').type(username)
        //click to Take it
        cy.get('#takeButton').click()
        //check the name of the Part
        cy.get(`#questionContainer > div:nth-child(10) > div:nth-child(2) > div > div > div:nth-child(${Part}) > div:nth-child(1) > div:nth-child(3)`).should('have.text', username)
       
        //click on the taken Part
        cy.get(`#questionContainer > div:nth-child(10) > div:nth-child(2) > div > div > div:nth-child(${Part})`).click()
        //click to release it
        cy.get('#takeButton').click()
    });

    it('user should be able to add khatm to default page, should be able to take Part ', ()=>{
        cy.visit('http://localhost:3000/', {onBeforeLoad: function (window) {
            window.localStorage.setItem('language', 'en');
        }})
        //click on the button
        cy.get("#newDonerliRamazanKhatm").click()
        //type Khatm header
        cy.get('#root > div:nth-child(4) > div:nth-child(2) > div > div:nth-child(4) > input').type('test')
        //type description
        cy.get('#root > div:nth-child(4) > div:nth-child(2) > div > div:nth-child(6) > textarea').type('description')
        //click Continue
        cy.findByRole('link', {  name: /continue/i}).click()
        //click Continue again
        cy.findByText(/new khatm is ready!/i, {timeout: 10000}).should('be.visible')
        cy.findByRole('link', {  name: /continue/i}).click()
        
        cy.get("#NewSubKhatm").click()

        let newDonerliRamazanKhatm = "2.hatim"
        cy.findByRole('textbox').type(newDonerliRamazanKhatm)

        cy.get('#questionContainer > div:nth-child(6) > div > div:nth-child(6) > input').type('2009-12-12')

        cy.findByRole('link', {  name: /continue/i}).click()


             //click on some Part
        // cy.visit('http://localhost:3000/cuz/-Mr3hOiBGujMegW033tQ')
        cy.get(`#questionContainer > div:nth-child(10) > div:nth-child(2) > div > div > div:nth-child(${Part})`).click()
        //type the name
        let username = "test kullanıcı"
        cy.findByRole('textbox').type(username)
        //click to Take it
        cy.get('#takeButton').click()
        //check the name of the Part
        cy.get(`#questionContainer > div:nth-child(10) > div:nth-child(2) > div > div > div:nth-child(${Part}) > div:nth-child(1) > div:nth-child(3)`).should('have.text', username)
    })




    it('user should be able to add khatm to default page, other user should be able to check if Part is taken and should take another Part', ()=>{
        //check the name of the Part
        cy.get(`#questionContainer > div:nth-child(10) > div:nth-child(2) > div > div > div:nth-child(${Part}) > div:nth-child(1) > div:nth-child(3)`).should('have.text', username)

        Part = 15;
         //click on some Part
        // cy.visit('http://localhost:3000/cuz/-Mr3hOiBGujMegW033tQ')
        cy.get(`#questionContainer > div:nth-child(10) > div:nth-child(2) > div > div > div:nth-child(${Part})`).click()
        //type the name
        cy.findByRole('textbox').type(other_user)
        //click to Take it
        cy.get('#takeButton').click()
        //check the name of the Part
        cy.get(`#questionContainer > div:nth-child(10) > div:nth-child(2) > div > div > div:nth-child(${Part}) > div:nth-child(1) > div:nth-child(3)`).should('have.text', other_user)
    })

});