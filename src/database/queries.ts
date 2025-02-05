export const queries = {
    /*****************************************
     * Profile queries
     *****************************************/
    createUserQuery: `
        INSERT INTO public.users (email, password)
        VALUES ($1, $2)
        RETURNING user_id, email;
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
        INSERT into public.profile
            (profile_id, first_name, last_name, email, phone, id_number, bio, user_id, address_id)
        VALUES
            ($1, $2, $3, $4, $5, $6, $7, $8, $9);
    `,

    /*****************************************
    * Account queries
    *****************************************/
    createAccount: `
        INSERT into account
            (account_id, status, role, user_id, created_at)
        VALUES
            ($1, $2, $3, $4, NOW());
    `,
}