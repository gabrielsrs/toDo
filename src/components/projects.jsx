import { useState } from "react"
import { Plus, SunMedium, Moon } from "lucide-react"
import { Tree } from "../components/ui/tree-items"
import { DropDownSideItem } from "../components/ui/dropDownSideItem"
import { columns } from "../data/getTodo"

export function Projects() {
    const [isOpen, setIsOpen] = useState([
        { title: "Projects", status: false },
        { title: "Team", status: false },
        { title: "Tasks", status: false },
        { title: "Reminders", status: false },
        { title: "Messengers", status: false }
    ])
    
    function themeLight() {
        document.documentElement.classList.contains('dark') && document.documentElement.classList.toggle('dark')
    }

    function themeDark() {
        document.documentElement.classList.contains('dark') || document.documentElement.classList.toggle('dark')
    }

    function toggleDialog() {
        const dialog = document.querySelector('dialog')
        dialog.showModal()
    }

    const data = [
        {
            title: "Team",
            items: [],
        },
        {
            title: "Projects",
            items: ["All projects (3)", "Design system", "User flow", "Ux"],
        },
        {
            title: "Tasks",
            items: ["All tasks", ...columns],
        },
        {
            title: "Reminders",
            items: [],
        },
        {
            title: "Messengers",
            items: [],
        },
    ]

    return (
        <div className="h-screen w-80 flex flex-col justify-between bg-white dark:bg-projectsComponent text-customGreyWhiteTheme dark:text-white p-7 drop-shadow-[40px_180px_80px_rgba(28,29,34,0.06)] dark:drop-shadow-none">
            <div className="w-[262px] flex flex-col flex-1">
                <div className="h-10 flex justify-between items-center mb-8 mt-0.5">
                    <span className="text-3xl font-bold align-baseline">Projects</span>
                    <div className="h-8 w-8 flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 text-customGreyWhiteTheme/50 dark:text-white/50 cursor-pointer" onClick={toggleDialog}>
                        <Plus size={14} strokeWidth={3}/>
                    </div>
                </div>
                <div className="w-[261px] flex flex-col flex-1 gap-7 text-base font-semibold text-customGreyWhiteTheme/50  dark:text-white/50">
                    {data.map((item, index) => {
                        return (
                            <div key={index}>
                                <DropDownSideItem title={item.title} isOpen={isOpen} setIsOpen={setIsOpen} index={index} />
                                <Tree items={item.items} isOpen={isOpen} index={index}/>
                            </div>
                        )

                    })}
                </div>
            </div>
            <div className="h-[42px] w-[262px] flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.04]	dark:bg-white/10">
                <div className={`h-[34px] w-[127px] flex justify-center items-center gap-1.5 rounded-3xl bg-white dark:bg-white/0 text-customGreyWhiteTheme dark:text-white/50 cursor-pointer`} onClick={() => {themeLight()}}>
                    <SunMedium size={20}/>
                    <span className="text-sm font-semibold">Light</span>
                </div>
                <div className={`h-[34px] w-[127px] flex justify-center items-center gap-1.5 rounded-3xl bg-white/0 dark:bg-white/10 text-customGreyWhiteTheme/50 dark:text-white cursor-pointer`} onClick={() => {themeDark()}}>
                    <Moon size={20}/>
                    <span className="text-sm font-semibold">Dark</span>
                </div>
            </div>
        </div>
    )
}