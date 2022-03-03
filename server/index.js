// IMPORTS

const getAllDocs = require('../src/firebase/firebase'); // EL REQUIRE NO ME TOMA EL EXPORT QUE NECESITO

// SERVER SETUP

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

//ROUTES
const path = require("path");

app.get("/server", (req, res) => {
  res.json({message: "Welcome to the server"});
});

// MIDDLEWARE
app.use(express.static(path.join(__dirname, "..", "public")));
app.use(express.static("public"));

app.use((req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "public", "index.html"));
});

// SERVER CONECTION
const connectedServer = app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
connectedServer.on("error", (error) => {
  console.log(`An error has ocurred: ${error}`);
});

// TEST
app.get("/server-test", (req, res) => {
  res.send({ express: "YOUR EXPRESS BACKEND IS CONNECTED TO REACT" });
});
