import profileModels from "../models/profileModels";
import { Request, Response } from "express"

const createProfileController = async (req: Request, res: Response) => {
    try {
        const result = await profileModels.createProfileModel(
            req.body.id,
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

const updateProfileController = async (req: Request, res: Response): Promise<any> => {
    try {
        const userId = req.params.id
        const user = await profileModels.getProfileByIdModel(userId)

        if (!user) {
            return res.status(404).json({ message: "User not found" })
        }

        profileModels.updateProfileModel(            
            req.body.firstName,
            req.body.lastName,
            req.body.phone,
            req.body.string,
            req.body.bio
        );
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to update profile"})
    }
}

export default {
    createProfileController,
    updateProfileController,
}