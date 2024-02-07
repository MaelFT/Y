const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const bodyParser = require('body-parser');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const connectDB = require('./config')
const routes = require('./routes');

dotenv.config()
connectDB()

const app = express()
app.listen(process.env.PORT, () => {
    console.log(`API is running on ${process.env.SERVER_URL}`)
})
app.use(express.json({ extended: false }))

app.use(bodyParser.json());

app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(session({
    secret: '8335fa56d487562de248f47befc72743334051ddffcc2c09275f665454990317594745ee17c08f798cd7dce0ba8155dcda14f6398c1d1545116520a133017c09', // Changez cela avec une clé secrète forte
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        httpOnly: true,
        maxAge: 60 * 60 * 24
    }, 
    credentials: true,
  }));

app.use(
    cors({
        origin: (origin, callback) => {
            if (!origin) return callback(null, true)
            if (process.env.WHITELIST.indexOf(origin) === -1) {
                let message =
                    "The CORS policy for this origin doesn't " +
                    'allow access from the particular origin.'
                return callback(new Error(message), false)
            }
            return callback(null, true)
        },
        credentials: true
    })
)
app.use('/', routes);

