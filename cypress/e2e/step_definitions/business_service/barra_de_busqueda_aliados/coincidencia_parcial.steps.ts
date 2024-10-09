import {
  Given,
  When,
  Then,
  DataTable,
} from '@badeball/cypress-cucumber-preprocessor';

// Dado que el usuario está en la pantalla de Mi emprendimiento
Given('que el usuario está en la pantalla de Mi emprendimiento', () => {
  // Iniciar sesión en la aplicación y navegar a la pantalla Mi emprendimiento
  cy.visit('/sign-in'); // Visita la pantalla de inicio de sesión
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

// Entonces se deben mostrar los aliados que contienen en su nombre
Then(
  'se deben mostrar los aliados que contienen en su nombre',
  function (dataTable: DataTable) {
    const expectedNames: string[] = [];

    // Obtener los nombres esperados desde la tabla usando el método rows()
    dataTable.rows().forEach((row) => {
      expectedNames.push(row[0]); // Suponiendo que el nombre está en la primera columna
    });

    expectedNames.forEach((name) => {
      cy.get('.aliado-list') // Selecciona el contenedor de la lista de aliados
        .find('.aliado') // Suponiendo que cada aliado tiene la clase 'aliado'
        .should('contain.text', name); // Verifica que cada nombre esperado esté presente
    });

    cy.get('.aliado-list') // Verificar que la lista no contenga aliados no esperados
      .find('.aliado')
      .should('have.length', expectedNames.length); // Verifica que la longitud de la lista sea igual a la cantidad de nombres esperados
  }
);
