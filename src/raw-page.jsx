import { SideBar } from "./components/sidebar"
import { Dialog } from "./components/ui/dialog"

export default function RawPage() {
    return (
        <>
            <SideBar />
            <main className="h-screen w-screen bg-white dark:bg-projectsComponent"/>
            <Dialog />
        </>
    )
}