import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';
// import { Nurses } from './Nurses';
// import { Pacients } from './Pacients';
// import { Vaccines } from './Vaccines';

@modelOptions({
   schemaOptions: {
      timestamps: true,
      versionKey: false
   },
})

class Vaccinations {
   @prop({
      maxlength: 10,
      required: true
   })
      fecha: string;

   @prop({
      maxlength: 255,
      required: true
   })
      observaciones: string;

}

const VaccinationSchema = getModelForClass(Vaccinations);
export default VaccinationSchema;