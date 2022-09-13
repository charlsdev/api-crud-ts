import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
   schemaOptions: {
      timestamps: true,
      versionKey: false
   },
})

class Nurses {
   @prop({
      maxlength: 10,
      required: true,
   })
      cedula: string;

   @prop({
      maxlength: 75,
      required: true,
   })
      apellidos: string;

   @prop({
      maxlength: 75,
      required: true,
   })
      nombres: string;

   @prop({
      maxlength: 10,
      required: true,
   })
      fechNacimiento: string;

   @prop({
      maxlength: 15,
      required: true,
   })
      genero: string;

   @prop({
      maxlength: 75,
      required: true,
   })
      direccion: string;

   @prop({
      maxlength: 10,
      required: true,
   })
      telefono: string;

   @prop({
      maxlength: 100,
      required: true,
      lowercase: true
   })
      email: string;
}

const NurseSchema = getModelForClass(Nurses);
export default NurseSchema;