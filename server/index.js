const express = require('express')
const path = require('path')
const cors = require('cors')
const {engine} = require('express-handlebars')
const dotenv = require('dotenv').config()

const connectDB = require('./config/db')

const app = express();

let mongoURI = process.env.MODE === 'DEVELOPMENT' ? process.env.MONGO_URI_DEV : process.env.MONGO_URI_LIVE
connectDB(mongoURI)

// Body Parser
app.use(express.urlencoded({ extended: false }));

// Cors
app.use(cors())

// Hbs Helper
// const {} = require('./middlewares/hbsHelper')

// Hbs View Engine
app.engine(
  ".hbs",
  engine({
    defaultLayout: "main",
    extname: "hbs",
    // helpers: {
    //   formatDate
    // },
  })
);

//Public Folder
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", require("./routes/index"));
// app.use("/login", require("./routes/login"));
// app.use("/users", require("./routes/users"));

// Port listening
app.listen(process.env.PORT, () => {
  console.log(`App Started on PORT ${process.env.PORT}`);
});