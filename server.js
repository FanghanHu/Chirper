const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const db = require(path.join(__dirname, './models'));
const app = express();
const routes = require("./routes");
require("dotenv").config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here
app.use(routes);

// Send every other request to the React app
// Define any API routes before this runs
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



//sync models before active server
db.sequelize.sync({force: false}).then(() => {
  //bind server.
  app.listen(PORT, () => {
      console.log("Server is now listening on port: " + PORT);
  });
});
