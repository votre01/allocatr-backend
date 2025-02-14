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

const updateProfileModel = () => {}

export default {
    createProfileModel,
    updateProfileModel,
}