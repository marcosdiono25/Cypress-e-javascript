Cypress.on('log:added', (options) => {
  if (options && options.name) {
    if (options.name === 'command') {
      return false;
    }
  }
});

Cypress.Commands.add("getRandomUser", () => {
  return cy.fixture('usuarios.json').then((users) => {
    return users[Math.floor(Math.random() * users.length)];
  });
});
