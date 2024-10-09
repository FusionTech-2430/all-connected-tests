# language: es
Característica: Gestión de aliados
  
  # ME-4-EP-03 - Cerrar modal de agregar aliado	
  # Verificar que al cerrar el modal después de generar el token,
  # se regrese a la pantalla de "Mi emprendimiento".

  # ME-4-EP-03-CP-01 - Verificar la funcionalidad del botón "Cerrar"
  # language: es
Característica: Cerrar modal de token generado

  Escenario: Verificar la funcionalidad del botón Cerrar
    Dado que el usuario está viendo el modal con el token generado
    Cuando hace clic en el botón Cerrar
    Entonces el modal se cierra y el usuario regresa a la pantalla Mi Emprendimiento
