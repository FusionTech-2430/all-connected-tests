import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Paso para visitar la Landing Page
Given('que el usuario está en la Landing Page para ingresar sin nombre', function () {
  cy.visit('/');
});

// Simular el clic en "Crear Cuenta"
When('el usuario hace clic en Crear Cuenta desde la Landing Page para ingresar sin nombre', function () {
  cy.get('a[href="sign-up"]').click({ force: true });
});

// Verificar redirección a la Sign Up Screen
Then('se redirige a la Sign Up Screen para ingresar sin nombre', function () {
  cy.url().should('include', 'sign-up');
});

// Ingresar los datos dejando el campo de nombre vacío
When('el usuario deja el campo de Nombre vacío y completa el resto de los datos', function (dataTable: any) {
  const data = dataTable.rowsHash();

  // Llenar los campos del formulario, dejando el nombre vacío
  cy.get('input[name="fullname"]').clear(); // Campo vacío para el nombre
  cy.get('input[name="username"]').type(data.Usuario);
  cy.get('input[name="mail"]').type(data['Correo electrónico']);
  cy.get('input[name="password"]').type(data.Contraseña);
  cy.get('input[name="confirmPassword"]').type(data['Confirmar contraseña']);

  cy.log('El usuario ha ingresado todos los datos, dejando el nombre vacío');
});

// Presionar el botón para crear la cuenta
When('el usuario hace clic en Crear Cuenta para ingresar sin nombre', function () {
  cy.get('button[type="submit"]').click();
});

// Verificar que se presenta un mensaje de error indicando que el nombre es requerido
Then('se muestra un mensaje de error indicando que el nombre es requerido', function () {
  cy.get('div.form-section p.text-red-500').should('have.text', 'El nombre es requerido');
});
