import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Paso para visitar la Landing Page
Given('que el usuario está en la Landing Page para campos vacíos', function () {
  cy.visit('/');
});

// Simular el clic en "Crear Cuenta"
When('el usuario hace clic en Crear Cuenta desde la Landing Page para campos vacíos', function () {
  cy.get('a[href="sign-up"]').click({ force: true });
});

// Verificar redirección a la Sign Up Screen
Then('se redirige a la Sign Up Screen para campos vacíos', function () {
  cy.url().should('include', 'sign-up');
});

// Dejar todos los campos vacíos
When('el usuario deja todos los campos vacíos', function () {
  // No se ingresa nada en los campos, por lo que no se requiere código aquí
});

// Simular el clic en el botón "Crear Cuenta"
When('el usuario hace clic en Crear Cuenta para campos vacíos', function () {
  cy.get('button[type="submit"]').click();
});

// Verificar que se presenta un mensaje de error indicando que todos los campos son obligatorios
Then('se muestra un mensaje de error indicando que todos los campos son obligatorios', function () {
  cy.get('div.form-section p.text-red-500').should('contain', 'Por favor completa todos los campos.');
});
