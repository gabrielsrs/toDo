import { useState } from "react";

export function Tree({ items, isOpen, index }) {
    const [selectedItem, setSelectedItem] = useState(items.map((_, i) => i === 0))

    function selectItem(ind) {
        setSelectedItem(prevValue => prevValue.map((_, i) => i === ind))
    }

    return isOpen[index].status ? (
        <ul>
            {items.map((item, i) => (
                <li key={i} className="h-9 gap-2 flex mb-[10px]">
                    <div className="h-[46px] w-[15px] relative flex-none">
                        <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                        <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                    </div>
                    <div className={`min-w-0 flex justify-start items-center px-4 py-2 max-w-45 rounded-3xl ${selectedItem[i] ? "bg-customGreyWhiteTheme/[0.04] dark:bg-white/10" : ""} cursor-pointer`} onClick={() => selectItem(i)}>
                        <span className={`leading-9 truncate ${selectedItem[i] ? "text-customGreyWhiteTheme dark:text-white" : ""}`}>{ item }</span>
                    </div>
                </li>
            ))}
        </ul>
    ):(<></>)
}