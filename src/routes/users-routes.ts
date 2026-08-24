import { Router } from "express";
import { UsersController } from "@/controllers/users-controller";

const usesrsRoutes = Router();
const usersController = new UsersController();

usesrsRoutes.post("/", usersController.create);

export { usesrsRoutes };
