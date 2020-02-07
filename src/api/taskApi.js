const baseUri = "http://localhost:4000/api/tasks";

export function getAllMembers() {
  return fetch(baseUri)
    .then(response => response.json())
    .catch(error => console.log(error));
}

export function addingNewTask(task) {
  return fetch(baseUri, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(task)
  })
    .then(response => response.json())
    .catch(error => console.log(error));
}
