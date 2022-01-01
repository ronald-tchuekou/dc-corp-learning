import React from 'react'

/**
 * @callback callback
 * @param {any} param
 */

/**
 * @type React.Context<{lang: string, setLang: callback}>
 */
export const LangContext = React.createContext({
    lang: 'fr',
    setLang: () => {},
})

/**
 * @type React.Context<{path: string, setPath: callback}>
 */
export const CurrentPathContext = React.createContext({
    path: '',
    setPath: () => {}
})

/**
 * @type React.Context<{chapters: any[], setChapters: callback}>
 */
export const ChaptersContext = React.createContext({
    chapters: [],
    setChapters: ()=> {}
})