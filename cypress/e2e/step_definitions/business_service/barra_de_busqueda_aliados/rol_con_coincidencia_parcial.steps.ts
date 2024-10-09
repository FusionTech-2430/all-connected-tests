import {
  Given,
  When,
  Then,
  DataTable,
} from '@badeball/cypress-cucumber-preprocessor';

// Dado que el usuario está en la pantalla de Mi emprendimiento
Given('que el usuario está en la pantalla de Mi emprendimiento', () => {
  // Iniciar sesión en la aplicación y navegar a la pantalla Mi emprendimiento
  cy.visit('/sign-in'); // Visitar la pantalla de inicio de sesión
  cy.get('input[type="email"]').type('usuario.correcto@example.com'); // Ingresar correo válido
  cy.get('input[type="password"]').type('ContraseñaCorrecta123'); // Ingresar contraseña válida
  cy.get('button[type="submit"]').click(); // Hacer clic en iniciar sesión
  cy.visit('/mi-emprendimiento'); // Navegar a la pantalla de Mi emprendimiento
});

// Cuando el usuario ingresa un texto en la barra de búsqueda
When(
  'el usuario ingresa un texto en la barra de búsqueda',
  function (dataTable: DataTable) {
    const data = dataTable.rowsHash(); // Extraer datos de la tabla
    cy.get('input[type="search"]').type(data['valor']); // Ingresar el texto en la barra de búsqueda
  }
);

// Entonces se deben mostrar los aliados que contienen en su rol
Then(
  'se deben mostrar los aliados que contienen en su rol',
  function (dataTable: DataTable) {
    const rolesEsperados = dataTable.rows().map((row) => row[0]); // Obtener los roles esperados usando rows()
    rolesEsperados.forEach((rol) => {
      cy.get('.aliado-list') // Selecciona el contenedor de la lista de aliados
        .contains(rol) // Verifica que la lista contenga el rol esperado
        .should('exist'); // Asegura que al menos un aliado con ese rol esté presente
    });
  }
);
