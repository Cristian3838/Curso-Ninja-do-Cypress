Cypress.Commands.add('submitLoginForm', (email, senha)=>{
    cy.get('input[placeholder = "Digite seu e-mail"]').type(email)
    cy.get('input[placeholder = "Digite sua senha"]').type(senha)
    cy.contains('button', 'Entrar').click()
})

Cypress.Commands.add('start', ()=>{
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
})

Cypress.Commands.add('goTo', (buttonName, pageTitle)=>{
    cy.contains('h4', buttonName).should('be.visible').click()
    cy.contains('h1', pageTitle).should('be.visible')
})
Cypress.Commands.add('checkItem', (checkItem)=> {
    cy.contains(checkItem).should('be.visible')
})