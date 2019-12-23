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

    static async unique(field) {
        const column = Object.keys(field)[0];
        const result = await db
            .table("user")
            .where(field)
            .count(column);
        return Number(result[0].count) === 0;
    }
}
