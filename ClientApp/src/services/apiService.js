export class Api {
  static async get(endpoint, param) {}

  static async post(endpoint, body) {
    let data = null;

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
      });
      data = await response.json();
    } catch (error) {
      console.log("error", error);
    }

    return data;
  }
}
