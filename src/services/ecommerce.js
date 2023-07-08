import axios from "axios";

const baseURL = "https://fake-server-dc3h.onrender.com/";

export const getAll = (route) =>
  axios({
    method: "get",
    url: route,
    baseURL: baseURL,
  }).then((res) => res.data);
