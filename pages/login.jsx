import React from 'react'
import { AppFooter, AppHead, AppHeader, LoginContent } from '../src/components'
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
            <main className="w-full h-auto">
                <LoginContent />
            </main>
            <AppFooter />
        </LangContext.Provider>
    )
}
