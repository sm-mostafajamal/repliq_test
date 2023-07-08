import axios from "axios";

const baseURL = "https://fake-server-dc3h.onrender.com";

// get all products from the backend
export const getAll = (route) =>
  axios({
    method: "get",
    url: route,
    baseURL: baseURL,
  }).then((res) => res.data);

// post the checkout product to server
export const orderedProducts = (data) =>
  axios
    .post(`${baseURL}/orderedProducts`, data)
    .then((res) => res.data)
    .catch((err) => console.error("Already added same product to database!!!"));
