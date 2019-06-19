import {Api} from "./apiService";
import {saveUserToStorage} from "./localStorageService";

export async function loginUser(model) {
  let data = await Api.post("/api/auth/login", model);

  // if (data) {
  //   saveUserToStorage(model)
  // }

  return data;
}

export async function registerUser(model) {
    let data = await Api.post("/api/register", model);
    return data
}
