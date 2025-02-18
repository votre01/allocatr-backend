import pool from "../database/connection";
import { queries}  from "../database/queries";

const createProfileModel = async (
    userId: number,
    firstName: string,
    lastName: string,
    phone: string,
    idNumber: string,
    bio: string,
) => {
    try {
        const {rows} = await pool.query(
            queries.createProfileQuery,
            [userId, firstName, lastName, phone, idNumber, bio]
        );
        return rows;    
    } catch (error) {
        console.log(error);    
        throw error;
    }
}

const updateProfileModel = async (
    firstName: string,
    lastName: string,
    phone: string,
    idNumber: string,
    bio: string,
) => {}

const getProfileByIdModel = async (userId: string) => {
    try {
        const { rows } = await pool.query(queries.getProfileByIdQuery, [userId]);
        return rows[0];
    } catch (error) {
        console.error("Failed to get user from database", error);
        throw error;
    };
};

export default {
    createProfileModel,
    updateProfileModel,
    getProfileByIdModel,
}