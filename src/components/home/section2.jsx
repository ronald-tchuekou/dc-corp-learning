import React from 'react'
import { HomeSaly } from '../svg'
import { useRouter } from 'next/router'
import { LangContext } from '../../contexts'
import { Lang } from '../../lang'

export const Section2 = () => {
    const router = useRouter()
    const { lang } = React.useContext(LangContext)
    return (
        <div className=" flex container py-10 px-7 mx-auto flex-col justify-center items-center lg:flex-row">
            <div className="flex-1">
                <HomeSaly />
            </div>
            <div className="flex-1 py-5">
                <div className="text-4xl md:text-5xl text-center lg:text-left lg:text-6xl text-black font-bold">
                    {Lang.try_at_your_own[lang]}
                    <span className="text-purple-700"> {Lang.pace_and_availability[lang]}.</span>
                </div>
                <p className="text-gray-500 text-2xl my-4 text-center lg:text-left">{Lang.home_section2_text[lang]}</p>
                <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                    <button
                        onClick={() => router.push('/login?subscribe=true')}
                        className="flex-1 transition hover:shadow-md duration-300 bg-purple-700 hover:bg-purple-900 py-1 px-4 text-white font-medium rounded-lg text-xl"
                    >
                        {Lang.create_account[lang]}
                    </button>
                    <button
                        onClick={() => router.push('/formations')}
                        className="flex-1 transition hover:shadow-md duration-300 border-2 border-purple-700 hover:bg-purple-100 py-1 px-4 text-purple-700 font-medium rounded-lg text-xl"
                    >
                        {Lang.see_all_formations[lang]}
                    </button>
                </div>
            </div>
        </div>
    )
}
