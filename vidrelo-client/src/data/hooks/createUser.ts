import { ApiAuth } from "./Services/AuthService";
import { userApi } from "./Services/UserService";
import Cookies from "universal-cookie";

export async function createUser(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const cookies = new Cookies();
  let createdUser,
    createdUserAuth = false;
  const dataToSend = {
    profile: "",
    name: "",
    email: "",
    password: "",
    telephone: "",
    cep: "",
    state: "",
    city: "",
    district: "",
    street: "",
    number: "",
    complement: "",
  };

  for (let index = 0; index < event.currentTarget.elements.length; index++) {
    let actualId = (event.currentTarget.elements[index] as HTMLInputElement).id;
    let actualValue = (event.currentTarget.elements[index] as HTMLInputElement)
      .value;
    switch (actualId) {
      case "name":
        dataToSend.name = actualValue;
        break;
      case "cep":
        dataToSend.cep = actualValue;
        break;
      case "telephone":
        dataToSend.telephone = actualValue;
        break;
      case "state":
        dataToSend.state = actualValue;
        break;
      case "city":
        dataToSend.city = actualValue;
        break;
      case "street":
        dataToSend.street = actualValue;
        break;
      case "district":
        dataToSend.district = actualValue;
        break;
      case "number":
        dataToSend.number = actualValue;
        break;
      case "complement":
        dataToSend.complement = actualValue;
        break;
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
    const apiAuth = ApiAuth();
    const response = await apiAuth.post(
      "/createUser",
      JSON.stringify({
        email: dataToSend.email,
        password: dataToSend.password,
      })
    );
    const date = new Date();
    const nextDay = date.setDate(date.getDate() + 1);
    const expireLeft = new Date(nextDay);
    cookies.set("token", response.data, { expires: expireLeft });
    createdUserAuth = true;
  } catch (error) {
    console.log(error);
  }
  if (createdUserAuth) {
    try {
      const token = cookies.get("token");
      const userAPI = userApi();
      const response = await userAPI.post(
        "/user",
        JSON.stringify({
          optionalId: token.id,
          name: dataToSend.name,
          profile: "client",
          email: dataToSend.email,
          password: dataToSend.password,
          telephone: dataToSend.telephone,
          cep: dataToSend.cep,
          state: dataToSend.state,
          city: dataToSend.city,
          district: dataToSend.district,
          street: dataToSend.street,
          number: dataToSend.number,
          complement: dataToSend.complement,
        })
      );
      createdUser = true;
      const date = new Date();
      const nextDay = date.setDate(date.getDate() + 1);
      const expireLeft = new Date(nextDay);
      cookies.set("userData", response.data, { expires: expireLeft });
    } catch (error) {
      console.log(error);
      try {
        const token = cookies.get("token");
        const apiAuth = ApiAuth(token.accessToken);
        const response = await apiAuth.delete(`/deleteUser/${token.id}`);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  }

  if (
    createdUserAuth &&
    createdUser &&
    cookies.get("token") &&
    cookies.get("userData")
  ) {
    window.location.href = "/";
  } else {
    if (cookies.get("token")) {
      cookies.remove("token");
    }
    if (cookies.get("userData")) {
      cookies.remove("userData");
    }
    console.log("Houve um problem na hora de criar a conta");
  }
}
