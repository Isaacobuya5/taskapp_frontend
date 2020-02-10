// const baseUri = "http://localhost:4000/api/tasks";

const baseUri = "https://taskapiapp.herokuapp.com/api/tasks";

export function getAllTasks() {
  const token = localStorage.token;
  const user = JSON.parse(localStorage.getItem("users"));
  const { username } = user;
  return fetch(`${baseUri}/fetch`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ username: username })
  })
    .then(response => {
      if (response.ok) return response.json();
      if (response.status === 400) {
        throw new Error("An error occurred");
      }
    })
    .catch(error => console.log(error));
}

export function addingNewTask(task) {
  // checking for available token
  const user = JSON.parse(localStorage.getItem("users"));
  const { username } = user;
  const token = localStorage.token;
  return fetch(baseUri, {
    method: "POST",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify({ ...task, username: username })
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

// UPDATE TASK
export function editTask(task) {
  return fetch(baseUri + `/${task._id}`, {
    method: "PUT",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(task)
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}

// delete a task
export function deleteTask(taskId) {
  const token = localStorage.token;
  return fetch(baseUri + `/${taskId}`, {
    method: "DELETE",
    headers: {
      "content-type": "application/json",
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}
