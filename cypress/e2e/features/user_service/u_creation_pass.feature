# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario crea cuenta con datos inválidos
    Dado que el usuario está en la Landing Page para creación inválida
    Cuando el usuario hace clic en Crear Cuenta desde la Landing Page para creación inválida
    Entonces se redirige a la Sign Up Screen para creación inválida
    Cuando el usuario ingresa los datos inválidos:
      | campo                | valor                      |
      | Nombre               | <Nombre>                   |
      | Usuario              | <Usuario>                  |
      | Correo electrónico   | <Correo electrónico>       |
      | Contraseña           | <Contraseña>               |
      | Confirmar contraseña | <Confirmar contraseña>     |
    Y el usuario hace clic en Crear Cuenta para creación inválida
    Entonces se muestra un mensaje de error indicando que las contraseñas no coinciden

  Ejemplos:
    | Nombre       | Correo electrónico            | Usuario            | Contraseña            | Confirmar contraseña    |
    | Juan Pérez   | juanasfaperez@example.com        | JuanP              | ContraseñaSegura123   | ContraseñaIncorrecta123     |