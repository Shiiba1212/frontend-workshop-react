// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { FormEvent, useState } from 'react'
// import './App.css'

type Task = {
  id: string
  title: string
  completed: boolean
}

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    // {id:"1",
    // title:"aaa",
    // completed:false
    // },
    // {id:"2",
    // title:"ttt",
    // completed:true
    // }
  ]
  )
  const [input, setInput] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>){
    event.preventDefault()

    const task: Task = {
      id: crypto.randomUUID(),
      title: input,
      completed: false
    }
    setTasks([...tasks,task])
    setInput('')
  }

  function handleCheckBoxChange(task: Task): void{
    setTasks(tasks.map(t =>{
      if(t.id === task.id)
        return {
         ...t,
         completed: !t.completed
        }
        return t        
    }))
  }

  return (
    <>
      <h1>TODO アプリ</h1>
      {tasks.length > 0 ?
        <>
          <h2>My Tasks</h2>
          <ul>
            {tasks.map(task =>
              <li key={task.id}>
                <input type="checkbox" checked={task.completed}
                onChange={() => handleCheckBoxChange(task)}></input>
                {task.title}
        
              </li>
            )}
          </ul> 
        </> :
        <p>タスクを追加してください</p>
      }
      <form onSubmit={handleSubmit}>
        <input type="text" value={input} onChange={
               ((event) => setInput(event.target.value))
              }/>
        <button type="submit">AddTasks</button>
      </form>
    </>
  )
}

export default App
