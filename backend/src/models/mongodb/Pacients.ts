import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
   schemaOptions: {
      timestamps: true,
      versionKey: false
   },
})

class Pacients {
   @prop({
      maxlength: 10,
      required: true
   })
      cedula: string;

   @prop({
      maxlength: 75,
      required: true
   })
      apellidos: string;

   @prop({
      maxlength: 75,
      required: true
   })
      nombres: string;

   @prop({
      maxlength: 10,
      required: true
   })
      fechNacimiento: string;

   @prop({
      maxlength: 10,
      required: true
   })
      genero: string;

   @prop({
      maxlength: 75,
      required: true
   })
      direccion: string;

   @prop({
      maxlength: 10,
      required: true
   })
      telefono: string;

   @prop({
      maxlength: 75,
      required: true,
      lowercase: true
   })
      email: string;
}

const PacientsSchema = getModelForClass(Pacients);
export default PacientsSchema;