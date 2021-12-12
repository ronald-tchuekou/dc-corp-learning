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
            <div className="backdrop-filter backdrop-blur-sm transition duration-300 cursor-default bg-gray-100 bg-opacity-25 border border-purple-500 border-opacity-25 hover:shadow rounded-md hover:border-opacity-100 hover:z-10 active:scale-100 overflow-hidden">
                <div className="absolute p-3">
                    <img className="w-12 h-12" src={item.logo} alt="item logo" />
                </div>
                <div className="w-full m-0 h-36 bg-gray-700 mb-2">
                    <img className="w-full h-full" src="/images/code_img.jpg" alt="Code" />
                </div>
                <div className="text-gray-700 font-bold text-lg px-3">{item.title}</div>
                <div className="flex flex-row justify-between py-1 px-4">
                    <div></div>
                    <div className="">
                        <Badge
                            color={item.level === 'Amateur' ? 'warning' : item.level === 'Expert' ? 'green' : ''}
                            title={item.level}
                        />
                    </div>
                </div>
                <div className="flex justify-between items-center text-sm px-3 py-1.5 bg-purple-400 bg-opacity-25 text-gray-500">
                    <div className="inline-flex items-center">
                        <StartsRating />
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
        <span className={`flex-none py-0.5 px-2 rounded-full ${className} bg-opacity-25  font-semibold text-xs`}>
            {title}
        </span>
    )
}

export const StartsRating = () => {
    return (
        <div className="flex flex-row space-x-1">
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.16675 0.569691C8.45473 -0.189897 9.54458 -0.189897 9.83347 0.569691L11.6964 5.73021C11.8269 6.07221 12.159 6.29991 12.5298 6.29991H17.1079C17.9538 6.29991 18.3228 7.35289 17.6577 7.86858L14.3999 10.7998C14.2539 10.912 14.1473 11.0676 14.0952 11.2441C14.0432 11.4207 14.0484 11.6092 14.1101 11.7826L15.2998 16.8252C15.5896 17.6352 14.6519 18.3309 13.9427 17.8323L9.51759 15.0244C9.36604 14.9179 9.18533 14.8607 9.00011 14.8607C8.81489 14.8607 8.63417 14.9179 8.48263 15.0244L4.05753 17.8323C3.34926 18.3309 2.4106 17.6343 2.70039 16.8252L3.89014 11.7826C3.95185 11.6092 3.95705 11.4207 3.90499 11.2441C3.85293 11.0676 3.74628 10.912 3.60035 10.7998L0.342493 7.86858C-0.323477 7.35289 0.0473062 6.29991 0.891469 6.29991H5.46957C5.64982 6.30051 5.82601 6.24636 5.97482 6.14463C6.12363 6.0429 6.23805 5.89839 6.30293 5.73021L8.16585 0.569691H8.16675Z"
                    fill="#FFC107"
                />
            </svg>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.16675 0.569691C8.45473 -0.189897 9.54458 -0.189897 9.83347 0.569691L11.6964 5.73021C11.8269 6.07221 12.159 6.29991 12.5298 6.29991H17.1079C17.9538 6.29991 18.3228 7.35289 17.6577 7.86858L14.3999 10.7998C14.2539 10.912 14.1473 11.0676 14.0952 11.2441C14.0432 11.4207 14.0484 11.6092 14.1101 11.7826L15.2998 16.8252C15.5896 17.6352 14.6519 18.3309 13.9427 17.8323L9.51759 15.0244C9.36604 14.9179 9.18533 14.8607 9.00011 14.8607C8.81489 14.8607 8.63417 14.9179 8.48263 15.0244L4.05753 17.8323C3.34926 18.3309 2.4106 17.6343 2.70039 16.8252L3.89014 11.7826C3.95185 11.6092 3.95705 11.4207 3.90499 11.2441C3.85293 11.0676 3.74628 10.912 3.60035 10.7998L0.342493 7.86858C-0.323477 7.35289 0.0473062 6.29991 0.891469 6.29991H5.46957C5.64982 6.30051 5.82601 6.24636 5.97482 6.14463C6.12363 6.0429 6.23805 5.89839 6.30293 5.73021L8.16585 0.569691H8.16675Z"
                    fill="#FFC107"
                />
            </svg>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.16675 0.569691C8.45473 -0.189897 9.54458 -0.189897 9.83347 0.569691L11.6964 5.73021C11.8269 6.07221 12.159 6.29991 12.5298 6.29991H17.1079C17.9538 6.29991 18.3228 7.35289 17.6577 7.86858L14.3999 10.7998C14.2539 10.912 14.1473 11.0676 14.0952 11.2441C14.0432 11.4207 14.0484 11.6092 14.1101 11.7826L15.2998 16.8252C15.5896 17.6352 14.6519 18.3309 13.9427 17.8323L9.51759 15.0244C9.36604 14.9179 9.18533 14.8607 9.00011 14.8607C8.81489 14.8607 8.63417 14.9179 8.48263 15.0244L4.05753 17.8323C3.34926 18.3309 2.4106 17.6343 2.70039 16.8252L3.89014 11.7826C3.95185 11.6092 3.95705 11.4207 3.90499 11.2441C3.85293 11.0676 3.74628 10.912 3.60035 10.7998L0.342493 7.86858C-0.323477 7.35289 0.0473062 6.29991 0.891469 6.29991H5.46957C5.64982 6.30051 5.82601 6.24636 5.97482 6.14463C6.12363 6.0429 6.23805 5.89839 6.30293 5.73021L8.16585 0.569691H8.16675Z"
                    fill="#FFC107"
                />
            </svg>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.16675 0.569691C8.45473 -0.189897 9.54458 -0.189897 9.83347 0.569691L11.6964 5.73021C11.8269 6.07221 12.159 6.29991 12.5298 6.29991H17.1079C17.9538 6.29991 18.3228 7.35289 17.6577 7.86858L14.3999 10.7998C14.2539 10.912 14.1473 11.0676 14.0952 11.2441C14.0432 11.4207 14.0484 11.6092 14.1101 11.7826L15.2998 16.8252C15.5896 17.6352 14.6519 18.3309 13.9427 17.8323L9.51759 15.0244C9.36604 14.9179 9.18533 14.8607 9.00011 14.8607C8.81489 14.8607 8.63417 14.9179 8.48263 15.0244L4.05753 17.8323C3.34926 18.3309 2.4106 17.6343 2.70039 16.8252L3.89014 11.7826C3.95185 11.6092 3.95705 11.4207 3.90499 11.2441C3.85293 11.0676 3.74628 10.912 3.60035 10.7998L0.342493 7.86858C-0.323477 7.35289 0.0473062 6.29991 0.891469 6.29991H5.46957C5.64982 6.30051 5.82601 6.24636 5.97482 6.14463C6.12363 6.0429 6.23805 5.89839 6.30293 5.73021L8.16585 0.569691H8.16675Z"
                    fill="#FFC107"
                />
            </svg>
            <svg width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M8.16675 0.569691C8.45473 -0.189897 9.54458 -0.189897 9.83347 0.569691L11.6964 5.73021C11.8269 6.07221 12.159 6.29991 12.5298 6.29991H17.1079C17.9538 6.29991 18.3228 7.35289 17.6577 7.86858L14.3999 10.7998C14.2539 10.912 14.1473 11.0676 14.0952 11.2441C14.0432 11.4207 14.0484 11.6092 14.1101 11.7826L15.2998 16.8252C15.5896 17.6352 14.6519 18.3309 13.9427 17.8323L9.51759 15.0244C9.36604 14.9179 9.18533 14.8607 9.00011 14.8607C8.81489 14.8607 8.63417 14.9179 8.48263 15.0244L4.05753 17.8323C3.34926 18.3309 2.4106 17.6343 2.70039 16.8252L3.89014 11.7826C3.95185 11.6092 3.95705 11.4207 3.90499 11.2441C3.85293 11.0676 3.74628 10.912 3.60035 10.7998L0.342493 7.86858C-0.323477 7.35289 0.0473062 6.29991 0.891469 6.29991H5.46957C5.64982 6.30051 5.82601 6.24636 5.97482 6.14463C6.12363 6.0429 6.23805 5.89839 6.30293 5.73021L8.16585 0.569691H8.16675Z"
                    fill="#FFC107"
                />
            </svg>
        </div>
    )
}