import { db } from '../../../db/connection';
import { comparePassword } from '@server/auth/password';

export class User {
    static findById(_id) {
        return db
            .table('user')
            .where({ _id })
            .first();
    }
    static findOne(query) {
        return db
            .table('user')
            .where(query)
            .first();
    }
    static async findByCredentials(email, password) {
        const user = await User.findOne({ email });
        if (!user) {
            throw new Error('Unable to login');
        }
        const isMatch = await comparePassword(
            password,
            user.password,
            user.salt
        );
        if (!isMatch) {
            throw new Error('Unable to login');
        }
        return user;
    }
    static save(data) {
        return db
            .table('user')
            .insert(data)
            .returning(['_id', 'name', 'username', 'email'])
            .then(ret => ret[0]);
    }
    static update(query, data) {
        return db
            .table('user')
            .where(query)
            .update(data, ['_id', 'username']);
    }
    static count(query) {
        return db
            .table('user')
            .count('*')
            .where(query)
            .first()
            .get('count')
            .then(Number);
    }
    static delete(query) {
        return db
            .table('user')
            .where(query)
            .del();
    }
}
