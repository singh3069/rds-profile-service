const express = require("express");
const app = express();

const status = true;

app.get("/", (req, res) => {
  res.send(
    `Hello, go to "localhost/3000/health" to see if the server is running`
  );
});

app.get("/health", (req, res) => {
  if (status) {
    res.send("OK");
  } else {
    // show the error 404 "requested source not found"
    res.send(`{error: "Server is down"}`);
  }
});

app.listen(3000, () => {
  console.log("Server is running on port: http://localhost:3000");
});
