import profileModels from "../models/profileModels";

import { Request, Response } from "express"

const createProfileController = async (req: Request, res: Response) => {
    const profile = req.body;
    try {
        const result = await profileModels.createProfileModel(
            req.body.userId,
            req.body.firstName,
            req.body.lastName,
            req.body.phone,
            req.body.string,
            req.body.bio
        );
        res.status(201).json({ result });
    
    } catch (error) {
        console.log(error)
        res.status(500).json({ message: "Error creating profile"})
    }
}

const updateProfileController = async (req: Request, res: Response) => {
    const profile = req.body;
    try {
        profileModels.updateProfileModel();

    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to update profile"})
    }
}

export default {
    createProfileController,
    updateProfileController,
}