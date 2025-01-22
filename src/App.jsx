import { useState, createContext } from 'react'
import './index.css'
import { SideBar } from './components/sidebar'
import { Projects } from './components/projects'
import { Main } from './components/main'
import { Dialog } from "./components/ui/dialog.jsx"
import { cardData } from './data/getTodo.js'

export const ChoseColumn = createContext()
export const Tasks = createContext()

function App() {
  const [selectedItem, setSelectedItem] = useState([])

  const initialTasks = cardData()
  const [tasks, setTasks] = useState(initialTasks)
  
  return (
    <>
      <SideBar/>
      <Tasks.Provider value={[tasks, setTasks]}>
        <ChoseColumn.Provider value={[selectedItem, setSelectedItem]}>
          <Projects/>
          <Main/>
        </ChoseColumn.Provider>
      </Tasks.Provider>
      <Dialog />
    </>
  )
}

export default App
