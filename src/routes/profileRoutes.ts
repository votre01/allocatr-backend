import { Router } from "express";
import profilesController from "../controllers/profilesController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { validateProfileRequest } from "../middleware/validation";

const router = Router()

router.post("/", profilesController.createProfileController);
router.put(
    "/",
    jwtCheck,
    jwtParse,
    validateProfileRequest,
    profilesController.updateProfileController
);

export default router;