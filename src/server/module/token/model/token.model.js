import { db } from '../../../db/connection';

export class Token {
    static findAll(query) {
        return db.table('token').where(query);
    }

    static save(data) {
        return db
            .table('token')
            .insert(data)
            .returning('token')
            .then(ret => ret[0]);
    }

    static delete(query) {
        return db
            .table('token')
            .where(query)
            .delete();
    }
}
