import { NavLink } from 'react-router'

import { LayoutGrid, User, Calendar, SquareKanban, CloudUpload, Map, SlidersHorizontal, LogOut } from 'lucide-react';

import { ToDoIcon } from './ui/toDo-icon';
import { CustomEllipsis } from "../components/ui/customEllipsis"

export function SideBar() {
    function toggleDialog() {
        const dialog = document.querySelector('dialog')
        dialog.showModal()
    }
    
    return (
        <aside className='h-screen min-w-[90px] flex flex-col items-center justify-between bg-sidebarComponent'>
            <div className='flex flex-col gap-9 items-center my-6'>
                <div className='flex flex-col items-center gap-10'>
                    <CustomEllipsis onClick={toggleDialog}/>
                    <ToDoIcon />
                </div>

                <NavLink>

                </NavLink>
                <div className='flex flex-col gap-2'>
                    <NavLink to="/">
                        {({ isActive }) => (
                            <div className={`h-12 w-12 flex justify-center items-center rounded-3xl ${isActive ? 'bg-white/10' : ''}`}>
                                <LayoutGrid color='#fff' className={`${isActive ? '' : 'opacity-50'}`} size={22}/>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to="/user">
                        {({ isActive }) => (
                            <div className={`h-12 w-12 flex justify-center items-center rounded-3xl ${isActive ? 'bg-white/10' : ''}`}>
                                <User color='#fff' className={`${isActive ? '' : 'opacity-50'}`} size={22}/>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to="/calendar">
                        {({ isActive }) => (
                            <div className={`h-12 w-12 flex justify-center items-center rounded-3xl ${isActive ? 'bg-white/10' : ''}`}>
                                <Calendar color='#fff' className={`${isActive ? '' : 'opacity-50'}`} size={22}/>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to="/metrics">
                        {({ isActive }) => (
                            <div className={`h-12 w-12 flex justify-center items-center rounded-3xl ${isActive ? 'bg-white/10' : ''}`}>
                                <SquareKanban color='#fff' className={`${isActive ? '' : 'opacity-50'}`} size={22}/>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to="/upload">
                        {({ isActive }) => (
                            <div className={`h-12 w-12 flex justify-center items-center rounded-3xl ${isActive ? 'bg-white/10' : ''}`}>
                                <CloudUpload color='#fff' className={`${isActive ? '' : 'opacity-50'}`} size={22}/>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to="/location">
                        {({ isActive }) => (
                            <div className={`h-12 w-12 flex justify-center items-center rounded-3xl ${isActive ? 'bg-white/10' : ''}`}>
                                <Map color='#fff' className={`${isActive ? '' : 'opacity-50'}`} size={22}/>
                            </div>
                        )}
                    </NavLink>

                    <NavLink to="/settings">
                        {({ isActive }) => (
                            <div className={`h-12 w-12 flex justify-center items-center rounded-3xl ${isActive ? 'bg-white/10' : ''}`}>
                                <SlidersHorizontal color='#fff' className={`${isActive ? '' : 'opacity-50'}`} size={22}/>
                            </div>
                        )}
                    </NavLink>
                </div>
            </div>

            <div className='h-12 w-12 flex justify-center items-center rounded-3xl my-8'>
                <LogOut color='#fff' className='opacity-50 hover:opacity-100 cursor-pointer select-none' size={22}/>
            </div>
            
        </aside>
    )
}