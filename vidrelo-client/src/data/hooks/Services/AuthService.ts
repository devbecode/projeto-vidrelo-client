import axios from "axios";

export function ApiAuth(barerToken = null) {
  if (barerToken) {
    return axios.create({
      baseURL: "http://localhost:3006/v1/auth",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${barerToken}`,
      },
    });
  }
  return axios.create({
    baseURL: "http://localhost:3006/v1/auth",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
