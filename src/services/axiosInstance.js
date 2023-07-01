// api.jsj
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080/",
});

const endPoints = {
  createProduct: "api/products",
  updateProduct: "api/products",
  getProducts: "api/products",
};

// const getAllProducts = () => {
//   return instance.get("/data");
// };

// const createProduct = (data) => {
//   console.log("data kkk", data);
//   return instance.post("/api/products", data).then((res) => {
//     console.log(res);
//   });
// };

export { endPoints, api };
