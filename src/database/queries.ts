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
        SELECT user_id, email FROM public.users
        WHERE user_id = $1;
    `,

    getUserByEmailQuery: `
        SELECT user_id, email FROM public.users
        WHERE email = $1;
    `,

    updateUserQuery: ``,

    deleteUserQuery: ``,
    
    /*****************************************
    * Profile queries
    *****************************************/
    createProfileQuery: `
        INSERT INTO public.profile
            (user_id, first_name, last_name, phone, id_number, bio, created_at, updated_at)
        VALUES
            ($1, $2, $3, $4, $5, $6, NOW(), NOW())
        RETURNING user_id, first_name, last_name, phone, id_number, created_at;
    `,

    updateProfileQuery: `
        UPDATE TABLE public.profile
        SET
            first_name = $1,
            last_name = $2,
            phone = $3,
            id_number = $4,
            bio = $5,
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