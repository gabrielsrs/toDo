import { useState, createContext } from 'react'
import './index.css'
import { SideBar } from './components/sidebar'
import { Projects } from './components/projects'
import { Main } from './components/main'
import { Dialog } from "./components/ui/dialog.jsx"

export const Context = createContext()

function App() {
  const [selectedItem, setSelectedItem] = useState([])
  
  return (
    <>
      <SideBar/>
      <Context.Provider value={[selectedItem, setSelectedItem]}>
        <Projects/>
        <Main/>
      </Context.Provider>
      <Dialog />
    </>
  )
}

export default App
