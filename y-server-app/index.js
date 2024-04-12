const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config')
const routes = require('./routes');

dotenv.config()
connectDB()

/* Express */
const app = express()
app.use(express.json({ extended: false }))
app.listen(process.env.PORT, () => {
    console.log(`API is running on ${process.env.SERVER_URL}`)
})


/* CORS */
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PUT, DELETE, PATCH, OPTIONS"
    );
    next();
});
  
app.use('/', routes);

