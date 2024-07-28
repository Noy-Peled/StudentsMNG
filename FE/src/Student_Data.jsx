import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

function Student_Data() {
  const [students, setstudents] = useState();
  const fetchData = async () => {
    const { data: fetchStudents } = await axios.get(
      "http://localhost:8080/api/students"
    );
    setstudents(fetchStudents);
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
