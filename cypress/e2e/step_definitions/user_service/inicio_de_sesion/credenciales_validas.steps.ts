import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Dado que el usuario está en la página principal
Given('el usuario está en la página principal', () => {
  cy.visit('/'); // Visita la página principal
});

// Cuando el usuario hace clic en Iniciar Sesión
When('el usuario hace clic en Iniciar Sesión', () => {
  cy.get('a').contains('Iniciar Sesión').click(); // Clic en el enlace de iniciar sesión
});

// Y ingresa un correo electrónico válido y una contraseña válida
When(
  'ingresa un correo electrónico válido y una contraseña válida',
  function (dataTable: any) {
    const data = dataTable.rowsHash(); // Obtiene un objeto con los datos de la tabla

    // Llenar los campos del formulario con los datos de la tabla
    cy.get('input[type="email"]').type(data['Correo electrónico']); // Ingresar correo electrónico
    cy.get('input[type="password"]').type(data['Contraseña']); // Ingresar contraseña
  }
);

// Y hace clic en el botón Iniciar sesión
When('hace clic en el botón Iniciar sesión', () => {
  cy.get('button[type="submit"]').contains('Iniciar Sesión').click(); // Clic en el botón de iniciar sesión
});

// Entonces el usuario debe ser redirigido a My Business
Then('el usuario debe ser redirigido a My Business', () => {
  cy.url().should('include', '/my-business'); // Verifica que la URL incluya '/my-business'
});

// Y debe ver su emprendimiento en la página
Then('debe ver su emprendimiento en la página', () => {
  cy.get('.emprendimiento-info').should('be.visible'); // Verifica que la información del emprendimiento sea visible
});
