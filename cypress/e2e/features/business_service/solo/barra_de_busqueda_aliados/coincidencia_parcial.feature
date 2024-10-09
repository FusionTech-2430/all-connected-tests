# language: es
Característica: Barra de búsqueda de aliados
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
