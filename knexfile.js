const path = require('path');

const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');

module.exports = {
    test: {
        client: 'pg',
        connection: {
            port: '5432',
            user: 'nberg',
            password: 'nberg',
            database: 'sequence_api_test'
        },
        migrations: {
            directory: path.join(BASE_PATH, 'migrations')
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    },
    development: {
        client: 'pg',
        connection: {
            port: '5432',
            user: 'nberg',
            password: 'nberg',
            database: 'sequence_api'
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: path.join(BASE_PATH, 'migrations')
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    },
    production: {
        client: 'pg',
        connection: {
            host: process.env.PG_HOST,
            port: process.env.PG_PORT,
            user: process.env.PG_USER,
            password: process.env.PG_PASSWORD,
            database: process.env.PG_DATABASE
        },
        pool: {
            min: 2,
            max: 10
        },
        migrations: {
            directory: path.join(BASE_PATH, 'migrations')
        },
        seeds: {
            directory: path.join(BASE_PATH, 'seeds')
        }
    }
};
