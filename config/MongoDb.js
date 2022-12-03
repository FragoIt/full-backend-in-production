import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      options: {
        authenticationDatabase: env('AUTHENTICATION_DATABASE', null),
        ssl: env.bool('DATABASE_SSL', true),
      }
      
    });

    console.log(`MongoDB Connected`);
  } catch (error) {
    console.error(`Fallaste papi: ${error.message}`);
    process.exit(1);
  }
};

export default connectDatabase;


