import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Dado que el usuario está en la pantalla de "Mi Emprendimiento"
Given('que el usuario está en la pantalla de "Mi Emprendimiento"', () => {
  // Iniciar sesión en la aplicación y navegar a "Mi Emprendimiento"
  cy.visit('/sign-in'); // Visitar la pantalla de inicio de sesión
  cy.get('input[type="email"]').type('usuario.correcto@example.com'); // Ingresar correo válido
  cy.get('input[type="password"]').type('ContraseñaCorrecta123'); // Ingresar contraseña válida
  cy.get('button[type="submit"]').click(); // Hacer clic en iniciar sesión
  cy.visit('/mi-emprendimiento'); // Navegar a "Mi Emprendimiento"
});

// Y ha iniciado sesión correctamente
Given('ha iniciado sesión correctamente', () => {
  // Verificar que se está en la pantalla de "Mi Emprendimiento"
  cy.url().should('include', '/mi-emprendimiento');
});

// Cuando el usuario hace clic en el botón de acción (...) junto a un aliado
When('el usuario hace clic en el botón de acción ... junto a un aliado', () => {
  cy.get('.boton-accion').first().click(); // Suponiendo que el primer aliado es el que se desea eliminar
});

// Y selecciona la opción "Eliminar"
When('selecciona la opción "Eliminar"', () => {
  cy.get('.opcion-eliminar').click(); // Hacer clic en la opción "Eliminar"
});

// Entonces aparece un modal preguntando si desea confirmar la eliminación del aliado
Then(
  'aparece un modal preguntando si desea confirmar la eliminación del aliado',
  () => {
    cy.get('.modal-confirmacion') // Selector para el modal de confirmación
      .should('exist'); // Verificar que el modal está presente
  }
);

// Y el modal tiene un botón de "Cerrar" y un botón de "Confirmar"
Then('el modal tiene un botón de "Cerrar" y un botón de "Confirmar"', () => {
  cy.get('.modal-confirmacion .boton-cerrar').should('exist'); // Verificar botón de cerrar
  cy.get('.modal-confirmacion .boton-confirmar').should('exist'); // Verificar botón de confirmar
});

// Cuando el usuario hace clic en "Confirmar"
When('el usuario hace clic en "Confirmar"', () => {
  cy.get('.modal-confirmacion .boton-confirmar').click(); // Hacer clic en el botón "Confirmar"
});

// Entonces el sistema muestra un mensaje de éxito
Then('el sistema muestra un mensaje de éxito', () => {
  cy.get('.mensaje-exito') // Selector para el mensaje de éxito
    .should('exist') // Verificar que el mensaje de éxito existe
    .and('contain.text', 'El aliado ha sido eliminado'); // Asegurar que contiene el texto esperado
});

// Y el aliado es eliminado de la lista en la pantalla de "Mi Emprendimiento"
Then(
  'el aliado es eliminado de la lista en la pantalla de "Mi Emprendimiento"',
  () => {
    cy.get('.lista-aliados').should('not.contain', 'Carlos García'); // Verificar que el aliado ya no está en la lista
  }
);

// Si se hace clic en "Cerrar", el modal se cierra sin cambios
When('el usuario hace clic en "Cerrar"', () => {
  cy.get('.modal-confirmacion .boton-cerrar').click(); // Hacer clic en el botón "Cerrar"
});

// Entonces el modal se cierra sin cambios en la lista
Then('el modal se cierra sin cambios en la lista', () => {
  cy.get('.modal-confirmacion').should('not.exist'); // Verificar que el modal ya no está visible
});
