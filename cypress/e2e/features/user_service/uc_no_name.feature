# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario intenta crear cuenta sin ingresar nombre
    Dado que el usuario está en la Landing Page para ingresar sin nombre
    Cuando el usuario hace clic en Crear Cuenta desde la Landing Page para ingresar sin nombre
    Entonces se redirige a la Sign Up Screen para ingresar sin nombre
    Cuando el usuario deja el campo de Nombre vacío y completa el resto de los datos
      | campo                | valor                      |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Contraseña           | <Contraseña>              |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y el usuario hace clic en Crear Cuenta para ingresar sin nombre
    Entonces se muestra un mensaje de error indicando que el nombre es requerido

  Ejemplos:
    | Nombre       | Correo electrónico            | Usuario            | Contraseña            | Confirmar contraseña    |
    |              | juan.perez@example.com        | JuanP              | ContraseñaSegura123   | ContraseñaSegura123     |
