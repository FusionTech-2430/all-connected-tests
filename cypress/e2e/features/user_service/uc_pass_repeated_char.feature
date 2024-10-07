# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario intenta crear cuenta con contraseña con caracteres repetidos
    Dado que el usuario está en la Sign Up Screen para contraseña con caracteres repetidos
    Cuando el usuario ingresa "aaaaaa@123" como contraseña con caracteres repetidos
    Y completa los demás campos requeridos con caracteres repetidos
      | campo                | valor                      |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y hace clic en Crear Cuenta para contraseña con caracteres repetidos
    Entonces el sistema muestra un mensaje de error indicando que la contraseña no puede contener caracteres repetidos excesivamente

  Ejemplos:
    | Nombre       | Usuario         | Correo electrónico            | Confirmar contraseña    |
    | Ana Torres   | AnaT            | ana.torres@example.com       | aaaaaa@123             |
