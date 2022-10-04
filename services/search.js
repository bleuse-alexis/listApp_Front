import axios from "axios";

const base = axios.create({
  baseURL: "https://world.openbeautyfacts.org/api/v0/product",
});
const base2 = axios.create({
  baseURL: "https://world.openfoodfacts.org/api/v0/product",
});

const getProduct = async (body) => {
  let product = await base.get(`/${body}.json`);
  let product2 = await base2.get(`/${body}.json`);

  if (product.data.status === 1 && product2.data.status === 1) {
    return product.data.product;
  } else if (product.data.status === 0 && product2.data.status === 0) {
    return "Le produit n'est pas reconnu";
  } else if (product.data.status === 1 && product2.data.status === 0) {
    return product.data.product;
  } else if (product.data.status === 0 && product2.data.status === 1) {
    return product2.data.product;
  }
};
const SearchService = { getProduct };

export default SearchService;
