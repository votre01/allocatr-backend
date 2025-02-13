import { Router } from "express";
import profilesController from "../controllers/profilesController";

const router = Router()

router.put("/", profilesController.updateProfileController);