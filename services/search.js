import axios from "axios";

const base = axios.create({
  baseURL: "https://world.openbeautyfacts.org/api/v0/product",
});
const base2 = axios.create({
  baseURL: "https://world.openfoodfacts.org/api/v0/product",
});

const SearchService = {
  getProduct(body) {
    base.get(`/${body}.json`).then((product) => {
      if (product.data.status === 1) {
        return product.data.product;
      } else {
        base2.get(`/${body}.json`).then((product2) => {
          if (product2.data.status === 1) {
            console.log("test2");

            return product2.data.product;
          } else {
            console.log("test3");
            return "Le produit n'est pas reconnu";
          }
        });
      }
    });
  },
};

export default SearchService;
