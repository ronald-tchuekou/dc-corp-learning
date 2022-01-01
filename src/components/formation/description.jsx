import React from 'react'
import { LangContext } from '../../contexts'
import { Lang } from '../../lang'

export const Description = () => {
    const { lang } = React.useContext(LangContext)
    return (
        <div className="space-y-5">
            <div className="text-3xl text-purple-500 lg:text-white">{Lang.presentation[lang]}</div>
            <div className="text-xl text-gray-500 lg:text-white">
                {
                    'JavaScript (souvent abrégé en "JS") est un langage de script, orienté objet, principalement utilisé  comme le langage de script des pages web. Mais il peut aussi être utilisé sur de nombreux environnements  extérieurs aux navigateurs tel que node.js.'
                }
            </div>

            <iframe
                className="w-full h-52 lg:h-96"
                src="https://www.youtube.com/embed/No9WERxXjy4"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
        </div>
    )
}
