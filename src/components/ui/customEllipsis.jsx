export function CustomEllipsis(props) {
    return (
        <div className={`h-1.5 w-[34px] flex gap-2 cursor-pointer`} {...props}>
            <i className='h-1.5 w-1.5 rounded-3xl bg-white'/>
            <i className='h-1.5 w-1.5 rounded-3xl bg-white/40'/>
            <i className='h-1.5 w-1.5 rounded-3xl bg-white/20'/>
        </div>
    )
}