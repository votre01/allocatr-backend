import pool from "../database/connection";
import { queries}  from "../database/queries";

const createProfileModel = async (
    user_id: string,
    first_name: string,
    last_name: string,
    birth_date: string,
    gender: string,
    phone: string,
    id_number: string,
    bio: string,
    is_company: boolean,
    company_name: string,
    company_registration: string,
    accreditation: string,
    city_id: number,
    country_id: number,
    latitude: number,
    longitude: number,
    created_at: string,
    updated_at: string
) => {
    try {
        const {rows} = await pool.query(
            queries.createProfileQuery,
            [
                user_id,
                first_name,
                last_name,
                birth_date,
                gender,
                phone,
                id_number,
                bio,
                is_company,
                company_name,
                company_registration,
                accreditation,
                city_id,
                country_id,
                latitude,
                longitude,
                created_at,
                updated_at
            ]
        );
        return rows;    
    } catch (error) {
        console.log(error);    
        throw error;
    }
}

const updateProfileModel = async (
    first_name: string,
    last_name: string,
    birth_date: string,
    gender: string,
    phone: string,
    id_number: string,
    bio: string,
    is_company: boolean,
    company_name: string,
    company_registration: string,
    accreditation: string,
    city_id: number,
    country_id: number,
    latitude: number,
    longitude: number,
    updated_at: string
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