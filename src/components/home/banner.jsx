import React from 'react'
import { HomeBannerImage } from '../svg'

export const Banner = (props) => {
    return (
        <div className=" flex container py-10 px-7 mx-auto flex-col-reverse justify-center items-center lg:flex-row">
            <div className="flex-1 py-5">
                <div className="text-4xl md:text-5xl text-center lg:text-left lg:text-6xl text-black font-bold">
                    <span className="text-purple-700">Apprenez</span> de nouvelle choses sur DC Corp.
                </div>
                <p className="text-gray-500 text-2xl my-4 text-center lg:text-left">
                    Améliorez-vous et apprenez de nouvelles choses grâce aux formations et tutoriels vidéos que nous
                    offrons.
                </p>
                <div className="flex flex-col sm:flex-row justify-between sm:space-x-4 space-y-4 sm:space-y-0 w-full">
                    <button className="flex-1 transition hover:shadow-md duration-300 bg-purple-700 hover:bg-purple-900 py-1 px-4 text-white font-medium rounded-lg text-xl">
                        Créer un compte
                    </button>
                    <button className="flex-1 transition hover:shadow-md duration-300 border-2 border-purple-700 hover:bg-purple-100 py-1 px-4 text-purple-700 font-medium rounded-lg text-xl">
                        Voir les tutoriels
                    </button>
                </div>
            </div>
            <div className="flex-1">
                <HomeBannerImage />
            </div>
        </div>
    )
}
