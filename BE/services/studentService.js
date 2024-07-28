const studentModel = require("../models/studentModel");

const getStudentById = async (id) => {
  const user = await studentModel.findById(id);
  return user;
};
const getAllStudents = async () => {
  const users = await studentModel.find({});
  return users;
};
const createStudent = async (obj) => {
  const newUser = new studentModel(obj);
  await newUser.save();
  return "new user created";
};
const updateStudent = async (id, obj) => {
  await studentModel.findByIdAndUpdate(id, obj);
  return "user updated";
};
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
