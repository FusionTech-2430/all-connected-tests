# language: es
Característica: Gestión de aliados

  # ME-4-EP-02 - Visualizar token generado	
  # Verificar que al generar el token, aparezca un modal con el token y las opciones de copiar y cerrar.

  # ME-4-EP-02-CP-01 - Verificar la generación y visualización del token
  Escenario: Verificar la generación y visualización del token
    Dado que el usuario está en el modal de Añadir Aliado
    Cuando hace clic en Generar Token
    Entonces se genera un token y se despliega un nuevo modal que contiene el token con opciones de Copiar y Cerrar