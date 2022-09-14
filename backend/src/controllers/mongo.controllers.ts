import { Request, Response } from 'express';
import { PacienteInterface } from '../types.dt';
import PacientsModel from '../models/mongodb/Pacients';

export const allPacients = async (req: Request, res: Response) => {
   const allPacients = await PacientsModel.find();

   if (allPacients.length > 0) {
      res.status(200).json(allPacients);
   } else {
      res.status(404).json({
         msg: 'No existe ningún paciente registrado'
      });
   }
};

export const savePacient = async (req: Request, res: Response) => {
   const {
      cedula, apellidos, nombres, fechNacimiento, genero, direccion, telefono, email
   } = req.body;

   const onePaciente = await PacientsModel.findOne({
      cedula
   });

   if (onePaciente) {
      res.status(404).json({
         msg: 'Paciente ya registrado...'
      });
   } else {
      const newPacient = new PacientsModel({
         cedula,
         apellidos,
         nombres,
         fechNacimiento,
         genero,
         direccion,
         telefono,
         email
      });

      const Paciente: PacienteInterface = await newPacient.save();

      res.status(200).json({
         msg: 'Paciente registrado con éxito',
         Paciente
      });
   }
};

export const onePacient = async (req: Request, res: Response) => {
   const { id } = req.params;

   const onePacient = await PacientsModel.findOne({
      _id: id
   });

   if (onePacient) {
      res.status(200).json(onePacient);
   } else {
      res.status(404).json({
         msg: 'Paciente no encontrado'
      });
   }
};

export const deletePacient = async (req: Request, res: Response) => {
   const { id } = req.params;

   const onePacient = await PacientsModel
      .findByIdAndDelete({
         _id: id
      })
      .select({
         cedula: 1,
         apellidos: 1,
         nombres: 1
      });

   if (onePacient) {
      res.status(200).json({
         msg: 'Paciente eliminado con éxito',
         onePacient
      });
   } else {
      res.status(404).json({
         msg: 'Paciente no encontrado'
      });
   }
};

export const updatePacient = async (req: Request, res: Response) => {
   const { id } = req.params;

   const {
      cedula, apellidos, nombres, fechNacimiento, genero, direccion, telefono, email
   } = req.body;

   const onePaciente = await PacientsModel.findOne({
      _id: id
   });

   if (onePaciente) {
      const pacientUpdate = await PacientsModel.findByIdAndUpdate({
         _id: id
      }, {
         $set: {
            cedula,
            apellidos,
            nombres,
            fechNacimiento,
            genero,
            direccion,
            telefono,
            email
         }
      });

      if (pacientUpdate) {
         res.status(200).json({
            msg: 'Paciente actualizado con éxito',
            Paciente: pacientUpdate
         });
      } else {
         res.status(304).json({
            msg: 'Paciente no actualizado'
         });
      }
   } else {
      res.status(404).json({
         msg: 'Paciente no registrado...'
      });
   }
};