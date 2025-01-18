import { X } from "lucide-react"

export function Dialog() {
    function toggleDialog() {
        const dialog = document.querySelector('dialog')
        dialog.close()
    }

    return (
        <dialog className={`h-[900px] w-[500px] self-center bg-white dark:bg-customCardContent p-2 rounded-3xl backdrop:bg-ray-400/40/40 backdrop:dark:bg-gray-400/40 border-none outline-none`}>
            <div className="flex justify-end items-center">
                <div className="h-8 w-8 flex justify-center items-center rounded-3xl bg-customGreyWhiteTheme/[0.08] dark:bg-white/10 text-customGreyWhiteTheme/50 dark:text-white/50 cursor-pointer" onClick={toggleDialog}>
                    <X size={14} strokeWidth={3}/>
                </div>
            </div>
        </dialog>
    )
}