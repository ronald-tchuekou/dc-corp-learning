import React from 'react'
import { ENV } from './enviroments/env'

export function useLang(default_value) {
    const [lang, setLang] = React.useState(default_value)
    React.useEffect(() => {
        localStorage.setItem(ENV.SESSION_KEYS.lang, lang)
    }, [lang])
    return [lang, setLang]
}
