import { Request, Response } from "express";
import { createUserModel, getAllUsersModel, getUserByEmailModel } from "../models/userModel";

export const createUserController = async (req: Request, res:Response): Promise<any> => {
    const user = req.body;
    const userExists: any = await getUserByEmailModel(user.email);
    if (userExists) {
        return res.status(200).send();
    }
    const rows = await createUserModel(user.email, String(user.auth0Id));
    if (rows) {
        res.status(201).json(rows[0]);
    }   
};

export const getAllUsersController = async(req: Request, res: Response): Promise<void> => {
    const rows = await getAllUsersModel();
    if (rows)
    res.status(200).json(rows);    
};