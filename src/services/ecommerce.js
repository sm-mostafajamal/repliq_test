import axios from "axios";

const baseURL = "https://fake-server-dc3h.onrender.com";
export const getAll = (route) =>
  axios({
    method: "get",
    url: route,
    baseURL: baseURL,
  }).then((res) => res.data);

export const orderedProducts = (data) =>
  //   axios.post(`${baseURL}/orderedProducts`, data);
  axios
    .post(`${baseURL}/orderedProducts`, data)
    .then((res) => res.data)
    .catch((err) => console.error("Already added same product to database!!!"));
