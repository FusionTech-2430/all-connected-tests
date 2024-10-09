# language: es
Característica: Gestión de aliados
  
  # ME-2-EP-01	-	Eliminar aliado - Confirmación	
  # Verificar que al hacer clic en "Eliminar", aparezca un modal
  # pidiendo confirmación para eliminar al aliado seleccionado.

  # ME-2-EP-01-CP-01 - Modal Eliminar Aliado - Confirmación
  Escenario: Confirmación de eliminación de un aliado
    Dado que el usuario está en la pantalla de "Mi Emprendimiento"
    Y ha iniciado sesión correctamente
    Cuando el usuario hace clic en el botón de acción ... junto a un aliado
    Y selecciona la opción "Eliminar"
    Entonces aparece un modal preguntando si desea confirmar la eliminación del aliado
    Y el modal tiene un botón de "Cerrar" y un botón de "Confirmar"
    Cuando el usuario hace clic en "Confirmar"
    Entonces el sistema muestra un mensaje de éxito
    Y el aliado es eliminado de la lista en la pantalla de "Mi Emprendimiento"

  # ME-2-EP-02 - Cerrar modal de eliminación
  # Verificar que al hacer clic en el botón de cerrar, se cierre el modal y
  # se regrese a la pantalla de "Mi emprendimiento" sin cambios.

  # ME-2-EP-02-CP-01 - Cerrar modal de eliminación sin cambios
  Escenario: Cerrar modal de eliminación sin cambios
    Dado El usuario está en la pantalla "Mi Emprendimiento" con aliados visibles
    Cuando El usuario hace clic en el botón de acción de un aliado
    Y El usuario selecciona la opción "Eliminar"
    Entonces Se muestra un modal de confirmación con las opciones "Cerrar" y "Confirmar"
    Cuando El usuario hace clic en el botón "Cerrar"
    Entonces El modal se cierra y el usuario regresa a la pantalla de "Mi Emprendimiento" sin cambios