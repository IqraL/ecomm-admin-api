import express from "express";
import { byAuthor } from "./logic/by-author.js";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/by-author", (req, res) => byAuthor(req, res));



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
