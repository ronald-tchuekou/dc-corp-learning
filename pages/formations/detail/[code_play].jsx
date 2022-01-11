import { useRouter } from 'next/router'
import React from 'react'
import {
    AppFooter,
    AppHead,
    AppHeader,
    Container,
    Description,
    FormationDetailBanner,
    FormationDetailChapter,
    TabContent,
    TabContentItem,
    TabGroup,
    TabHeader,
    TabHeaderItem,
} from '../../../src/components'
import { ChaptersContext, CurrentPathContext, LangContext } from '../../../src/contexts'
import { Lang } from '../../../src/lang'
import { ENV } from '../../../src/enviroments/env'
import constants from '../../../src/enviroments/constants'

export default function Detail() {
    const router = useRouter()
    const { code_play } = router.query

    const [index, setIndex] = React.useState(0)
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
                        <TabGroup className={'lg:hidden'}>
                            <TabHeader>
                                <TabHeaderItem
                                    selected={index === 0}
                                    onCLick={() => setIndex(0)}
                                    label={Lang.chapters[lang]}
                                >
                                    <svg className="w-7 h-7" viewBox="0 0 24 24" fill="none">
                                        <path
                                            d="M21 18H9V16H21V18ZM21 13H3V11H21V13ZM21 8H9V6H21V8Z"
                                            fill="currentColor"
                                        />
                                    </svg>
                                </TabHeaderItem>
                                <TabHeaderItem
                                    selected={index === 1}
                                    onCLick={() => setIndex(1)}
                                    label={Lang.presentation[lang]}
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
                                </TabHeaderItem>
                            </TabHeader>
                            <TabContent>
                                <TabContentItem selected={index === 0}>
                                    <FormationDetailChapter />
                                </TabContentItem>
                                <TabContentItem selected={index === 1}>
                                    <ContentDetail is_phone />
                                </TabContentItem>
                            </TabContent>
                        </TabGroup>
                        <ContentDetail className="hidden lg:block" withBorder />
                    </main>
                    <AppFooter />
                </ChaptersContext.Provider>
            </CurrentPathContext.Provider>
        </LangContext.Provider>
    )
}

const ContentDetail = ({ withBorder = false, is_phone = false, className = '' }) => {
    return (
        <div className={`bg-white mt-10 w-full ${className} ${withBorder ? 'border-t border-purple-300' : ''}`}>
            <Container is_phone={is_phone}>
                <div className="grid grid-cols-12 gap-7 w-full">
                    <div className="col-span-12 lg:col-span-8">
                        <Details />
                        <Comments />
                    </div>
                    <div className="col-span-12 lg:col-start-9 lg:col-span-4 bg-yellow-500 h-52"></div>
                </div>
            </Container>
        </div>
    )
}

const Details = ({}) => {
    const { lang } = React.useContext(LangContext)
    return (
        <div className="mb-1">
            <div className="text-3xl lg:text-5xl text-black font-semibold">{Lang.about_this_cours[lang]}</div>
        </div>
    )
}

const Comments = ({}) => {
    const { lang } = React.useContext(LangContext)
    return (
        <div>
            <div className="text-gray-800 text-2xl lg:text-4xl py-2 font-semibold">2 {Lang.comments[lang]}</div>
            <CommentsForm />
        </div>
    )
}

const CommentsForm = ({}) => {
    const { lang } = React.useContext(LangContext)
    return (
        <div className="mb-5 py-4 border-t border-purple-500">
            <div className="lg:text-base text-blue-700">{Lang.enter_your_comment[lang]}</div>
            <div className="w-full mt-1 text-lg lg:w-1/2">
                <div className="pl-1 pt-2 text-gray-500">{Lang.username[lang]}</div>
                <input
                    type="text"
                    className="px-3 mt-1 py-2 w-full rounded-md border border-purple-400 bg-gray-100"
                    placeholder={Lang.username[lang]}
                />
            </div>
            <div className="w-full mt-1 text-lg">
                <div className="pl-1 pt-2 text-gray-500">{Lang.comment_content[lang]}</div>
                <textarea
                    type="text"
                    rows={4}
                    className="px-3 mt-1 py-2 w-full rounded-md border border-purple-400 bg-gray-100"
                    placeholder={Lang.what_i_have_to_say[lang]}
                ></textarea>
            </div>
            <button className="mt-4 bg-purple-700 text-white text-base px-6 py-2 rounded-md">{Lang.send[lang]}</button>
        </div>
    )
}