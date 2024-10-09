# language: es

Característica: Inicio de sesión

  # T-105-EP-01	-	Inicio de sesión con credenciales válidas	
  # Verificar que un usuario puede iniciar sesión en el sistema con credenciales
  # correctas y acceder a sus funcionalidades.

  # T-105-EP-01-CP-01 - Inicio de sesión exitoso con credenciales válidas
  Escenario: Inicio de sesión exitoso con credenciales válidas
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