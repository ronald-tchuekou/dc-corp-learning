import React from 'react'
import { StartsRating } from '../tutoriels/content'

export const Content = (props) => {
    const CONTENT = [
        {
            code: 'code1',
            price: '15 000',
            logo: '/images/js_logo.svg',
            level: 'Amateur',
            title: 'Redimensionnement en drag and drop',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code2',
            price: '15 000',
            logo: '/images/php_logo.svg',
            level: 'Débutant',
            title: 'Communiquer avec une base de données sql',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code3',
            price: '15 000',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code4',
            price: '15 000',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code5',
            price: '15 000',
            logo: '/images/js_logo.svg',
            level: 'Amateur',
            title: 'Redimensionnement en drag and drop',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code6',
            price: '15 000',
            logo: '/images/php_logo.svg',
            level: 'Débutant',
            title: 'Communiquer avec une base de données sql',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code7',
            price: '15 000',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code8',
            price: '15 000',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code9',
            price: '15 000',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code10',
            price: '15 000',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },

        {
            code: 'code11',
            price: '15 000',
            logo: '/images/js_logo.svg',
            level: 'Amateur',
            title: 'Redimensionnement en drag and drop',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code12',
            price: '15 000',
            logo: '/images/php_logo.svg',
            level: 'Débutant',
            title: 'Communiquer avec une base de données sql',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code13',
            price: '15 000',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code14',
            price: '15 000',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code15',
            price: '15 000',
            logo: '/images/js_logo.svg',
            level: 'Amateur',
            title: 'Redimensionnement en drag and drop',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code16',
            price: '15 000',
            logo: '/images/php_logo.svg',
            level: 'Débutant',
            title: 'Communiquer avec une base de données sql',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code17',
            price: '15 000',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code18',
            price: '15 000',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code19',
            price: '15 000',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
        {
            code: 'code20',
            price: '15 000',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: '29 Chapitres',
            time: '14h48',
        },
    ]
    return (
        <div className="container pb-3 px-7 mx-auto">
            <div className="py-5 transition duration-300 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {CONTENT.map((item) => (
                    <ContentItem item={item} key={item.code} />
                ))}
            </div>
        </div>
    )
}

export const ContentItem = (props) => {
    const { item } = props
    return (
        <div>
            <div className="formation-item" tabIndex="0">
                <div className="f1"></div>
                <div className="f2"></div>
                <div className="f3 backdrop-filter backdrop-blur-sm transition duration-300 cursor-default bg-gray-100 border border-purple-500 border-opacity-25 hover:shadow rounded-md active:scale-100">
                    <div className="absolute p-3">
                        <img className="w-12 h-12" src={item.logo} alt="item logo" />
                    </div>
                    <div className="w-full m-0 h-36 bg-gray-700 mb-2 rounded-t-md overflow-hidden">
                        <img className="w-full h-full" src="/images/code_img.jpg" alt="Code" />
                    </div>
                    <div className="text-gray-700 font-bold text-lg px-3">{item.title}</div>
                    <div className="flex justify-between items-center px-3 py-2">
                        <div className="text-purple-500 font-semibold">{item.price} XFA</div>
                        <div>
                            <StartsRating />
                        </div>
                    </div>
                    <div className="flex justify-between items-center text-sm px-3 py-1.5 bg-purple-400 bg-opacity-25 text-gray-500">
                        <div className="inline-flex items-center">
                            {item.parent ? (
                                <>
                                    <svg
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    &nbsp;
                                    <span>{item.parent}</span>
                                </>
                            ) : (
                                <></>
                            )}
                        </div>
                        <div className="inline-flex items-center rounded-b-md">
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8.9925 1.5C4.8525 1.5 1.5 4.86 1.5 9C1.5 13.14 4.8525 16.5 8.9925 16.5C13.14 16.5 16.5 13.14 16.5 9C16.5 4.86 13.14 1.5 8.9925 1.5ZM9 15C5.685 15 3 12.315 3 9C3 5.685 5.685 3 9 3C12.315 3 15 5.685 15 9C15 12.315 12.315 15 9 15ZM9.375 5.25H8.25V9.75L12.1875 12.1125L12.75 11.19L9.375 9.1875V5.25Z"
                                    fill="currentColor"
                                />
                            </svg>
                            &nbsp;
                            <span>{item.time}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const Badge = (props) => {
    const { color, title = '' } = props
    const className = React.useMemo(() => {
        if (color === 'warning') return 'bg-yellow-600 text-yellow-600'
        else if (color === 'green') return 'bg-green-600 text-green-600'
        return 'bg-red-600 text-red-600'
    }, [color])
    return (
        <div className={`flex-none py-0.5 px-2 rounded-full ${className} bg-opacity-25  font-semibold text-sm`}>
            {title}
        </div>
    )
}
