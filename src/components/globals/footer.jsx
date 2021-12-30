import { useRouter } from 'next/router'
import React from 'react'
import { Lang } from '../../lang'
import { ENV } from '../../../src/enviroments/env'
import { OnOutsideClickListener } from '../../../src/scripts'
import { LangContext } from '../../contexts'

export const AppFooter = (props) => {
    const { lang, setLang } = React.useContext(LangContext)

    const lang_menu_ref = React.useRef(null)

    const [showLang, toggleShowLang] = React.useState(false)

    React.useEffect(() => {
        OnOutsideClickListener(lang_menu_ref.current, () => toggleShowLang(false))
    }, [])

    const router = useRouter()

    function langMenuClick(value) {
        localStorage.setItem(ENV.SESSION_KEYS.lang, value)
        setLang(value)
        toggleShowLang(false)
    }

    return (
        <footer className="bg-gray-200 w-full h-auto border-t-2">
            <div className="flex container pt-10 px-7 mx-auto justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                <div className="flex-1">
                    <div className="text-gray-700 text-xl font-semibold mb-5">{Lang.locations[lang]}</div>
                    <div className="text-gray-500 text-ld">
                        {Lang.principal_office[lang]}:{' '}
                        <span className="font-semibold">Akwa, {Lang.around_festival_room[lang]}.</span>
                    </div>
                    <div className="relative flex items-center py-2 flow-row text-gray-500 text-base">
                        <button
                            onClick={() => toggleShowLang((s) => !s)}
                            className="transition bg-white rounded-md shadow-sm px-4 py-2 hover:bg-gray-100"
                        >
                            <span>{Lang.language[lang]}:</span>&nbsp;
                            <span className="font-semibold">
                                {ENV.LANGUAGES.find((l) => l.value === lang).label[lang]}
                            </span>
                        </button>

                        <div
                            ref={lang_menu_ref}
                            className={`transition absolute top-2 left-0 flex flex-col space-y-1 bg-white rounded-md shadow-md overflow-hidden ${
                                showLang ? '' : 'hidden'
                            }`}
                        >
                            {ENV.LANGUAGES.map((lang_item) => (
                                <button
                                    className={`transition w-24 px-3 py-2 hover:text-purple-500 hover:bg-purple-500 hover:bg-opacity-20 ${
                                        lang_item.value === lang ? 'text-purple-500' : ''
                                    }`}
                                    key={lang_item.value}
                                    onClick={() => langMenuClick(lang_item.value)}
                                >
                                    {lang_item.label[lang]}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <div className="text-gray-700 text-xl font-semibold mb-5">Options</div>
                    <a
                        href="#"
                        onClick={() => router.push('/tutoriels')}
                        className="block transition duration-300 text-gray-500 text-lg hover:text-purple-700"
                    >
                        Tutoriels
                    </a>
                    <a
                        href="#"
                        onClick={() => router.push('/cursus')}
                        className="block transition duration-300 text-gray-500 text-ld hover:text-purple-700"
                    >
                        Curcus
                    </a>
                    <a
                        href="#"
                        onClick={() => router.push('/formations')}
                        className="block transition duration-300 text-gray-500 text-lg hover:text-purple-700"
                    >
                        Formations
                    </a>
                    <a
                        href="#"
                        onClick={() => router.push('/abonner')}
                        className="block transition duration-300 text-gray-500 text-lg hover:text-purple-700"
                    >
                        {Lang.subscritions[lang]}
                    </a>
                    <a
                        href="#"
                        onClick={() => router.push('/forum')}
                        className="block transition duration-300 text-gray-500 text-lg hover:text-purple-700"
                    >
                        Forum
                    </a>
                </div>
                <div className="flex-1">
                    <div className="text-gray-700 text-xl font-semibold mb-5">{Lang.social_networks[lang]}</div>
                    <div className="flex flex-row space-x-4">
                        <a
                            href="wwww.facebook.com"
                            className="bg-gray-300 w-12 h-12 rounded-full flex-none flex items-center justify-center transition duration-300 hover:shadow-xl"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M17 3.50005C17 3.36745 16.9473 3.24027 16.8536 3.1465C16.7598 3.05273 16.6326 3.00005 16.5 3.00005H14C12.7411 2.93734 11.5086 3.37544 10.5717 4.21863C9.63485 5.06182 9.06978 6.24155 9 7.50005V10.2001H6.5C6.36739 10.2001 6.24021 10.2527 6.14645 10.3465C6.05268 10.4403 6 10.5674 6 10.7001V13.3001C6 13.4327 6.05268 13.5598 6.14645 13.6536C6.24021 13.7474 6.36739 13.8001 6.5 13.8001H9V20.5001C9 20.6327 9.05268 20.7598 9.14645 20.8536C9.24021 20.9474 9.36739 21.0001 9.5 21.0001H12.5C12.6326 21.0001 12.7598 20.9474 12.8536 20.8536C12.9473 20.7598 13 20.6327 13 20.5001V13.8001H15.62C15.7312 13.8017 15.8397 13.7661 15.9285 13.6991C16.0172 13.6321 16.0811 13.5374 16.11 13.4301L16.83 10.8301C16.8499 10.7562 16.8526 10.6787 16.8378 10.6036C16.8231 10.5286 16.7913 10.4579 16.7449 10.397C16.6985 10.3362 16.6388 10.2868 16.5704 10.2526C16.5019 10.2185 16.4265 10.2005 16.35 10.2001H13V7.50005C13.0249 7.25253 13.1411 7.02317 13.326 6.85675C13.5109 6.69033 13.7512 6.59881 14 6.60005H16.5C16.6326 6.60005 16.7598 6.54737 16.8536 6.45361C16.9473 6.35984 17 6.23266 17 6.10005V3.50005Z"
                                    fill="#27A8E0"
                                />
                            </svg>
                        </a>
                        <a
                            href="www.google.com"
                            className="bg-gray-300 w-12 h-12 rounded-full flex-none flex items-center justify-center transition duration-300 hover:shadow-xl"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M21.8055 10.0415H21V10H12V14H17.6515C16.827 16.3285 14.6115 18 12 18C8.6865 18 6 15.3135 6 12C6 8.6865 8.6865 6 12 6C13.5295 6 14.921 6.577 15.9805 7.5195L18.809 4.691C17.023 3.0265 14.634 2 12 2C6.4775 2 2 6.4775 2 12C2 17.5225 6.4775 22 12 22C17.5225 22 22 17.5225 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                                    fill="#FFC107"
                                />
                                <path
                                    d="M3.15308 7.3455L6.43858 9.755C7.32758 7.554 9.48058 6 12.0001 6C13.5296 6 14.9211 6.577 15.9806 7.5195L18.8091 4.691C17.0231 3.0265 14.6341 2 12.0001 2C8.15908 2 4.82808 4.1685 3.15308 7.3455Z"
                                    fill="#FF3D00"
                                />
                                <path
                                    d="M11.9999 22.0001C14.5829 22.0001 16.9299 21.0116 18.7044 19.4041L15.6094 16.7851C14.5717 17.5743 13.3036 18.0011 11.9999 18.0001C9.39891 18.0001 7.19041 16.3416 6.35841 14.0271L3.09741 16.5396C4.75241 19.7781 8.11341 22.0001 11.9999 22.0001Z"
                                    fill="#4CAF50"
                                />
                                <path
                                    d="M21.8055 10.0415H21V10H12V14H17.6515C17.2571 15.1082 16.5467 16.0766 15.608 16.7855L15.6095 16.7845L18.7045 19.4035C18.4855 19.6025 22 17 22 12C22 11.3295 21.931 10.675 21.8055 10.0415Z"
                                    fill="#1976D2"
                                />
                            </svg>
                        </a>
                        <a
                            href="www.linkedin.com"
                            className="bg-gray-300 w-12 h-12 rounded-full flex-none flex items-center justify-center transition duration-300 hover:shadow-xl"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M15.15 8.39994C14.3836 8.39731 13.6242 8.54583 12.9152 8.83701C12.2062 9.12819 11.5616 9.55632 11.0182 10.0969C10.4749 10.6375 10.0434 11.2799 9.74861 11.9873C9.45379 12.6948 9.30136 13.4535 9.30005 14.2199V20.0999C9.30005 20.3386 9.39487 20.5676 9.56365 20.7363C9.73244 20.9051 9.96135 20.9999 10.2 20.9999H12.3C12.5387 20.9999 12.7677 20.9051 12.9364 20.7363C13.1052 20.5676 13.2 20.3386 13.2 20.0999V14.2199C13.1999 13.9473 13.2571 13.6778 13.3681 13.4288C13.4791 13.1798 13.6413 12.957 13.8441 12.7749C14.047 12.5928 14.2859 12.4555 14.5454 12.3719C14.8049 12.2884 15.0791 12.2604 15.35 12.2899C15.8361 12.3512 16.2827 12.5886 16.6053 12.9572C16.9278 13.3259 17.1039 13.8001 17.1 14.2899V20.0999C17.1 20.3386 17.1949 20.5676 17.3637 20.7363C17.5324 20.9051 17.7614 20.9999 18 20.9999H20.1C20.3387 20.9999 20.5677 20.9051 20.7364 20.7363C20.9052 20.5676 21 20.3386 21 20.0999V14.2199C20.9987 13.4535 20.8463 12.6948 20.5515 11.9873C20.2567 11.2799 19.8252 10.6375 19.2819 10.0969C18.7385 9.55632 18.0939 9.12819 17.3849 8.83701C16.6759 8.54583 15.9165 8.39731 15.15 8.39994Z"
                                    fill="#27A8E0"
                                />
                                <path
                                    d="M6.6 9.30005H3.9C3.40294 9.30005 3 9.70299 3 10.2V20.1C3 20.5971 3.40294 21 3.9 21H6.6C7.09706 21 7.5 20.5971 7.5 20.1V10.2C7.5 9.70299 7.09706 9.30005 6.6 9.30005Z"
                                    fill="#27A8E0"
                                />
                                <path
                                    d="M5.25 7.5C6.49264 7.5 7.5 6.49264 7.5 5.25C7.5 4.00736 6.49264 3 5.25 3C4.00736 3 3 4.00736 3 5.25C3 6.49264 4.00736 7.5 5.25 7.5Z"
                                    fill="#27A8E0"
                                />
                            </svg>
                        </a>
                        <a
                            href="www.instagram.com"
                            className="bg-gray-300 w-12 h-12 rounded-full flex-none flex items-center justify-center transition duration-300 hover:shadow-xl"
                        >
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 8.87579C10.2797 8.87579 8.87577 10.2797 8.87577 12C8.87577 13.7203 10.2797 15.1242 12 15.1242C13.7203 15.1242 15.1242 13.7203 15.1242 12C15.1242 10.2797 13.7203 8.87579 12 8.87579ZM21.3703 12C21.3703 10.7063 21.382 9.42423 21.3094 8.13283C21.2367 6.63283 20.8945 5.30158 19.7976 4.2047C18.6984 3.10548 17.3695 2.76564 15.8695 2.69298C14.5758 2.62033 13.2937 2.63204 12.0023 2.63204C10.7086 2.63204 9.42655 2.62033 8.13515 2.69298C6.63515 2.76564 5.3039 3.10783 4.20702 4.2047C3.1078 5.30392 2.76796 6.63283 2.6953 8.13283C2.62265 9.42658 2.63436 10.7086 2.63436 12C2.63436 13.2914 2.62265 14.5758 2.6953 15.8672C2.76796 17.3672 3.11015 18.6985 4.20702 19.7953C5.30624 20.8945 6.63515 21.2344 8.13515 21.307C9.42889 21.3797 10.7109 21.368 12.0023 21.368C13.2961 21.368 14.5781 21.3797 15.8695 21.307C17.3695 21.2344 18.7008 20.8922 19.7976 19.7953C20.8969 18.6961 21.2367 17.3672 21.3094 15.8672C21.3844 14.5758 21.3703 13.2938 21.3703 12ZM12 16.807C9.33983 16.807 7.19296 14.6602 7.19296 12C7.19296 9.33986 9.33983 7.19298 12 7.19298C14.6601 7.19298 16.807 9.33986 16.807 12C16.807 14.6602 14.6601 16.807 12 16.807ZM17.0039 8.11876C16.3828 8.11876 15.8812 7.6172 15.8812 6.99611C15.8812 6.37501 16.3828 5.87345 17.0039 5.87345C17.625 5.87345 18.1266 6.37501 18.1266 6.99611C18.1267 7.14359 18.0978 7.28966 18.0415 7.42595C17.9851 7.56224 17.9024 7.68607 17.7981 7.79036C17.6939 7.89464 17.57 7.97733 17.4337 8.03368C17.2974 8.09004 17.1514 8.11895 17.0039 8.11876Z"
                                    fill="#F48A0C"
                                />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
            <div className="flex container py-5 px-7 mx-auto justify-center items-center">
                <div className="text-gray-400">&copy; {Lang.copyright[lang]}</div>
            </div>
        </footer>
    )
}
