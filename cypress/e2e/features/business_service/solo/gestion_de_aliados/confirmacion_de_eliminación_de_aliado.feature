# language: es
Característica: Gestión de aliados

  # ME-2-EP-03 - Confirmar eliminación de aliado	
  # Verificar que al confirmar la eliminación, se muestre un mensaje de éxito y se actualice
  # la lista de aliados sin el aliado eliminado.

  # ME-2-EP-03-CP-01	Confirmación de eliminación de aliado
  Escenario: Confirmación de eliminación de aliado
    Dado que el usuario está en la pantalla "Mi Emprendimiento" con aliados visibles
    Cuando el usuario hace clic en el botón de acción de un aliado
    Y el usuario selecciona la opción "Eliminar"
    Entonces se muestra un modal de confirmación con las opciones "Cerrar" y "Confirmar"
    Cuando el usuario hace clic en el botón "Confirmar"
    Entonces se muestra un mensaje de éxito y el aliado se elimina de la lista de "Mi Emprendimiento"