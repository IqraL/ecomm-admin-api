import { Product, ProductMetaData } from "../types.js";

export const validateProduct = (product: Product) => {
  const { id, name, tag, description, coverImg, position, meta } = product;
  if (!id || !name || !tag || !description || !coverImg || !position) {
    return false;
  }

  if (!Array.isArray(meta) || meta.length === 0) {
    return false;
  }

  let invalidMeta = false;

  meta.forEach(
    ({
      stock,
      size,
      color,
      imgs,
      price,
      discounted,
      discountedPrice,
    }: ProductMetaData) => {
      if (stock == null || !size || !color || price == null) {
        invalidMeta = true;
      }

      if (discounted && (discountedPrice == null || discountedPrice >= price)) {
        invalidMeta = true;
      }

      if (!Array.isArray(imgs) || imgs.length === 0) {
        invalidMeta = true;
      }
    }
  );

  if (invalidMeta) {
    return false;
  }
  return true;
};
