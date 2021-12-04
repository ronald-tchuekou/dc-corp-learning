import React from 'react'

export const HAbonne = (props) => {
    const [is_month, setSwitch] = React.useState(true)
    return (
        <div className="w-full h-auto pb-10 bg-gray-200 bg-opacity-30">
            <div className="flex container pt-10 px-7 mx-auto justify-center items-center flex-col">
                <div className="text-4xl md:text-5xl text-center lg:text-left lg:text-6xl text-black font-bold">
                    Abonnmenets
                </div>
                <p className="text-gray-500 text-2xl my-4 text-center">
                    {"Etre abonné sur DC-Corp learning, c'est premièrement avoir la main mise sur nos contenu payants " +
                        'soutenir la création de nouveaux contenus chaque semaine et accéder à du contenu exclusif pour ' +
                        "apprendre et s'améliorer (comme le téléchargement des vidéos et des sources)."}
                </p>

                <div className="my-8 flex flex-row justify-center items-center space-x-6">
                    <h2
                        className={`font-bold text-xl transition-all duration-300 ease-in-out ${
                            is_month ? 'text-purple-700 ' : 'text-black '
                        }`}
                    >
                        1 MOIS
                    </h2>
                    <div
                        onClick={() => setSwitch((s) => !s)}
                        className={`bg-white border-4 border-purple-700 rounded-full w-20 h-9 flex justify-start items-center cursor-pointer `}
                    >
                        <div
                            className={`w-8 h-8 bg-purple-700 rounded-full transition duration-300 transform ${
                                is_month ? 'translate-x-0' : 'translate-x-10'
                            }`}
                        ></div>
                    </div>
                    <h2
                        className={`font-bold text-xl transition duration-300 ${
                            !is_month ? 'text-purple-700 ' : 'text-black '
                        }`}
                    >
                        1 AN
                    </h2>
                </div>

                <div className="abonne-container p-10">
                    <div className="transition-all duration-300 ease-in-out text-4xl md:text-7xl font-bold text-purple-700 text-center">
                        {is_month ? '50 000' : '250 000'}
                        <span className="text-lg">FCFA</span>
                    </div>
                    <div className="flex justify-center items-center flex-col mt-5 py-5 border-t-2">
                        <div className="text-xl font-semibold text-gray-700">Télécharger</div>
                        <div className=" text-gray-600">Les vidéos</div>
                    </div>
                    <div className="flex justify-center items-center flex-col py-5 border-t-2">
                        <div className="text-xl font-semibold text-gray-700">Télécharger</div>
                        <div className=" text-gray-600">Les sources</div>
                    </div>
                    <div className="flex justify-center items-center flex-col pt-5 border-t-2">
                        <button className="w-full transition hover:shadow-md duration-300 bg-purple-700 hover:bg-purple-900 py-1 px-4 text-white font-medium rounded-lg text-lg md:text-xl">
                            {is_month ? "S'abonner pour un mois" : "S'abonner pour un an"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
