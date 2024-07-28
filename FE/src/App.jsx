import Add_Student from "./Add_Student";
import Student_Data from "./Student_Data";
import { Link, Route, Routes } from "react-router-dom";
import Update_Student from "./Update_Student";
import Delete_Student from "./Delete_Student";
import "./App.css";

function App() {
  return (
    <div>
      <nav>
        <Link className="link" to={""}>
          Students Data
        </Link>
        <Link className="link" to={"/add"}>
          Add Students
        </Link>
        <Link className="link" to={"/update"}>
          Update Students
        </Link>
        <Link className="link" to={"/delete"}>
          Delete Students
        </Link>
      </nav>

      <Routes>
        <Route path="" element={<Student_Data />}></Route>
        <Route path="/add" element={<Add_Student />}></Route>
        <Route path="/update" element={<Update_Student />}></Route>
        <Route path="/delete" element={<Delete_Student />}></Route>
      </Routes>
    </div>
  );
}

export default App;
