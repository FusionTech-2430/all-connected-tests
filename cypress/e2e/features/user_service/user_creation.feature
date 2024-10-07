# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario crea cuenta con datos válidos
    Dado que el usuario está en la Landing Page
    Cuando el usuario hace clic en Crear Cuenta desde la Landing Page
    Entonces se redirige a la Sign Up Screen
    Cuando el usuario ingresa los datos:
      | campo                | valor                      |
      | Nombre               | <Nombre>                   |
      | Usuario              | <Usuario>                  |
      | Correo electrónico   | <Correo electrónico>       |
      | Contraseña           | <Contraseña>               |
      | Confirmar contraseña | <Confirmar contraseña>     |
    Y el usuario hace clic en Crear Cuenta
    Entonces el usuario es redirigido a Onboarding 1

  Ejemplos:
    | Nombre       | Correo electrónico            | Usuario            | Contraseña            | Confirmar contraseña    |
    | Juan Pérez   | juan.perez@example.com        | JuanP              | ContraseñaSegura123   | ContraseñaSegura123     |