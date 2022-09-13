export const ERRORS_DB: { [index: string]: string } = {
   'PROTOCOL_CONNECTION_LOST': 'Conexión a la Base de datos cerrada',
   'ER_CON_COUNT_ERROR': 'Muchas conexiones a la Base de datos',
   'ECONNREFUSED': 'Conexión a la Base de datos rechazada',
   'ER_BAD_DB_ERROR': 'Base de datos incorrecta o desconocida',
   'ER_ACCESS_DENIED_ERROR': 'Acceso denegado al usuario de la Base de datos',
   'ENOTFOUND': 'Host de la Base de datos incorrecto o desconocido'
};

export interface PacienteInterface {
   cedula: string,
   apellidos: string,
   nombres: string,
   fechNacimiento: string,
   genero: string,
   direccion: string,
   telefono: string,
   email: string
}