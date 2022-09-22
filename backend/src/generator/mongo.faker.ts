import { faker } from '@faker-js/faker';
import chalk from 'chalk';
import moment from 'moment';
import NursesModel from '../models/mongodb/Nurses';
import PacientsModel from '../models/mongodb/Pacients';
import VaccinationsModel from '../models/mongodb/Vaccinations';
import VaccinesModel from '../models/mongodb/Vaccines';
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
      vacuna: faker.random.word().toUpperCase(),
      lote: faker.helpers.regexpStyleStringParse('LOT[1-999]-[1-999]'),
      fechaCaducidad: randomDate(new Date(), new Date(2025, 12, 12))
   };
}

const savePacient = async () => {
   try {
      generateData();

      const searchPacient = await PacientsModel.findOne({
         cedula: createRandomUser.cedula
      });

      if (searchPacient) {
         generateData();
      } else {
         const dataPacients = new PacientsModel(createRandomUser);
         await dataPacients.save();
      }
   } catch (e) {
      console.error(e);
   }
};

const saveNurse = async () => {
   try {
      generateData();

      const searchNurse = await NursesModel.findOne({
         cedula: createRandomUser.cedula
      });

      if (searchNurse) {
         generateData();
      } else {
         const dataNurses = new NursesModel(createRandomUser);
         await dataNurses.save();
      }
   } catch (e) {
      console.error(e);
   }
};

const saveVaccine = async () => {
   try {
      generateVaccine();

      const dataVaccines = new VaccinesModel(createRandomVaccine);
      await dataVaccines.save();
   } catch (e) {
      console.error(e);
   }
};

const saveVaccination = async () => {
   try {
      const allPacients = await PacientsModel.find();
      const allNurses = await NursesModel.find();
      const allVaccines = await VaccinesModel.find();

      const newVaccination = {
         idPacient: allPacients[Math.floor(Math.random() * allPacients.length)]._id,
         idNurse: allNurses[Math.floor(Math.random() * allNurses.length)]._id,
         idVaccines: allVaccines[Math.floor(Math.random() * allVaccines.length)]._id,
         fecha: moment(randomDate(new Date(2015, 0, 1), new Date())).format('YYYY/MM/DD'),
         observaciones: faker.lorem.sentence()
      };

      const dataVaccinations = new VaccinationsModel(newVaccination);
      await dataVaccinations.save();
   } catch (e) {
      console.error(e);
   }
};

export const recorridoGenerateMongoDB = async () => {
   let a = 0, b = 0, c = 0, d = 0;

   const countPacients = await PacientsModel.find().countDocuments();
   const countNurses = await NursesModel.find().countDocuments();
   const countVaccines = await VaccinesModel.find().countDocuments();
   const countVaccinations = await VaccinationsModel.find().countDocuments();

   if(countPacients < 25) {
      for (a = 0; a < 25; a++) {
         await savePacient();
      }

      console.log(chalk.redBright.bold.italic(`${a} Pacients created - MongoDB...`));
   }

   if(countNurses < 25) {
      for (b = 0; b < 25; b++) {
         await saveNurse();
      }

      console.log(chalk.greenBright.bold.italic(`${b} Nurses created - MongoDB...`));
   }

   if(countVaccines < 50) {
      for (c = 0; c < 50; c++) {
         await saveVaccine();
      }

      console.log(chalk.blueBright.bold.italic(`${c} Vaccines created - MongoDB...`));
   }

   if(countVaccinations < 100) {
      for (d = 0; d < 100; d++) {
         await saveVaccination();
      }

      console.log(chalk.magentaBright.bold.italic(`${d} Vaccinations created - MongoDB...`));
   }
};