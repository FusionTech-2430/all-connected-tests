# language: es
Característica: Gestión de aliados
  
  # ME-6-EP-01 - Abrir modal de ceder propietario	
  # Verificar que al hacer clic en "Ceder título propietario", se muestre un modal con la opción de seleccionar
  # un nuevo propietario.

  # ME-6-EP-01-CP-01 - Verificar que se muestre el modal al hacer clic en "Ceder título propietario"
  Escenario: Abrir modal de ceder propietario
    Dado que estoy en la pantalla Mi emprendimiento
    Cuando hago clic en el botón Ceder título propietario
    Entonces se debe mostrar un modal con la opción de seleccionar un nuevo propietario

