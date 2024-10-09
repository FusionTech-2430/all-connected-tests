import {
  Given,
  When,
  Then,
  DataTable,
} from '@badeball/cypress-cucumber-preprocessor';

// Dado que el usuario está en la pantalla Mi emprendimiento
Given('que el usuario está en la pantalla Mi emprendimiento', () => {
  // Iniciar sesión en la aplicación y navegar a la pantalla Mi emprendimiento
  cy.visit('/sign-in'); // Visita la pantalla de inicio de sesión
  cy.get('input[type="email"]').type('usuario.correcto@example.com'); // Ingresar correo válido
  cy.get('input[type="password"]').type('ContraseñaCorrecta123'); // Ingresar contraseña válida
  cy.get('button[type="submit"]').click(); // Hacer clic en iniciar sesión
  cy.visit('/mi-emprendimiento'); // Navegar a la pantalla de Mi emprendimiento
});

// Cuando ingresa un texto en la barra de búsqueda
When(
  'ingresa un texto en la barra de búsqueda',
  function (dataTable: DataTable) {
    const data = dataTable.rowsHash(); // Extraer datos de la tabla
    cy.get('input[type="search"]').type(data['valor']); // Ingresar el texto en la barra de búsqueda
  }
);

// Y borra el texto de la barra de búsqueda
When('borra el texto de la barra de búsqueda', () => {
  cy.get('input[type="search"]').clear(); // Limpiar el texto de la barra de búsqueda
});

// Entonces se deben mostrar todos los aliados en la lista
Then('se deben mostrar todos los aliados en la lista', () => {
  cy.get('.aliado-list') // Selecciona el contenedor de la lista de aliados
    .find('.aliado') // Suponiendo que cada aliado tiene la clase 'aliado'
    .should('have.length.greaterThan', 0); // Verifica que haya al menos un aliado mostrado
});
