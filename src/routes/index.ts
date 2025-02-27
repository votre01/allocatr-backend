import { Router } from "express";
import usersRoutes from "./userRoutes";
import profilesRoutes from "./profileRoutes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/profiles", profilesRoutes);

export default router;