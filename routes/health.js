import express from "express";

const router = express.Router();
const status = true;
const error = "Requested source is not found";
router.get("/", (req, res) => {
  if (status) {
    res.send("OK");
  } else {
    res.send(`{error: 404 {message: "${error}"}}`);
  }
});

export default router;
