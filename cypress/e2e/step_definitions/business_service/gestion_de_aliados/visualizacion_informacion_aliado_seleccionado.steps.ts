import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que estoy en la pantalla de "Mi emprendimiento"', () => {
  // Suponiendo que ya has iniciado sesión
  cy.visit('/mi-emprendimiento'); // Ajustar la URL según tu aplicación
});

Given('he hecho clic en el botón de acción ... de un aliado', () => {
  // Aquí se debe seleccionar un aliado y hacer clic en el botón de acción
  cy.get('.boton-accion-aliado') // Cambiar el selector según tu aplicación
    .first()
    .click(); // Hacemos clic en el primer aliado por simplicidad
});

When('hago clic en la opción "Visualizar"', () => {
  cy.contains('Visualizar').click(); // Ajustar según el texto exacto del botón
});

Then('se debe mostrar un modal con la información del aliado seleccionado', () => {
  cy.get('.modal-informacion') // Cambiar el selector según tu aplicación
    .should('be.visible');
});

Then('el modal debe tener un botón de cerrar', () => {
  cy.get('.boton-cerrar') // Cambiar el selector según tu aplicación
    .should('be.visible');
});

When('hago clic en el botón de cerrar', () => {
  cy.get('.boton-cerrar').click(); // Cambiar el selector según tu aplicación
});

Then('el modal debe cerrarse', () => {
  cy.get('.modal-informacion').should('not.exist'); // Verifica que el modal ya no esté presente
});

Then('debo volver a la pantalla de "Mi emprendimiento"', () => {
  cy.url().should('include', '/mi-emprendimiento'); // Verifica que estás de vuelta en la URL correcta
});
