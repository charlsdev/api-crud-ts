import { prop, getModelForClass, modelOptions, Ref } from '@typegoose/typegoose';
import { Pacients } from './Pacients';
import { Nurses } from './Nurses';
import { Vaccines } from './Vaccines';

@modelOptions({
   schemaOptions: {
      timestamps: true,
      versionKey: false
   },
})

class Vaccinations {
   @prop({ ref: () => Pacients })
      idPacient: Ref<Pacients>;

   @prop({ ref: () => Nurses })
      idNurse: Ref<Nurses>;

   @prop({ ref: () => Vaccines })
      idVaccines: Ref<Vaccines>;

   @prop({
      type: Date,
      required: true
   })
      fecha: Date;

   @prop({
      type: String,
      maxlength: 255,
      required: true
   })
      observaciones: string;
}

const VaccinationSchema = getModelForClass(Vaccinations);
export default VaccinationSchema;