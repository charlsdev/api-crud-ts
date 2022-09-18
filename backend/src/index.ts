import './dev';
import 'dotenv/config';

import { connMySQL } from './db/mysql';
connMySQL();

import { connMongo } from './db/mongodb';
connMongo();

import app from './server';

app.listen(app.get('port'), () => {
   console.log(
      `[${new Date().toLocaleDateString()} - ${new Date().toLocaleTimeString()}] - Servidor en el puerto ${app.get('port')}`
   );
});
