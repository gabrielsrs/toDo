export function Tree ({ items, selected=0 }) {
    return (
        <ul className="">
            {items.map((item, index) => {
                return selected === index ? (
                    <li key={index} className="h-9 gap-2 flex mb-[10px]">
                        <div className="h-[46px] w-[15px] relative flex-none">
                            <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                            <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                        </div>
                        <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45 rounded-3xl bg-customGreyWhiteTheme/[0.04] dark:bg-white/10">
                            <span className="leading-9 text-customGreyWhiteTheme dark:text-white truncate">{item}</span>
                        </div>
                    </li>
                ):(
                    <li key={index} className="h-9 gap-2 flex mb-[10px]">
                        <div className="h-[46px] w-[15px] relative flex-none">
                            <i className="h-[46px] w-[2px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute"></i>
                            <i className="h-[2px] w-[13px] bg-customGreyWhiteTheme/10 dark:bg-white/10 absolute top-[18px] left-[2px]"></i>
                        </div>
                        <div className="min-w-0 flex justify-start items-center px-4 py-2 max-w-45">
                            <span className="leading-9 truncate">{item}</span>
                        </div>
                    </li>
                )        
            })}
        </ul>
    )
}