import { faker } from '@faker-js/faker';
import chalk from 'chalk';
import moment from 'moment';
import { Nurses } from '../models/mysql/Nurses';
import { Pacients } from '../models/mysql/Pacients';
import { Vaccines } from '../models/mysql/Vaccines';
import { PacienteInterface, VaccineInterface } from '../types.dt';

let createRandomUser: PacienteInterface,
   createRandomVaccine: VaccineInterface;

function randomDate(start: Date, end: Date) {
   return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}

function generateData() {
   createRandomUser = {
      cedula: faker.random.numeric(10),
      apellidos: faker.name.fullName(),
      nombres: faker.name.firstName(),
      fechNacimiento: moment(randomDate(new Date(1950, 0, 1), new Date())).format('YYYY/MM/DD'),
      genero: faker.helpers.arrayElement(['Masculino', 'Femenino', 'NoDefinido']),
      direccion: faker.address.direction(),
      telefono: faker.phone.number('09########'),
      email: faker.internet.email(faker.name.fullName(), faker.name.firstName(), 'example.fakerjs.dev')
   };
}

function generateVaccine() {
   createRandomVaccine = {
      id: faker.datatype.uuid(),
      vacuna: faker.random.word().toUpperCase(),
      lote: faker.helpers.regexpStyleStringParse('LOT[1-999]-[1-999]'),
      fechaCaducidad: randomDate(new Date(), new Date(2025, 12, 12))
   };
}

const savePacient = async () => {
   try {
      generateData();

      const searchPacient = await Pacients.findOneBy({
         cedula: createRandomUser.cedula
      });

      if (searchPacient) {
         generateData();
      } else {
         await Pacients.insert(createRandomUser);
      }
   } catch (e) {
      console.error(e);
   }
};

const saveNurse = async () => {
   try {
      generateData();

      const searchNurse = await Nurses.findOneBy({
         cedula: createRandomUser.cedula
      });

      if (searchNurse) {
         generateData();
      } else {
         await Nurses.insert(createRandomUser);
      }
   } catch (e) {
      console.error(e);
   }
};

const saveVaccine = async () => {
   try {
      generateVaccine();

      const searchVaccine = await Vaccines.findOneBy({
         id: createRandomVaccine.id
      });

      if (searchVaccine) {
         generateVaccine();
      } else {
         await Vaccines.insert(createRandomVaccine);
      }
   } catch (e) {
      console.error(e);
   }
};

export const recorridoGenerate = async () => {
   let a = 0, b = 0, c = 0;

   const countPacients = await Pacients.count();
   const countNurses = await Nurses.count();
   const countVaccines = await Vaccines.count();

   if(countPacients < 25) {
      for (a = 0; a < 25; a++) {
         await savePacient();
      }

      console.log(chalk.redBright.bold.italic(`${a} Pacients created...`));
   }

   if(countNurses < 25) {
      for (b = 0; b < 25; b++) {
         await saveNurse();
      }

      console.log(chalk.greenBright.bold.italic(`${b} Nurses created...`));
   }

   if(countVaccines < 50) {
      for (c = 0; c < 50; c++) {
         await saveVaccine();
      }

      console.log(chalk.blueBright.bold.italic(`${c} Vaccines created...`));
   }
};