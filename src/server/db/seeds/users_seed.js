exports.seed = knex => {
    // Deletes ALL existing entries
    return knex("user")
        .del()
        .then(() => {
            // Inserts seed entries
            return knex("user").insert([
                {
                    name: "User 1",
                    username: "username1",
                    email: "name1@example.com"
                },
                {
                    name: "Name 2",
                    username: "username2",
                    email: "name2@example.com"
                },
                {
                    name: "Name 3",
                    username: "username3",
                    email: "name3@example.com"
                }
            ]);
        });
};
