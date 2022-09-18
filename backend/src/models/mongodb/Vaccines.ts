import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

@modelOptions({
   schemaOptions: {
      timestamps: true,
      versionKey: false
   },
})

export class Vaccines {
   @prop({
      type: String,
      maxlength: 75,
      required: true
   })
      vacuna: string;

   @prop({
      type: String,
      maxlength: 10,
      required: true
   })
      lote: string;

   @prop({
      type: Date,
      required: true
   })
      fechaCaducidad: Date;
}

const VaccineSchema = getModelForClass(Vaccines);
export default VaccineSchema;