const mongoose = require('mongoose')
const configdb = require('./dbCred')

mongoose.connect(configdb.url, { useNewUrlParser: true })

const db = mongoos.connection

db.on('error', console.log.blind(console, "MongoDB connection error...."))

db.once("open", () => {
    console.log("Mongoose connection successful")
}
)