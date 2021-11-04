const dotenv = require("dotenv").config();
const express = require("express");
const logger = require("morgan");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3001;

const app = express();

app.use(logger("dev"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

const routes = require("./routes");
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workoutdb", {
  useNewUrlParser: true,
});

mongoose.connection.on("connected", () =>
  console.log("Connected to MongoDB Endpoint")
);

mongoose.connection.on("error", (err) =>
  console.log(`Mongoose default connection error: ${err}`)
);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
