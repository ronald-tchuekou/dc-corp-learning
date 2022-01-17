/*
 * Created on Mon Jan 17 2022
 *
 * @author Ronald Tchuekou <ronaldtchuekou@gmail.com>
 * Copyright (c) 2022 dc-corp
 */

import React from 'react'
import { Container } from '..'

export const Curculigram = () => {
    const content = [
        {
            title: 'Apprendre le HTML',
            icon: '/images/html_logo.svg',
            link: '',
            content:
                "L'HTML constinue le langage de bases d'un site internet. Il permet de définir la structure d'un document grâce à un système de balisage.",
        },
        {
            title: 'Apprendre le CSS',
            icon: '/images/css_logo.svg',
            link: '',
            content:
                "Le CSS (feuilles de style en cascade) est un langage qui permet de décrire l'apparence d'une page. Il permet de cibler différents éléments HTML pour décrire en suite leur présentation.",
        },
        {
            title: 'Mettre son site en ligne',
            icon: '/images/hosting_logo.svg',
            link: '',
            content:
                "Maintenant que l'on sait créer un site composé de plusieurs fichiers HTML / CSS, on souhaite le mettre en ligne afin que cela soit accessible dans tout le monde entier.",
        },
        {
            title: 'L’algorithmique',
            icon: '/images/algo_alt_logo.svg',
            link: '',
            content:
                'Avant de vouloir apprendre un langage de programmation il est important de comprendre comment écrire un algorithme. ',
        },
    ]
    return (
        <Container>
            <div className="grid md:grid-cols-6 py-5 w-full">
                <div className="md:col-span-4 md:col-start-2 w-full">
                    {content.map((item, i) => (
                        <CursusItem key={i} show_link={i !== 0} item={item} />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export const CursusItem = ({ show_link = true, item = {} }) => {
    return (
        <div className={`w-full ${show_link ? 'pt-32' : ''} relative`}>
            <div
                className={`absolute top-0 left-0 w-full h-full flex justify-center items-start ${
                    show_link ? '' : 'hidden'
                }`}
            >
                <div className="h-16 w-2 bg-purple-600"></div>
            </div>
            <div className="rounded-2xl w-full p-4 curcus-item relative">
                <div className="flex justify-between items-center pt-5">
                    <div className="text-purple-700 font-bold text-xl w-full whitespace-nowrap overflow-hidden overflow-ellipsis">
                        {item.title}
                    </div>
                    <button className="text-yellow-500 font-semibold whitespace-nowrap py-2">{`Voir la formations >`}</button>
                </div>
                <div className="text-xl text-gray-500 text-justify">{item.content}</div>
                <div className="absolute left-0 -top-16 w-full flex justify-center items-center">
                    <div className="flex-none h-28 w-28 bg-black rounded-full curcus-item-logo flex justify-center items-center p-4">
                        <img src={`${item.icon}`} alt="Js" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
