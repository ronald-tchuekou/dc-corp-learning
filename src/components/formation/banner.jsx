import React from 'react'
import { FormationBannerImage } from '../svg'

export const Banner = (props) => {
    return (
        <div className={`flex container py-10 px-7 mx-auto flex-col-reverse justify-center items-center lg:flex-row`}>
            <div className="flex-1 py-5">
                <div className={`text-4xl md:text-5xl text-center lg:text-6xl text-black font-bold lg:text-left`}>
                    Tous les
                    <span className="text-purple-700"> formations</span>
                </div>
                <p className={`text-gray-500 text-2xl my-4 text-center lg:text-left`}>
                    {
                        'Découvrez une technologie spécifique à travers une série de vidéo qui vous guidera dans votre apprentissage, avec dc-corp l’expertise est assurée.'
                    }
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div className={`w-full md:w-4/6`}>
                    <FormationBannerImage />
                </div>
            </div>
        </div>
    )
}
