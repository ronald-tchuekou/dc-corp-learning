import React from 'react'
import Prism from 'prismjs'

export const Container = ({ children, is_phone = false }) => {
    return (
        <div
            className={`flex container ${
                is_phone ? '' : 'pt-10 px-7'
            } mx-auto justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4`}
        >
            {children}
        </div>
    )
}

export const Title = ({ children }) => {
    return <div className="text-2xl lg:text-4xl text-black font-bold">{children}</div>
}

export const SubTitle = ({ children }) => {
    return <div className="text-xl lg:text-2xl text-black font-bold">{children}</div>
}

export const Paragraph = ({ children }) => {
    return <div className="text-base lg:text-lg text-gray-700 font-bold">{children}</div>
}

export const Code = ({ code, language = 'js' }) => {
    const ref = React.useRef(null)
    React.useEffect(() => {
        if (ref && ref.current) Prism.highlightElement(ref.current)
    }, [])
    return (
        <div className="rounded-lg overflow-hidden">
            <pre className="line-numbers hljs rounded-lg">
                <code ref={ref} className={`language-${language}`}>
                    {code.trim()}
                </code>
            </pre>
        </div>
    )
}

export const CodeSingle = ({ children }) => {
    return <code className="p-1 text-base bg-purple-200 text-gray-700 rounded-md">{children}</code>
}