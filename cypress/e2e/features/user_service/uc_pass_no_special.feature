# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario intenta crear cuenta con contraseña sin caracteres especiales
    Dado que el usuario está en la Sign Up Screen para contraseña sin caracteres especiales
    Cuando el usuario ingresa "Password1234" como contraseña sin caracteres especiales
    Y completa los demás campos requeridos sin caracteres especiales
      | campo                | valor                      |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y hace clic en Crear Cuenta para contraseña sin caracteres especiales
    Entonces el sistema muestra un mensaje de error indicando que la contraseña debe incluir caracteres especiales

  Ejemplos:
    | Nombre       | Usuario            | Correo electrónico            | Confirmar contraseña    |
    | Maria Gómez  | MariaG             | maria6.gomez@example.com       | Password1234            |
