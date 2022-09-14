import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
   schemaOptions: {
      timestamps: true,
      versionKey: false
   },
})

export class Pacients {
   @prop({
      type: String,
      maxlength: 10,
      required: true
   })
      cedula: string;

   @prop({
      type: String,
      maxlength: 75,
      required: true
   })
      apellidos: string;

   @prop({
      type: String,
      maxlength: 75,
      required: true
   })
      nombres: string;

   @prop({
      type: String,
      maxlength: 10,
      required: true
   })
      fechNacimiento: string;

   @prop({
      type: String,
      maxlength: 10,
      required: true
   })
      genero: string;

   @prop({
      type: String,
      maxlength: 75,
      required: true
   })
      direccion: string;

   @prop({
      type: String,
      maxlength: 10,
      required: true
   })
      telefono: string;

   @prop({
      type: String,
      maxlength: 75,
      required: true,
      lowercase: true
   })
      email: string;
}

const PacientsSchema = getModelForClass(Pacients);
export default PacientsSchema;