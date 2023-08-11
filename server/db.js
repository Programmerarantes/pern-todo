const Pool = require("pg").Pool

const pool = new Pool({
    user: "postgres",
    password: "xinZhao*",
    host: "localhost",
    port: 5432,
    database: "perntodo"
    //the database name should be the same front the database.sql(CREATE DATABASE perntodo;)
})

module.exports = pool