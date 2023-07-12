// api.jsj
import axios from "axios";

let currentUrl = window.location.href;
console.log("currentUrl", currentUrl);
if (currentUrl.includes("localhost")) {
  currentUrl = "http://localhost:8080/";
} else {
  // currentUrl = "http://3.17.66.141:5000/";
  // currentUrl = "https://deals-backend-api.onrender.com/";
  currentUrl = "http://3.23.248.250:5000/";
}
const api = axios.create({
  baseURL: currentUrl,
});

const endPoints = {
  createProduct: "api/products",
  updateProduct: "api/products",
  getProducts: "api/products",
  deleteProduct: "api/products",
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
