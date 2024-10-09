# language: es
Característica: Gestión de aliados

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