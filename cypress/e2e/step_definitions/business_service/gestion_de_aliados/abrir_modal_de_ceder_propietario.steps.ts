import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estoy en la pantalla Mi emprendimiento', () => {
  // Suponiendo que el usuario ya ha iniciado sesión y ha sido redirigido a la pantalla correcta
  // cy.login(); // Iniciar sesión si es necesario, usando el comando personalizado si lo tienes
  cy.visit('/mi-emprendimiento'); // Reemplaza con la ruta correcta de la pantalla
  cy.url().should('include', '/mi-emprendimiento'); // Verificar que la URL sea la correcta
});

When('hago clic en el botón Ceder título propietario', () => {
  cy.get('.boton-ceder-titulo').click(); // Seleccionar el botón usando el selector adecuado
});

Then(
  'se debe mostrar un modal con la opción de seleccionar un nuevo propietario',
  () => {
    cy.get('.modal-ceder-titulo').should('be.visible'); // Verificar que el modal se muestra
    cy.get('.seleccion-nuevo-propietario').should('exist'); // Verificar que existe la opción de seleccionar un nuevo propietario
  }
);
