import React from 'react'
import { LangContext } from '../../../contexts'
import { Lang } from '../../../lang'

export const PlayCourseTeacher = () => {
    const { lang } = React.useContext(LangContext)
    return (
        <div className="">
            <div className="text-base text-gray-500 text-right">
                {Lang.publish_at[lang]} {'12 Jan 2020'}
            </div>
            <div className="text-2xl font-medium text-black py-4">{Lang.users_techno[lang]}</div>
            <div className="border-t border-b border-purple-400">
                <div className="text-xl text-gray-600 py-3 px-5">JavaScript</div>
            </div>
            <div className="flex flex-row space-x-5 items-center p-5">
                <div className="flex-none w-20 h-20 overflow-hidden rounded-full border-2 border-purple-700">
                    <img src="/images/code_img.jpg" alt="Code image" className="w-full h-full" />
                </div>
                <div className="w-full text-xl text-gray-600">
                    <div className="text-black font-bold">{Lang.author[lang]} :</div>
                    <div className="font-semibold">{'RonCoder'}</div>
                </div>
            </div>
        </div>
    )
}
