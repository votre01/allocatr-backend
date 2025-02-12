export const queries = {
    /*****************************************
     * Profile queries
     *****************************************/
    createUserQuery: `
        INSERT INTO public.users (email, auth0_id, created_at, updated_at)
        VALUES ($1, $2, NOW(), NOW())
        RETURNING user_id, email, auth0_id, created_at;
    `,

    getAllUsersQuery: `
        SELECT * FROM public.users;
    `,

    getUserByEmailQuery: `
        SELECT user_id, email FROM public.users
        WHERE email = $1;
    `,

    updateUser: ``,

    deleteUser: ``,
    
    /*****************************************
    * Profile queries
    *****************************************/
    createProfile: `
        INSERT INTO public.profile
            (user_id, first_name, last_name, email, phone, id_number, bio, address_id, created_at, updated_at)
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, NOW(), NOW())
        RETURNING user_id, first_name, last_name, email, phone, id_number, created_at;
    `,

    updateProfile: `
        UPDATE TABLE public.profile
        SET
            first_name = $1,
            last_name = $2,
            email = $3,
            phone = $4,
            id_number = $5,
            bio = $6,
            updated_at = NOW()
        WHERE id = user_id
    `,

    /*****************************************
    * Account queries
    *****************************************/
    createAccount: `
        INSERT INTO public.account
            (user_id, status, role, created_at, updated_at)
        VALUES
            ($1, $2, $3, NOW(), NOW())
        RETURNING user_id, status, role, created_at, updated_at;
    `,
}