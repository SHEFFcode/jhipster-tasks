import React, { useState } from 'react'

const tasksList = [
  {
    id: 1,
    completed: true,
    due: '10/08/2017',
    name: 'task1',
  },
  {
    id: 2,
    completed: false,
    due: '07/08/2017',
    name: 'task2',
  },
  {
    id: 3,
    completed: true,
    due: '03/08/2017',
    name: 'task3',
  },
]

export default props => {
  const [tasks, updateTasks] = useState(tasksList)
  return (
    <ul className="list-group">
      {tasks.map((task, index) => (
        <li key={index} className="list-group-item">
          <div className="task-checkbox">
            <input
              type="checkbox"
              className={'list-group-item'}
              onChange={e => onTaskChange(e, task, updateTasks, tasks)}
              checked={task.completed}
            />
            <span className={task.completed ? 'name completed' : 'name'}>
              {task.name}
            </span>
            <span className={`badge ${getDueDateLabel(task)} pull-right`}>
              {task.due}
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

function getDueDateLabel(task) {
  return task.completed ? 'badge-success' : 'badge-primary'
}

function onTaskChange(e, task, updateTasks, tasks) {
  const index = task.id - 1
  const newTasks = [...tasks]
  task.completed = !task.completed
  newTasks[index] = task
  updateTasks(newTasks)
  // fetch({ url: '', method: 'POST' })
  console.log('task has changed')
}
