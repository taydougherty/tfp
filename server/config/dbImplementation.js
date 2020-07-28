const mongoose = require('mongoose')
const configdb = require('./dbCred')

mongoose.connect(configdb.url, { useNewUrlParser: true })

// Deprecation Warning: current Server Discovery and Monitoring engine is deprecated, and will be removed in a future version. To use the new Server Discover and Monitoring engine, pass option { useUnifiedTopology: true } to the MongoClient constructor.
// mongoose.connect(configdb.url, { useUnifiedTopology: true })

const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
// db.on('error', console.error.blind(console, "MongoDB connection error: "));
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once("open", () => {
    console.log("Mongoose connection successful")
}
)