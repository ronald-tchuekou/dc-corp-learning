import React from 'react'
import { AppFooter, AppHead, AppHeader, FormationBanner, FormationContent } from '../src/components'
import { CurrentPathContext, LangContext } from '../src/contexts'
import { ENV } from '../src/enviroments/env'
import { Lang } from '../src/lang'

export default function Formations() {
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
                <AppHead title={Lang.formations[lang]} />
                <AppHeader />
                <main className="w-full h-auto">
                    <FormationBanner />
                    <FormationContent />
                </main>
                <AppFooter />
            </CurrentPathContext.Provider>
        </LangContext.Provider>
    )
}
