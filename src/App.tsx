import React, { useState, useEffect } from 'react'
import TaskList from './components/TaskList'
import TaskInput from './components/TaskInput'
import { Task } from './Types'
import './App.css'

const App: React.FC = () => {
  let data: string|null = localStorage.getItem('tasks');
  const initialState: Task[] = data ? JSON.parse(data) : []
  const [tasks, setTasks] = useState(initialState)

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  })

  return (
    <div>
      <TaskInput tasks={tasks} setTasks={setTasks} />
      <TaskList tasks={tasks} setTasks={setTasks} />
    </div>
  )
}

export default App
