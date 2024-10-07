# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario intenta crear cuenta con correo electrónico ya registrado
    Dado que el usuario está en la Landing Page para correo ya registrado
    Cuando el usuario hace clic en Crear Cuenta desde la Landing Page para correo ya registrado
    Entonces se redirige a la Sign Up Screen para correo ya registrado
    Cuando el usuario ingresa los datos, incluido un correo electrónico que ya está registrado
      | campo                | valor                      |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Contraseña           | <Contraseña>              |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y el usuario hace clic en Crear Cuenta para correo ya registrado
    Entonces se muestra un mensaje de error indicando que el correo electrónico ya está registrado

  Ejemplos:
    | Nombre       | Correo electrónico            | Usuario            | Contraseña            | Confirmar contraseña    |
    | Juan Pérez   | juan.perez@example.com        | JuanP              | ContraseñaSegura123   | ContraseñaSegura123     |
