import pool from "../database/connection";
import { queries } from "../database/queries";

export const createUserModel = async (email: string, auth0Id: string) => {
    try {  
        const { rows } = await pool.query(queries.createUserQuery, [email, auth0Id]);
        return rows;
    } catch (error) {
        console.error(error);
        throw error
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

export const getUserByIdModel = async (userId: number) => {
    try {
        const { rows } = await pool.query(queries.getUserByIdQuery, [userId]);
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