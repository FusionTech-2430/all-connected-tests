// manejo_sesiones.steps.ts
import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Dado que el usuario ha iniciado sesión correctamente
Given('que el usuario ha iniciado sesión correctamente', () => {
  cy.visit('/sign-in'); // Visita la pantalla de inicio de sesión

  // Ingresa el correo electrónico y la contraseña
  cy.get('input[type="email"]').type('usuario.incorrecto@example.com'); // Reemplaza con el correo real
  cy.get('input[type="password"]').type('ContraseñaCorrecta123'); // Reemplaza con la contraseña real

  // Haz clic en el botón de iniciar sesión
  cy.get('button[type="submit"]').click(); // Haz clic en el botón de iniciar sesión

  // Verifica que el inicio de sesión fue exitoso
  cy.url().should('include', '/my-business'); // Asegúrate de que te redirige a my-business
});

When('el usuario navega por diferentes secciones', () => {
  // Simula la navegación por diferentes secciones en el `nav` usando selectores basados en el texto del span.
  cy.get('nav a').contains('Inventario').click(); // Simula clic en "Inventario"
  cy.url().should('include', '/inventory'); // Verifica que la URL cambia a /inventory

  cy.get('nav a').contains('Flujo de caja').click(); // Simula clic en "Flujo de caja"
  cy.url().should('include', '/cash-flow'); // Verifica que la URL cambia a /cash-flow

  cy.get('nav a').contains('Mi emprendimiento').click(); // Simula clic en "Mi emprendimiento"
  cy.url().should('include', '/my-business'); // Verifica que la URL cambia a /my-business
});

Then(
  'el usuario debe seguir viendo su nombre en la parte superior derecha',
  () => {
    // Verifica que el nombre del usuario esté visible en la parte superior derecha
    cy.get('.user-profile').should('contain', 'Nombre del Usuario'); // Ajusta el selector según tu aplicación
  }
);

Then(
  'debe poder acceder a My Business sin necesidad de volver a iniciar sesión',
  (seccion: string) => {
    // Verifica que el usuario puede acceder a "My Business"
    cy.contains(seccion).click();
    cy.url().should('include', '/my-business'); // Verifica que la URL sea la correcta
  }
);
