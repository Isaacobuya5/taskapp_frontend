export function authHeader() {
  // return authorization header with jwt token
  let user = JSON.parse(localStorage.getItem("user"));

  if (user && user.token) {
    return { Authorization: "Bearer " + user.token };
  } else {
    return {};
  }
}

// handle response
export async function handleResponse(response) {
  console.log(response.error());
  if (response.ok) return response.json();
  if (response.status === 400 || 401) {
    // So, a server-side validation error occurred.
    // Server side validation returns a string error message, so parse as text instead of json.
    const error = await response.text();
    console.log(error);
    throw new Error(error);
  }
  throw new Error("Network response was not ok.");
}

// handle error
// In a real app, would likely call an error logging service.
export function handleError(error) {
  // eslint-disable-next-line no-console
  console.error("API call failed. " + error);
  throw error;
}

// logout a user
function logoutUser() {
  // remove a user from local storage to log out
  localStorage.removeItem("user");
}
