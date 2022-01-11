/*
 * Tabs file.
 *@author Ronald Tcheukou.
 */

/**
 * Function to manager the tabs.
 * @returns React.JSXElement
 */
export const TabGroup = ({ children, className }) => {
    return <div className={`bg-white ${className}`}>{children}</div>
}

export const TabHeader = ({ children }) => {
    return <div className="flex mt-10 flex-row border-b">{children}</div>
}

export const TabHeaderItem = ({ children, selected = false, onCLick = () => {}, label = '' }) => {
    return (
        <button onClick={onCLick} className="flex-1">
            <div
                className={` transition flex flex-row justify-center items-center ${
                    selected ? 'text-green-400' : 'text-gray-500'
                } text-xl px-5 py-3`}
            >
                {children}
                &nbsp;
                <span className="overflow-ellipsis overflow-hidden whitespace-nowrap">{label}</span>
            </div>
            <div className={` transition h-1 rounded-lg ${selected ? 'bg-green-400' : 'bg-opacity-0'} mx-5`}></div>
        </button>
    )
}

export const TabContent = ({ children }) => {
    return <div className="w-full">{children}</div>
}

export const TabContentItem = ({ children, selected }) => {
    return <div className={`p-3 ${selected ? '' : 'hidden'}`}>{children}</div>
}
