//require("dotenv").config();
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

// routes
app.use(require("./routes/api/workout-routes.js"));
app.use(require("./routes/home-routes.js"));

console.log(process.env.MONGODB_URI);
const url = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
