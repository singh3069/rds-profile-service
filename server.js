const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello go to /health to see if the server is running");
});

app.get("/health", (req, res) => {
  res.send("OK");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
