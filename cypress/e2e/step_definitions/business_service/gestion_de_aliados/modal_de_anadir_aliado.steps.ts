import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que el usuario está en la pantalla Mi Emprendimiento', () => {
  // Suponiendo que el usuario ya ha iniciado sesión y está en la pantalla "Mi Emprendimiento"
  // cy.login(); // Comando personalizado para iniciar sesión
  cy.visit('/mi-emprendimiento'); // Reemplaza con la ruta real de "Mi Emprendimiento"
  cy.get('.aliado').should('be.visible'); // Verifica que hay contenido visible en la pantalla
});

When('hace clic en el botón Añadir Aliado', () => {
  cy.get('.boton-anadir-aliado').click(); // Suponiendo que este es el selector del botón de "Añadir Aliado"
});

Then(
  'se debe desplegar un modal que contiene la opción Generar y enviar token',
  () => {
    cy.get('.modal-anadir-aliado').should('be.visible'); // Verifica que el modal es visible
    cy.get('.boton-generar-token').should('contain', 'Generar y enviar token'); // Verifica que la opción esté presente
  }
);
