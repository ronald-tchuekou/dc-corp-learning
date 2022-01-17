/*
 * Created on Mon Jan 17 2022
 *
 * @author Ronald Tchuekou <ronaldtchuekou@gmail.com>
 * Copyright (c) 2022 dc-corp
 */

import React from 'react'
import { Container } from '..'
import { LangContext } from '../../contexts'
import { Lang } from '../../lang'

export const Banner = () => {
    const { lang } = React.useContext(LangContext)
    return (
        <Container>
            <div>
                <div className=" text-2xl text-center lg:text-5xl font-bold text-black py-7">
                    {Lang.learn_the[lang]} <span className="text-purple-700">{Lang.web_development[lang]}</span>
                </div>
                <div className="grid md:grid-cols-6 py-5 mb-5">
                    <div className="md:col-span-4 md:col-start-2">
                        <p className="text-xl text-center lg:text-2xl text-gray-600">
                            {Lang.learn_base_of_web_dev[lang]}
                        </p>
                    </div>
                </div>
            </div>
        </Container>
    )
}
