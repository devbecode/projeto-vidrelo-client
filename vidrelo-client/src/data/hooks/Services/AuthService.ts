import axios from "axios";

export const ApiAuth = axios.create({
  baseURL: "http://localhost:3006/v1/auth",
  headers: {
    "Content-Type": "application/json",
  },
});
