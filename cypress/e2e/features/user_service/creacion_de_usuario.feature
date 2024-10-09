# language: es

Característica: Creación de usuario

  # T-101-EP-01 - Creación de usuario con datos válidos
  #	Verificar que un usuario puede crear una cuenta en el sistema utilizando todos los datos correctos y siguiendo
  # el flujo normal del registro.

  # T-101-EP-01-CP-01 - Verificación de creación de cuenta con datos válidos
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
    | Juan Pérez   | juanasfaperez@example.com     | JuanP              | ContraseñaSegura123   | ContraseñaSegura123     |

  # T-101-EP-01-CP-02 - Verificación de error al ingresar contraseñas que no coinciden
  Esquema del escenario: Usuario intenta crear cuenta con contraseñas que no coinciden
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
    | Juan Pérez   | juanasfaperez@example.com     | JuanP              | ContraseñaSegura123   | ContraseñaIncorrecta123 |

  # T-101-EP-01-CP-03 - Verificación de correo electrónico inválido
  Esquema del escenario: Usuario intenta crear cuenta con correo electrónico inválido
    Dado que el usuario está en la Landing Page para correo inválido
    Cuando el usuario hace clic en Crear Cuenta desde la Landing Page para correo inválido
    Entonces se redirige a la Sign Up Screen para correo inválido
    Cuando El usuario ha ingresado todos los datos, incluido un correo inválido
      | campo                | valor                     |
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

  # T-101-EP-01-CP-04 - Verificación de campo de nombre vacío
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
  
  # T-101-EP-01-CP-05 - Verificación de correo electrónico ya registrado
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

  # T-101-EP-02	- Creación de usuario con datos inválidos	
  # Verificar que no se pueda crear una cuenta si se ingresan datos incorrectos o faltantes 
  # (ej. contraseñas que no coinciden, campos vacíos).

  # T-101-EP-02-CP-01 - Verificación de creación de cuenta con datos válidos
  Esquema del escenario: Usuario intenta crear cuenta dejando todos los campos vacíos
    Dado que el usuario está en la Landing Page para campos vacíos
    Cuando el usuario hace clic en Crear Cuenta desde la Landing Page para campos vacíos
    Entonces se redirige a la Sign Up Screen para campos vacíos
    Cuando el usuario deja todos los campos vacíos
    Y el usuario hace clic en Crear Cuenta para campos vacíos
    Entonces se muestra un mensaje de error indicando que todos los campos son obligatorios

  Ejemplos:
    | Nombre       | Correo electrónico             | Usuario            | Contraseña            | Confirmar contraseña    |
    |              |                                |                    |                       |                         |
  
  # T-101-EP-03 - Creación de usuario con contraseña insegura	
  # Verificar que el sistema rechaza la creación de una cuenta si la contraseña no cumple
  # con las políticas de seguridad establecidas (ej. longitud mínima, uso de caracteres especiales).

  # T-101-EP-03-CP-01 - Validar rechazo de contraseña corta
  Esquema del escenario: Usuario intenta crear cuenta con una contraseña corta
    Dado que el usuario está en la Sign Up Screen para contraseña corta
    Cuando el usuario ingresa "12345" como contraseña
    Y completa los demás campos requeridos
      | campo                | valor                     |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y hace clic en Crear Cuenta para contraseña corta
    Entonces el sistema muestra un mensaje de error indicando que la contraseña es demasiado corta

  Ejemplos:
    | Nombre       | Usuario            | Correo electrónico            | Confirmar contraseña    |
    | Juan Pérez   | JuanP              | juan.perez@example.com        | ContraseñaSegura123     |

  # T-101-EP-03-CP-02 - Validar rechazo de contraseña sin caracteres especiales
  Esquema del escenario: Usuario intenta crear cuenta con contraseña sin caracteres especiales
    Dado que el usuario está en la Sign Up Screen para contraseña sin caracteres especiales
    Cuando el usuario ingresa "Password1234" como contraseña sin caracteres especiales
    Y completa los demás campos requeridos sin caracteres especiales
      | campo                | valor                     |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y hace clic en Crear Cuenta para contraseña sin caracteres especiales
    Entonces el sistema muestra un mensaje de error indicando que la contraseña debe incluir caracteres especiales

  Ejemplos:
    | Nombre       | Usuario            | Correo electrónico            | Confirmar contraseña     |
    | Maria Gómez  | MariaG             | maria6.gomez@example.com       | Password1234            |

  # T-101-EP-03-CP-03 - Validar rechazo de contraseña sin mayúsculas
  Esquema del escenario: Usuario intenta crear cuenta con contraseña sin letras mayúsculas
    Dado que el usuario está en la Sign Up Screen para contraseña sin letras mayúsculas
    Cuando el usuario ingresa "password@123" como contraseña sin letras mayúsculas
    Y completa los demás campos requeridos sin letras mayúsculas
      | campo                | valor                     |
      | Nombre               | <Nombre>                  |
      | Usuario              | <Usuario>                 |
      | Correo electrónico   | <Correo electrónico>      |
      | Confirmar contraseña | <Confirmar contraseña>    |
    Y hace clic en Crear Cuenta para contraseña sin letras mayúsculas
    Entonces el sistema muestra un mensaje de error indicando que la contraseña debe incluir letras mayúsculas

  Ejemplos:
    | Nombre        | Usuario            | Correo electrónico            | Confirmar contraseña    |
    | Carlos López  | CarlosL            | carlos.lopez@example.com      | password@123            |