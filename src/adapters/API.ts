import axios from "axios";

const API = (url: string) => axios.create({
  baseURL: url,
});

export default API;