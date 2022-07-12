import axios from "axios";
import { useEffect } from "react";
import { convertToObject, EnumDeclaration } from "typescript";
import { toJSON } from "flatted";
export function Usefetch(event: React.FormEvent<HTMLFormElement>) {
  //   interface User {
  //     profile: string;
  //     name: string;
  //     email: string;
  //     password: string;
  //     telephone: string;
  //     cep: string;
  //     state: string;
  //     city: string;
  //     district: string;
  //     street: string;
  //     number: string;
  //     complement: string;
  //   }

  event.preventDefault();

  const ApiUser = axios.create({
    baseURL: "http://localhost:3005/v1/user",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const ApiAuth = axios.create({
    baseURL: "http://localhost:3005/v1/user",
    headers: {
      "Content-Type": "application/json",
    },
  });

  ApiUser.post(
    "http://localhost:3005/v1/user",
    JSON.stringify({
      name: (event.currentTarget.elements[0] as HTMLInputElement).value,
      profile: "client",
      email: (event.currentTarget.elements[9] as HTMLInputElement).value,
      password: (event.currentTarget.elements[10] as HTMLInputElement).value,
      telephone: (event.currentTarget.elements[2] as HTMLInputElement).value,
      cep: (event.currentTarget.elements[1] as HTMLInputElement).value,
      state: (event.currentTarget.elements[3] as HTMLInputElement).value,
      city: (event.currentTarget.elements[4] as HTMLInputElement).value,
      district: (event.currentTarget.elements[6] as HTMLInputElement).value,
      street: (event.currentTarget.elements[5] as HTMLInputElement).value,
      number: (event.currentTarget.elements[7] as HTMLInputElement).value,
      complement: (event.currentTarget.elements[8] as HTMLInputElement).value,
    })
  )
    .then(() => {
      console.log("funcionou");
    })
    .catch(function (error) {
      if (error) {
        console.log(error);
      }
    });
  ApiAuth.post(
    "http://localhost:3006/v1/auth/createUser/",
    JSON.stringify({
      name: (event.currentTarget.elements[0] as HTMLInputElement).value,
      password: (event.currentTarget.elements[10] as HTMLInputElement).value,
    })
  )
    .then(() => {
      console.log("funcionou");
    })
    .catch(function (error) {
      if (error) {
        console.log(error);
      }
    });
}
