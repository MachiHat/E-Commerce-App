// SERVER SETUP

const express = require("express");
const app = express();
const PORT = process.env.PORT || 8080;

const path = require("path");

app.use(express.static("public"));

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
