import { useState, useEffect } from "react";
import { deleteStudent, getAllStudents } from "./StudentService";
import { useNavigate } from "react-router-dom";

function Delete_Student() {
  const [idToDelete, setIdToDelete] = useState();
  const [students, setstudents] = useState();

  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await getAllStudents();
    setstudents(data);
  };

  const deleteData = async () => {
    const status = await deleteStudent(idToDelete._id);
    console.log(status);
    navigate("/");
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h4>Delete Students</h4>
      <select
        defaultValue="choose student"
        onChange={(e) => {
          setIdToDelete(students.find((stud) => stud._id === e.target.value));
        }}
      >
        <option disabled>choose student</option>
        {students?.map((stud) => (
          <option key={stud._id} value={stud._id}>
            {stud.Name}
          </option>
        ))}
      </select>
      <br /> <br />
      <span>Id: </span>
      <input type="text" disabled value={idToDelete?._id} />
      <br /> <br />
      <button onClick={deleteData}>delete</button>
    </div>
  );
}

export default Delete_Student;
