import React from 'react'
import { ChaptersContext, CurrentPathContext } from '../../../contexts'
import { ChapterContentItem } from '../chapter-content'

export const Chapter = () => {
    const { chapters } = React.useContext(ChaptersContext)
    return (
        <div className="space-y-3">
            {chapters.map((item, i) => (
                <ChapterContent key={i} title={item.title} contents={item.contents} />
            ))}
        </div>
    )
}

export const ChapterContent = ({ title, contents }) => {
    const { path } = React.useContext(CurrentPathContext)

    const [current, setCurrent] = React.useState('')

    React.useEffect(() => {
        setCurrent(path.split('/').pop())
    }, [path])

    return (
        <div className="p-4 space-y-4 bg-white border-b">
            <div className="text-xl md:text-2xl text-gray-700">{title}</div>
            {contents.map((item, i) => (
                <ChapterContentItem key={i} item={item} is_current={current === item.code} />
            ))}
        </div>
    )
}
