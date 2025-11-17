import { validateProduct } from "./validateProduct";
import type { Product } from "../types";

describe("validateProduct", () => {
  it("returns true for a valid product", () => {
    const product: Product = {
      id: "1",
      name: "Test Product",
      tag: "tag",
      description: "A product",
      coverImg: "http://example.com/img.jpg",
      position: 1,
      meta: [
        {
          stock: 10,
          size: "M",
          color: "red",
          imgs: ["http://example.com/img.jpg"],
          price: 100,
          discounted: false,
        },
      ],
    };

    expect(validateProduct(product)).toBe(true);
  });

  it("returns false for invalid product", () => {
    const product: Product = {
      id: "",
      name: "",
      tag: "",
      description: "",
      coverImg: "",
      position: 1,
      meta: [],
    };

    expect(validateProduct(product)).toBe(false);
  });
});
