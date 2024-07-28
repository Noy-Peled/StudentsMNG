const studentService = require("../services/studentService");
const express = require("express");

const router = express.Router();

// get - get all students controller
router.get("/", async (req, res) => {
  try {
    const users = await studentService.getAllStudents();
    res.json(users);
  } catch (e) {
    res.json(e.message);
  }
});

// get - get student by id controller
router.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const user = await studentService.getStudentById(id);
    res.json(user);
  } catch (e) {
    res.json(e.message);
  }
});

// post - create new student controller
router.post("/", async (req, res) => {
  try {
    const obj = req.body;
    const status = await studentService.createStudent(obj);
    res.json({ msg: status });
  } catch (e) {
    res.json(e.message);
  }
});

// put - update student controller
router.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const obj = req.body;
    const status = await studentService.updateStudent(id, obj);
    res.json({ msg: status });
  } catch (e) {
    res.json(e.message);
  }
});

// delete - delete student controller
router.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const status = await studentService.deleteStudent(id);
    res.json({ msg: status });
  } catch (e) {
    res.json(e.message);
  }
});

module.exports = router;
