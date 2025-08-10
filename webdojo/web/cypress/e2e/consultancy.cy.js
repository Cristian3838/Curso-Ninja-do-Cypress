describe('Formulário de Consultoria', () => {
    it('Deve solicitar concultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
    });
});
