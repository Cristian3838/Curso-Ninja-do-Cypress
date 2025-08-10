describe('Formulário de Consultoria', () => {
    it('Deve solicitar concultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
      
    });
});

Cypress.Commands.add('goTo', (buttonName, pageTitle)=>{
    cy.contains('button', buttonName).should('be.visible').click()
    cy.contains('h1', pageTitle).should('be.visible')
})