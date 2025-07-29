import express, { Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/add-product", (req, res) => {});
app.post("/edit-product", (req, res) => {});
app.post("/delete-product", (req, res) => {});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
