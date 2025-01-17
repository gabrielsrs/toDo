import { SideBar } from "./components/sidebar"

export default function RawPage() {
    return (
        <>
            <SideBar />
            <main className="h-screen w-screen bg-white dark:bg-projectsComponent"/>
        </>
    )
}