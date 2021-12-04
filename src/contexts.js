import React from 'react'

/**
 * @callback callback
 * @param {any} param
 */

/**
 * @type React.Context<{
 *  lang: string,
 *  setLang: callback
 * }>
 */
export const LangContext = React.createContext({
    lang: 'fr',
    setLang: () => {},
})
