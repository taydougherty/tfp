const express = require('express');

const app = express();

const PORT = process.env.PORT || 8080

// Authentication/CORS


app.listen(PORT, () => {
    console.log("App listening on PORT: " + PORT)
})

module.exports = app