const mongoose = require('mongoose');

const connectdb = async () => {
  try {
    const conn = await mongoose.connect('your mongo url');
    
    console.log(`MongoDB connected: ${conn.connection.host}`);
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

module.exports = connectdb;