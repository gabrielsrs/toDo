import { useState, useContext } from "react"

import { Search, Bell, Calendar, StretchHorizontal, Plus, Ellipsis } from "lucide-react"
import profile from "../assets/profile.png"

import { CardContent, CardOverlay } from "./ui/card-structure"
import { cardData, columns } from "../data/getTodo.js"
import { Button } from "../components/ui/button.jsx"
import { Context } from "../App.jsx"

import { DndContext, DragOverlay, closestCorners, useSensors, useSensor, PointerSensor, KeyboardSensor } from "@dnd-kit/core"
import { arrayMove, sortableKeyboardCoordinates } from "@dnd-kit/sortable"
import { restrictToWindowEdges } from "@dnd-kit/modifiers"

export function Main() {
    const [search, setSearch] = useState(false)
    const [activeId, setActiveId] = useState();

    function toggleDialog() {
        const dialog = document.querySelector('dialog')
        dialog.showModal()
    }

    const initialTasks = cardData()
    const [tasks, setTasks] = useState(initialTasks)

    function handleDragStart(event) {
        const { id } = event.active

        setActiveId(id)
    }

    function handleDragOver(event) {
        const { active, over, draggingRect } = event
        const taskId = active.id
        const overId = over.id

        const activeContainer = findContainer(taskId)
        const overContainer = findContainer(overId)

        if (!activeContainer || !overContainer || activeContainer === overContainer) return

        setTasks(prevValues => {
            const overItems = prevValues.filter(item => item.status === overContainer)
      
            const activeIndex = getTaskIndex(taskId)
            const overIndex = getTaskIndex(overId)
      
            let newIndex

            const lastItemIndex = overItems.length? getTaskIndex(overItems.slice(-1)[0].id): 0

            if (columns.map(item => item.id).includes(overId) || overItems.slice(-1)[0].id === overId) {
              newIndex = lastItemIndex + 1
            } else {
              const isBelowLastItem = over && overIndex === lastItemIndex - 1 && draggingRect && draggingRect.offsetTop > over.rect.offsetTop + over.rect.height
      
              const modifier = isBelowLastItem ? 1 : 0
      
              newIndex = overIndex >= 0 ? overIndex + modifier : lastItemIndex + 1
            }

            prevValues[activeIndex].status = overContainer
      
            return [
                ...prevValues.filter((item, index) => index <= newIndex && item.id !== taskId),
                tasks[activeIndex],
                ...prevValues.filter((item, index) => index > newIndex && item.id !== taskId)
            ]
          })
    }

    function handleDragEnd(event) {
        const { active, over } = event
        const taskId = active.id
        const overId = over.id

        const activeContainer = findContainer(taskId)
        const overContainer = findContainer(overId)

        if (!activeContainer || !overContainer || activeContainer !== overContainer) return

        const activeIndex = getTaskIndex(taskId)
        const overIndex = getTaskIndex(overId)

        if (activeIndex !== overIndex) {
            setTasks((prevValues) => arrayMove(prevValues, activeIndex, overIndex))
        }
        setActiveId(null)
    }

    function findContainer(id) {
        if (columns.map(item => item.id).includes(id)) {
            return id
        }

        return tasks.find(item => item.id === id && item.status).status
    }

    function getTaskIndex(id) {
        return tasks.findIndex(item => item.id === id)
    }

    const [selectedItem] = useContext(Context)
    
    const sensors = useSensors(
        useSensor(PointerSensor),
        useSensor(KeyboardSensor, {
            coordinateGetter: sortableKeyboardCoordinates
        })
    )

    return (
        <main className="flex flex-col flex-1 bg-white dark:bg-mainComponent px-8 pb-8 pt-[29px]">
            <header className="h-16 flex mb-[1px]">
                <div className="h-9 flex-1 flex justify-between items-center text-customGreyWhiteTheme dark:text-white">
                    <div>
                        <span className="font-bold text-xl">Welcome back, Vincent 👋</span>
                    </div>
                    <div className="flex justify-between items-center gap-6 text-customGreyWhiteTheme dark:text-white">
                        <div className={`flex justify-between items-center gap-2 cursor-pointer rounded-3xl ${search && 'w-57 bg-customGreyWhiteTheme/10 dark:bg-white/10 p-2'}`}>
                            <input type="text" className={`flex-1 ${search ? 'p-1 outline-none bg-transparent' : 'hidden'}`} placeholder="Search"/>
                            <Search size={22} cursor="pointer" onClick={() => setSearch(true)} onDoubleClick={() => setSearch(false)}/>
                        </div>
                        <div className="h-[22px] w-[22px] relative" onClick={toggleDialog}>
                            <div className="h-1.5 w-1.5 absolute top-0.5 right-[3px] rounded-3xl bg-orange-400"></div>
                            <Bell size={22} cursor="pointer"/>
                        </div>
                        <div className="flex justify-between gap-2 cursor-pointer" onClick={toggleDialog}>
                            <Calendar size={22}/>
                            <span className="font-semibold text-base text-customGreyWhiteTheme/50 dark:text-white/50">19 May 2022</span>
                        </div>
                        <div className="h-9 w-9 rounded-3xl cursor-pointer"  onClick={toggleDialog}>
                            <img src={profile} alt="" className="rounded-3xl"/>
                        </div>
                    </div>
                </div>
            </header>
            <menu className="h-[50px] flex flex-col justify-between mb-5">
                <div className="h-[48px] flex justify-between font-semibold text-base text-customGreyWhiteTheme/50 dark:text-white/50">
                    <div className="h-9 w-64 flex flex-1 self-end mr-4">
                        <div className="flex items-start gap-2 text-customGreyWhiteTheme dark:text-white px-[12px] pb-[18px] relative after:block after:absolute after:bg-customGreyWhiteTheme dark:after:bg-white after:h-[2px] after:w-full after:right-0 after:bottom-[-2px] cursor-pointer">
                            <div className="h-[18px] w-[18px] flex justify-center items-center">
                                <StretchHorizontal size={18}/>
                            </div>
                            <span className="h-[18px] leading-[18px]">Board view</span>
                        </div>
                        <div className="flex gap-2 px-[12px] pb-[18px] cursor-pointer" onClick={toggleDialog}>
                            <div className="h-[18px] w-[18px] flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10">
                                <Plus size={10} strokeWidth={4}/>
                            </div>
                            <span className="h-[18px] leading-[18px]">Add view</span>
                        </div>
                    </div>
                    <div className="h-[38px] w-[286px] flex items-center gap-4 self-start">
                        <div className="text-customGreyWhiteTheme dark:text-white cursor-pointer"  onClick={toggleDialog}>
                            <span>Filter</span>
                        </div>
                        <div className="cursor-pointer"  onClick={toggleDialog}>
                            <span>Sort</span>
                        </div>
                        <div className="h-[26px] w-[26px] flex justify-center items-center rounded-3xl border-2 border-customGreyWhiteTheme/10 dark:border-white/10 cursor-pointer"  onClick={toggleDialog}>
                            <Ellipsis size={14} strokeWidth={3}/>
                        </div>
                        <Button type="button">New template</Button>
                    </div>
                </div>
                <hr className="border-[1px] border-customGreyWhiteTheme/[0.08] dark:border-white/10"/>
            </menu>

            <div className="flex flex-1 gap-[22px]">
                <DndContext 
                    sensors={sensors}
                    collisionDetection={closestCorners}
                    onDragStart={handleDragStart} 
                    onDragOver={handleDragOver} 
                    onDragEnd={handleDragEnd}
                >
                    {columns.map((column, index) => {
                        const filteredTasks = tasks.filter(item => item.status === column.id)
                        
                        if (selectedItem.length && selectedItem[2][0]) {
                            return (
                                <CardContent key={column.id} column={column} count={filteredTasks.length} cardInfo={ filteredTasks } activeId={activeId}/>
                            )
                        } else if (selectedItem.length && selectedItem[2][index + 1]) {
                            return (
                                <CardContent key={column.id} column={column} count={filteredTasks.length} cardInfo={ filteredTasks } activeId={activeId}/>
                            )
                        }
                    })}
                    <DragOverlay modifiers={[restrictToWindowEdges]}>{activeId ?<CardOverlay {...tasks.find(item => item.id === activeId)}/>: null}</DragOverlay>
                </DndContext>
            </div>            
        </main>
    )
}