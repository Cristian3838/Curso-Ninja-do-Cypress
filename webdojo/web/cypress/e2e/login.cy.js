describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana123')
    cy.checkItem('Fernando Papito')
  });

  it('Não deve logar com senha inválida', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojo.com', 'katana124')
    cy.checkItem('Acesso negado! Tente novamente.')
  });

  it('Não deve logar com E-mail inválido', () => {
    cy.start()
    cy.submitLoginForm('papito@webdojoo.com', 'katana123')
    cy.checkItem('Acesso negado! Tente novamente.')
  });
});