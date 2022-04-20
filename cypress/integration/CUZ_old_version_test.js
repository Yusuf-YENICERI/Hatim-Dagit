







describe('old version test', ()=>{
    it('users can take Part from old links and can release them', ()=>{
        cy.visit('http://localhost:3000/cuz/-MpoSmNn5HZXVrPvFWNG');

        let Part = 4;
        let username = "test kullanıcı"
         //click on some Part
        cy.get(`#questionContainer > div:nth-child(9) > div:nth-child(2) > div > div > div:nth-child(${Part})`).click()
        //type the name
        cy.findByRole('textbox').type(username)
        //click to Take it
        cy.get('#takeButton').click()
        //check the name of the Part
        cy.get(`#questionContainer > div:nth-child(9) > div:nth-child(2) > div > div > div:nth-child(${Part}) > div:nth-child(3)`).should('have.text', username)

        //click on the taken Part
        cy.get(`#questionContainer > div:nth-child(9) > div:nth-child(2) > div > div > div:nth-child(${Part})`).click()
        //click to release it
        cy.get('#takeButton').click()
    })
})