import React from 'react'
import { ChaptersContext, LangContext } from '../../contexts'
import { Lang } from '../../lang'
import { ChapterContent } from './chapter-content'

export const Chapter = ({ hiddenTitle = false }) => {
    const { chapters } = React.useContext(ChaptersContext)
    const { lang } = React.useContext(LangContext)

    return (
        <div className="space-y-6">
            {!hiddenTitle ? <div className="text-3xl text-purple-500 lg:text-white">{Lang.chapters[lang]}</div> : ''}
            {chapters.map((item, i) => (
                <ChapterContent key={i} title={item.title} contents={item.contents} />
            ))}
        </div>
    )
}
