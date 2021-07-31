## CASOS DE USO

URLBASE: https://calm-sierra-13847.herokuapp.com/haircutapi/

Clientes:

- Registrar cliente = URLBASE/register-client (POST)
- Obtener todos los Clientes = URLBASE/get-clients (GET)
- Obtener cliente por email = URLBASE/get-by-email (GET)
- Borrar cliente por email = URLBASE/delete-client (DELETE)

Empleados:

- Crear empleado = URLBASE/create-employee (POST)
- Actualizar empleado = URLBASE/update-employee (PUT)
- Obtener todos los empleados = URLBASE/get-employees (GET)
- Obtener empleado por email = URLBASE/get-employee-by-email (GET)
- Eliminar empleado por email = URLBASE/delete-employee (DELETE)

Citas:

- Agendar cita = URLBASE/schedule-appointment (POST)
- Reagendar cita = URLBASE/reschedule-appointment (PUT)
- Cancelar cita = URLBASE/cancel-appointment (DELETE)
- Mostrar citas = URLBASE/get-appointments (GET)
- Obtener cita por id = URLBASE/get-appointment-by-id (GET)

Servicio

- Crear Servicio = URLBASE/create-service (POST)
- Actualizar precio del servicio = URLBASE/update-service-value (PUT)
- Obtener todos los servicios = URLBASE/get-services (GET)
- Obtener servicio por nombre = URLBASE/get-service-by-name (GET)
- Borrar servicio por nombre = URLBASE/delete-service (DELETE)

Orden

- Crear Orden = URLBASE/place-order (POST)
- Cancelar orden = URLBASE/delete-order (DELETE)
- Listar todas las ordenes = URLBASE/get-orders (GET)
- Listar todas las ordenes por usuario = URLBASE/get-orders-by-client (GET)
