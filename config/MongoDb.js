import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://tech_admin:7CLgbeJuCR24swvj@dbclustertechlogistics.cc6ja5s.mongodb.net/?retryWrites=true&w=majority', {
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


