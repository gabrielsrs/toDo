import { ChevronRight, ChevronDown } from "lucide-react"
import { useState } from "react"

export function DropDownSideItem({ title }) {
    const [isOpen, setIsOpen] = useState(false)

    return isOpen ? (
        <div className="flex justify-between items-center text-customGreyWhiteTheme dark:text-white mb-4">
            <span className="font-bold">{ title }</span>
            <ChevronDown size={14} strokeWidth={3} cursor={'pointer'} onClick={() => setIsOpen(false)} />
        </div>
    ):(
        <div className="flex justify-between mb-4">
            <span>{ title }</span>
            <ChevronRight size={14} strokeWidth={3} cursor={'pointer'} onClick={() => setIsOpen(true)} />
        </div>
    )
}