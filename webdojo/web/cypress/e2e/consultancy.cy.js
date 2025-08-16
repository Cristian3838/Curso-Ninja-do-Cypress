describe('Formulário de Consultoria', () => {
    it('Deve solicitar concultoria individual', () => {
        cy.start()
        cy.submitLoginForm('papito@webdojo.com', 'katana123')
        cy.goTo('Formulários', 'Consultoria')
        cy.get('input[PlaceHolder = "Digite seu nome completo"]').type('Cristian Jonas Ataliba')
        cy.get('input[placeholder = "Digite seu email"]').type('cristian.ataliba@outlook.com')

        cy.get('input[placeholder = "(00) 00000-0000"]').type('16 993720009')
            .should('have.value', '(16) 99372-0009')

        cy.contains('label', 'Tipo de Consultoria')
            .parent()
            .find('select')
            .select('Individual')

        cy.contains('span', 'Pessoa Física')
            .prev('input[type="radio"]')
            .check({ force: true })
            .should('be.checked')

        cy.contains('span', 'Jurídica')
            .prev('input[type="radio"]')
            .should('be.not.checked')

        cy.contains('label', 'CPF')
            .parent()
            .find('input')
            .type('24064854047')
            .should('have.value', '240.648.540-47')


        const canais = ['Instagram', 'Udemy', 'YouTube', 'Indicação de Amigo', 'LinkedIn']

        canais.forEach(canal => {
            cy.contains('span', canal)
                .prev('input[type="checkbox"]')
                .check()
        })

        cy.get('input[type="file"]')
            .selectFile('./cypress/fixtures/teste.pdf', { force: true })

        cy.get('textarea[placeholder = "Descreva mais detalhes sobre sua necessidade"]')
            .type('What is Lorem Ipsum?Lorem Ipsum is simply dummy text of th')


        const tecnologias = ['Cypress', 'Appium', 'Java', 'JavaScript'];

        tecnologias.forEach(tech => {
            cy.get('input[placeholder="Digite uma tecnologia e pressione Enter"]')
                .type(tech)
                .type('{enter}');

                cy.contains('label', 'Tecnologias')
                .parent()
                .find('span', tech)
                .should('be.visible')
        
        });

        cy.contains('span', 'Li e aceito os')
        .prev()
        .check({force:true})

        cy.contains('button', 'Enviar formulário').click()
        cy.contains('h3', 'Sucesso!')
        .should('be.visible')
      

    });
});
