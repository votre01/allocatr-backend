import { Router } from "express";
import { createUserController, getAllUsersController} from "../controllers/usersController"

const router = Router();

router.post("/auth", createUserController);
// router.get("/:id", getUserById);
router.get("/", getAllUsersController);
// router.patch("/users:id", updateUserById);
// router.delete("/:id", deleteUserById);

export default router;