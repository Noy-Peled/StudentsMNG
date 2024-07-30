const studentModel = require("../models/studentModel");

// find student by id from db, return student
const getStudentById = async (id) => {
  const user = await studentModel.findById(id);
  return user;
};

// get all students from db, return students
const getAllStudents = async () => {
  const users = await studentModel.find({});
  return users;
};

// creat new student by model and save it in db, return creation approval
const createStudent = async (obj) => {
  const newUser = new studentModel(obj);
  await newUser.save();
  return "new user created";
};

// find student by id from db and update, return updating approval
const updateStudent = async (id, obj) => {
  await studentModel.findByIdAndUpdate(id, obj);
  return "user updated";
};

// find student by id from db and delete, return deletion approval
const deleteStudent = async (id) => {
  await studentModel.findByIdAndDelete(id);
  return "user deleted";
};

module.exports = {
  getStudentById,
  getAllStudents,
  createStudent,
  updateStudent,
  deleteStudent,
};
