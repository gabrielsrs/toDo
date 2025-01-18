import { ChevronRight, ChevronDown } from "lucide-react"

export function DropDownSideItem({ title, isOpen, setIsOpen, index }) {

    function toggleDropDown(event) {
        const name = event.currentTarget.parentElement.children[0].textContent

        setIsOpen(prevValue => {
            prevValue[index].title = name
            prevValue[index].status = isOpen[index].status === true ? false : true

            return [...prevValue]
        })
    }

    return isOpen[index].status ? (
        <div className="flex justify-between items-center text-customGreyWhiteTheme dark:text-white mb-4">
            <span className="font-bold">{ title }</span>
            <ChevronDown size={14} strokeWidth={3} cursor={'pointer'} onClick={toggleDropDown} />
        </div>
    ):(
        <div className="flex justify-between mb-4">
            <span>{ title }</span>
            <ChevronRight size={14} strokeWidth={3} cursor={'pointer'} onClick={toggleDropDown} />
        </div>
    )
}