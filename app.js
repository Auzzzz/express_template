const express = require("express");
const cors = require("cors");

const db = require("./models")
const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// // parse requests of content-type - application/x-www-form-urlencoded
// app.use(express.urlencoded({ extended: true }));

// db.sequelize.sync({ force: false }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// Routes
require("./src/routes/test.routes")(express, app)

// simple route
app.get("/test", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
