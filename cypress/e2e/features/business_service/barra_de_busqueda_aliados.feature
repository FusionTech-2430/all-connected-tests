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

  # ME-1-EP-01-CP-02	Restaurar lista al borrar búsqueda
  Escenario: Restaurar lista al borrar búsqueda
    Dado que el usuario está en la pantalla Mi emprendimiento
    Cuando ingresa un texto en la barra de búsqueda
      | campo         | valor           |
      | TextoCualquiera | TextoCualquiera |
    Y borra el texto de la barra de búsqueda
    Entonces se deben mostrar todos los aliados en la lista

  Ejemplos:
    | Aliado         |
    | Aliado Uno     |
    | Aliado Dos     |
    | Aliado Tres    |
  
  # ME-1-EP-02 - Búsqueda con coincidencia parcial
  # Verificar que al ingresar parte del nombre o rol de un aliado, se muestren
  # los aliados que contengan ese texto.

  # ME-1-EP-02-CP-01	Búsqueda con coincidencia parcial - Caso válido
  Escenario: Búsqueda de aliados por nombre con coincidencia parcial
    Dado que el usuario está en la pantalla de Mi emprendimiento
    Cuando el usuario ingresa un texto en la barra de búsqueda
      | campo | valor |
      | Ali   | Ali   |
    Entonces se deben mostrar los aliados que contienen en su nombre
      | nombre               |
      | Alberto Fernández    |
      | Alicia Torres        |

  # ME-1-EP-02-CP-02	Búsqueda con coincidencia parcial - Caso por rol
  Escenario: Búsqueda de aliados por rol con coincidencia parcial
    Dado que el usuario está en la pantalla de Mi emprendimiento
    Cuando el usuario ingresa un texto en la barra de búsqueda
      | campo   | valor |
      | Gomez   | Gomez |
    Entonces se deben mostrar los aliados que contienen en su rol
      | rol       |
      | Asesor    |
      | Desarrolladora |
  
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

