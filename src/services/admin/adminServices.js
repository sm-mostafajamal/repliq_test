import axios from "axios";

const baseURL = "https://fake-server-dc3h.onrender.com";

// get all orderedProducts from the backend
export const getOrderedProducts = (route) =>
  axios({
    method: "get",
    url: route,
    baseURL: baseURL,
  }).then((res) => res.data);
// create new product
export const createProduct = (data) =>
  axios.post(`${baseURL}/products`, data).then((res) => res.data);
// delete  product
export const deleteProduct = (id) =>
  axios.delete(`${baseURL}/products/${id}`).then((res) => res.data);
