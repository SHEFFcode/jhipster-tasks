import React, { useState } from 'react'
import { saveTasks } from '../../utils/taskService'

export default props => {
  const [inputText, updateInputText] = useState('')
  return (
    <div className="form-group">
      <input
        type="text"
        className="form-control"
        placeholder="add new task"
        onChange={e => onInputTextChange(e, updateInputText, props.updateTasks)}
        onKeyUp={e =>
          onInputTextChange(e, updateInputText, props.tasks, props.updateTasks)
        }
        value={inputText}
      />
    </div>
  )
}

function onInputTextChange(e, updateInputText, tasks, updateTasks) {
  if (e.key === 'Enter') {
    return saveTasks({
      name: e.target.value,
      dueDate: getTodayAsString(),
      completed: false,
    }).then(newTask => {
      updateInputText('')
      updateTasks([...tasks, newTask])
    })
  }
  console.log(e.target.value)
  updateInputText(e.target.value)
}

function getTodayAsString() {
  let today = new Date()
  let dd = today.getDate()
  let mm = today.getMonth() + 1
  let yyyy = today.getFullYear()

  if (dd < 10) {
    dd = '0' + dd
  }
  if (mm < 10) {
    mm = '0' + mm
  }

  return `${mm}/${dd}/${yyyy}`
}
