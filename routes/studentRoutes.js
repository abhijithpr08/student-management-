import express from "express";
import {
  createStudent,
  getStudents,
  updateStudent,
  deleteStudent
} from "../controllers/studentController.js";

import { verifyToken } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", verifyToken, createStudent);
router.get("/", verifyToken, getStudents);
router.put("/:id", verifyToken, updateStudent);
router.delete("/:id", verifyToken, deleteStudent);

export default router;
