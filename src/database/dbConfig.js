import mongoose from 'mongoose';

const dbConnection = () => {
  const connection = (dbUrl) => {
    mongoose.connect(dbUrl || process.env.PRO_DB, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
      useCreateIndex: true,
    });
  };

  try {
    if (process.env.NODE_ENV === 'test') {
      return connection(process.env.TEST_DB_URL);
    }
    return connection(process.env.DEV_DB_URL);
  } catch (error) {
    throw new Error(error);
  }
};

export default dbConnection;
