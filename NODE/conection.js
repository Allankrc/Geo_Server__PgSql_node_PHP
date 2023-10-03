//https://www.kindsonthegenius.com/build-a-rest-api-with-node-js-and-postgresql-get-post-putdelete-step-by-step/
const {Client} = require('pg')

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: 5432,
    password: "postgres",
    database: "postgres"
})

module.exports = client