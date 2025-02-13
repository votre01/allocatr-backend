import profileModels from "../models/profileModels";

import { Request, Response } from "express"

const createProfileController = async () => {
}

const updateProfileController = async (req: Request, res: Response) => {
    const profile = req.body;
    try {

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to update profile"})
    }
}

export default {
    createProfileController,
    updateProfileController,
}