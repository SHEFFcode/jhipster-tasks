import React, { useState, useEffect } from 'react'
import { getTasks, saveTasks } from '../../utils/taskService'

export default props => {
  useEffect(() => {
    getTasks()
      .then(tasks => props.updateTasks(tasks))
      .catch(err => console.log(err))
  }, [])
  return (
    <ul className="list-group">
      {props.tasks.map((task, index) => (
        <li key={index} className="list-group-item">
          <div className="task-checkbox">
            <input
              type="checkbox"
              className={'list-group-item'}
              onClick={e =>
                onTaskChange(e, task, props.updateTasks, props.tasks)
              }
              checked={task.completed}
            />
            <span className={task.completed ? 'name completed' : 'name'}>
              {task.name}
            </span>
            <span className={`badge ${getDueDateLabel(task)} pull-right`}>
              {task.dueDate}
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
  saveTasks(task)
  console.log('task has changed')
}
