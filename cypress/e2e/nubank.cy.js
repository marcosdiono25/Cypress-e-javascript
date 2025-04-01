Cypress.on('uncaught:exception', (err, runnable) => {
  return false;
});

describe("Teste E2E - Nubank", () => {
  let user;

  before(() => {
    cy.getRandomUser().then((randomUser) => {
      user = randomUser;
    });
  });

  it("Acessar o site do Nubank", () => {
    cy.visit("/");

    cy.contains("Nubank").should("be.visible");
    cy.get('#cpf').type(user.cpf);
    cy.get('.chakra-button > .chakra-stack').should('be.visible').click();
    cy.get('#name').type(user.name);
    cy.get('#phone').type(user.phone);
    cy.get('#email').type(user.email);
    cy.get('#emailConfirmation').type(user.email);
    cy.get('.chakra-text > :nth-child(1)').should('be.visible').click();
    cy.get('.css-15rwwo > .chakra-button').should('be.visible').click();
  });
});
