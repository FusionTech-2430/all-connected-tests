import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que el usuario está viendo el modal con el token generado', () => {
  // Suponiendo que el usuario ya inició sesión y el modal está visible
  // cy.login(); // Iniciar sesión si es necesario
  cy.visit('/mi-emprendimiento'); // Navegar a la pantalla de "Mi Emprendimiento"
  cy.get('.boton-añadir-aliado').click(); // Hacer clic en el botón para abrir el modal "Añadir Aliado"
  cy.get('.modal-token').should('be.visible'); // Verificar que el modal está visible
  cy.get('.token-generado').should('contain.text', 'TOKEN1234'); // Verificar que el token está visible
});

When('hace clic en el botón Cerrar', () => {
  cy.get('.boton-cerrar').click(); // Hacer clic en el botón "Cerrar"
});

Then(
  'el modal se cierra y el usuario regresa a la pantalla Mi Emprendimiento',
  () => {
    cy.get('.modal-token').should('not.exist'); // Verificar que el modal ya no esté visible
    cy.url().should('include', '/mi-emprendimiento'); // Verificar que el usuario ha regresado a la pantalla "Mi Emprendimiento"
  }
);
