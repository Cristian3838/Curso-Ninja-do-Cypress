describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')
    cy.contains('Fernando Papito').should('be.visible')
  });

  it('Não deve logar com senha inválida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana124')
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  });

  it('Não deve logar com E-mail inválido', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojoo.com', 'katana123')
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  });
});