const express = require("express");
const fileupload = require("express-fileupload");
const cloudinary = require("cloudinary").v2;
const cors = require("cors");
const { connection } = require("./config/db");
const { userrouter } = require("./routes/user.route");
// const { auth } = require("./middlewares/authentication.middleware");
require("dotenv").config();
const swaggerjsdoc = require("swagger-jsdoc");
const swaggerUI = require("swagger-ui-express");
const { postrouter } = require("./routes/post.route");

let app = express();
app.use(express.json());
app.use(cors());




















app.use("/user", userrouter);
app.use("/post", postrouter);
// app.use(auth);








//get


app.listen(process.env.port, async () => {
  try {
    await connection;
    console.log("connected to the db");
  } catch (error) {
    console.log(error);
  }
  console.log(`server running on ${process.env.port} `);
});
