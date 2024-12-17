import { js2xml } from "xml-js"; 
import { books } from "../db.js";

export const byAuthor = async (req, res) => {
  try {
    const author = req.query.author;
    const format = req.query.format;
    const limit = parseInt(req.query.limit,10);

    const authors = Object.keys(books);

    if (!authors.includes(author)) {
      throw new Error("author does not exist");
    }
    let data = books[author];


    if (!isNaN(limit) && limit > 0) {
      data = data.slice(0, limit);
    }

    if (format === "json") {
      res.send(data);
    } else {
      const wrappedData = { books: { book: data } };

      const xml = js2xml(wrappedData, { compact: true, spaces: 2 });

      res.set("Content-Type", "application/xml");
      res.send(xml);
    }
  } catch (error) {
    console.log(error)
    res.send([]);
  }
};
