import React from 'react'
import { AppFooter, AppHead, AppHeader, FormationBanner, FormationContent } from '../src/components'
import { LangContext } from '../src/contexts'
import { Lang } from '../src/lang'

export default function Formations() {
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
            <AppHead title={Lang.formations[lang]} />
            <AppHeader />
            <main className="w-full h-auto">
                <FormationBanner />
                <FormationContent />
            </main>
            <AppFooter />
        </LangContext.Provider>
    )
}
