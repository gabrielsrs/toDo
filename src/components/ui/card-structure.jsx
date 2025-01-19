import { Plus, Ellipsis, List, Paperclip, MessageSquareText } from "lucide-react"

import profile1 from "../../assets/profile1.png"
import profile2 from "../../assets/profile2.png"

import tailwindConfig from "../../../tailwind.config"
import resolveConfig from 'tailwindcss/resolveConfig'

export function CardContent({ text, count, cardInfo }) {
    function toggleDialog() {
        const dialog = document.querySelector('dialog')
        dialog.showModal()
    }

    return (
        <div className="max-w-[calc(100%/3)] min-w-[320px] flex flex-col flex-1 gap-4 rounded-xl bg-white dark:bg-customCardContent p-4 outline-customGreyWhiteTheme/[0.08] outline-2 outline-dashed dark:outline-0">
            <div className="max-h-[18px] min-w-[320px] flex flex-1 justify-between items-center mt-1.5 text-customGreyWhiteTheme/50 dark:text-white/50">
                <span className="font-semibold text-sm">{ text } ({ count })</span>
                <div className="flex gap-1.5 cursor-pointer"  onClick={toggleDialog}>
                    <div className="h-[18px] w-[18px] flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10">
                        <Plus size={10} strokeWidth={4}/>
                    </div>
                    <span className="h-[14px] font-semibold text-sm text-customGreyWhiteTheme dark:text-white">Add new task</span>
                </div>
            </div>
            <div className="flex flex-col flex-1 gap-[14px] relative text-customGreyWhiteTheme/50 dark:text-white/50">
                {cardInfo.map((item, index) => {
                    return item.title ? (
                        <div key={index} className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                            <BehindMask/>
                            <Card 
                                title = {item.title} 
                                description = {item.description} 
                                totalQuests = {item.totalQuests} 
                                tasksComplete = {item.tasksComplete} 
                                progressStatusColor = {item.progressStatusColor} 
                                progressCustomBar = {item.progressCustomBar} 
                                messages = {item.messages} 
                                attachment = {item.attachment} 
                                usersCont = {item.usersCont} 
                                date = {item.date} 
                            />
                        </div>
                        ):(
                            <div key={index} className="max-h-[178px] min-w-[320px] flex flex-1 relative">
                                <BehindMask/>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

function Card(props) {
    function toggleDialog() {
        const dialog = document.querySelector('dialog')
        dialog.showModal()
    }

    return (            
        <div className="relative flex flex-col flex-1 gap-5 p-5 rounded-2xl bg-white dark:bg-customCard border-customGreyWhiteTheme/[0.06] border-2 dark:border-0">
            <div className="h-[37px] flex flex-1 justify-between mb-[1px]">
                <div className="flex flex-col gap-1.5 cursor-pointer"  onClick={toggleDialog}>
                    <span className="h-4 font-bold text-base text-customGreyWhiteTheme dark:text-white leading-4">{ props.title }</span>
                    <span className="h-[15px] font-medium text-sm leading-4">{ props.description }</span>
                </div>
                <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 top-0 right-0 cursor-pointer" onClick={toggleDialog}>
                    <Ellipsis size={14} strokeWidth={3}/>
                </div>
            </div>    
            <Progress 
                totalQuests = {props.totalQuests}
                tasksComplete = {props.tasksComplete}
                progressStatusColor = {props.progressStatusColor}
                progressCustomBar = {props.progressCustomBar} 
            />
            <div className="h-[30px] flex flex-1 justify-between items-center">
                <div className="h-[30px] w-[113px] flex justify-center items-center rounded-2xl bg-customDateWhiteTheme/10 dark:bg-white/[0.06]">
                    <span className="font-semibold text-sm text-customDateWhiteTheme dark:text-customDateColor">{props.date}</span>
                </div>
                <CardInteraction 
                    messages = {props.messages}
                    attachment = {props.attachment}
                    usersCont = {props.usersCont}
                />
            </div>
        </div>
    )
}

function BehindMask () {
    return (
        <div className="h-full w-full absolute flex justify-center items-center border-2 border-customGreyWhiteTheme/[0.08] dark:border-white/10 border-dashed rounded-[17px] z-0 top-0 left-0">
            <span className="h-4 font-semibold text-base">Drag your task here...</span>
        </div>
    )
}

function Progress ({ totalQuests, tasksComplete, progressStatusColor, progressCustomBar }) {
    const progressStatus = (tasksComplete/totalQuests) * 100
    const fullConfig = resolveConfig(tailwindConfig)

    return (
        <div className="h-[30px] flex flex-col flex-1 justify-between relative">
            <div className="max-h-4 flex flex-1 justify-between items-center">
                <div className="flex gap-1 items-center">
                    <List size={16} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                    <span className="font-semibold text-sm">Progress</span>
                </div>
                <span className="font-semibold text-sm text-customGreyWhiteTheme dark:text-white">{tasksComplete}/{totalQuests}</span>
            </div>
            <div className="absolute h-1 rounded-3xl bottom-0" style={{
                width: `${progressCustomBar || progressStatus}%`,
                backgroundColor: fullConfig.theme.colors[progressStatusColor]
            }}/>
            <div className='max-h-1 flex flex-1 rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 relative'/>
        </div>
    )
}

function CardInteraction (props) {
    if (props.messages && props.attachment) {
        return (
            <div className="h-[18px] flex gap-3">
                <div className="flex gap-1 items-center">
                    <MessageSquareText size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                    <span className="font-semibold text-sm">{props.messages}</span>
                </div>
                <div className="flex gap-1 items-center">
                    <Paperclip size={18} className="text-customGreyWhiteTheme/60 dark:text-white/60"/>
                    <span className="font-semibold text-sm">{props.attachment}</span>
                </div>
            </div>
        )
    } else if (props.usersCont) {
        return (
            <div className="h-[30px] flex -space-x-3">
                <div className="h-[30px] w-[30px]">
                    <img src={profile1} alt="" className="rounded-3xl"/>
                </div>
                <div className="h-[30px] w-[30px]">
                    <img src={profile2} alt="" className="rounded-3xl"/>
                </div>
                <div className="h-[30px] w-[30px] flex justify-center items-center rounded-3xl bg-white dark:bg-white/[0.06] backdrop-blur border-2 border-customGreyWhiteTheme/[0.12] dark:border-white/[0.12]">
                    <span className="text-xs font-bold text-customGreyWhiteTheme dark:text-white">+{props.usersCont}</span>
                </div>
            </div>
        )
    } else {
        return (
            <></>
        )    
    }
}