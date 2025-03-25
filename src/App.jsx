import { useState, createContext, useContext } from 'react'
import './index.css'
import { SideBar } from './components/sidebar'
import { Projects } from './components/projects'
import { Main } from './components/main'
import { Dialog } from "./components/ui/dialog.jsx"
import { cardData } from './data/getTodo.js'
import { ThemeContext } from "./theme.jsx";


export const ChoseColumn = createContext()
export const Tasks = createContext()

function App() {
  const { theme } = useContext(ThemeContext)
  const [selectedItem, setSelectedItem] = useState([])

  const initialTasks = cardData()
  const [tasks, setTasks] = useState(initialTasks)
  
  return (
    <div className={`flex w-full ${theme}`}>
      <SideBar/>
      <Tasks.Provider value={[tasks, setTasks]}>
        <ChoseColumn.Provider value={[selectedItem, setSelectedItem]}>
          <Projects/>
          <Main/>
        </ChoseColumn.Provider>
      </Tasks.Provider>
      <Dialog />
    </div>
  )
}

export default App
