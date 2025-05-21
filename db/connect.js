const config = require("../config")
const mongoose = require("mongoose")

const connecttodb = async () => {
    try {
        await mongoose.connect(config.CONNECTION_STRING)
    } catch (error) {
        console.log(error)
    }
}

module.exports = connecttodb