import './index.css'
import { SideBar } from './components/sidebar'
import { Projects } from './components/projects'
import { Main } from './components/main'
import { Dialog } from "./components/ui/dialog.jsx"


function App() {
  return (
    <>
      <SideBar/>
      <Projects/>
      <Main/>
      <Dialog />
    </>
  )
}

export default App
