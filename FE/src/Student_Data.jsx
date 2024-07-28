import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { getAllStudents } from "./StudentService";

function Student_Data() {
  const [students, setstudents] = useState();

  //
  const fetchData = async () => {
    const students = await getAllStudents();
    setstudents(students);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h4>Students Data</h4>
      <table border={1}>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Faculty</th>
            <th>Profession</th>
            <th>Grades</th>
          </tr>
        </thead>
        <tbody>
          {students?.map((student) => {
            return (
              <tr key={student._id}>
                <td>{student._id}</td>
                <td>{student.Name}</td>
                <td>{student.Faculty}</td>
                <td>{student.Grades[0].Profession}</td>
                <td>{student.Grades[0].Score}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Student_Data;
