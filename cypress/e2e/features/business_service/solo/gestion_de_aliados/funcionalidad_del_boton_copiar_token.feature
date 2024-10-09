# language: es
Característica: Gestión de aliados

  # ME-4-EP-02 - Visualizar token generado	
  # Verificar que al generar el token, aparezca un modal con el token y las opciones de copiar y cerrar.
  
  # ME-4-EP-02-CP-02 - Verificar la funcionalidad del botón Copiar
  Escenario: Verificar la funcionalidad del botón Copiar
    Dado que el usuario está viendo el modal con el token generado
    Cuando hace clic en el botón Copiar
    Entonces el token se copia al portapapeles del dispositivo