import axios from "axios";

export const mailAPI = axios.create({
  baseURL: "http://localhost:3009/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
