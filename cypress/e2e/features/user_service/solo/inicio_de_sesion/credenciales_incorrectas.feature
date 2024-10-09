# language: es

Característica: Inicio de sesión

  # T-102-EP-02 Modificación de información personal con datos inválidos	Verificar que
  # el sistema rechaza los intentos de modificación si los datos ingresados son inválidos
  # o no cumplen con los requisitos.

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