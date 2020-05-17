const mongoose = require('mongoose')

const Students = require('./students.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/students"

const connectDb = () => {
  return mongoose.connect(uri);
};

module.exports = {
  connectDb,
  models: {
    Students
  }
}