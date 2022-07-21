import axios from "axios";

export function userApi(barerToken = null) {
  if (barerToken) {
    return axios.create({
      baseURL: "http://localhost:3005/v1/",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${barerToken}`,
      },
    });
  }
  return axios.create({
    baseURL: "http://localhost:3005/v1/",
    headers: {
      "Content-Type": "application/json",
    },
  });
}
