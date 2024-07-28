const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  Name: String,
  Faculty: String,
  Grades: [{ Profession: String, Score: Number }],
});

const studentModel = mongoose.model("student", studentSchema);

module.exports = studentModel;
