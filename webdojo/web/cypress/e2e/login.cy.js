describe('Login', () => {
  it('Deve logar com sucesso', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('input[placeholder = "Digite seu e-mail"]').type('papito@webdojo.com')
    cy.get('input[placeholder = "Digite sua senha"]').type('katana123')
    cy.contains('button', 'Entrar').click()
    cy.contains('Fernando Papito').should('be.visible')
  });

  it('Não deve logar com senha inválida', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('input[placeholder = "Digite seu e-mail"]').type('papito@webdojo.com')
    cy.get('input[placeholder = "Digite sua senha"]').type('katana124')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  });

  it('Não deve logar com E-mail inválido', () => {
    cy.viewport(1440, 900)
    cy.visit('http://localhost:3000')
    cy.get('input[placeholder = "Digite seu e-mail"]').type('papito@webdojoo.com')
    cy.get('input[placeholder = "Digite sua senha"]').type('katana123')
    cy.contains('button', 'Entrar').click()
    cy.contains('Acesso negado! Tente novamente.').should('be.visible')
  });
});