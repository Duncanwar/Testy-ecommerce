import mongoose from 'mongoose';

const dbConnection = async () => {
  const connection = (dbUrl) => {
    mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
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
