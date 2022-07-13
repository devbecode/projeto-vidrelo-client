import { ApiAuth } from "./Services/AuthService";

export function loginUser(event: React.FormEvent<HTMLFormElement>) {
  event.preventDefault();

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

  ApiAuth.post(
    "/",
    JSON.stringify({
      email: dataToSend.email,
      password: dataToSend.password,
    })
  )
    .catch(function (error) {
      if (error) {
        console.log(error);
      }
    })
    .then(() => {
      console.log("funcionou");
    });
}
