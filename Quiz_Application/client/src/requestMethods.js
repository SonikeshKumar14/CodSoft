import axios from "axios";
const apiURL = process.env.REACT_APP_URLB
const BASE_URL = `${apiURL}/`;
export const publicRequest = axios.create({
  baseURL: BASE_URL,
});

