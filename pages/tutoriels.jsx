import React from 'react'
import { AppFooter, AppHead, AppHeader, TutoBanner, TutoContent } from '../src/components'
import { CurrentPathContext, LangContext } from '../src/contexts'
import { ENV } from '../src/enviroments/env'
import { Lang } from '../src/lang'

export default function Tutoriels() {
    const [lang, setLang] = React.useState('fr')
    const [path, setPath] = React.useState('')

    React.useEffect(() => {
        setLang(localStorage.getItem(ENV.SESSION_KEYS.lang) || 'fr')
    }, [])

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

    return (
        <LangContext.Provider value={lang_context}>
            <CurrentPathContext.Provider value={path_context}>
                <AppHead title={Lang.tutoriel[lang]} />
                <AppHeader />
                <main className="w-full h-auto">
                    <TutoBanner page={1} />
                    <TutoContent page={1} />
                </main>
                <AppFooter />
            </CurrentPathContext.Provider>
        </LangContext.Provider>
    )
}
