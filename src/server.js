const express = require("express");
const env = require("dotenv");

env.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({
    message: "This is a test route",
  });
});

app.listen(process.env.EXPRESS_SERVER_PORT, () => {
  console.log("BE server listening on port " + process.env.EXPRESS_SERVER_PORT);
});
