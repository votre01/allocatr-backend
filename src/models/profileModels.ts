import pool from "../database/connection";
import { queries}  from "../database/queries";

const createProfileModel = async () => {
    try {
        const {rows} = await pool.query(queries.createProfile);    
    } catch (error) {
        console.log(error);    
        throw error;
    }
}

const updateProfileModel = () => {

}

export default {
    createProfileModel,
    updateProfileModel,
}