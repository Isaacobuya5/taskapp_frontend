import { handleResponse, handleError } from "./apiUtilities";
const baseUri = "http://localhost:4000/api/users";

export function saveMember(member) {
  return fetch(baseUri, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(member)
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

// login a user
// export function loginUser(email, password) {
//   return fetch(`${baseUri}/login`, {
//     method: "POST",
//     headers: { "content-type": "application/json" },
//     body: JSON.stringify({ email, password })
//   })
//     .then(response => {
//       return response.json();
//     })
//     .then(user => {
//       console.log(user);
//       console.log(user.user);
//       // localStorage.setItem("validUser", JSON.stringify(user));
//       console.log(user.token);
//       localStorage.setItem("token", user.token);
//       localStorage.setItem("users", JSON.stringify(user.user));
//       return user;
//     })
//     .catch(error => console.log(error));
// }
let errorMessage = null;
let errorsArray = [];

export function loginUser(email, password) {
  return fetch(`${baseUri}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(response => {
      if (!response.ok) {
        errorMessage = `${response.statusText} - User log in failed`;
        errorsArray.push(errorMessage);
        throw new Error(errorMessage);
        // throw new Error(errorMessage);
      }
      return response.json();
    })
    .then(user => {
      console.log(user);
      console.log(user.user);
      // localStorage.setItem("validUser", JSON.stringify(user));
      console.log(user.token);
      localStorage.setItem("token", user.token);
      localStorage.setItem("users", JSON.stringify(user.user));
      return user;
    })
    .catch(error => console.log(error));
}

export function logoutUser() {
  // remove user from local storage to log user out
  const token = localStorage.token;
  localStorage.removeItem("token");
  localStorage.removeItem("users");
  return fetch(`${baseUri}/logout`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

// reset password email form post
export function resetPassword(email) {
  return fetch(`${baseUri}/forgot_password`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email })
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

// verify link
export function createNewPassword(token) {
  return fetch(`${baseUri}/${token}`)
    .then(response => response.json())
    .catch(error => console.log(error));
}

// update the password for user
export function updatePassword(user) {
  return fetch(`${baseUri}/new_password/create`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}
