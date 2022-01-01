import React from 'react'
import { AppFooter, AppHead, AppHeader } from '../src/components'
import { CurrentPathContext, LangContext } from '../src/contexts'
import { ENV } from '../src/enviroments/env'
import { Lang } from '../src/lang'

export default function Abonner() {
    const [lang, setLang] = React.useState('fr')
    const [path, setPath] = React.useState('')

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
    }, [])

    return (
        <LangContext.Provider value={lang_context}>
            <CurrentPathContext.Provider value={path_context}>
                <AppHead title={Lang.subscribe[lang]} />
                <AppHeader />
                <main className="container mx-auto bg-red-200 h-10"></main>
                <AppFooter />
            </CurrentPathContext.Provider>
        </LangContext.Provider>
    )
}
