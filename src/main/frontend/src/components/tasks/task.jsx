import React, { useState } from 'react'
import TasksAdd from './tasks-add'
import TasksList from './tasks-list'

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
    <div className="row">
      <div className="col-md-2">&nbsp;</div>
      <div className="col-md-8">
        <div id="tasksPanel" className="card">
          <div className="card-header">
            <h3 className="card-title">J-Hipster Tasks</h3>
          </div>
          <div className="card-body">
            <div className="row">
              <div className="col-md-12">
                <TasksAdd tasks={tasks} updateTasks={updateTasks} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <TasksList tasks={tasks} updateTasks={updateTasks} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
