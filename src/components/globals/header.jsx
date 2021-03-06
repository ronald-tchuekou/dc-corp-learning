import { useRouter } from 'next/router'
import React from 'react'
import { CurrentPathContext, LangContext } from '../../contexts'
import { Lang } from '../../lang'
import { Logo } from '../svg'

export const AppHeader = (props) => {
    const { color = 'default' } = props

    const { lang } = React.useContext(LangContext)
    const { setPath } = React.useContext(CurrentPathContext)

    const router = useRouter()

    const [active, setActive] = React.useState('')
    const [show, setShow] = React.useState(false)
    const [showHeader, setShowHeader] = React.useState(true)

    React.useEffect(() => {
        let split_path = window.location.pathname.split('/')
        const path = split_path[1] || ''
        setActive('/' + path)
        setPath(window.location.pathname)
        let lastScrollTop = 0
        document.body.addEventListener('scroll', () => {
            const scrollTop = document.body.scrollTop
            if (scrollTop > lastScrollTop) {
                setShowHeader(false)
            } else {
                setShowHeader(true)
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop
        })
    }, [])

    React.useEffect(() => {
        if (show) {
            document.body.style.overflowY = 'hidden'
        } else {
            document.body.style.overflowY = 'auto'
        }
    }, [show])

    return (
        <header
            className={`w-full h-auto border-b-2 sticky top-0 z-20 bg-white ${
                color === 'default' ? 'bg-opacity-80' : 'bg-opacity-10'
            } transition duration-300 transform ${!showHeader ? '-translate-y-40' : 'translate-y-0'}`}
        >
            <nav className="flex container transition mx-auto pt-4 pb-2 px-7 item-center justify-between z-0">
                <div className="flex flex-row">
                    <div className="flex-none w-10 md:w-12 cursor-pointer" onClick={() => router.push('/')}>
                        <Logo />
                    </div>
                    <div className="flex">
                        <NavItem
                            color={color}
                            className="hidden sm:flex"
                            active={active === '/tutoriels'}
                            onClick={() => router.push('/tutoriels')}
                            title={Lang.tutoriel[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 4H6C3.79086 4 2 5.79086 2 8V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V8C22 5.79086 20.2091 4 18 4Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15 12L10 9V15L15 12Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavItem>

                        <NavItem
                            color={color}
                            className="hidden sm:flex"
                            active={active === '/cursus'}
                            onClick={() => router.push('/cursus')}
                            title={Lang.cursus[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9 5.25C9 4.65326 9.23705 4.08097 9.65901 3.65901C10.081 3.23705 10.6533 3 11.25 3H12.75C13.3467 3 13.919 3.23705 14.341 3.65901C14.7629 4.08097 15 4.65326 15 5.25V6.75C15 7.34674 14.7629 7.91903 14.341 8.34099C13.919 8.76295 13.3467 9 12.75 9V10.5H16.5C16.6989 10.5 16.8897 10.579 17.0303 10.7197C17.171 10.8603 17.25 11.0511 17.25 11.25V12.75C17.25 12.9489 17.171 13.1397 17.0303 13.2803C16.8897 13.421 16.6989 13.5 16.5 13.5C16.3011 13.5 16.1103 13.421 15.9697 13.2803C15.829 13.1397 15.75 12.9489 15.75 12.75V12H8.25V12.75C8.25 12.9489 8.17098 13.1397 8.03033 13.2803C7.88968 13.421 7.69891 13.5 7.5 13.5C7.30109 13.5 7.11032 13.421 6.96967 13.2803C6.82902 13.1397 6.75 12.9489 6.75 12.75V11.25C6.75 11.0511 6.82902 10.8603 6.96967 10.7197C7.11032 10.579 7.30109 10.5 7.5 10.5H11.25V9C10.6533 9 10.081 8.76295 9.65901 8.34099C9.23705 7.91903 9 7.34674 9 6.75V5.25ZM12.75 7.5C12.9489 7.5 13.1397 7.42098 13.2803 7.28033C13.421 7.13968 13.5 6.94891 13.5 6.75V5.25C13.5 5.05109 13.421 4.86032 13.2803 4.71967C13.1397 4.57902 12.9489 4.5 12.75 4.5H11.25C11.0511 4.5 10.8603 4.57902 10.7197 4.71967C10.579 4.86032 10.5 5.05109 10.5 5.25V6.75C10.5 6.94891 10.579 7.13968 10.7197 7.28033C10.8603 7.42098 11.0511 7.5 11.25 7.5H12.75ZM4.5 17.25C4.5 16.6533 4.73705 16.081 5.15901 15.659C5.58097 15.2371 6.15326 15 6.75 15H8.25C8.84674 15 9.41903 15.2371 9.84099 15.659C10.2629 16.081 10.5 16.6533 10.5 17.25V18.75C10.5 19.3467 10.2629 19.919 9.84099 20.341C9.41903 20.7629 8.84674 21 8.25 21H6.75C6.15326 21 5.58097 20.7629 5.15901 20.341C4.73705 19.919 4.5 19.3467 4.5 18.75V17.25ZM6.75 16.5C6.55109 16.5 6.36032 16.579 6.21967 16.7197C6.07902 16.8603 6 17.0511 6 17.25V18.75C6 18.9489 6.07902 19.1397 6.21967 19.2803C6.36032 19.421 6.55109 19.5 6.75 19.5H8.25C8.44891 19.5 8.63968 19.421 8.78033 19.2803C8.92098 19.1397 9 18.9489 9 18.75V17.25C9 17.0511 8.92098 16.8603 8.78033 16.7197C8.63968 16.579 8.44891 16.5 8.25 16.5H6.75ZM13.5 17.25C13.5 16.6533 13.7371 16.081 14.159 15.659C14.581 15.2371 15.1533 15 15.75 15H17.25C17.8467 15 18.419 15.2371 18.841 15.659C19.2629 16.081 19.5 16.6533 19.5 17.25V18.75C19.5 19.3467 19.2629 19.919 18.841 20.341C18.419 20.7629 17.8467 21 17.25 21H15.75C15.1533 21 14.581 20.7629 14.159 20.341C13.7371 19.919 13.5 19.3467 13.5 18.75V17.25ZM15.75 16.5C15.5511 16.5 15.3603 16.579 15.2197 16.7197C15.079 16.8603 15 17.0511 15 17.25V18.75C15 18.9489 15.079 19.1397 15.2197 19.2803C15.3603 19.421 15.5511 19.5 15.75 19.5H17.25C17.4489 19.5 17.6397 19.421 17.7803 19.2803C17.921 19.1397 18 18.9489 18 18.75V17.25C18 17.0511 17.921 16.8603 17.7803 16.7197C17.6397 16.579 17.4489 16.5 17.25 16.5H15.75Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </NavItem>

                        <NavItem
                            color={color}
                            className="hidden md:flex"
                            active={active === '/formations'}
                            onClick={() => router.push('/formations')}
                            title={Lang.formations[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.0001 3.60001C5.36358 3.60001 4.75313 3.85286 4.30304 4.30295C3.85295 4.75304 3.6001 5.36349 3.6001 6.00001V18C3.6001 18.6365 3.85295 19.247 4.30304 19.6971C4.75313 20.1471 5.36358 20.4 6.0001 20.4C6.63662 20.4 7.24707 20.1471 7.69715 19.6971C8.14724 19.247 8.4001 18.6365 8.4001 18V6.00001C8.4001 5.36349 8.14724 4.75304 7.69715 4.30295C7.24707 3.85286 6.63662 3.60001 6.0001 3.60001ZM4.8001 6.00001C4.8001 5.68175 4.92653 5.37652 5.15157 5.15148C5.37661 4.92643 5.68184 4.80001 6.0001 4.80001C6.31836 4.80001 6.62358 4.92643 6.84862 5.15148C7.07367 5.37652 7.2001 5.68175 7.2001 6.00001V18C7.2001 18.3183 7.07367 18.6235 6.84862 18.8485C6.62358 19.0736 6.31836 19.2 6.0001 19.2C5.68184 19.2 5.37661 19.0736 5.15157 18.8485C4.92653 18.6235 4.8001 18.3183 4.8001 18V6.00001Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M9.6001 9.60001C9.6001 8.96349 9.85295 8.35304 10.303 7.90296C10.7531 7.45287 11.3636 7.20001 12.0001 7.20001C12.6366 7.20001 13.2471 7.45287 13.6972 7.90296C14.1472 8.35304 14.4001 8.96349 14.4001 9.60001V18C14.4001 18.6365 14.1472 19.247 13.6972 19.6971C13.2471 20.1472 12.6366 20.4 12.0001 20.4C11.3636 20.4 10.7531 20.1472 10.303 19.6971C9.85295 19.247 9.6001 18.6365 9.6001 18V9.60001ZM12.0001 8.40001C11.6818 8.40001 11.3766 8.52644 11.1516 8.75148C10.9265 8.97653 10.8001 9.28175 10.8001 9.60001V18C10.8001 18.3183 10.9265 18.6235 11.1516 18.8485C11.3766 19.0736 11.6818 19.2 12.0001 19.2C12.3184 19.2 12.6236 19.0736 12.8486 18.8485C13.0737 18.6235 13.2001 18.3183 13.2001 18V9.60001C13.2001 9.28175 13.0737 8.97653 12.8486 8.75148C12.6236 8.52644 12.3184 8.40001 12.0001 8.40001Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M15.6001 13.2C15.6001 12.5635 15.853 11.953 16.303 11.503C16.7531 11.0529 17.3636 10.8 18.0001 10.8C18.6366 10.8 19.2471 11.0529 19.6972 11.503C20.1472 11.953 20.4001 12.5635 20.4001 13.2V18C20.4001 18.6365 20.1472 19.247 19.6972 19.6971C19.2471 20.1472 18.6366 20.4 18.0001 20.4C17.3636 20.4 16.7531 20.1472 16.303 19.6971C15.853 19.247 15.6001 18.6365 15.6001 18V13.2ZM18.0001 12C17.6818 12 17.3766 12.1264 17.1516 12.3515C16.9265 12.5765 16.8001 12.8818 16.8001 13.2V18C16.8001 18.3183 16.9265 18.6235 17.1516 18.8485C17.3766 19.0736 17.6818 19.2 18.0001 19.2C18.3184 19.2 18.6236 19.0736 18.8486 18.8485C19.0737 18.6235 19.2001 18.3183 19.2001 18V13.2C19.2001 12.8818 19.0737 12.5765 18.8486 12.3515C18.6236 12.1264 18.3184 12 18.0001 12Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </NavItem>

                        <NavItem
                            color={color}
                            className="hidden lg:flex"
                            active={active === '/abonner'}
                            onClick={() => router.push('/abonner')}
                            title={Lang.subscribe[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.0741 2.633C11.3941 1.789 12.6051 1.789 12.9261 2.633L14.9961 8.367C15.1411 8.747 15.5101 9 15.9221 9H21.0091C21.9491 9 22.3591 10.17 21.6201 10.743L18.0001 14C17.8379 14.1247 17.7194 14.2975 17.6616 14.4937C17.6037 14.6898 17.6095 14.8993 17.6781 15.092L19.0001 20.695C19.3221 21.595 18.2801 22.368 17.4921 21.814L12.5751 18.694C12.4067 18.5757 12.2059 18.5122 12.0001 18.5122C11.7943 18.5122 11.5935 18.5757 11.4251 18.694L6.50808 21.814C5.72108 22.368 4.67808 21.594 5.00008 20.695L6.32208 15.092C6.39066 14.8993 6.39643 14.6898 6.33859 14.4937C6.28074 14.2975 6.16223 14.1247 6.00008 14L2.38008 10.743C1.64008 10.17 2.05208 9 2.99008 9H8.07708C8.27737 9.00067 8.47314 8.9405 8.63849 8.82747C8.80385 8.71444 8.93098 8.55387 9.00308 8.367L11.0731 2.633H11.0741Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavItem>

                        <NavItem
                            color={color}
                            className="hidden lg:flex"
                            active={active === '/forum'}
                            onClick={() => router.push('/forum')}
                            title={Lang.forum[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14 19C17.771 19 19.657 19 20.828 17.828C22 16.657 22 14.771 22 11C22 7.229 22 5.343 20.828 4.172C19.657 3 17.771 3 14 3H10C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11C2 14.771 2 16.657 3.172 17.828C3.825 18.482 4.7 18.771 6 18.898"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M12 11V11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M8 11V11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M16 11V11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path
                                    d="M14 19C12.764 19 11.402 19.5 10.159 20.145C8.161 21.182 7.162 21.701 6.67 21.37C6.178 21.04 6.271 20.015 6.458 17.966L6.5 17.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </NavItem>
                    </div>
                </div>
                <div className="flex flex-row items-center">
                    <button
                        className={`w-10 h-10 flex lg:hidden items-center justify-center  ${
                            color === 'default'
                                ? `text-gray-500 hover:text-purple-700`
                                : `text-gray-400 hover:text-white`
                        } rounded-full transition`}
                    >
                        <svg
                            onClick={() => setShow(true)}
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M20.05 11H3.95C3.42533 11 3 11.4253 3 11.95V12.05C3 12.5747 3.42533 13 3.95 13H20.05C20.5747 13 21 12.5747 21 12.05V11.95C21 11.4253 20.5747 11 20.05 11Z"
                                fill="currentColor"
                            />
                            <path
                                d="M20.05 16H3.95C3.42533 16 3 16.4253 3 16.95V17.05C3 17.5747 3.42533 18 3.95 18H20.05C20.5747 18 21 17.5747 21 17.05V16.95C21 16.4253 20.5747 16 20.05 16Z"
                                fill="currentColor"
                            />
                            <path
                                d="M20.05 6H3.95C3.42533 6 3 6.42533 3 6.95V7.05C3 7.57467 3.42533 8 3.95 8H20.05C20.5747 8 21 7.57467 21 7.05V6.95C21 6.42533 20.5747 6 20.05 6Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    <button
                        type="button"
                        className={`w-10 h-10 hidden mr-0.5 lg:flex justify-center items-center transition rounded-full ${
                            color === 'default'
                                ? `text-gray-500 hover:text-purple-700`
                                : `text-gray-400 hover:text-white`
                        }`}
                    >
                        <svg width="32" height="32" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.5 3.125C14.2475 3.12493 15.9602 3.61327 17.4448 4.5349C18.9295 5.45654 20.127 6.77479 20.9023 8.34088C21.6775 9.90697 21.9996 11.6586 21.8323 13.398C21.6649 15.1374 21.0147 16.7955 19.955 18.185L25.8837 24.1162C26.1079 24.3412 26.2381 24.643 26.2478 24.9605C26.2575 25.2779 26.146 25.5871 25.9359 25.8253C25.7259 26.0636 25.4331 26.2129 25.1169 26.243C24.8007 26.2731 24.485 26.1818 24.2337 25.9875L24.1162 25.8838L18.185 19.955C17.0012 20.8576 15.6196 21.4654 14.1543 21.728C12.689 21.9906 11.1823 21.9005 9.75874 21.4651C8.33521 21.0298 7.03581 20.2617 5.96806 19.2244C4.90032 18.1872 4.09492 16.9106 3.61853 15.5002C3.14213 14.0899 3.00843 12.5864 3.22849 11.1141C3.44854 9.64187 4.01603 8.24318 4.88399 7.03378C5.75195 5.82439 6.89542 4.83907 8.2198 4.15936C9.54418 3.47964 11.0114 3.12508 12.5 3.125V3.125ZM12.5 5.625C10.6766 5.625 8.92795 6.34933 7.63864 7.63864C6.34932 8.92795 5.62499 10.6766 5.62499 12.5C5.62499 14.3234 6.34932 16.072 7.63864 17.3614C8.92795 18.6507 10.6766 19.375 12.5 19.375C14.3234 19.375 16.072 18.6507 17.3614 17.3614C18.6507 16.072 19.375 14.3234 19.375 12.5C19.375 10.6766 18.6507 8.92795 17.3614 7.63864C16.072 6.34933 14.3234 5.625 12.5 5.625Z"
                                fill="currentColor"
                            />
                        </svg>
                    </button>

                    <div className="hidden lg:flex items-center justify-center border-l-2">
                        <button
                            onClick={() => router.push('/login')}
                            className={`pl-5 pr-1 flex justify-between items-center transition ${
                                color === 'default'
                                    ? `text-gray-500 hover:text-purple-700`
                                    : `text-gray-400 hover:text-white`
                            }`}
                        >
                            <svg
                                width="21"
                                height="21"
                                viewBox="0 0 21 21"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10.5 10.5C13.8141 10.5 16.5 8.1498 16.5 5.25C16.5 2.3502 13.8141 0 10.5 0C7.18594 0 4.5 2.3502 4.5 5.25C4.5 8.1498 7.18594 10.5 10.5 10.5ZM14.7 11.8125H13.9172C12.8766 12.2309 11.7188 12.4688 10.5 12.4688C9.28125 12.4688 8.12813 12.2309 7.08281 11.8125H6.3C2.82187 11.8125 0 14.2816 0 17.325V19.0312C0 20.1182 1.00781 21 2.25 21H18.75C19.9922 21 21 20.1182 21 19.0312V17.325C21 14.2816 18.1781 11.8125 14.7 11.8125Z"
                                    fill="currentColor"
                                />
                            </svg>

                            <span className="pl-2 whitespace-nowrap font-semibold">{Lang.login[lang]}</span>
                        </button>
                        <svg
                            className={`${color === 'default' ? 'text-gray-500' : 'text-gray-400'}`}
                            width="10"
                            height="10"
                            viewBox="0 0 10 10"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 7.5C4.33696 7.5 3.70107 7.23661 3.23223 6.76777C2.76339 6.29893 2.5 5.66304 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5C5.66304 2.5 6.29893 2.76339 6.76777 3.23223C7.23661 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.23661 6.29893 6.76777 6.76777C6.29893 7.23661 5.66304 7.5 5 7.5Z"
                                fill="currentColor"
                            />
                        </svg>
                        <button
                            onClick={() => router.push('/login?subscribe=true')}
                            className={`pl-1 flex justify-between items-center transition ${
                                color === 'default'
                                    ? `text-gray-500 hover:text-purple-700`
                                    : `text-gray-400 hover:text-white`
                            } font-semibold`}
                        >
                            {Lang.sign_in[lang]}
                        </button>
                    </div>
                </div>
            </nav>
            <div
                className={`transition fixed overflow-hidden h-0 ${
                    show ? ' h-screen origin-top animate-grow' : ''
                } top-0 left-0 w-screen bg-white z-10 flex flex-col m-0 p-0`}
            >
                <div className="flex-none flex flex-row justify-between border-b-2 px-4 pt-4 pb-2">
                    <div className="flex-none w-8">
                        <Logo />
                    </div>
                    <div className="flex flex-row items-center">
                        <div className="flex items-center justify-center">
                            <button
                                onClick={() => {
                                    setShow(false)
                                    router.push('/login')
                                }}
                                className={`pl-5 pr-1 flex justify-between items-center transition text-gray-600 hover:text-purple-700`}
                            >
                                <svg
                                    width="21"
                                    height="21"
                                    viewBox="0 0 21 21"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M10.5 10.5C13.8141 10.5 16.5 8.1498 16.5 5.25C16.5 2.3502 13.8141 0 10.5 0C7.18594 0 4.5 2.3502 4.5 5.25C4.5 8.1498 7.18594 10.5 10.5 10.5ZM14.7 11.8125H13.9172C12.8766 12.2309 11.7188 12.4688 10.5 12.4688C9.28125 12.4688 8.12813 12.2309 7.08281 11.8125H6.3C2.82187 11.8125 0 14.2816 0 17.325V19.0312C0 20.1182 1.00781 21 2.25 21H18.75C19.9922 21 21 20.1182 21 19.0312V17.325C21 14.2816 18.1781 11.8125 14.7 11.8125Z"
                                        fill="currentColor"
                                    />
                                </svg>

                                <span className="pl-2 whitespace-nowrap font-semibold">{Lang.login[lang]}</span>
                            </button>
                            <svg
                                className="text-gray-500"
                                width="10"
                                height="10"
                                viewBox="0 0 10 10"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5 7.5C4.33696 7.5 3.70107 7.23661 3.23223 6.76777C2.76339 6.29893 2.5 5.66304 2.5 5C2.5 4.33696 2.76339 3.70107 3.23223 3.23223C3.70107 2.76339 4.33696 2.5 5 2.5C5.66304 2.5 6.29893 2.76339 6.76777 3.23223C7.23661 3.70107 7.5 4.33696 7.5 5C7.5 5.66304 7.23661 6.29893 6.76777 6.76777C6.29893 7.23661 5.66304 7.5 5 7.5Z"
                                    fill="currentColor"
                                />
                            </svg>
                            <button
                                onClick={() => {
                                    setShow(false)
                                    router.push('/login?subscribe=true')
                                }}
                                className={`pl-1 flex justify-between items-center transition text-gray-600 hover:text-purple-700 font-semibold`}
                            >
                                {Lang.sign_in[lang]}
                            </button>
                        </div>

                        <button
                            onClick={() => setShow(false)}
                            className="w-10 h-10 rounded-full hover:text-purple-700 ml-4 text-3xl text-bold text-gray-600"
                        >
                            &times;
                        </button>
                    </div>
                </div>
                <div className="flex items-center justify-start p-5 flex-col  space-y-4 h-full">
                    <div className="space-y-4">
                        <NavItem
                            className="flex"
                            active={active === '/tutoriels'}
                            onClick={() => router.push('/tutoriels')}
                            title={Lang.tutoriel[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M18 4H6C3.79086 4 2 5.79086 2 8V16C2 18.2091 3.79086 20 6 20H18C20.2091 20 22 18.2091 22 16V8C22 5.79086 20.2091 4 18 4Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M15 12L10 9V15L15 12Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavItem>

                        <NavItem
                            className="flex"
                            active={active === '/cursus'}
                            onClick={() => router.push('/cursus')}
                            title={Lang.cursus[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M9 5.25C9 4.65326 9.23705 4.08097 9.65901 3.65901C10.081 3.23705 10.6533 3 11.25 3H12.75C13.3467 3 13.919 3.23705 14.341 3.65901C14.7629 4.08097 15 4.65326 15 5.25V6.75C15 7.34674 14.7629 7.91903 14.341 8.34099C13.919 8.76295 13.3467 9 12.75 9V10.5H16.5C16.6989 10.5 16.8897 10.579 17.0303 10.7197C17.171 10.8603 17.25 11.0511 17.25 11.25V12.75C17.25 12.9489 17.171 13.1397 17.0303 13.2803C16.8897 13.421 16.6989 13.5 16.5 13.5C16.3011 13.5 16.1103 13.421 15.9697 13.2803C15.829 13.1397 15.75 12.9489 15.75 12.75V12H8.25V12.75C8.25 12.9489 8.17098 13.1397 8.03033 13.2803C7.88968 13.421 7.69891 13.5 7.5 13.5C7.30109 13.5 7.11032 13.421 6.96967 13.2803C6.82902 13.1397 6.75 12.9489 6.75 12.75V11.25C6.75 11.0511 6.82902 10.8603 6.96967 10.7197C7.11032 10.579 7.30109 10.5 7.5 10.5H11.25V9C10.6533 9 10.081 8.76295 9.65901 8.34099C9.23705 7.91903 9 7.34674 9 6.75V5.25ZM12.75 7.5C12.9489 7.5 13.1397 7.42098 13.2803 7.28033C13.421 7.13968 13.5 6.94891 13.5 6.75V5.25C13.5 5.05109 13.421 4.86032 13.2803 4.71967C13.1397 4.57902 12.9489 4.5 12.75 4.5H11.25C11.0511 4.5 10.8603 4.57902 10.7197 4.71967C10.579 4.86032 10.5 5.05109 10.5 5.25V6.75C10.5 6.94891 10.579 7.13968 10.7197 7.28033C10.8603 7.42098 11.0511 7.5 11.25 7.5H12.75ZM4.5 17.25C4.5 16.6533 4.73705 16.081 5.15901 15.659C5.58097 15.2371 6.15326 15 6.75 15H8.25C8.84674 15 9.41903 15.2371 9.84099 15.659C10.2629 16.081 10.5 16.6533 10.5 17.25V18.75C10.5 19.3467 10.2629 19.919 9.84099 20.341C9.41903 20.7629 8.84674 21 8.25 21H6.75C6.15326 21 5.58097 20.7629 5.15901 20.341C4.73705 19.919 4.5 19.3467 4.5 18.75V17.25ZM6.75 16.5C6.55109 16.5 6.36032 16.579 6.21967 16.7197C6.07902 16.8603 6 17.0511 6 17.25V18.75C6 18.9489 6.07902 19.1397 6.21967 19.2803C6.36032 19.421 6.55109 19.5 6.75 19.5H8.25C8.44891 19.5 8.63968 19.421 8.78033 19.2803C8.92098 19.1397 9 18.9489 9 18.75V17.25C9 17.0511 8.92098 16.8603 8.78033 16.7197C8.63968 16.579 8.44891 16.5 8.25 16.5H6.75ZM13.5 17.25C13.5 16.6533 13.7371 16.081 14.159 15.659C14.581 15.2371 15.1533 15 15.75 15H17.25C17.8467 15 18.419 15.2371 18.841 15.659C19.2629 16.081 19.5 16.6533 19.5 17.25V18.75C19.5 19.3467 19.2629 19.919 18.841 20.341C18.419 20.7629 17.8467 21 17.25 21H15.75C15.1533 21 14.581 20.7629 14.159 20.341C13.7371 19.919 13.5 19.3467 13.5 18.75V17.25ZM15.75 16.5C15.5511 16.5 15.3603 16.579 15.2197 16.7197C15.079 16.8603 15 17.0511 15 17.25V18.75C15 18.9489 15.079 19.1397 15.2197 19.2803C15.3603 19.421 15.5511 19.5 15.75 19.5H17.25C17.4489 19.5 17.6397 19.421 17.7803 19.2803C17.921 19.1397 18 18.9489 18 18.75V17.25C18 17.0511 17.921 16.8603 17.7803 16.7197C17.6397 16.579 17.4489 16.5 17.25 16.5H15.75Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </NavItem>

                        <NavItem
                            color="default"
                            className="flex"
                            active={active === '/formations'}
                            onClick={() => router.push('/formations')}
                            title={Lang.formations[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M6.0001 3.60001C5.36358 3.60001 4.75313 3.85286 4.30304 4.30295C3.85295 4.75304 3.6001 5.36349 3.6001 6.00001V18C3.6001 18.6365 3.85295 19.247 4.30304 19.6971C4.75313 20.1471 5.36358 20.4 6.0001 20.4C6.63662 20.4 7.24707 20.1471 7.69715 19.6971C8.14724 19.247 8.4001 18.6365 8.4001 18V6.00001C8.4001 5.36349 8.14724 4.75304 7.69715 4.30295C7.24707 3.85286 6.63662 3.60001 6.0001 3.60001ZM4.8001 6.00001C4.8001 5.68175 4.92653 5.37652 5.15157 5.15148C5.37661 4.92643 5.68184 4.80001 6.0001 4.80001C6.31836 4.80001 6.62358 4.92643 6.84862 5.15148C7.07367 5.37652 7.2001 5.68175 7.2001 6.00001V18C7.2001 18.3183 7.07367 18.6235 6.84862 18.8485C6.62358 19.0736 6.31836 19.2 6.0001 19.2C5.68184 19.2 5.37661 19.0736 5.15157 18.8485C4.92653 18.6235 4.8001 18.3183 4.8001 18V6.00001Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M9.6001 9.60001C9.6001 8.96349 9.85295 8.35304 10.303 7.90296C10.7531 7.45287 11.3636 7.20001 12.0001 7.20001C12.6366 7.20001 13.2471 7.45287 13.6972 7.90296C14.1472 8.35304 14.4001 8.96349 14.4001 9.60001V18C14.4001 18.6365 14.1472 19.247 13.6972 19.6971C13.2471 20.1472 12.6366 20.4 12.0001 20.4C11.3636 20.4 10.7531 20.1472 10.303 19.6971C9.85295 19.247 9.6001 18.6365 9.6001 18V9.60001ZM12.0001 8.40001C11.6818 8.40001 11.3766 8.52644 11.1516 8.75148C10.9265 8.97653 10.8001 9.28175 10.8001 9.60001V18C10.8001 18.3183 10.9265 18.6235 11.1516 18.8485C11.3766 19.0736 11.6818 19.2 12.0001 19.2C12.3184 19.2 12.6236 19.0736 12.8486 18.8485C13.0737 18.6235 13.2001 18.3183 13.2001 18V9.60001C13.2001 9.28175 13.0737 8.97653 12.8486 8.75148C12.6236 8.52644 12.3184 8.40001 12.0001 8.40001Z"
                                    fill="currentColor"
                                />
                                <path
                                    d="M15.6001 13.2C15.6001 12.5635 15.853 11.953 16.303 11.503C16.7531 11.0529 17.3636 10.8 18.0001 10.8C18.6366 10.8 19.2471 11.0529 19.6972 11.503C20.1472 11.953 20.4001 12.5635 20.4001 13.2V18C20.4001 18.6365 20.1472 19.247 19.6972 19.6971C19.2471 20.1472 18.6366 20.4 18.0001 20.4C17.3636 20.4 16.7531 20.1472 16.303 19.6971C15.853 19.247 15.6001 18.6365 15.6001 18V13.2ZM18.0001 12C17.6818 12 17.3766 12.1264 17.1516 12.3515C16.9265 12.5765 16.8001 12.8818 16.8001 13.2V18C16.8001 18.3183 16.9265 18.6235 17.1516 18.8485C17.3766 19.0736 17.6818 19.2 18.0001 19.2C18.3184 19.2 18.6236 19.0736 18.8486 18.8485C19.0737 18.6235 19.2001 18.3183 19.2001 18V13.2C19.2001 12.8818 19.0737 12.5765 18.8486 12.3515C18.6236 12.1264 18.3184 12 18.0001 12Z"
                                    fill="currentColor"
                                />
                            </svg>
                        </NavItem>

                        <NavItem
                            className="flex"
                            active={active === '/abonner'}
                            onClick={() => router.push('/abonner')}
                            title={Lang.subscribe[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M11.0741 2.633C11.3941 1.789 12.6051 1.789 12.9261 2.633L14.9961 8.367C15.1411 8.747 15.5101 9 15.9221 9H21.0091C21.9491 9 22.3591 10.17 21.6201 10.743L18.0001 14C17.8379 14.1247 17.7194 14.2975 17.6616 14.4937C17.6037 14.6898 17.6095 14.8993 17.6781 15.092L19.0001 20.695C19.3221 21.595 18.2801 22.368 17.4921 21.814L12.5751 18.694C12.4067 18.5757 12.2059 18.5122 12.0001 18.5122C11.7943 18.5122 11.5935 18.5757 11.4251 18.694L6.50808 21.814C5.72108 22.368 4.67808 21.594 5.00008 20.695L6.32208 15.092C6.39066 14.8993 6.39643 14.6898 6.33859 14.4937C6.28074 14.2975 6.16223 14.1247 6.00008 14L2.38008 10.743C1.64008 10.17 2.05208 9 2.99008 9H8.07708C8.27737 9.00067 8.47314 8.9405 8.63849 8.82747C8.80385 8.71444 8.93098 8.55387 9.00308 8.367L11.0731 2.633H11.0741Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </NavItem>

                        <NavItem
                            className="flex"
                            active={active === '/forum'}
                            onClick={() => router.push('/forum')}
                            title={Lang.forum[lang]}
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M14 19C17.771 19 19.657 19 20.828 17.828C22 16.657 22 14.771 22 11C22 7.229 22 5.343 20.828 4.172C19.657 3 17.771 3 14 3H10C6.229 3 4.343 3 3.172 4.172C2 5.343 2 7.229 2 11C2 14.771 2 16.657 3.172 17.828C3.825 18.482 4.7 18.771 6 18.898"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path d="M12 11V11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M8 11V11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path d="M16 11V11.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                                <path
                                    d="M14 19C12.764 19 11.402 19.5 10.159 20.145C8.161 21.182 7.162 21.701 6.67 21.37C6.178 21.04 6.271 20.015 6.458 17.966L6.5 17.5"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </NavItem>
                    </div>
                </div>
            </div>
        </header>
    )
}

export const NavItem = (props) => {
    const { color = 'default', title, onClick, active = false, className = '' } = props
    const classes = React.useMemo(() => {
        if (color === 'default') {
            if (active) return 'text-purple-700'
            return 'text-gray-500 hover:text-purple-700'
        } else {
            if (active) return 'text-white'
            return 'text-gray-400 hover:text-white'
        }
    }, [color, active])
    return (
        <button
            onClick={onClick}
            type="button"
            className={`xl:pl-10 pl-5 justify-between items-center transition ${classes}                                                                                                                                                                                                                                                                                                                                                                 ${className} font-semibold`}
        >
            <div className="pr-1">{props.children}</div>
            <div className="t-16">{title}</div>
        </button>
    )
}
