import express from "express";

const router = express.Router();
const serviceAvailable = true;
const error = "Requested source is not found";
router.get("/", (req, res) => {
  if (serviceAvailable) {
    res.status(200).send("Server is running");
  } else {
    res.status(404).send(`{error: 404 {message: "${error}"}}`);
  }
});

export default router;
