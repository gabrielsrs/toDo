export function Button (props) {
    function toggleDialog() {
        const dialog = document.querySelector('dialog')
        dialog.showModal()
    }

    return (
        <button className="h-[38px] w-36 flex justify-center items-center text-sm text-white rounded-3xl bg-customGreyWhiteTheme dark:bg-customButton" {...props} onClick={toggleDialog}/>
    )
}