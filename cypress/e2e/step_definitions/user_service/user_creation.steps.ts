import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';

// Función que simula la lógica de redirección
function isOnboardingScreen(url) {
  return url.includes('OnBoarding');
}

// Paso para visitar la Landing Page
Given('que el usuario está en la Landing Page', function () {
  cy.visit('/');
});

// Simular el clic en "Crear Cuenta"
When('el usuario hace clic en Crear Cuenta desde la Landing Page', function () {
  cy.get('a[href="sign-up"]').click({ force: true });
});

// Verificar redirección a la Sign Up Screen
Then('se redirige a la Sign Up Screen', function () {
  cy.url().should('include', 'sign-up');
});

// Ingresar los datos del usuario usando la tabla dinámica
When('el usuario ingresa los datos:', function (dataTable: any) {
  const data = dataTable.rowsHash();

  // Llenar los campos del formulario
  cy.get('input[name="fullname"]').type(data.Nombre);
  cy.get('input[name="username"]').type(data.Usuario);
  cy.get('input[name="mail"]').type(data['Correo electrónico']);
  cy.get('input[name="password"]').type(data.Contraseña);
  cy.get('input[name="confirmPassword"]').type(data['Confirmar contraseña']);

  cy.log('El usuario ha ingresado todos los datos');
});

// Simular el clic en el botón "Crear Cuenta"
When('el usuario hace clic en Crear Cuenta', function () {
  cy.get('button[type="submit"]').click();
});

// Verificar redirección al Onboarding 1
Then('el usuario es redirigido a Onboarding 1', function () {
  cy.url().then((url) => {
    const result = isOnboardingScreen(url);
    expect(result).to.be.true;
  });
});
