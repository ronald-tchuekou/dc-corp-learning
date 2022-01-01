import React from 'react'
import { HomeBannerImage } from '../svg'
import { useRouter } from 'next/router'
import { LangContext } from '../../contexts'
import { Lang } from '../../lang'

export const Banner = () => {
    const router = useRouter()
    const { lang } = React.useContext(LangContext)
    return (
        <div className=" flex container py-10 px-7 mx-auto flex-col-reverse justify-center items-center lg:flex-row">
            <div className="flex-1 py-5">
                <div className="text-4xl md:text-5xl text-center lg:text-left lg:text-6xl text-black font-bold">
                    <span className="text-purple-700">{Lang.learn[lang]}</span> {Lang.new_wait_at_dc_corp[lang]}.
                </div>
                <p className="text-gray-500 text-2xl my-4 text-center lg:text-left">{Lang.home_banner_text[lang]}</p>
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
                        {Lang.see_the_trainings[lang]}
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <HomeBannerImage />
            </div>
        </div>
    )
}
