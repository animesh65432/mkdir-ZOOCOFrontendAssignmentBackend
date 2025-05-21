const config = require("./config/index.js")
const express = require("express")
const cors = require("cors")
const router = require("./routers")
const connecttodb = require("./db/connect.js")

const app = express()
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors({
    origin: "*"
}))
app.use(router)


app.listen(config.PORT || 3000, () => {
    connecttodb().then(() => {
        console.log(`server start at ${config.PORT}`)
    })
})