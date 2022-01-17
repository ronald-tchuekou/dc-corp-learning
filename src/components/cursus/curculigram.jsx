/*
 * Created on Mon Jan 17 2022
 *
 * @author Ronald Tchuekou <ronaldtchuekou@gmail.com>
 * Copyright (c) 2022 dc-corp
 */

import React from 'react'
import { Container } from '..'

export const Curculigram = () => {
    return (
        <Container>
            <div className="grid md:grid-cols-6 py-5 w-full">
                <div className="md:col-span-4 md:col-start-2 w-full">
                    <CursusItem show_link={false} />
                    <CursusItem />
                    <CursusItem />
                    <CursusItem />
                    <CursusItem />
                    <CursusItem />
                    <CursusItem />
                    <CursusItem />
                    <CursusItem />
                </div>
            </div>
        </Container>
    )
}

export const CursusItem = ({ show_link = true }) => {
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
                        Apprendre le HTML
                    </div>
                    <button className="text-yellow-500 font-semibold whitespace-nowrap py-2">{`Voir la formations >`}</button>
                </div>
                <div className="text-xl text-gray-500 text-justify">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Similique soluta, in earum rerum, quasi
                    vero commodi facilis velit illum est distinctio porro deserunt aut. Nemo rem voluptas illum saepe
                    sapiente.
                </div>
                <div className="absolute left-0 -top-16 w-full flex justify-center items-center">
                    <div className="flex-none h-28 w-28 bg-black rounded-full curcus-item-logo flex justify-center items-center p-4">
                        <img src="/images/js_logo.svg" alt="Js" className="w-full h-full" />
                    </div>
                </div>
            </div>
        </div>
    )
}
