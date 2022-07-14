import { ApiAuth } from "./Services/AuthService";
import { ApiUser } from "./Services/UserService";
import Cookies from "universal-cookie";

export async function createUser(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();
  const cookies = new Cookies();

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
    ApiUser.post(
      "/user-form/",
      JSON.stringify({
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
  } catch (error) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    console.log(error);
  }

  try {
    const response = await ApiAuth.post(
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
  } catch (error) {
    if (error) {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      console.log(error);
    }
  }
}