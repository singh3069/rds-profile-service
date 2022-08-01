import express from "express";
import healthRoutes from "./routes/health.js";
const app = express();

app.get("/", (req, res) => {
  res.send(`Hello, go to "/health" to see if the server is running`);
});

app.use("/health", healthRoutes);

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is running on port: http://localhost:3000");
});
