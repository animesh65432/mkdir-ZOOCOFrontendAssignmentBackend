const express = require("express")
const remiders = require("./remiders/index.js")

const router = express.Router()

router.use("/remiders", remiders)

module.exports = router