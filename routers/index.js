const express = require("express")
const remiders = require("./remiders/index.js")

const router = express.Router()

router.use("/reminders", remiders)

module.exports = router