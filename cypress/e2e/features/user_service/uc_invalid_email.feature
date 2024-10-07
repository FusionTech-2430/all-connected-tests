# language: es

Característica: Creación de usuario con correo electrónico inválido

  Esquema del escenario: Usuario intenta crear cuenta con correo electrónico inválido
    Dado que el usuario está en la Landing Page para correo inválido
    Cuando el usuario hace clic en Crear Cuenta desde la Landing Page para correo inválido
    Entonces se redirige a la Sign Up Screen para correo inválido
    Cuando El usuario ha ingresado todos los datos, incluido un correo inválido
      | campo                | valor                      |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Contraseña           | <Contraseña>              |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y el usuario hace clic en Crear Cuenta para correo inválido
    Entonces se muestra un mensaje de error indicando que el correo electrónico es inválido

  Ejemplos:
    | Nombre       | Correo electrónico            | Usuario            | Contraseña            | Confirmar contraseña    |
    | Juan Pérez   | juan.perez@ejemplo            | JuanP              | ContraseñaSegura123   | ContraseñaSegura123     |
