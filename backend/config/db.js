const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    mongoose.connect(process.env.MONGO_URI);
    console.log('DataBase Connected'.rainbow.bold);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { connectDB };
