import axios from "axios";

// Defina VITE_API_URL no .env local ou na hospedagem para escolher a API.
// Sem configuração, mantém o endereço remoto utilizado anteriormente.
const baseURL = import.meta.env.VITE_API_URL?.trim() || "https://node-notes-w5kh.onrender.com/";

export const api = axios.create({ baseURL });
