import axios from "axios";

const url = "http://localhost:8080/api/students";

// get all students from server
const getAllStudents = async () => {
  const { data } = await axios.get(url);
  return data;
};

// sent data of new student to server
const addStudent = async (obj) => {
  const { data } = await axios.post(url, obj);
  return data;
};

// update an existing student's data and send it to server
const updateStudent = async (id, obj) => {
  const { data } = await axios.put(`${url}/${id}`, obj);
  return data;
};

// delete an existing student by id
const deleteStudent = async (id) => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
};

export { getAllStudents, addStudent, updateStudent, deleteStudent };
