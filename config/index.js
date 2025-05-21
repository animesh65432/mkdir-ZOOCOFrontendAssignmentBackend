require("dotenv/config")

const config = {
    PORT: process.env.PORT,
    CONNECTION_STRING: process.env.CONNECTION_STRING
}

module.exports = config