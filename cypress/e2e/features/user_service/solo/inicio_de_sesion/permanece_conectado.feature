# language: es

Característica: Inicio de sesión

  # T-105-EP-01	-	Inicio de sesión con credenciales válidas	
  # Verificar que un usuario puede iniciar sesión en el sistema con credenciales
  # correctas y acceder a sus funcionalidades.

  # T-105-EP-01-CP-02 - Manejo de sesiones de usuario
  Escenario: Usuario permanece conectado
    Dado que el usuario ha iniciado sesión correctamente
    Cuando el usuario navega por diferentes secciones
    Entonces el usuario debe seguir viendo su nombre en la parte superior derecha
    Y debe poder acceder a My Business sin necesidad de volver a iniciar sesión