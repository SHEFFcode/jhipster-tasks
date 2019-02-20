import React from 'react'
import TasksAdd from './tasks-add'
import TasksList from './tasks-list'

export default props => {
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
                <TasksAdd />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <TasksList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
