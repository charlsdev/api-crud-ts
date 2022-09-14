import { Request, Response } from 'express';
import { Pacients } from '../models/mysql/Pacients';

export const allPacients = async (req: Request, res: Response) => {
   const allPacientes = await Pacients.find();

   if (allPacientes.length > 0) {
      res.status(200).json(allPacientes);
   } else {
      res.status(404).json({
         msg: 'No existe usuarios registrados'
      });
   }
};

export const savePaciente = async (req: Request, res: Response) => {
   const {
      cedula, apellidos, nombres, fechNacimiento, genero, direccion, telefono, email
   } = req.body;

   const searchPacient = await Pacients.findOneBy({
      cedula
   });

   if (searchPacient) {
      return res.status(405).json({
         msg: 'Paciente ya registrado'
      });
   } else {
      const newPacient = await Pacients.insert({
         cedula,
         apellidos,
         nombres,
         fechNacimiento,
         genero,
         direccion,
         telefono,
         email
      });

      if (newPacient.raw.affectedRows > 0) {
         res.status(201).json({
            msg: 'Paciente registrado con éxito'
         });
      } else {
         res.status(500).json({
            msg: 'No se ha podido registrar al paciente'
         });
      }
   }
};

export const onePacient = async (req: Request, res: Response) => {
   const { id } = req.params;

   const pacientOne = await Pacients.findOneBy({
      cedula: id
   });

   if (pacientOne) {
      res.status(200).json(pacientOne);
   } else {
      res.status(404).json({
         msg: 'No existe el paciente registrado'
      });
   }
};

export const deletePacient = async (req: Request, res: Response) => {
   const { id } = req.params;

   const pacientOne = await Pacients.findOneBy({
      cedula: id
   });

   if (pacientOne) {
      const delPacient = await Pacients.delete({
         cedula: id
      });

      if (delPacient.affected) {
         res.status(200).json({
            msg: 'Paciente eliminado con éxito'
         });
      } else {
         res.status(500).json({
            msg: 'No se ha podido eliminar al paciente'
         });
      }

   } else {
      res.status(404).json({
         msg: 'No existe el paciente registrado'
      });
   }
};

export const updatePacient = async (req: Request, res: Response) => {
   const {
      cedula, apellidos, nombres, fechNacimiento, genero, direccion, telefono, email
   } = req.body;

   const pacientOne = await Pacients.findOneBy({
      cedula
   });

   if (pacientOne) {
      const updPacient = await Pacients.update({
         cedula
      }, {
         cedula,
         apellidos,
         nombres,
         fechNacimiento,
         genero,
         direccion,
         telefono,
         email
      });

      if (updPacient.affected) {
         res.status(200).json({
            msg: 'Paciente actualizado con éxito'
         });
      } else {
         res.status(500).json({
            msg: 'No se ha podido actualizar al paciente'
         });
      }

   } else {
      res.status(404).json({
         msg: 'No existe el paciente a actualizar'
      });
   }
};