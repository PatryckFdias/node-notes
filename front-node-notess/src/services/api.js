import axios from "axios";

export const api = axios.create({
  baseURL: "https://node-notes-w5kh.onrender.com/",
});