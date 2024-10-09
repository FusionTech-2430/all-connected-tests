# language: es
Característica: Gestión de aliados

  # ME-3-EP-01 - Visualizar información del aliado
  # Verificar que al hacer clic en "Visualizar", aparezca un modal con la información del aliado seleccionado.

  # ME-3-EP-01-CP-01	Visualización de información del aliado
  Escenario: Mostrar modal con información del aliado seleccionado
    Dado que estoy en la pantalla de "Mi emprendimiento"
    Y he hecho clic en el botón de acción ... de un aliado
    Cuando hago clic en la opción "Visualizar"
    Entonces se debe mostrar un modal con la información del aliado seleccionado
    Y el modal debe tener un botón de cerrar
    Y cuando hago clic en el botón de cerrar
    Entonces el modal debe cerrarse
    Y debo volver a la pantalla de "Mi emprendimiento".