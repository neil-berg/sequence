import { db } from "../../../db/connection";

export class User {
    static findById(_id) {
        return db
            .table("user")
            .where({ _id })
            .first();
    }

    static findByEmail(email) {
        return db
            .table("user")
            .where({ email })
            .first();
    }

    static save(data) {
        return db.table("user").insert(data);
    }

    static count(query) {
        return db
            .table("user")
            .count("*")
            .where(query)
            .first()
            .get("count")
            .then(Number);
    }

    // function count (query = true) {
    // 	return db(config.table)
    // 		.count('*')
    // 		.where(query)
    // 		.first()
    // 		.get('count')
    // 		.then(Number);
    // }
}
