module.exports = 
{
  development: {
    username: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
}
