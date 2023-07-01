import { api, endPoints } from "./axiosInstance";
const createProductService = async (data) => {
  return await api.post(endPoints.createProduct, data).then((res) => res);
};
const updateProductService = async (data) => {
  return await api
    .put(`${endPoints.updateProduct}/${data._id}`, data)
    .then((res) => {
      return res;
    });
};
const getProducts = async () => {
  const data = await api.get(endPoints.getProducts).then((res) => res.data);
  return data;
};

export { createProductService, getProducts, updateProductService };
