export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.token) {
        return { 'Authorization': 'Bearer ' + user.token };
    } else {
        return {};
    }
}

// logout a user
function logoutUser() {
    // remove a user from local storage to log out
    localStorage.removeItem('user');
}