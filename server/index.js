const express = require('express')
const path = require('path')
const dotenv = require('dotenv').config()

const app = express();

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