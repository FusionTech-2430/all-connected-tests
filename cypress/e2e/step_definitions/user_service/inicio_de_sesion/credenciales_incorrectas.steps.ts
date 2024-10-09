import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Dado que estoy en la pantalla "Sign In"
Given('que estoy en la pantalla Sign In', () => {
  cy.visit('/sign-in'); // Visita la pantalla de inicio de sesión
});

// Cuando ingreso un correo electrónico y una contraseña incorrectos
When(
  'ingreso un correo electrónico y una contraseña incorrectos',
  function (dataTable: any) {
    const data = dataTable.rowsHash(); // Obtiene un objeto con los datos de la tabla

    // Ingresar correo electrónico y contraseña incorrectos
    cy.get('input[type="email"]').type(data['Correo electrónico']);
    cy.get('input[type="password"]').type(data['Contraseña']);
  }
);

// Y hago clic en el botón de iniciar sesión
When('hago clic en el botón de iniciar sesión', () => {
  cy.get('button').contains('Iniciar Sesión').click(); // Simula el clic en el botón de iniciar sesión
});

// Entonces debería ver un mensaje de error indicando que las credenciales son incorrectas
Then(
  'debería ver un mensaje de error indicando que las credenciales son incorrectas',
  () => {
    cy.get('.text-red-500') // Selecciona el párrafo que muestra el mensaje de error
      .should('be.visible') // Verifica que el mensaje de error es visible
      .and(
        'contain',
        'Error al iniciar sesión. Verifica tu correo y contraseña.'
      ); // Verifica que el mensaje contenga el texto esperado
  }
);
