import { result } from "lodash";
import React from "react";


const BASE_URL = "http://localhost:3000/users";

class YodlrApi {

  static async request(id = "", data = {}) {
    const url = `${BASE_URL}/${id}`;

    const response = await fetch(url, data);
    if (response.ok === false) {
      const message = `An error has occured: ${response.message}`;
      throw new Error(message);
    }
    const json = response.json();
    return json;
  }

  static async getAllUsers() {
    const res = await this.request();
    return res;
  }


  static async createUser(data) {
    console.log("Api", data);
    const res = await fetch(`${BASE_URL}/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    });
    if (res.ok === false) {
      const message = `An error has occured: ${res.message}`;
      throw new Error(message);
    }
    let response = await res.json();
    console.log("response", response);
    return response;
  }

  static async activateUser(data) {
    const res = await fetch(`${BASE_URL}/${data.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),

    });
    if (res.ok === false) {
      const message = `An error has occured: ${res.message}`;
      throw new Error(message);
    }

    let response = await res.json();
    console.log("response", response);
    return response;
  }




}

export default YodlrApi;