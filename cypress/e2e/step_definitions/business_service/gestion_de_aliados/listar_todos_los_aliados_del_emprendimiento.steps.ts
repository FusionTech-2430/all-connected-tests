import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que soy un usuario autenticado en el sistema', () => {
  // Supongamos que existe un comando personalizado de inicio de sesión
  // cy.login(); // Reemplaza con tu comando de login
});

When('ingreso a la sección Mi Emprendimiento', () => {
  // Redirigir a la sección correspondiente de la aplicación
  cy.visit('/mi-emprendimiento'); // Cambia la ruta según corresponda
});

Then('debería ver una lista con todos los aliados', () => {
  // Verificar que existe una lista de aliados
  cy.get('.lista-aliados').should('be.visible'); // Reemplazar el selector con el correcto
  cy.get('.aliado').should('have.length.greaterThan', 0); // Verificar que hay al menos un aliado
});

Then('cada aliado debe mostrar su nombre, apellido, correo y rol', () => {
  cy.get('.aliado').each(($aliado) => {
    // Verificar que cada campo del aliado esté presente
    cy.wrap($aliado).find('.nombre').should('not.be.empty');
    cy.wrap($aliado).find('.apellido').should('not.be.empty');
    cy.wrap($aliado).find('.correo').should('contain.text', '@');
    cy.wrap($aliado).find('.rol').should('not.be.empty');
  });
});

Then(
  'cada aliado debe tener un botón de acción con las opciones Visualizar y Eliminar',
  () => {
    cy.get('.aliado').each(($aliado) => {
      // Verificar que el botón de acción esté presente
      cy.wrap($aliado).find('.boton-accion').click();

      // Verificar que las opciones "Visualizar" y "Eliminar" se muestren al hacer clic
      cy.get('.opcion-visualizar').should('be.visible');
      cy.get('.opcion-eliminar').should('be.visible');
    });
  }
);
