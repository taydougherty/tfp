// database Credentials, will need to find an alternative to mlab due to it being shut down on heroku
// mLab is now part of MongoDB, so maybe we will use MongoAtlas to Host DB? free up to 5gb?

module.exports = {
    'url': process.env.MONGODB_URI || "mongodb://127.0.0.1/tfp-db"
}