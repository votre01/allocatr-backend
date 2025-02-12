import { Router } from "express";
import { createUserController, getAllUsersController} from "../controllers/usersController"
import { jwtCheck } from "../middleware/auth";

const router = Router();

router.post("/auth", jwtCheck, createUserController);
// router.get("/:id", getUserById);
router.get("/", getAllUsersController);
// router.patch("/users:id", updateUserById);
// router.delete("/:id", deleteUserById);

export default router;