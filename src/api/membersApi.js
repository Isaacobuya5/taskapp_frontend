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
export function loginUser(email, password) {
  return fetch(`${baseUri}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(response => response.json()).then(user => {
      localStorage.setItem("user", JSON.stringify(user));
      return user;
    })
    .catch(error => console.log(error));
}

export function logoutUser() {
      // remove user from local storage to log user out
    localStorage.removeItem('user');
}
