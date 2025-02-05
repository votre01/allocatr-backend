import pool from "../database/connection";
import { queries } from "../database/queries";

export const createUserModel = async (email: string, password: string) => {
    try {  
        const { rows } = await pool.query(queries.createUserQuery, [email, password]);
        return rows;
    } catch (error) {
        console.error("Error creating user", error);
        throw error;
    }
};

export const getUserByEmailModel = async (email: string) => {
    try {
        const { rows } = await pool.query(queries.getUserByEmailQuery, [email]);
        return rows[0];
    } catch (error) {
        console.error("Failed to get user from database", error);
        throw error;
    };
};

export const getAllUsersModel = async () => {
    try {
        const { rows } = await pool.query(queries.getAllUsersQuery)
        return rows;
    } catch (error) {
        console.error("Failed to get users", error);
        throw error;
    }
};