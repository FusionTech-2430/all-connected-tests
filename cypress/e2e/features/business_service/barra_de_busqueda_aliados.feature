# language: es
Característica: Barra de búsqueda de aliados

  # ME-1-EP-01 - Búsqueda con coincidencia exacta	
  # Verificar que al ingresar un nombre exacto de un aliado en la barra de búsqueda,
  # se muestre solo el aliado correspondiente en la lista.

  # ME-1-EP-01-CP-01 - Búsqueda de aliado con coincidencia exacta
  Escenario: Búsqueda de aliado con coincidencia exacta
    Dado que el usuario está en la pantalla Mi emprendimiento
    Cuando ingresa el nombre del aliado en la barra de búsqueda
      | campo     | valor         |
      | Aliado    | <NombreExacto>  |
    Entonces solo se debe mostrar el aliado correspondiente a Aliado

  Ejemplos:
    | NombreExacto       |
    | Aliado Uno         |
    | Aliado Dos         |
    | Aliado Tres        |