import { useRouter } from 'next/router'
import React from 'react'
import { AppFooter, AppHead, AppHeader, Chapter, Container, Description } from '../../src/components'
import { LangContext } from '../../src/contexts'
import { Lang } from '../../src/lang'
import { ENV } from '../../src/enviroments/env'
import { Bool2, Play } from '../../src/components/svg'

export default function Formations() {
    const [lang, setLang] = React.useState('fr')

    const router = useRouter()
    const { page: code } = router.query

    const [header_color, setHeaderColor] = React.useState('white')
    const [current_part, setPart] = React.useState(1)

    const lang_context = React.useMemo(
        () => ({
            lang: lang,
            setLang: setLang,
        }),
        [lang, setLang]
    )

    React.useEffect(() => {
        setLang(localStorage.getItem(ENV.SESSION_KEYS.lang) || 'fr')
        document.body.scrollTop = 0
        console.log(code)
        document.body.addEventListener('scroll', handleScroll)
        return () => {
            document.body.removeEventListener('scroll', handleScroll)
        }
    }, [code])

    function handleScroll() {
        if (document.body.scrollTop + 100 > 880) setHeaderColor('default')
        else setHeaderColor('white')
    }

    return (
        <LangContext.Provider value={lang_context}>
            <main
                className="w-full bg-no-repeat bg-cover"
                style={{
                    backgroundImage: 'url(/images/banner_bg_img.jpg)',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'top center',
                    backgroundSize: '100% 800px',
                }}
            >
                <AppHead title={Lang.formations[lang]} />
                <AppHeader color={header_color} />
                <Banner />
                <Container>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                        <CardInfo contents={['14h48 de vidéos', '29 Chapitres']} label={'Information'} />
                        <CardInfo contents={['Documentation', 'Challenges pour s’entrainer']} label={'Liens utils'} />
                        <CardInfo contents={['Editeur de code', 'HTML/CSS']} label={'Prérequis'} />
                    </div>
                </Container>

                <div className="flex mt-10 flex-row border-b bg-white lg:hidden">
                    <button onClick={() => setPart(1)} className="flex-1">
                        <div
                            className={` transition flex flex-row justify-center items-center ${
                                current_part === 1 ? 'text-green-400' : 'text-gray-500'
                            } text-xl px-5 py-3`}
                        >
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                                <path
                                    d="M16.474 5.40801L18.592 7.52501L16.474 5.40801ZM17.836 3.54301L12.109 9.27001C11.8131 9.56551 11.6113 9.94199 11.529 10.352L11 13L13.648 12.47C14.058 12.388 14.434 12.187 14.73 11.891L20.457 6.16401C20.6291 5.99191 20.7656 5.7876 20.8588 5.56275C20.9519 5.33789 20.9998 5.09689 20.9998 4.85351C20.9998 4.61013 20.9519 4.36913 20.8588 4.14427C20.7656 3.91942 20.6291 3.71511 20.457 3.54301C20.2849 3.37091 20.0806 3.2344 19.8557 3.14126C19.6309 3.04812 19.3899 3.00018 19.1465 3.00018C18.9031 3.00018 18.6621 3.04812 18.4373 3.14126C18.2124 3.2344 18.0081 3.37091 17.836 3.54301V3.54301Z"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M19 15V18C19 18.5304 18.7893 19.0391 18.4142 19.4142C18.0391 19.7893 17.5304 20 17 20H6C5.46957 20 4.96086 19.7893 4.58579 19.4142C4.21071 19.0391 4 18.5304 4 18V7C4 6.46957 4.21071 5.96086 4.58579 5.58579C4.96086 5.21071 5.46957 5 6 5H9"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                            &nbsp;
                            <span className="overflow-ellipsis overflow-hidden whitespace-nowrap">
                                {Lang.presentation[lang]}
                            </span>
                        </div>
                        <div
                            className={` transition h-1 rounded-lg ${
                                current_part === 1 ? 'bg-green-400' : 'bg-opacity-0'
                            } mx-5`}
                        ></div>
                    </button>

                    <button onClick={() => setPart(2)} className="flex-1">
                        <div
                            className={` transition flex flex-row justify-center items-center ${
                                current_part === 2 ? 'text-green-400' : 'text-gray-500'
                            } text-xl px-5 py-3`}
                        >
                            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                                <path d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z" fill="currentColor" />
                            </svg>
                            &nbsp;
                            <span className="overflow-ellipsis overflow-hidden whitespace-nowrap">
                                {Lang.chapters[lang]}
                            </span>
                        </div>
                        <div
                            className={` transition h-1 rounded-lg ${
                                current_part === 2 ? 'bg-green-400' : 'bg-opacity-0'
                            } mx-5`}
                        ></div>
                    </button>
                </div>

                <div className="lg:hidden bg-white">
                    <div className={`p-3 ${current_part === 1 ? '' : 'hidden'}`}>
                        <Chapter />
                    </div>
                    <div className={`p-3 ${current_part === 2 ? '' : 'hidden'}`}>
                        <Description />
                    </div>
                </div>

                <div className="hidden lg:block">
                    <Container>
                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                            <div className="col-span-5 col-start-1">
                                <Chapter />
                            </div>
                            <div className="col-span-7 col-start-6">
                                <Description />
                            </div>
                        </div>
                    </Container>
                </div>

                <br />
                <br />
                <br />
                <AppFooter />
            </main>
        </LangContext.Provider>
    )
}

export const Banner = () => {
    const { lang } = React.useContext(LangContext)
    return (
        <Container>
            <div className="w-full flex flex-col lg:flex-row">
                <div className="flex flex-row justify-between items-center flex-1">
                    <img src="/images/js_logo.svg" alt="Formations" className="w-32 h-32 lg:w-48 lg:h-48" />
                    <div className="lg:hidden text-yellow-500 text-2xl font-bold">{'15 000 XFA'}</div>
                </div>

                <div className="space-y-4 flex-1">
                    <div className="text-white text-2xl lg:text-4xl font-bold text-right">
                        {'Apprendre le JavaScript'}
                    </div>
                    <div className="text-gray-200 text-base text-justify">
                        {
                            'Le javascript va vous permettre de rajouter des inteéractions au niveau de vos éléments HTML et de modifer le DOM.'
                        }
                    </div>
                    <div className="flex flex-row justify-center lg:justify-between items-center">
                        <div className="hidden lg:block text-yellow-500 text-2xl font-bold">{'15 000 XFA'}</div>
                        <button className="transition border border-white text-white text-base px-3 py-1 rounded-lg flex flex-row justify-center items-center hover:text-yellow-500 hover:border-yellow-500">
                            <Play className="w-4 h-4" />
                            &nbsp;&nbsp;<span>{Lang.begin[lang]}</span>
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    )
}

export const CardInfo = ({ label, contents = [] }) => {
    return (
        <div className="card-info rounded-lg p-3 space-y-4">
            <div className="text-gray-700 text-base md:text-xl font-semibold overflow-ellipsis overflow-hidden w-full whitespace-nowrap">
                {label}
            </div>
            {contents.map((item) => (
                <div key={item} className="flex flex-row space-x-2 text-xs text-gray-600 md:text-base">
                    <Bool2 className="flex-none w-4 h-4" /> <span>{item}</span>
                </div>
            ))}
        </div>
    )
}
