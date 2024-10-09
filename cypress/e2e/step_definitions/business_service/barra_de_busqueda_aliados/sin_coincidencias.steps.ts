import {
  Given,
  When,
  Then,
  DataTable,
} from '@badeball/cypress-cucumber-preprocessor';

// Dado que el usuario está autenticado y visualizando la pantalla "Mi emprendimiento"
Given(
  'que el usuario está autenticado y visualizando la pantalla "Mi emprendimiento"',
  () => {
    // Iniciar sesión en la aplicación y navegar a la pantalla "Mi emprendimiento"
    cy.visit('/sign-in'); // Visitar la pantalla de inicio de sesión
    cy.get('input[type="email"]').type('usuario.correcto@example.com'); // Ingresar correo válido
    cy.get('input[type="password"]').type('ContraseñaCorrecta123'); // Ingresar contraseña válida
    cy.get('button[type="submit"]').click(); // Hacer clic en iniciar sesión
    cy.visit('/mi-emprendimiento'); // Navegar a la pantalla de "Mi emprendimiento"
  }
);

// Cuando ingresa un texto que no coincide con ningún aliado en la barra de búsqueda
When(
  'ingresa un texto que no coincide con ningún aliado en la barra de búsqueda',
  function (dataTable: DataTable) {
    const data = dataTable.rowsHash(); // Extraer datos de la tabla
    cy.get('input[type="search"]').type(data['texto']); // Ingresar el texto en la barra de búsqueda
  }
);

// Entonces se debe mostrar un mensaje indicando que no se encontraron resultados
Then(
  'se debe mostrar un mensaje indicando que no se encontraron resultados',
  () => {
    cy.get('.mensaje-no-resultados') // Selector para el mensaje de no resultados
      .should('exist') // Verifica que el mensaje exista
      .and('contain.text', 'No se encontraron resultados'); // Asegura que el mensaje contenga el texto esperado
  }
);
