import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Paso para visitar la Landing Page
Given('que el usuario está en la Landing Page para creación inválida', function () {
  cy.visit('/');
});

// Simular el clic en "Crear Cuenta"
When('el usuario hace clic en Crear Cuenta desde la Landing Page para creación inválida', function () {
  cy.get('a[href="sign-up"]').click({ force: true });
});

// Verificar redirección a la Sign Up Screen
Then('se redirige a la Sign Up Screen para creación inválida', function () {
  cy.url().should('include', 'sign-up');
});

// Ingresar los datos del usuario usando la tabla dinámica
When('el usuario ingresa los datos inválidos:', function (dataTable: any) {
  const data = dataTable.rowsHash();

  // Llenar los campos del formulario
  cy.get('input[name="fullname"]').type(data.Nombre);
  cy.get('input[name="username"]').type(data.Usuario);
  cy.get('input[name="mail"]').type(data['Correo electrónico']);
  cy.get('input[name="password"]').type(data.Contraseña);
  cy.get('input[name="confirmPassword"]').type(data['Confirmar contraseña']);
});

// Simular el clic en el botón "Crear Cuenta"
When('el usuario hace clic en Crear Cuenta para creación inválida', function () {
  cy.get('button[type="submit"]').click();
});

// Verificar que se muestra el mensaje de error
Then('se muestra un mensaje de error indicando que las contraseñas no coinciden', function () {
  cy.get('div.form-section p.text-red-500').should('have.text', 'Las contraseñas no coinciden.');
});