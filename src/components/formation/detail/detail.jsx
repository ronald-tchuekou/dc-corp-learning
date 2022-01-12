import React from 'react'
import { LangContext } from '../../../contexts'
import { Lang } from '../../../lang'

export const PlayCourseDetails = ({}) => {
    const { lang } = React.useContext(LangContext)
    return (
        <div className="mb-1">
            <div className="text-3xl lg:text-5xl text-black font-semibold">{Lang.about_this_cours[lang]}</div>
        </div>
    )
}
