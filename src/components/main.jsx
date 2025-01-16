import { Search, Bell, Calendar, StretchHorizontal, Plus, Ellipsis, List, Paperclip, MessageSquareText } from "lucide-react"
import profile from "../assets/profile.png"
import profile1 from "../assets/profile1.png"
import profile2 from "../assets/profile2.png"

export function Main() {
    return (
        <main className="flex flex-col flex-1 bg-white dark:bg-mainComponent px-8 pb-8 pt-[29px]">
            <header className="h-16 flex mb-[1px]">
                <div className="h-9 flex-1 flex justify-between items-center text-customGreyWhiteTheme dark:text-white">
                    <div>
                        <span className="font-bold text-xl">Welcome back, Vincent 👋</span>
                    </div>
                    <div className="flex justify-between items-center gap-6 text-customGreyWhiteTheme dark:text-white">
                        <Search size={22}/>
                        <div className="h-[22px] w-[22px] relative">
                            <div className="h-1.5 w-1.5 absolute top-0.5 right-[3px] rounded-3xl bg-orange-400"></div>
                            <Bell size={22}/>
                        </div>
                        <div className="flex justify-between gap-2">
                            <Calendar size={22}/>
                            <span className="font-semibold text-base text-customGreyWhiteTheme/50 dark:text-white/50">19 May 2022</span>
                        </div>
                        <div className="h-9 w-9 rounded-3xl">
                            <img src={profile} alt="" className="rounded-3xl"/>
                        </div>
                    </div>
                </div>
            </header>
            <menu className="h-[50px] flex flex-col justify-between mb-5">
                <div className="h-[48px] flex justify-between font-semibold text-base text-customGreyWhiteTheme/50 dark:text-white/50">
                    <div className="h-9 w-64 flex flex-1 self-end mr-4">
                        <div className="flex items-start gap-2 text-customGreyWhiteTheme dark:text-white px-[12px] pb-[18px] relative after:block after:absolute after:bg-customGreyWhiteTheme dark:after:bg-white after:h-[2px] after:w-full after:right-0 after:bottom-[-2px]">
                            <div className="h-[18px] w-[18px] flex justify-center items-center">
                                <StretchHorizontal size={18}/>
                            </div>
                            <span className="h-[18px] leading-[18px]">Board view</span>
                        </div>
                        <div className="flex gap-2 px-[12px] pb-[18px]">
                            <div className="h-[18px] w-[18px] flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10">
                                <Plus size={10} strokeWidth={4}/>
                            </div>
                            <span className="h-[18px] leading-[18px]">Add view</span>
                        </div>
                    </div>
                    <div className="h-[38px] w-[286px] flex items-center gap-4 self-start">
                        <div className="text-customGreyWhiteTheme dark:text-white">
                            <span>Filter</span>
                        </div>
                        <div>
                            <span>Sort</span>
                        </div>
                        <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/10 dark:border-white/10">
                            <Ellipsis size={14} strokeWidth={3}/>
                        </div>
                        <div className="h-[38px] w-36 flex justify-center items-center text-sm text-white rounded-3xl bg-customGreyWhiteTheme dark:bg-customButton">
                            <button>New template</button>
                        </div>
                    </div>
                </div>
                <hr className="border-[1px] border-customGreyWhiteTheme/[0.08] dark:border-white/10"/>
            </menu>
            <div className="flex flex-1 gap-[22px]">
                <div className="min-w-[320px] flex flex-col flex-1 gap-4 rounded-xl bg-white dark:bg-customCardContent p-4 outline-customGreyWhiteTheme/[0.08] outline-2 outline-dashed dark:outline-0">
                    <div className="max-h-[18px] min-w-[320px] flex flex-1 justify-between items-center mt-1.5 text-customGreyWhiteTheme/50 dark:text-white/50">
                        <span className="font-semibold text-sm">To do (4)</span>
                        <div className="flex gap-1.5">
                            <div className="h-[18px] w-[18px] flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10">
                                <Plus size={10} strokeWidth={4}/>
                            </div>
                            <span className="h-[14px] font-semibold text-sm text-customGreyWhiteTheme dark:text-white">Add new task</span>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-[14px] relative text-customGreyWhiteTheme/50 dark:text-white/50">
                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Design new ui presentation</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Dribbble marketing</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">7/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[70%] before:h-1 before:rounded-3xl before:bg-customYellowProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">24 Aug 2022</span>
                                    </div>
                                    <div className="h-[18px] flex gap-3">
                                        <div className="flex gap-1 items-center">
                                            <MessageSquareText size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">7</span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Paperclip size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Add more ui/ux mockups</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Pinterest promotion</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">4/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[40%] before:h-1 before:rounded-3xl before:bg-customYellowProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">24 Aug 2022</span>
                                    </div>
                                    <div className="h-[30px] flex -space-x-3">
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px] flex justify-center items-center rounded-3xl bg-white dark:bg-white/[0.06] backdrop-blur border-2 border-customGreyWhiteTheme/[0.12] dark:border-white/[0.12]">
                                            <span className="text-xs font-bold text-customGreyWhiteTheme dark:text-white">+2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Design few mobile screens</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Dropbox mobile app</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">3/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[30%] before:h-1 before:rounded-3xl before:bg-customRedProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">24 Aug 2022</span>
                                    </div>
                                    <div className="h-[18px] flex gap-3">
                                        <div className="flex gap-1 items-center">
                                            <MessageSquareText size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">6</span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Paperclip size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Create a tweet and promote</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Twitter marketing</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">2/14</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[20%] before:h-1 before:rounded-3xl before:bg-customRedProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">24 Aug 2022</span>
                                    </div>
                                    <div className="h-[30px] flex -space-x-3">
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px] flex justify-center items-center rounded-3xl bg-white dark:bg-white/[0.06] backdrop-blur border-2 border-customGreyWhiteTheme/[0.12] dark:border-white/[0.12]">
                                            <span className="text-xs font-bold text-customGreyWhiteTheme dark:text-white">+2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="min-w-[320px] flex flex-col flex-1 gap-4 rounded-xl bg-white dark:bg-customCardContent p-4 outline-customGreyWhiteTheme/[0.08] outline-2 outline-dashed dark:outline-0">
                    <div className="max-h-[18px] min-w-[320px] flex flex-1 justify-between items-center mt-1.5 text-customGreyWhiteTheme/50 dark:text-white/50">
                        <span className="font-semibold text-sm">In progress (4)</span>
                        <div className="flex gap-1.5">
                            <div className="h-[18px] w-[18px] flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10">
                                <Plus size={10} strokeWidth={4}/>
                            </div>
                            <span className="h-[14px] font-semibold text-sm text-customGreyWhiteTheme dark:text-white">Add new task</span>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-[14px] relative text-customGreyWhiteTheme/50 dark:text-white/50">
                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Design system update</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Oreo website project</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">3/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[30%] before:h-1 before:rounded-3xl before:bg-customYellowProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">12 Nov 2022</span>
                                    </div>
                                    <div className="h-[30px] flex -space-x-3">
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px] flex justify-center items-center rounded-3xl bg-white dark:bg-white/[0.06] backdrop-blur border-2 border-customGreyWhiteTheme/[0.12] dark:border-white/[0.12]">
                                            <span className="text-xs font-bold text-customGreyWhiteTheme dark:text-white">+2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Create brand guideline</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Oreo branding project</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">7/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[70%] before:h-1 before:rounded-3xl before:bg-customYellowProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">13 Nov 2022</span>
                                    </div>
                                    <div className="h-[18px] flex gap-3">
                                        <div className="flex gap-1 items-center">
                                            <MessageSquareText size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">2</span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Paperclip size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">13</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Create wireframe for ios app</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Oreo ios app project</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">4/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[40%] before:h-1 before:rounded-3xl before:bg-customRedProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">14 Nov 2022</span>
                                    </div>
                                    <div className="h-[30px] flex -space-x-3">
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px] flex justify-center items-center rounded-3xl bg-white dark:bg-white/[0.06] backdrop-blur border-2 border-customGreyWhiteTheme/[0.12] dark:border-white/[0.12]">
                                            <span className="text-xs font-bold text-customGreyWhiteTheme dark:text-white">+2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Create ui kit for layout</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Crypto mobile app</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">3/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[30%] before:h-1 before:rounded-3xl before:bg-customRedProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">15 Nov 2022</span>
                                    </div>
                                    <div className="h-[18px] flex gap-3">
                                        <div className="flex gap-1 items-center">
                                            <MessageSquareText size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">23</span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Paperclip size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">12</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="min-w-[320px] flex flex-col flex-1 gap-4 rounded-xl bg-white dark:bg-customCardContent p-4 outline-customGreyWhiteTheme/[0.08] outline-2 outline-dashed dark:outline-0">
                    <div className="max-h-[18px] min-w-[320px] flex flex-1 justify-between items-center mt-1.5 text-customGreyWhiteTheme/50 dark:text-white/50">
                        <span className="font-semibold text-sm">Done (3)</span>
                        <div className="flex gap-1.5">
                            <div className="h-[18px] w-[18px] flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10">
                                <Plus size={10} strokeWidth={4}/>
                            </div>
                            <span className="h-[14px] font-semibold text-sm text-customGreyWhiteTheme dark:text-white">Add new task</span>
                        </div>
                    </div>
                    <div className="flex flex-col flex-1 gap-[14px] relative text-customGreyWhiteTheme/50 dark:text-white/50">
                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Add product to the market</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Ui8 marketplace</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">10/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[100%] before:h-1 before:rounded-3xl before:bg-customGreenProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">6 Jan 2022</span>
                                    </div>
                                    <div className="h-[18px] flex gap-3">
                                        <div className="flex gap-1 items-center">
                                            <MessageSquareText size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">1</span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Paperclip size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">5</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Launch product promotion</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Kickstarter campaign</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">10/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[100%] before:h-1 before:rounded-3xl before:bg-customGreenProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">7 Jan 2022</span>
                                    </div>
                                    <div className="h-[18px] flex gap-3">
                                        <div className="flex gap-1 items-center">
                                            <MessageSquareText size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">17</span>
                                        </div>
                                        <div className="flex gap-1 items-center">
                                            <Paperclip size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">3</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                            <div className="flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard z-10 border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
                                <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                                    <div className="flex flex-col gap-1.5">
                                        <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">Make twitter banner</span>
                                        <span className="h-[15px] font-medium text-sm leading-4">Twitter marketing</span>
                                    </div>
                                    <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0">
                                        <Ellipsis size={14} strokeWidth={3}/>
                                    </div>
                                </div>
                                <div className="h-[30px] flex flex-col flex-1 justify-between">
                                    <div className="max-h-4 flex flex-1 justify-between items-center">
                                        <div className="flex gap-1 items-center">
                                            <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                                            <span className="font-semibold text-sm">Progress</span>
                                        </div>
                                        <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">10/10</span>
                                    </div>
                                    <div className="max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative before:absolute before:w-[100%] before:h-1 before:rounded-3xl before:bg-customGreenProgress"></div>
                                </div>
                                <div className="h-[30px] flex flex-1 justify-between items-center">
                                    <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                                        <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">8 Jan 2022</span>
                                    </div>
                                    <div className="h-[30px] flex -space-x-3">
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile1} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px]">
                                            <img src={profile2} alt="" className="rounded-3xl"/>
                                        </div>
                                        <div className="h-[30px] w-[30px] flex justify-center items-center rounded-3xl bg-white dark:bg-white/[0.06] backdrop-blur border-2 border-customGreyWhiteTheme/[0.12] dark:border-white/[0.12]">
                                            <span className="text-xs font-bold text-customGreyWhiteTheme dark:text-white">+2</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
                                <span className="h-4 font-semibold text-base">Drag your task here...</span>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    )
}