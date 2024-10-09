import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que el usuario está viendo el modal con el token generado', () => {
  // Suponiendo que ya se ha generado un token y el modal está visible
  // cy.login(); // Iniciar sesión, si es necesario
  cy.visit('/mi-emprendimiento'); // Reemplaza con la ruta correcta
  cy.get('.boton-añadir-aliado').click(); // Hacer clic para abrir el modal de "Añadir Aliado"
  cy.get('.modal-token').should('be.visible'); // Verificar que el modal con el token está visible
  cy.get('.token-generado').should('contain.text', 'TOKEN1234'); // Asegurarse de que el token esté presente
});

When('hace clic en el botón Copiar', () => {
  cy.get('.boton-copiar').click(); // Hacer clic en el botón de "Copiar"
});

Then('el token se copia al portapapeles del dispositivo', () => {
  // Verificar que el token se ha copiado correctamente al portapapeles
  cy.window().then((win) => {
    win.navigator.clipboard.readText().then((text) => {
      expect(text).to.eq('TOKEN1234'); // Reemplaza 'TOKEN1234' con el token real esperado
    });
  });
});
