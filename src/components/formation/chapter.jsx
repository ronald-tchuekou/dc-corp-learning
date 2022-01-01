import React from 'react'
import { LangContext } from '../../contexts'
import { Lang } from '../../lang'
import { ChapterContent } from './chapter-content'

export const Chapter = ({ hiddenTitle = false }) => {
    const contents = [
        {
            title: 'Sauter les base',
            contents: [
                {
                    title: 'Introduction',
                    time: '3min',
                },
                {
                    title: 'Apprendre le JavaScript avec quelques suptilités',
                    time: '1h30',
                },
            ],
        },
        {
            title: 'Les bases',
            contents: [
                {
                    title: 'Les variable',
                    time: '13min',
                },
                {
                    title: 'Les conditions',
                    time: '13min',
                },
                {
                    title: 'Les boucles',
                    time: '13min',
                },
                {
                    title: 'Les fonctions',
                    time: '13min',
                },
                {
                    title: 'Portée des variables et hosting',
                    time: '13min',
                },
                {
                    title: "L'opérateur this",
                    time: '13min',
                },
            ],
        },
        {
            title: 'Le JavaScript côté navigateur',
            contents: [
                {
                    title: "L'objet window",
                    time: '13min',
                },
                {
                    title: 'Le DOM',
                    time: '13min',
                },
                {
                    title: 'Les éléments',
                    time: '13min',
                },
                {
                    title: 'TP: Sytème de spoiler',
                    time: '13min',
                },
                {
                    title: "TP: Système d'onglet",
                    time: '13min',
                },
                {
                    title: 'Ajax',
                    time: '13min',
                },
            ],
        },
    ]
    const { lang } = React.useContext(LangContext)
    return (
        <div className="space-y-6">
            {!hiddenTitle ? <div className="text-3xl text-purple-500 lg:text-white">{Lang.chapters[lang]}</div> : ''}
            {contents.map((item, i) => (
                <ChapterContent key={i} title={item.title} contents={item.contents} />
            ))}
        </div>
    )
}
