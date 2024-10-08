import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Paso para visitar la Landing Page
Given('que el usuario está en la Landing Page para correo ya registrado', function () {
  cy.visit('/');
});

// Simular el clic en "Crear Cuenta"
When('el usuario hace clic en Crear Cuenta desde la Landing Page para correo ya registrado', function () {
  cy.get('a[href="sign-up"]').click({ force: true });
});

// Verificar redirección a la Sign Up Screen
Then('se redirige a la Sign Up Screen para correo ya registrado', function () {
  cy.url().should('include', 'sign-up');
});

// Ingresar los datos incluyendo un correo electrónico ya registrado
When('el usuario ingresa los datos, incluido un correo electrónico que ya está registrado', function (dataTable: any) {
  const data = dataTable.rowsHash();

  // Llenar los campos del formulario
  cy.get('input[name="fullname"]').type(data.Nombre);
  cy.get('input[name="username"]').type(data.Usuario);
  cy.get('input[name="mail"]').type(data['Correo electrónico']);
  cy.get('input[name="password"]').type(data.Contraseña);
  cy.get('input[name="confirmPassword"]').type(data['Confirmar contraseña']);

  cy.log('El usuario ha ingresado todos los datos, incluyendo un correo ya registrado');
});

// Presionar el botón para crear la cuenta
When('el usuario hace clic en Crear Cuenta para correo ya registrado', function () {
  cy.get('button[type="submit"]').click();
});

// Verificar que se presenta un mensaje de error indicando que el correo electrónico ya está registrado
Then('se muestra un mensaje de error indicando que el correo electrónico ya está registrado', function () {
  cy.get('div.form-section p.text-red-500').should('have.text', 'El correo electrónico ya está registrado');
});
