# language: es

Característica: Creación de usuario

  Esquema del escenario: Usuario intenta crear cuenta dejando todos los campos vacíos
    Dado que el usuario está en la Landing Page para campos vacíos
    Cuando el usuario hace clic en Crear Cuenta desde la Landing Page para campos vacíos
    Entonces se redirige a la Sign Up Screen para campos vacíos
    Cuando el usuario deja todos los campos vacíos
    Y el usuario hace clic en Crear Cuenta para campos vacíos
    Entonces se muestra un mensaje de error indicando que todos los campos son obligatorios

  Ejemplos:
    | Nombre       | Correo electrónico             | Usuario            | Contraseña            | Confirmar contraseña    |
    |              |                                |                   |                       |                         |
