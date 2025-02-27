import profileModels from "../models/profileModels";
import { Request, Response } from "express"

const createProfileController = async (req: Request, res: Response) => {
    try {
        const result = await profileModels.createProfileModel(
            req.body.user_id,
            req.body.first_name,
            req.body.last_name,
            req.body.birth_date,
            req.body.gender,
            req.body.phone,
            req.body.id_number,
            req.body.bio,
            req.body.is_company,
            req.body.company_name,
            req.body.company_registration,
            req.body.accreditation,
            req.body.city_id,
            req.body.country_id,
            req.body.latitude,
            req.body.longitude,
            req.body.created_at,
            req.body.updated_at
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
        const profile = await profileModels.getProfileByIdModel(userId)

        if (!profile) {
            return res.status(404).json({ message: "Profile not found" })
        }

        profileModels.updateProfileModel(
            req.body.first_name,
            req.body.last_name,
            req.body.birth_date,
            req.body.gender,
            req.body.phone,
            req.body.id_number,
            req.body.bio,
            req.body.is_company,
            req.body.company_name,
            req.body.company_registration,
            req.body.accreditation,
            req.body.city_id,
            req.body.country_id,
            req.body.latitude,
            req.body.longitude,
            req.body.updated_at
        );
        res.send(profile)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: "Failed to update profile"})
    }
}

export default {
    createProfileController,
    updateProfileController,
}