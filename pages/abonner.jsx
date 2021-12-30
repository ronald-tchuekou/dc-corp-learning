import React from 'react'
import { AppFooter, AppHead, AppHeader } from '../src/components'
import { LangContext } from '../src/contexts'
import { ENV } from '../src/enviroments/env'
import { Lang } from '../src/lang'

export default function Abonner() {
    const [lang, setLang] = React.useState('fr')

    const lang_context = React.useMemo(
        () => ({
            lang: lang,
            setLang: setLang,
        }),
        [lang, setLang]
    )

    React.useEffect(() => {
        setLang(localStorage.getItem(ENV.SESSION_KEYS.lang) || 'fr')
    }, [])

    return (
        <LangContext.Provider value={lang_context}>
            <AppHead title={Lang.subscribe[lang]} />
            <AppHeader />
            <main className="container mx-auto bg-red-200 h-10"></main>
            <AppFooter />
        </LangContext.Provider>
    )
}
