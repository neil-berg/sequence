exports.up = knex =>
    knex.schema.createTable("token", table => {
        table.increments("_id").primary();
        table.integer("userId").notNullable();
        table.string("token", 256).notNullable();
        table.timestamp("created").defaultTo(knex.fn.now());
        table
            .foreign("userId")
            .references("_id")
            .inTable("user");
    });

exports.down = knex => knex.schema.dropTable("token");
