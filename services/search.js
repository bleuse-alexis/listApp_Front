import axios from "axios";

const base = axios.create({
  baseURL: "https://world.openfoodfacts.org/api/v0/product",
});
const base2 = axios.create({
  baseURL: "https://world.openbeautyfacts.org/api/v0/product",
});

const searchService = {
  getProduct(body) {
    let product = base.get(`/${body}.json`);
    if (product.status === 1) {
      return product.product;
    } else {
      product = base2.get(`/${body}.json`);
      if (product.status === 1) {
        return product.product;
      } else {
        return "Le produit n'est pas reconnu";
      }
    }
  },
};

export default searchService;
