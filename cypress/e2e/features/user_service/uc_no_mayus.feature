# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario intenta crear cuenta con contraseña sin letras mayúsculas
    Dado que el usuario está en la Sign Up Screen para contraseña sin letras mayúsculas
    Cuando el usuario ingresa "password@123" como contraseña sin letras mayúsculas
    Y completa los demás campos requeridos sin letras mayúsculas
      | campo                | valor                      |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y hace clic en Crear Cuenta para contraseña sin letras mayúsculas
    Entonces el sistema muestra un mensaje de error indicando que la contraseña debe incluir letras mayúsculas

  Ejemplos:
    | Nombre        | Usuario            | Correo electrónico            | Confirmar contraseña    |
    | Carlos López  | CarlosL            | carlos.lopez@example.com      | password@123           |
