# language: es
Característica: Gestión de aliados

  # ME-4-EP-01 - Generar y enviar token
  #	Verificar que al hacer clic en "Añadir Aliado", se muestre un modal con la opción de generar y enviar un token.

  # ME-4-EP-01-CP-01 - Verificar la visualización del modal de Añadir Aliado
  Escenario: Verificar la visualización del modal de Añadir Aliado
    Dado que el usuario está en la pantalla Mi Emprendimiento
    Cuando hace clic en el botón Añadir Aliado
    Entonces se debe desplegar un modal que contiene la opción Generar y enviar token