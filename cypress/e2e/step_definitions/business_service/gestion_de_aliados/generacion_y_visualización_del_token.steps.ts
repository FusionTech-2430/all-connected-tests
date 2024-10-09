import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que el usuario está en el modal de Añadir Aliado', () => {
  // Asumimos que el usuario ya ha iniciado sesión y navegado a la pantalla correcta
  // cy.login(); // Suponiendo que existe un comando para iniciar sesión
  cy.visit('/mi-emprendimiento'); // Reemplaza con la ruta correcta
  cy.get('.boton-anadir-aliado').click(); // Hacer clic en el botón para añadir un aliado
  cy.get('.modal-anadir-aliado').should('be.visible'); // Verificar que el modal está visible
});

When('hace clic en Generar Token', () => {
  cy.get('.boton-generar-token').click(); // Hacer clic en el botón "Generar Token"
});

Then(
  'se genera un token y se despliega un nuevo modal que contiene el token con opciones de Copiar y Cerrar',
  () => {
    cy.get('.modal-token').should('be.visible'); // Verificar que el modal de token aparece
    cy.get('.token').should('not.be.empty'); // Verificar que el token fue generado y no está vacío
    cy.get('.boton-copiar').should('contain', 'Copiar'); // Verificar que existe la opción "Copiar"
    cy.get('.boton-cerrar').should('contain', 'Cerrar'); // Verificar que existe la opción "Cerrar"
  }
);
