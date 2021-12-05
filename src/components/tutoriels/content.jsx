import { useRouter } from 'next/router'
import React from 'react'
import { AppPagination } from '..'

export const Content = (props) => {
    const { page } = props
    const CONTENT = [
        {
            code: 'code1',
            logo: '/images/js_logo.svg',
            level: 'Amateur',
            title: 'Redimensionnement en drag and drop',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: null,
            time: '30 min',
        },
        {
            code: 'code2',
            logo: '/images/php_logo.svg',
            level: 'Débutant',
            title: 'Communiquer avec une base de données sql',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: 'Formation en javas...',
            time: '30 min',
        },
        {
            code: 'code3',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: null,
            time: '30 min',
        },
        {
            code: 'code4',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: null,
            time: '30 min',
        },
        {
            code: 'code5',
            logo: '/images/js_logo.svg',
            level: 'Amateur',
            title: 'Redimensionnement en drag and drop',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: null,
            time: '30 min',
        },
        {
            code: 'code6',
            logo: '/images/php_logo.svg',
            level: 'Débutant',
            title: 'Communiquer avec une base de données sql',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: 'Formation en javas...',
            time: '30 min',
        },
        {
            code: 'code7',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: null,
            time: '30 min',
        },
        {
            code: 'code8',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: null,
            time: '30 min',
        },
        {
            code: 'code9',
            logo: '/images/react_logo.svg',
            level: 'Expert',
            title: 'Gestion des states avec les contexts',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: null,
            time: '30 min',
        },
        {
            code: 'code10',
            logo: '/images/laravel_logo.svg',
            level: 'Amateur',
            title: 'Mise en place du principe de routing',
            description:
                'Dans ce tutoriel, on vous propose de découvrir comment creéer un système de redimensionnement en javascript. L’object est de permettre...',
            parent: null,
            time: '30 min',
        },
    ]
    const router = useRouter()
    return (
        <div className="container pb-3 px-7 mx-auto">
            <div className="flex justify-center md:justify-end text-sm pb-3">
                <div className="border border-purple-500 border-opacity-50 rounded-md flex flex-row overflow-hidden">
                    <button className="py-2 px-3">
                        <span className="font-bold text-black">NIVEAU:</span>&nbsp;
                        <span className="text-gray-400 inline-flex items-center">
                            <span>Tous</span>&nbsp;
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.7726 5.27344H3.22734C2.88105 5.27344 2.68769 5.63906 2.90214 5.88867L8.6748 12.5824C8.84003 12.774 9.15819 12.774 9.32519 12.5824L15.0978 5.88867C15.3123 5.63906 15.1189 5.27344 14.7726 5.27344Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </button>

                    <button className="py-2 px-3 border-l border-purple-500 border-opacity-50">
                        <span className="font-bold text-black">TECHNOLOGIE:</span>&nbsp;
                        <span className="text-gray-400 inline-flex items-center">
                            <span>Toutes</span>&nbsp;
                            <svg
                                width="18"
                                height="18"
                                viewBox="0 0 18 18"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14.7726 5.27344H3.22734C2.88105 5.27344 2.68769 5.63906 2.90214 5.88867L8.6748 12.5824C8.84003 12.774 9.15819 12.774 9.32519 12.5824L15.0978 5.88867C15.3123 5.63906 15.1189 5.27344 14.7726 5.27344Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </span>
                    </button>
                </div>
            </div>

            <div className="py-5 transition duration-300 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
                {CONTENT.map((item) => (
                    <ContentItem item={item} key={item.code} />
                ))}
            </div>

            <div className="flex justify-center items-center">
                <AppPagination
                    currentPage={page || 1}
                    count={15}
                    onChange={(value) =>
                        router.push({
                            pathname: '/tutoriels/[page]',
                            query: { page: value },
                        })
                    }
                />
            </div>
        </div>
    )
}

export const ContentItem = (props) => {
    const { item } = props
    return (
        <div>
            <div className="backdrop-filter backdrop-blur-sm transition duration-300 cursor-default bg-gray-100 bg-opacity-25 border border-purple-500 border-opacity-25 hover:shadow rounded-md transform hover:scale-105 hover:z-10 active:scale-100 space-y-2 overflow-hidden">
                <div className="flex justify-between items-center p-3">
                    <div className="flex-none">
                        <img className="w-12 h-12" src={item.logo} alt="item logo" />
                    </div>
                    <Badge
                        color={item.level === 'Amateur' ? 'warning' : item.level === 'Expert' ? 'green' : ''}
                        title={item.level}
                    />
                </div>
                <div className="text-gray-700 font-bold text-lg px-3">{item.title}</div>
                <div className="text-gray-400 font-bold px-3">{item.description}</div>
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
                                    <path d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z" fill="currentColor" />
                                </svg>
                                &nbsp;
                                <span>{item.parent}</span>
                            </>
                        ) : (
                            <></>
                        )}
                    </div>
                    <div className="inline-flex items-center">
                        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
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
