import { api, endPoints } from "./axiosInstance";
const createProductService = async (data) => {
  console.log("data kkk", data);
  return await api.post(endPoints.createProduct, data).then((res) => {
    console.log(res);
  });
};
const updateProductService = async (data) => {
  console.log("data kkk", data);
  return await api
    .put(`${endPoints.updateProduct}/${data._id}`, data)
    .then((res) => {
      console.log(res);
    });
};
const getProducts = async () => {
  const data = await api.get(endPoints.getProducts).then((res) => res.data);
  console.log("data api", data);
  return data;
};

export { createProductService, getProducts, updateProductService };
