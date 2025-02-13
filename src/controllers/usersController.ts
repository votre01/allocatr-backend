import { Request, response, Response } from "express";
import { createUserModel, getAllUsersModel, getUserByEmailModel } from "../models/userModel";

 /*
  * Create new user
  * - Check if user already exists.
  * - If user does not exist, create new user
  * - If user exists, proceed with authentication
  */
const createUserController = async (req: Request, res:Response): Promise<any> => {
    try {
        const user = req.body;
        const userExists: any = await getUserByEmailModel(user.email);
        if (userExists) {
            return res.status(200).send();
        }
        const rows = await createUserModel(user.email, String(user.auth0Id));
        if (rows) {
            res.status(201).json(rows[0]);
        }
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error creating user" }); // change to use global error handler
    }   
};

/*
 * Retrieve all users
 * - Fetches an array of user objects from the database
 * - Returns the user data in JSON format
 */
const getAllUsersController = async(req: Request, res: Response): Promise<void> => {
    try {
        const rows = await getAllUsersModel();
        if (rows) {
            res.status(200).json(rows);
        } 
    } catch (error) {
        console.error(error); 
        res.status(500).json({ message: "Error fetching users" }); // change to use global error handler
    }  
};

export default {
    createUserController,
    getAllUsersController
}