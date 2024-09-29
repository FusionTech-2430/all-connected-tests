import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estoy probando cucumber', () => {
  cy.log('Hola Mundo');
});

When('haga este test', () => {
  cy.log(Cypress.env('TEST_URL'));
});

Then('este test debería pasar', () => {
  // agregar código de prueba
});
