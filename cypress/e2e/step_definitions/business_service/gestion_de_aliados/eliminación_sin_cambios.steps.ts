import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

Given(
  'El usuario está en la pantalla {string} con aliados visibles',
  (pantalla: string) => {
    // Iniciar sesión y navegar a la pantalla "Mi Emprendimiento"
    // cy.login(); // Suponiendo que existe un comando para iniciar sesión
    cy.visit('/mi-emprendimiento'); // Reemplaza con la ruta correcta
    cy.get('.aliado').should('be.visible'); // Verifica que hay aliados visibles
  }
);

When('El usuario hace clic en el botón de acción de un aliado', () => {
  cy.get('.boton-accion').first().click(); // Hacer clic en el primer botón de acción
});

When('El usuario selecciona la opción {string}', (opcion: string) => {
  cy.get('.opcion-eliminar').click(); // Seleccionar la opción "Eliminar"
});

Then(
  'Se muestra un modal de confirmación con las opciones {string} y {string}',
  (opcionCerrar: string, opcionConfirmar: string) => {
    cy.get('.modal-confirmacion').should('be.visible');
    cy.get('.boton-cerrar').should('contain', opcionCerrar);
    cy.get('.boton-confirmar').should('contain', opcionConfirmar);
  }
);

When('El usuario hace clic en el botón {string}', (boton: string) => {
  cy.get('.boton-cerrar').click(); // Hacer clic en el botón "Cerrar"
});

Then(
  'El modal se cierra y el usuario regresa a la pantalla de {string} sin cambios',
  (pantalla: string) => {
    cy.get('.modal-confirmacion').should('not.exist'); // Verificar que el modal ya no está visible
    cy.url().should('include', '/mi-emprendimiento'); // Verificar que sigue en la pantalla de "Mi Emprendimiento"
  }
);
