import axios from "axios";

const api = axios.create({
  baseURL: "https://encontre-uma-feira.herokuapp.com/",
});

export default api;
