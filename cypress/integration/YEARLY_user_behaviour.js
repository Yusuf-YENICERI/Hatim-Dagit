



describe('user behaviour inshaALLAH', ()=>{


    let Part = 8;
    let username = "test kullanıcı"
    let other_user = "diğer kullanıcı";

    it('user made Khatm should be able to take Part', () => {

        cy.visit('http://localhost:3000/', {onBeforeLoad: function (window) {
            window.localStorage.setItem('language', 'en');
        }})
        //click to the button
        cy.get("#yearBased").click()
        //click to the option
        // cy.get("#root > div:nth-child(4) > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1)").click()
        //type Khatm header
        cy.get('#root > div:nth-child(4) > div:nth-child(4) > div > div:nth-child(4) > input').type('test')
        //type description
        cy.get('#root > div:nth-child(4) > div:nth-child(4) > div > div:nth-child(6) > textarea').type('description')
        //click Continue
        cy.findByRole('link', {  name: /continue/i}).click()
        //click Continue again
        cy.findByText(/new khatm is ready!/i, {timeout: 10000}).should('be.visible')
        
        cy.findByRole('link', {  name: /continue/i}).click()

         //click on some Part
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part})`).click()
        //type the name
        let username = "test kullanıcı"
        cy.findByRole('textbox').type(username)
        //click to Take it
        cy.get('#takePartYillik').click()
        //check the name of the Part
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part}) > div:nth-child(1) > div > div > span:nth-child(2)`).should('have.text', username)
       
        //click on the taken Part
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part})`).click()
        //click to release it
        cy.get('#cancelPartYillik').click()

        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part})  > div:nth-child(1) > div > div > span:nth-child(2)`).should('have.text', username)
        cy.get(`#modalPartYillik`).should('not.exist')
    });

    it('user should be able to take Part and release', ()=>{
        Part = 3;
         //click on some Part
        // cy.visit('http://localhost:3000/cuz/-Mr3hOiBGujMegW033tQ')
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part}) > div > div > div`).click({force: true})
        //type the name
        cy.findByRole('textbox').type(username)
        //click to Take it
        cy.get('#takePartYillik').click()
        //check the name of the Part
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part}) > div:nth-child(1) > div > div > span:nth-child(2)`).should('include.text', username)

        //click on the taken Part
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part})`).click()

        cy.get('#cancelPartYillik').click()

        //click to release it

        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part}) > div:nth-child(1) > div > div > span:nth-child(2)`).should('have.text', '')

    })


    Part = 13;

    it('user should be able make Khatm and take Part', ()=>{
        cy.visit('http://localhost:3000/', {onBeforeLoad: function (window) {
            window.localStorage.setItem('language', 'en');
        }})
        //click to the button
        cy.get("#yearBased").click()
        //click to the option
        // cy.get("#root > div:nth-child(4) > div:nth-child(3) > div > div:nth-child(2) > div:nth-child(1)").click()
        //type Khatm header
        cy.get('#root > div:nth-child(4) > div:nth-child(4) > div > div:nth-child(4) > input').type('test')
        //type description
        cy.get('#root > div:nth-child(4) > div:nth-child(4) > div > div:nth-child(6) > textarea').type('description')
        //click Continue
        cy.findByRole('link', {  name: /continue/i}).click()
        //click Continue again
        cy.findByText(/new khatm is ready!/i, {timeout: 10000}).should('be.visible')
        
        cy.findByRole('link', {  name: /continue/i}).click()

         //click on some Part
        // cy.visit('http://localhost:3000/cuz/-Mr3hOiBGujMegW033tQ')
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part})`).click()
        //type the name
        let username = "test kullanıcı"
        cy.findByRole('textbox').type(username)
        //click to Take it
        cy.get('#takePartYillik').click()
        //check the name of the Part
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part}) > div:nth-child(1) > div > div > span:nth-child(2)`).should('have.text', username)
    })

    it('other user should be able to check if Part is taken and should take another Part', ()=>{
        //check the name of the Part
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part}) > div:nth-child(1) > div > div > span:nth-child(2)`).should('have.text', username)

        Part = 15;
         //click on some Part
        // cy.visit('http://localhost:3000/cuz/-Mr3hOiBGujMegW033tQ')
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part})`).click()
        //type the name
        cy.findByRole('textbox').type(other_user)
        //click to Take it
        cy.get('#takePartYillik').click()
        //check the name of the Part
        cy.get(`#root > div:nth-child(4) > div:nth-child(4) > div > div > div > div:nth-child(${Part}) > div:nth-child(1) > div > div > span:nth-child(2)`).should('have.text', other_user)
    })

    
})



