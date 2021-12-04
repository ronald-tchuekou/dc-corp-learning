import React from 'react'
import { AppFooter, AppHead, AppHeader } from '../src/components'
import { LangContext } from '../src/contexts'
import { Lang } from '../src/lang'

export default function Tutoriels() {
    const [lang, setLang] = React.useState('fr')

    const lang_context = React.useMemo(
        () => ({
            lang: lang,
            setLang: setLang,
        }),
        [lang, setLang]
    )

    return (
        <LangContext.Provider value={lang_context}>
            <AppHead title={Lang.tutoriel[lang]} />
            <AppHeader />
            <main className="container mx-auto bg-red-200 h-10"></main>
            <AppFooter />
        </LangContext.Provider>
    )
}
