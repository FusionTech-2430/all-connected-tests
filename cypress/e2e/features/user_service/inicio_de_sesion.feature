# language: es

Característica: Inicio de sesión

  # T-105-EP-01	-	Inicio de sesión con credenciales válidas	
  # Verificar que un usuario puede iniciar sesión en el sistema con credenciales
  # correctas y acceder a sus funcionalidades.

  # T-105-EP-01-CP-01 - Inicio de sesión exitoso con credenciales válidas
  Esquema del escenario: Inicio de sesión exitoso con credenciales válidas
    Dado el usuario está en la página principal
    Cuando el usuario hace clic en Iniciar Sesión
    Y ingresa un correo electrónico válido y una contraseña válida
      | campo                | valor                     |
      | Correo electrónico    | <Correo electrónico>      |
      | Contraseña            | <Contraseña>              |
    Y hace clic en el botón Iniciar sesión
    Entonces el usuario debe ser redirigido a My Business
    Y debe ver su emprendimiento en la página

  Ejemplos:
    | Correo electrónico      | Contraseña             |
    | usuario1@ejemplo.com    | Contraseña1            |
    | usuario2@ejemplo.com    | Contraseña2            |
    | usuario3@ejemplo.com    | Contraseña3            |
  
  # T-105-EP-01-CP-02 - Manejo de sesiones de usuario
  Escenario: Usuario permanece conectado
    Dado que el usuario ha iniciado sesión correctamente
    Cuando el usuario navega por diferentes secciones
    Entonces el usuario debe seguir viendo su nombre en la parte superior derecha
    Y debe poder acceder a My Business sin necesidad de volver a iniciar sesión
  
  # T-105-EP-02 - Inicio de sesión con credenciales incorrectas
  # Verificar que el sistema rechaza intentos de inicio de sesión con credenciales incorrectas
  # y muestra un mensaje de error adecuado.

  # T-105-EP-02-CP-01 - Inicio de sesión con credenciales incorrectas
  Escenario: Intento de inicio de sesión con credenciales incorrectas
    Dado que estoy en la pantalla Sign In
    Cuando ingreso un correo electrónico y una contraseña incorrectos
      | campo                | valor                     |
      | Correo electrónico   | <Correo electrónico>      |
      | Contraseña           | <Contraseña>              |
    Y hago clic en el botón de iniciar sesión
    Entonces debería ver un mensaje de error indicando que las credenciales son incorrectas

  Ejemplos:
    | Correo electrónico              | Contraseña             |
    | usuario.incorrecto@example.com  | ContraseñaErronea123   |
    | otro.usuario@example.com        | 123ContraseñaIncorrecta|
    | malusuario@example.com          | contraseñaEquivocada   |