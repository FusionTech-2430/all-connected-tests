import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Paso para visitar la Sign Up Screen
Given('que el usuario está en la Sign Up Screen para contraseña con caracteres repetidos', function () {
  cy.visit('/sign-up');
});

// Ingresar "aaaaaa@123" como contraseña
When('el usuario ingresa {string} como contraseña con caracteres repetidos', function (password: string) {
  cy.get('input[name="password"]').type(password);
});

// Completar los demás campos requeridos
When('completa los demás campos requeridos con caracteres repetidos', function (dataTable: any) {
  const data = dataTable.rowsHash();

  // Llenar los campos del formulario
  cy.get('input[name="fullname"]').type(data.Nombre);
  cy.get('input[name="username"]').type(data.Usuario);
  cy.get('input[name="mail"]').type(data['Correo electrónico']);
  cy.get('input[name="confirmPassword"]').type(data['Confirmar contraseña']);
});

// Simular el clic en el botón "Crear Cuenta"
When('hace clic en Crear Cuenta para contraseña con caracteres repetidos', function () {
  cy.get('button[type="submit"]').click();
});

// Verificar que se presenta un mensaje de error indicando que la contraseña no puede contener caracteres repetidos excesivamente
Then('el sistema muestra un mensaje de error indicando que la contraseña no puede contener caracteres repetidos excesivamente', function () {
  cy.get('div.form-section p.text-red-500').should('have.text', 'La contraseña no puede contener caracteres repetidos excesivamente');
});
