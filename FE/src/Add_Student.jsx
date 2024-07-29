import { useState } from "react";
import { addStudent } from "./StudentService";
import { useNavigate } from "react-router-dom";

function Add_Student() {
  const [newStudent, setNewStudent] = useState({
    Name: "",
    Faculty: "",
    Profession: "",
    Score: 0,
  });

  const navigate = useNavigate();

  // Create new object with the data from the inputs, sending it to the server and navigate back to main page
  const sendData = async () => {
    const obj = {
      Name: newStudent.Name,
      Faculty: newStudent.Faculty,
      Grades: [
        {
          Profession: newStudent.Profession,
          Score: newStudent.Score,
        },
      ],
    };
    const status = await addStudent(obj);
    console.log(status);
    navigate("/");
  };

  // return div with inputs and button, extract the data from inputs and place it in state, on click activate the send data function
  return (
    <div>
      <h4>Add Students</h4>
      <span>Name:</span>
      <input
        type="text"
        onChange={(e) => setNewStudent({ ...newStudent, Name: e.target.value })}
      />
      <br />
      <span>Faculty:</span>
      <input
        type="text"
        onChange={(e) =>
          setNewStudent({ ...newStudent, Faculty: e.target.value })
        }
      />
      <br />
      <span>Profession:</span>
      <input
        type="text"
        onChange={(e) => {
          setNewStudent({ ...newStudent, Profession: e.target.value });
        }}
      />
      <br />
      <span>Grades:</span>
      <input
        type="number"
        min={0}
        max={100}
        onChange={(e) =>
          setNewStudent({ ...newStudent, Score: +e.target.value })
        }
      />
      <br />
      <button onClick={sendData}>Add User</button>
    </div>
  );
}

export default Add_Student;
