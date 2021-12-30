import { useRouter } from 'next/router'
import React from 'react'
import { AppFooter, AppHead, AppHeader, TutoBanner, TutoContent } from '../../src/components'
import { LangContext } from '../../src/contexts'
import { ENV } from '../../src/enviroments/env'
import { useLang } from '../../src/hooks'
import { Lang } from '../../src/lang'

export default function Tutoriels() {
    const [lang, setLang] = React.useState('fr')

    const router = useRouter()
    const { page } = router.query

    const lang_context = React.useMemo(
        () => ({
            lang: lang,
            setLang: setLang,
        }),
        [lang, setLang]
    )

    React.useEffect(() => {
        setLang(localStorage.getItem(ENV.SESSION_KEYS.lang) || 'fr')
        document.body.scrollTop = 0
        console.log(page)
    }, [page])

    return (
        <LangContext.Provider value={lang_context}>
            <AppHead title={Lang.tutoriel[lang]} />
            <AppHeader />
            <main className="w-full h-auto">
                <TutoBanner page={parseInt(page)} />
                <TutoContent page={parseInt(page)} />
            </main>
            <AppFooter />
        </LangContext.Provider>
    )
}
