import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given('que el usuario está autenticado en el sistema', () => {
  // Iniciar sesión en la aplicación con credenciales válidas
  // cy.login(); // Asumiendo que hay un comando customizado para iniciar sesión
});

Given('el usuario está en la pantalla Mi emprendimiento', () => {
  // Navegar a la pantalla "Mi emprendimiento"
  cy.visit('/mi-emprendimiento'); // Ajustar la ruta según sea necesario
});

Given(
  'ha seleccionado la opción Visualizar desde el botón acción (...) de un aliado',
  () => {
    // Seleccionar un aliado y abrir el modal
    cy.get('.aliado').first().find('.accion-button').click(); // Ajustar el selector según la estructura real
    cy.contains('Visualizar').click();
  }
);

When(
  'el usuario hace clic en el botón de cerrar en el modal de visualización de aliado',
  () => {
    cy.get('.modal-visualizacion').find('.btn-cerrar').click(); // Ajustar el selector según la estructura real
  }
);

Then('el modal de visualización debe cerrarse', () => {
  cy.get('.modal-visualizacion').should('not.exist'); // Verificar que el modal no esté presente
});

Then(
  'el usuario debe ser redirigido nuevamente a la pantalla Mi emprendimiento sin cambios en la lista de aliados',
  () => {
    cy.url().should('include', '/mi-emprendimiento'); // Verificar que se está en la pantalla correcta
    cy.get('.lista-aliados').should('have.length.greaterThan', 0); // Verificar que la lista de aliados no esté vacía
  }
);
