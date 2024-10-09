import {
  Given,
  When,
  Then,
  DataTable,
} from '@badeball/cypress-cucumber-preprocessor';

// Dado que el usuario está en la pantalla "Mi emprendimiento"
Given('que el usuario está en la pantalla Mi emprendimiento', () => {
  // Iniciar sesión en la aplicación
  cy.visit('/sign-in'); // Visita la pantalla de inicio de sesión
  cy.get('input[type="email"]').type('usuario.correcto@example.com'); // Ingresa un correo válido
  cy.get('input[type="password"]').type('ContraseñaCorrecta123'); // Ingresa la contraseña válida
  cy.get('button[type="submit"]').click(); // Haz clic en el botón de iniciar sesión

  // Navegar a la pantalla "Mi emprendimiento"
  cy.visit('/mi-emprendimiento'); // Visita la pantalla de Mi emprendimiento
});

// Cuando ingresa el nombre del aliado en la barra de búsqueda
When(
  'ingresa el nombre del aliado en la barra de búsqueda',
  function (dataTable: DataTable) {
    const data = dataTable.rowsHash(); // Obtiene un objeto con los datos de la tabla

    // Localizar la barra de búsqueda y escribir el nombre del aliado
    cy.get('input[type="search"]').type(data['Aliado']); // Ingresar el nombre exacto del aliado
  }
);

// Entonces solo se debe mostrar el aliado correspondiente a {NombreExacto}
Then(
  'solo se debe mostrar el aliado correspondiente a Aliado',
  (nombreExacto) => {
    cy.get('.aliado-list') // Selecciona el contenedor de la lista de aliados
      .find('.aliado') // Suponiendo que cada aliado tiene la clase 'aliado'
      .should('have.length', 1) // Debe haber solo un aliado mostrado
      .and('contain', nombreExacto); // Verifica que el nombre coincida con el aliado buscado
  }
);
