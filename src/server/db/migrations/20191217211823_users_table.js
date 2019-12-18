exports.up = knex =>
    knex.schema.createTable("user", table => {
        table.increments("_id").primary();
        table
            .string("type", 128)
            .notNullable()
            .defaultTo("user");
        table.string("name", 128).notNullable();
        table.string("email", 128).notNullable();
        table.string("username", 128);
        table.string("password", 1024);
        table.string("salt", 512);
        table.timestamp("created").defaultTo(knex.fn.now());
        table.timestamp("updated").defaultTo(knex.fn.now());
    });

exports.down = knex => knex.schema.dropTable("user");
