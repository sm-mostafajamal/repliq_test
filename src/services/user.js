import axios from "axios";

const baseURL = "https://fake-server-dc3h.onrender.com/users";

export const getAllUser = () => axios.get(baseURL).then((res) => res.data);

// create new user
export const createNewUser = (data) =>
  axios.post(baseURL, data).then((res) => res.data);
