require('dotenv').config()
module.exports = 
{
  development: {
    username: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "postgres"
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "postgres"
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.PW,
    database: process.env.DB,
    host: process.env.HOST,
    dialect: "postgres"
  },
}
