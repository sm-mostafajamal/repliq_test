import axios from "axios";

const baseURL = "https://fake-server-dc3h.onrender.com";

// craete new product
export const createProduct = (data) =>
  axios.post(`${baseURL}/products`, data).then((res) => res.data);
