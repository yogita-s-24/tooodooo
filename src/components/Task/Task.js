import React from 'react'
import './Task.css'

const Task = ({id, title, description, priority}) => {
  return (
    <div className='card-container'>
      <p className='random-id'>{id}</p>
      <p className='card-title'>{title}</p>
      <p className='card-description'>{description}</p>
      <p className='card-priority'>{priority}</p>

      <div className='remove-update-task'>
      <span className='remove-task'>❌</span>
      <img src="https://cdn-icons-png.flaticon.com/128/227/227104.png" height="20px" className='update-task'/>

      </div>
    </div>
  )
}

export default Task
