import { db } from "../../../db/connection";

export class User {
    static findById(_id) {
        return db
            .table("user")
            .where({ _id })
            .first();
    }
}
