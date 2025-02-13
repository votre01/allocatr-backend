import { Router } from "express";
import usersController from "../controllers/usersController"
import { jwtCheck } from "../middleware/auth";

const router = Router();

router.post("/auth", jwtCheck, usersController.createUserController);
// router.get("/:id", getUserById);
router.get("/", usersController.getAllUsersController);
// router.patch("/users:id", updateUserById);
// router.delete("/:id", deleteUserById);

export default router;