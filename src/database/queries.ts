export const queries = {
    /*****************************************
     * Profile queries
     *****************************************/
    createUser: `
        INSERT into public.user (user_id, email, password, created_at)
        VALUES ($1, $2, $3, NOW())
    `,

    /*****************************************
    * Profile queries
    *****************************************/
    createProfile: `
        INSERT into public.user (
            user_id, first_name, last_name, email, phone, id_number, bio, role, password,
            profile_picture, created_at, updated_at
        )
        VALUES ($1, $2, $3, $4, $5, $6, NOW(), NOW())
    `,
}