import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(
  'que el usuario está en la pantalla "Mi Emprendimiento" con aliados visibles',
  () => {
    // Iniciar sesión y navegar a la pantalla "Mi Emprendimiento"
    // cy.login(); // Asegúrate de que tengas un comando para iniciar sesión
    cy.visit('/mi-emprendimiento'); // Ajusta la URL según tu aplicación
    cy.get('.aliado').should('be.visible'); // Verifica que hay aliados visibles
  }
);

When('el usuario hace clic en el botón de acción de un aliado', () => {
  cy.get('.boton-accion-aliado').first().click(); // Ajusta el selector para el botón de acción
});

When('el usuario selecciona la opción "Eliminar"', () => {
  cy.contains('Eliminar').click(); // Cambia el texto si es necesario
});

Then(
  'se muestra un modal de confirmación con las opciones "Cerrar" y "Confirmar"',
  () => {
    cy.get('.modal-confirmacion').should('be.visible'); // Asegúrate de que el modal esté visible
    cy.contains('Cerrar').should('be.visible');
    cy.contains('Confirmar').should('be.visible');
  }
);

When('el usuario hace clic en el botón "Confirmar"', () => {
  cy.contains('Confirmar').click();
});

Then(
  'se muestra un mensaje de éxito y el aliado se elimina de la lista de "Mi Emprendimiento"',
  () => {
    cy.contains('El aliado ha sido eliminado con éxito').should('be.visible'); // Mensaje de éxito
    cy.get('.aliado').should('not.exist'); // Asegúrate de que el aliado ya no esté en la lista
  }
);
