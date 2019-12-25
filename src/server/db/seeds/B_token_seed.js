exports.seed = knex => {
    // Deletes ALL existing entries
    return knex("token")
        .del()
        .then(() => {
            // Inserts seed entries
            return knex("token").insert([
                {
                    userId: 1,
                    token:
                        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzNSIsImlhdCI6MTU3NzI0MjMyNiwiZXhwIjoxNTc3MzI4NzI2fQ.VJMDXnLaStCjFPmB59N7Jsv0qQKBRSZGd32fwv1kYtQ"
                }
            ]);
        });
};
