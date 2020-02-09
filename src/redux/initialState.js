let user = JSON.parse(localStorage.getItem("users"));
export default {
  members: [],
  tasks: [],
  currentUser: user ? { loggedIn: true, user } : { loggedIn: false },
  buttonStatus: { clicked: false },
  errors: { exists: false, message: "" }
};
