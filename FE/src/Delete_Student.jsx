import { useState, useEffect } from "react";
import { deleteStudent, getAllStudents } from "./StudentService";
import { useNavigate } from "react-router-dom";

function Delete_Student() {
  const [idToDelete, setIdToDelete] = useState();
  const [students, setstudents] = useState();

  const navigate = useNavigate();

  // fetch the data and set student's state
  const fetchData = async () => {
    const data = await getAllStudents();
    setstudents(data);
  };

  // activate function from service and sending the id of the student that the user wants to delete
  const deleteData = async () => {
    const status = await deleteStudent(idToDelete._id);
    console.log(status);
    navigate("/");
  };

  // on load activate fetch
  useEffect(() => {
    fetchData();
  }, []);

  // return div with select and button, extract the id from select and place it in state, on click activate the deleteData function
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
