export const queries = {
    /*****************************************
     * User queries
     *****************************************/
    createUserQuery: `
        INSERT INTO public.users (email, auth0_id, created_at, updated_at)
        VALUES ($1, $2, NOW(), NOW())
        RETURNING user_id, email, auth0_id, created_at;
    `,

    getAllUsersQuery: `
        SELECT * FROM public.users;
    `,

    getUserByIdQuery: `
        SELECT * FROM public.users
        WHERE user_id = $1;
    `,

    getUserByEmailQuery: `
        SELECT * FROM public.users
        WHERE email = $1;
    `,

    getUserByAuth0IdQuery: `
        SELECT * FROM public.users
        WHERE auth0_id = $1;
    `,

    updateUserQuery: ``,

    deleteUserQuery: ``,
    
    /*****************************************
    * Profile queries
    *****************************************/
    createProfileQuery: `
        INSERT INTO public.profiles (
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
        )
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, NOW(), NOW())
        RETURNING user_id, first_name, last_name, phone, id_number, created_at;
    `,

    updateProfileQuery: `
        UPDATE TABLE public.profiles
        SET
            first_name = $1,
            last_name = $2,
            birth_date = $3,
            gender = $4,
            phone = $5,
            id_number = $6,
            bio = $7,
            is_company = $8,
            company_name = $9,
            company_registration = $10,
            accreditation = $11,
            city_id = $12,
            country_id = $13,
            latitude = $14,
            longitude $ = 15,
            updated_at = NOW()
        WHERE id = user_id
        RETURNING user_id, first_name, last_name, phone, id_number, updated_at;
    `,

    getProfileByIdQuery: `
        SELECT * FROM public.users
        WHERE user_id = $1;
    `,

    /*****************************************
    * Account queries
    *****************************************/
    createAccountQuery: `
        INSERT INTO public.account
            (user_id, status, role, created_at, updated_at)
        VALUES
            ($1, $2, $3, NOW(), NOW())
        RETURNING user_id, status, role, created_at, updated_at;
    `,
}