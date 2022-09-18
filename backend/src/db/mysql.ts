import { DataSource } from 'typeorm';
import { ERRORS_DB } from '../types.dt';
import { Nurses } from '../models/mysql/Nurses';
import { Pacients } from '../models/mysql/Pacients';
import { Vaccinations } from '../models/mysql/Vaccinations';
import { Vaccines } from '../models/mysql/Vaccines';
import { recorridoGenerate } from '../generator/faker';

export const connMySQL = async () => {
   const conn = new DataSource({
      type: 'mysql',
      host: process.env.HOST_DB,
      port: Number(process.env.PORT_DB),
      username: process.env.USER_DB,
      password: process.env.PASS_DB,
      database: process.env.NAME_DB,
      logging: false,   // Views logs in the console - TRUE
      synchronize: Boolean(process.env.SYNC_DB),
      ssl: false,
      entities: [Pacients, Nurses, Vaccines, Vaccinations],
      subscribers: [],
      migrations: []
   });

   conn.initialize()
      .then(() => {
         console.log(`MySQLDB is connect to ${process.env.HOST_DB} - ${process.env.NAME_DB}...`);

         recorridoGenerate();
      })
      .catch((err) => {
         const errorDB = ERRORS_DB[err.code];

         if (errorDB) {
            console.error(`Error DB ==> ${errorDB}`);
         } else {
            console.error(err);
         }
      });
};
