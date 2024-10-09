# language: es
Característica: Gestión de aliados

  # ME-3-EP-02 - Cerrar modal de visualización	
  # Verificar que al hacer clic en el botón de cerrar, se cierre el modal
  # y se regrese a la pantalla de "Mi emprendimiento".
  
  # ME-3-EP-02-CP-01	Cierre de modal de visualización de aliado en pantalla "Mi emprendimiento"
  Escenario: Cerrar modal de visualización de un aliado en la pantalla Mi emprendimiento
    Dado que el usuario está autenticado en el sistema
    Y el usuario está en la pantalla Mi emprendimiento
    Y ha seleccionado la opción Visualizar desde el botón acción ... de un aliado
    Cuando el usuario hace clic en el botón de cerrar en el modal de visualización de aliado
    Entonces el modal de visualización debe cerrarse
    Y el usuario debe ser redirigido nuevamente a la pantalla Mi emprendimiento sin cambios en la lista de aliados
