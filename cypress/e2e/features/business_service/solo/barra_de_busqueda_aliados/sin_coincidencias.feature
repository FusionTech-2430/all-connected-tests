# language: es
Característica: Barra de búsqueda de aliados

  # ME-1-EP-03	- Búsqueda sin resultados
  #	Verificar que al ingresar un texto que no coincide con ningún aliado,
  # se muestre un mensaje indicando que no se encontraron resultados.

  # ME-1-EP-03-CP-01	Búsqueda sin resultados - Texto sin coincidencias
  Escenario: Búsqueda sin resultados - Texto sin coincidencias
    Dado que el usuario está autenticado y visualizando la pantalla "Mi emprendimiento"
    Cuando ingresa un texto que no coincide con ningún aliado en la barra de búsqueda
      | texto                |
      | AliadoInexistente    |
    Entonces se debe mostrar un mensaje indicando que no se encontraron resultados