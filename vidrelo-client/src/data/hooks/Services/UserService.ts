import axios from "axios";

export const ApiUser = axios.create({
  baseURL: "http://localhost:3005/v1/",
  headers: {
    "Content-Type": "application/json",
  },
});
