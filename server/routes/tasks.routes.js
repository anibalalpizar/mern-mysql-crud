import { Router } from "express";
import {
  getTasks,
  createTask,
  deleteTaks,
  updateTask,
  getTask,
} from "../controllers/tasks.controller.js";
const router = Router();

router.get("/tasks", getTasks);

router.get("/tasks/:id", getTask);

router.post("/tasks", createTask);

router.put("/tasks/:id", updateTask);

router.delete("/tasks/:id", deleteTaks);

export default router;
