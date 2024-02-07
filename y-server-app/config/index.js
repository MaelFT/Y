const dotenv = require('dotenv')
const mongoose = require('mongoose')
dotenv.config()

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DATABASE, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        console.log('Connection to Mongo DB done')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB