# language: es
Característica: Gestión de aliados

  # ME-5-EP-01 - Listar todos los aliados	
  # Verificar que al entrar en "Mi emprendimiento", se muestren todos los aliados con su información correspondiente.

  # ME-5-EP-01-CP-01	Listado de todos los aliados del emprendimiento.
  Escenario: Listar todos los aliados del emprendimiento
    Dado que soy un usuario autenticado en el sistema
    Cuando ingreso a la sección Mi Emprendimiento
    Entonces debería ver una lista con todos los aliados
    Y cada aliado debe mostrar su nombre, apellido, correo y rol
    Y cada aliado debe tener un botón de acción con las opciones Visualizar y Eliminar