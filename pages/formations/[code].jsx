import { useRouter } from 'next/router'
import React from 'react'
import { AppFooter, AppHead, AppHeader } from '../../src/components'
import { LangContext } from '../../src/contexts'
import { Lang } from '../../src/lang'

export default function Formations() {
    const [lang, setLang] = React.useState('fr')

    const router = useRouter()
    const { page: code } = router.query

    const [header_color, setHeaderColor] = React.useState('white')

    const lang_context = React.useMemo(
        () => ({
            lang: lang,
            setLang: setLang,
        }),
        [lang, setLang]
    )

    React.useEffect(() => {
        document.body.scrollTop = 0
        console.log(code)
        document.body.style.backgroundImage = 'url(/images/banner_bg_img.jpg)'
        document.body.style.backgroundRepeat = 'no-repeat'
        document.body.style.backgroundSize = 'cover'
        document.body.addEventListener('scroll', handleScroll)
        return () => {
            document.body.style.backgroundImage = 'url(/images/filigrane.svg)'
            document.body.style.backgroundRepeat = 'no-repeat'
            document.body.style.backgroundSize = '550px'
            document.body.removeEventListener('scroll', handleScroll)
        }
    }, [code])

    function handleScroll() {
        if (document.body.scrollTop + 100 > 880) setHeaderColor('default')
        else setHeaderColor('white')
    }

    return (
        <LangContext.Provider value={lang_context}>
            <AppHead title={Lang.formations[lang]} />
            <AppHeader color={header_color} />
            <Banner />
            <main className="w-full h-auto"></main>
            <AppFooter />
        </LangContext.Provider>
    )
}

export const Banner = (props) => {
    return (
        <div
            className="w-full bg-no-repeat bg-cover"
            style={{
                height: '800px',
                backgroundImage: 'url(/images/banner_bg_img.jpg)',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center center',
                backgroundSize: 'cover',
                marginBottom: '500px',
            }}
        ></div>
    )
}
