import express, { Request, Response } from "express";

import cors from "cors";
import dotenv from "dotenv";
dotenv.config();

import { MongoDbClient } from "./db/mongodbclient";
import { Product } from "./types";
import { ProductMetaData } from "./types";
import { validateProduct } from "./validation/validateProduct";
const client = MongoDbClient.getClient();

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/login", () => {});
app.post("/verify-jwt", () => {});


app.post("/add-product", async (req: Request<{}, {}, Product>, res) => {
  try {
    const product = req.body;
    const isProductValid = validateProduct(product);
    if (!isProductValid) {
      throw new Error('invalid product')
    }
    const db = process.env.db;
    const productCollection = process.env.product_collection || "";

    const dbClient = await client;
    const collection = dbClient.db(db).collection(productCollection);

    await collection.insertOne({
      ...product,
    });
    res.send({ success: true });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).send({ error: "Failed to add product" });
  }
});
app.post("/edit-product", (req, res) => {});
app.post("/delete-product", (req, res) => {});

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
