import { ApiAuth } from "./Services/AuthService";
import { userApi } from "./Services/UserService";
import Cookies from "universal-cookie";

export async function loginUser(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  let userToken,
    userData = false;
  const cookies = new Cookies();
  const dataToSend = {
    email: "",
    password: "",
  };

  for (let index = 0; index < event.currentTarget.elements.length; index++) {
    let actualId = (event.currentTarget.elements[index] as HTMLInputElement).id;
    let actualValue = (event.currentTarget.elements[index] as HTMLInputElement)
      .value;
    switch (actualId) {
      case "email":
        dataToSend.email = actualValue;
        break;
      case "password":
        dataToSend.password = actualValue;
        break;
      default:
        break;
    }
  }

  try {
    const response = await ApiAuth.post(
      "/",
      JSON.stringify({
        email: dataToSend.email,
        password: dataToSend.password,
      })
    );
    userToken = true;
    const date = new Date();
    const nextDay = date.setDate(date.getDate() + 1);
    const expireLeft = new Date(nextDay);
    cookies.set("token", response.data, { expires: expireLeft });
  } catch (error) {
    console.log(error);
  }
  if (userToken) {
    try {
      let token = cookies.get("token");

      const userAPI = userApi(token.accessToken);
      const response = await userAPI.get(`/user/${token.userId}`);

      const date = new Date();
      const nextDay = date.setDate(date.getDate() + 1);
      const expireLeft = new Date(nextDay);
      cookies.set("userData", response.data, { expires: expireLeft });
      window.location.href = "/";
    } catch (error) {
      console.log(error);
      cookies.remove("userData");
      cookies.remove("token");
    }
  }
}
