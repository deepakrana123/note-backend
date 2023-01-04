const mongoose = require('mongoose')
const colors = require('colors')

const connectDB = async () => {
  
  try {
    const conn = await mongoose.connect("mongodb+srv://NoteApp:3T81gCC8TWydoABs@cluster0.vnrq5s4.mongodb.net/?retryWrites=true&w=majority", {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports= connectDB;