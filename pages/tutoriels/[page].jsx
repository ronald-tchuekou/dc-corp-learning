import { useRouter } from 'next/router'
import React from 'react'
import { AppFooter, AppHead, AppHeader, TutoBanner, TutoContent } from '../../src/components'
import { CurrentPathContext, LangContext } from '../../src/contexts'
import { ENV } from '../../src/enviroments/env'
import { useLang } from '../../src/hooks'
import { Lang } from '../../src/lang'

export default function Tutoriels() {
    const [lang, setLang] = React.useState('fr')
    const [path, setPath] = React.useState('')

    const router = useRouter()
    const { page } = router.query

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

    React.useEffect(() => {
        setLang(localStorage.getItem(ENV.SESSION_KEYS.lang) || 'fr')
        document.body.scrollTop = 0
        console.log(page)
    }, [page])

    return (
        <LangContext.Provider value={lang_context}>
            <CurrentPathContext.Provider value={path_context}>
                <AppHead title={Lang.tutoriel[lang]} />
                <AppHeader />
                <main className="w-full h-auto">
                    <TutoBanner page={parseInt(page)} />
                    <TutoContent page={parseInt(page)} />
                </main>
                <AppFooter />
            </CurrentPathContext.Provider>
        </LangContext.Provider>
    )
}
