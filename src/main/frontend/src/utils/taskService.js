export function getTasks() {
  return fetch('/api/tasks').then(response => response.json())
}

export function saveTasks(task) {
  return fetch('/api/tasks', {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(response => response.json())
}
