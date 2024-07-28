import axios from "axios";

const url = "http://localhost:8080/api/students";

const getAllStudents = async () => {
  const { data } = await axios.get(url);
  return data;
};
const addStudent = async (obj) => {
  const { data } = await axios.post(url, obj);
  return data;
};
const updateStudent = async (id, obj) => {
  const { data } = await axios.put(`${url}/${id}`, obj);
  return data;
};

const deleteStudent = async (id) => {
  const { data } = await axios.delete(`${url}/${id}`);
  return data;
};
export { getAllStudents, addStudent, updateStudent, deleteStudent };
