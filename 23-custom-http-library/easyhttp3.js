/**
 * EasyHTTP Library
 * Library for making HTTP requests
 *
 * @version 3.0.0
 * @author  Brad Traversy
 * @license MIT
 *
 **/

class easyHTTP {
  async get(url) {
    const response = await fetch(url);
    const data = await response.json();
  }

  // make post request
  async post(url, data) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const result = await "Update complete";
    return result;
  }

  async put(url, data) {
    const response = await fetch(`${url}/1`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json/",
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;
  }

  async delete(url, data) {
    const response = await fetch(`${url}/1`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
      },
      body : JSON.stringify(data),
    });

    return await "Deleted comiited";
  }
}
