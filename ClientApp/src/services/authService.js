import {Api} from "./apiService";

export async function loginUser(model) {
  let data = await Api.post("/api/auth/login", model);
  return data;
}

export async function registerUser(model) {
    let data = await Api.post("/api/register", model);
    return data
}
