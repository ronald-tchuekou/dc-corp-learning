import React from 'react'
import { TutoBannerImage } from '../svg'

export const Banner = (props) => {
    return (
        <div className="flex container py-10 px-7 mx-auto flex-col-reverse justify-center items-center lg:flex-row">
            <div className="flex-1 py-5">
                <div className="text-4xl md:text-5xl text-center lg:text-left lg:text-6xl text-black font-bold">
                    Tous les
                    <span className="text-purple-700"> tutoriels</span>
                </div>
                <p className="text-gray-500 text-2xl my-4 text-center lg:text-left">
                    {"Envie d'apprendre de nouvelles choses et maitriser de nouvelles technologies ? Alors vous êtes sur" +
                        ' le bon chemin...'}
                </p>
            </div>
            <div className="flex-1 flex justify-center items-center">
                <div className="w-full md:w-4/6">
                    <TutoBannerImage />
                </div>
            </div>
        </div>
    )
}
