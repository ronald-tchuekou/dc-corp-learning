import React from 'react'
import { AppFooter, AppHead, AppHeader, HomeAbonne, HomeBanner, HomeSection1, HomeSection2 } from '../src/components'
import { LangContext } from '../src/contexts'
import { ENV } from '../src/enviroments/env'
import { Lang } from '../src/lang'

export default function Home() {
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
            <AppHead title={Lang.home[lang]} />
            <AppHeader />
            <main className="w-full h-auto">
                <HomeBanner />
                <HomeSection1 />
                <HomeSection2 />
                <HomeAbonne />
            </main>
            <AppFooter />
        </LangContext.Provider>
    )
}
