import { useContext } from "react";
import { SideBar } from "./components/sidebar"
import { Dialog } from "./components/ui/dialog"
import { ThemeContext } from "./theme.jsx";

export default function RawPage() {
    const { theme } = useContext(ThemeContext)
    return (
        <div className={`flex w-full ${theme}`}>
            <SideBar />
            <main className="h-screen w-screen bg-white dark:bg-projectsComponent"/>
            <Dialog />
        </div>
    )
}