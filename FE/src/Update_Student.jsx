import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { updateStudent, getAllStudents } from "./StudentService";

function Update_Student() {
  const [userToupdate, setUserToupdate] = useState({});
  const [newStudent, setNewStudent] = useState({});
  const [students, setstudents] = useState([]);

  const navigate = useNavigate();

  const fetchData = async () => {
    const data = await getAllStudents();
    setstudents(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const sendData = async () => {
    const obj = {
      Name: newStudent?.Name || userToupdate.Name,
      Faculty: newStudent.Faculty || userToupdate.Faculty,
      Grades: [
        {
          Profession:
            newStudent?.Profession || userToupdate.Grades?.[0]?.Profession,
          Score: newStudent?.Score || userToupdate.Grades?.[0]?.Score,
        },
      ],
    };

    const status = await updateStudent(userToupdate._id, obj);
    console.log(status);
    navigate("/");
  };

  return (
    <div>
      <h4>Update Students</h4>
      <select
        defaultValue="choose student"
        onChange={(e) => {
          setUserToupdate(students.find((stud) => stud._id === e.target.value));
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
      <span>Id:</span>
      <input type="text" disabled value={userToupdate._id} />
      <br />
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
      <button onClick={sendData}>Update User</button>
    </div>
  );
}

export default Update_Student;
