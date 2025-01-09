import { Plus, SunMedium, Moon, ChevronRight, ChevronDown } from "lucide-react"

export function Projects() {

    function themeLight() {
        document.documentElement.classList.contains('dark') && document.documentElement.classList.toggle('dark')
    }

    function themeDark() {
        document.documentElement.classList.contains('dark') || document.documentElement.classList.toggle('dark')
    }

    return (
        <div className="h-screen w-80 flex flex-col justify-between bg-white dark:bg-projectsComponent text-customGreyWhiteTheme dark:text-white p-7 drop-shadow-[40px_180px_80px_rgba(28,29,34,0.06)] dark:drop-shadow-none">
            <div className="w-[262px] flex flex-col flex-1">
                <div className="h-10 flex justify-between items-center mb-8 mt-0.5">
                    <span className="text-3xl font-bold align-baseline">Projects</span>
                    <div className="h-8 w-8 flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 text-customGreyWhiteTheme/50 dark:text-white/50">
                        <Plus size={14} strokeWidth={3}/>
                    </div>
                </div>
                <div className="w-[261px] flex flex-col flex-1 gap-7 text-base font-semibold text-customGreyWhiteTheme/50  dark:text-white/50">
                    <div>
                        <div className="h-4 flex justify-between items-center">
                            <span>Team</span>
                            <ChevronRight size={14} strokeWidth={3}/>
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-between items-center text-customGreyWhiteTheme dark:text-white mb-4">
                            <span className="font-bold">Projects</span>
                            <ChevronDown size={14} strokeWidth={3}/>
                        </div>
                        <ul className="">
                            <li className="h-9 gap-2 flex mb-[10px]">
                                <div className="h-[46px] w-[15px] relative flex-none">
                                    <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                                    <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                                </div>
                                <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45">
                                    <span className="leading-9 truncate">All projects (3)</span>
                                </div>
                            </li>
                            <li className="h-9 gap-2 flex mb-[10px]">
                                <div className="h-[46px] w-[15px] relative flex-none">
                                    <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                                    <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                                </div>
                                <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45 rounded-3xl bg-customGreyWhiteTheme/[0.04] dark:bg-white/10">
                                    <span className="leading-9 text-customGreyWhiteTheme dark:text-white truncate">Design system</span>
                                </div>
                            </li>
                            <li className="h-9 gap-2 flex mb-[10px]">
                                <div className="h-[46px] w-[15px] relative">
                                    <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                                    <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                                </div>
                                <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45">
                                    <span className="leading-9 truncate">User flow</span>
                                </div>
                            </li>
                            <li className="h-9 gap-2 flex">
                            <div className="h-[46px] w-[15px] relative">
                                    <i className="h-[36px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                                    <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                                </div>
                                <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45">
                                    <span className="leading-9 truncate">Ux</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-between items-center text-customGreyWhiteTheme dark:text-white mb-4">
                            <span className="font-bold">Tasks</span>
                            <ChevronDown size={14} strokeWidth={3}/>
                        </div>
                        <ul className="">
                            <li className="h-9 gap-2 flex mb-[10px]">
                            <div className="h-[46px] w-[15px] relative">
                                    <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                                    <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                                </div>
                                <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45">
                                    <span className="leading-9 truncate">All tasks (11)</span>
                                </div>
                            </li>
                            <li className="h-9 gap-2 flex mb-[10px]">
                                <div className="h-[46px] w-[15px] relative">
                                    <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                                    <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                                </div>
                                <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45">
                                    <span className="leading-9 truncate">To do (4)</span>
                                </div>
                            </li>
                            <li className="h-9 gap-2 flex mb-[10px]">
                            <div className="h-[46px] w-[15px] relative">
                                    <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                                    <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                                </div>
                                <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45 rounded-3xl bg-customGreyWhiteTheme/[0.04] dark:bg-white/10">
                                    <span className="leading-9 text-customGreyWhiteTheme dark:text-white truncate">In progress (4)</span>
                                </div>
                            </li>
                            <li className="h-9 gap-2 flex">
                            <div className="h-[46px] w-[15px] relative">
                                    <i className="h-[36px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                                    <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                                </div>
                                <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45">
                                    <span className="leading-9 truncate">Done</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <div className="flex justify-between">
                            <span>Reminders</span>
                            <ChevronRight size={14} strokeWidth={3}/>
                        </div>
                    </div>
                    <div >
                        <div className="flex justify-between">
                            <span>Messengers</span>
                            <ChevronRight size={14} strokeWidth={3}/>
                        </div>
                    </div>
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