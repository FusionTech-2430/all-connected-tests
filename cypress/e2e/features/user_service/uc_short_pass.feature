# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario intenta crear cuenta con una contraseña corta
    Dado que el usuario está en la Sign Up Screen para contraseña corta
    Cuando el usuario ingresa "12345" como contraseña
    Y completa los demás campos requeridos
      | campo                | valor                      |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y hace clic en Crear Cuenta para contraseña corta
    Entonces el sistema muestra un mensaje de error indicando que la contraseña es demasiado corta

  Ejemplos:
    | Nombre       | Usuario            | Correo electrónico            | Confirmar contraseña    |
    | Juan Pérez   | JuanP              | juan.perez@example.com        | ContraseñaSegura123     |
