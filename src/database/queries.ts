export const queries = {
    /*****************************************
     * Profile queries
     *****************************************/
    createUserQuery: `
        INSERT INTO public.users (email, auth0Id)
        VALUES ($1, $2)
        RETURNING user_id, email, auth0Id;
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
            (user_id, first_name, last_name, email, phone, id_number, bio, address_id)
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8)
        RETURNING user_id, first_name, last_name, email, phone, id_number;
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