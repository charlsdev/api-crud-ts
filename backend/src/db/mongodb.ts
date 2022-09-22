import mongoose from 'mongoose';
import { recorridoGenerateMongoDB } from '../generator/mongo.faker';

const mongoDB: string = process.env.MONGO_DB ?? 'mongodb://localhost/typemongo';

export async function connMongo() {
   try {
      const db = await mongoose.connect(mongoDB);

      console.log(`MongoDB is connect to ${db.connection.host} - ${db.connection.name}...`);

      recorridoGenerateMongoDB();
   } catch (error) {
      console.error(error);
   }
}