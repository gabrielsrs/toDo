import { LayoutGrid, User, Calendar, SquareKanban, CloudUpload, Map, SlidersHorizontal, LogOut } from 'lucide-react';

import { ToDoIcon } from './ui/toDo-icon';
import { CustomEllipsis } from "../components/ui/customEllipsis"

export function SideBar() {
    return (
        <aside className='h-screen min-w-[90px] flex flex-col items-center justify-between bg-sidebarComponent'>
            <div className='flex flex-col gap-9 items-center my-6'>
                <div className='flex flex-col items-center gap-10'>
                    <CustomEllipsis />
                    <ToDoIcon/>
                </div>

                <div className='flex flex-col gap-2'>
                    <div className='h-12 w-12 flex justify-center items-center rounded-3xl bg-white/10'>
                        <LayoutGrid color='#fff' size={22}/>
                    </div>
                    
                    <div className='h-12 w-12 flex justify-center items-center rounded-3xl'>
                        <User color='#fff' className='opacity-50' size={22}/>
                    </div>

                    <div className='h-12 w-12 flex justify-center items-center rounded-3xl'>
                        <Calendar color='#fff' className='opacity-50' size={22}/>
                    </div>

                    <div className='h-12 w-12 flex justify-center items-center rounded-3xl'>
                        <SquareKanban color='#fff' className='opacity-50' size={22}/>
                    </div>

                    <div className='h-12 w-12 flex justify-center items-center rounded-3xl'>
                        <CloudUpload color='#fff' className='opacity-50' size={22}/>
                    </div>

                    <div className='h-12 w-12 flex justify-center items-center rounded-3xl'>
                        <Map color='#fff' className='opacity-50' size={22}/>
                    </div>

                    <div className='h-12 w-12 flex justify-center items-center rounded-3xl'>
                        <SlidersHorizontal color='#fff' className='opacity-50' size={22}/>
                    </div>

                </div>
            </div>

            <div className='h-12 w-12 flex justify-center items-center rounded-3xl my-8'>
                <LogOut color='#fff' className='opacity-50' size={22}/>
            </div>
            
        </aside>
    )
}