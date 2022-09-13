import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
   schemaOptions: {
      timestamps: true,
      versionKey: false
   },
})

class Vaccines {
   @prop({
      maxlength: 75,
      required: true
   })
      vacuna: string;

   @prop({
      maxlength: 10,
      required: true
   })
      lote: string;

   @prop({
      maxlength: 10,
      required: true
   })
      fechaCaducidad: string;
}

const VaccineSchema = getModelForClass(Vaccines);
export default VaccineSchema;