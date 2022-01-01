import { useRouter } from 'next/router'
import React from 'react'
import {
    AppFooter,
    AppHead,
    AppHeader,
    Description,
    FormationDetailBanner,
    FormationDetailChapter,
} from '../../../src/components'
import { ChaptersContext, CurrentPathContext, LangContext } from '../../../src/contexts'
import { Lang } from '../../../src/lang'
import { ENV } from '../../../src/enviroments/env'
import constants from '../../../src/enviroments/constants'

export default function Detail() {
    const router = useRouter()
    const { code_play } = router.query

    const [current_part, setPart] = React.useState(1)
    const [lang, setLang] = React.useState('fr')
    const [path, setPath] = React.useState('')
    const [chapters, setChapters] = React.useState([])

    const lang_context = React.useMemo(
        () => ({
            lang: lang,
            setLang: setLang,
        }),
        [lang, setLang]
    )

    const path_context = React.useMemo(
        () => ({
            path: path,
            setPath: setPath,
        }),
        [path, setPath]
    )

    const chapters_context = React.useMemo(() => {
        return {
            chapters: chapters,
            setChapters: setChapters,
        }
    }, [chapters, setChapters])

    React.useEffect(() => {
        setLang(localStorage.getItem(ENV.SESSION_KEYS.lang) || 'fr')
        document.body.scrollTop = 0
        getDetail()
        setPath(window.location.pathname)
        return () => {}
    }, [code_play])

    function getDetail() {
        setChapters(constants.formation1)
        // TODO
    }

    return (
        <LangContext.Provider value={lang_context}>
            <CurrentPathContext.Provider value={path_context}>
                <ChaptersContext.Provider value={chapters_context}>
                    <AppHead title={Lang.formations[lang]} />
                    <AppHeader />
                    <main>
                        <FormationDetailBanner code_play={code_play} />

                        <div className="flex mt-10 flex-row border-b bg-white lg:hidden">
                            <button onClick={() => setPart(1)} className="flex-1">
                                <div
                                    className={` transition flex flex-row justify-center items-center ${
                                        current_part === 1 ? 'text-green-400' : 'text-gray-500'
                                    } text-xl px-5 py-3`}
                                >
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                    &nbsp;
                                    <span className="overflow-ellipsis overflow-hidden whitespace-nowrap">
                                        {Lang.chapters[lang]}
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
                                        current_part === 2 ? 'bg-green-400' : 'bg-opacity-0'
                                    } mx-5`}
                                ></div>
                            </button>
                        </div>

                        <div className="lg:hidden bg-white">
                            <div className={`p-3 ${current_part === 1 ? '' : 'hidden'}`}>
                                <FormationDetailChapter />
                            </div>
                            <div className={`p-3 ${current_part === 2 ? '' : 'hidden'}`}>
                                <Description />
                            </div>
                            <br />
                            <br />
                            <br />
                        </div>

                        <div className="h-96"></div>
                    </main>
                    <AppFooter />
                </ChaptersContext.Provider>
            </CurrentPathContext.Provider>
        </LangContext.Provider>
    )
}