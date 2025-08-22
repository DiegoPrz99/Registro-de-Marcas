import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const MarcaAPI = {
  list: () => api.get("/api/v1/marcas").then(r => r.data),
  get: (id) => api.get(`/api/v1/marcas/${id}`).then(r => r.data),
  create: (payload) => api.post("/api/v1/marcas", payload).then(r => r.data),
  update: (id, payload) => api.put(`/api/v1/marcas/${id}`, payload).then(r => r.data),
  remove: (id) => api.delete(`/api/v1/marcas/${id}`),
};

export default api;
