import { Router } from "express";
import usersRoutes from "./userRoutes"

const router = Router();

router.use("/users", usersRoutes);

export default router;