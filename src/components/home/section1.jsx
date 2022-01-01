import { useRouter } from 'next/router'
import React from 'react'
import { LangContext } from '../../contexts'
import { Lang } from '../../lang'

export const Section1 = () => {
    const TUTORIELS = [
            { img: 'images/nodejs_logos.svg', title: 'Présentation et installation de nodejs', subTitle: '20 min' },
            { img: 'images/js_logo.svg', title: 'Mise en place d’un menu onglet', subTitle: '20 min' },
            { img: 'images/html_logo.svg', title: 'Création d’une calculatrice complete', subTitle: '20 min' },
        ],
        FORMATIONS = [
            { img: 'images/algo_logo.svg', title: 'Apprendre les bases de l’algorithmique', subTitle: '12  videos' },
            { img: 'images/html_logo.svg', title: 'Apprendre les bases du html/css', subTitle: '20 videos' },
            { img: 'images/c_logo.svg', title: 'Apprendre les bases du langage C/C#', subTitle: '25 videos' },
        ],
        POSTS = [
            { title: 'Question: Comment faire pour communi...', subTitle: 'Il y a 16 heures' },
            { title: 'Question: Comment faire pour communi...', subTitle: 'Il y a 16 heures' },
            { title: 'Question: Comment faire pour communi...', subTitle: 'Il y a 16 heures' },
        ]
    const { lang } = React.useContext(LangContext)
    return (
        <div className="w-full h-auto pb-10 relative">
            <div className="bg-purple-100 bg-opacity-30 absolute top-0 left-0 w-full h-5/6"></div>
            <div className="flex container pt-10 px-7 mx-auto flex-col justify-center items-center lg:flex-row lg:space-x-10">
                <div className="lg:flex-1 py-5">
                    <div className="text-4xl md:text-5xl text-center lg:text-left lg:text-6xl text-black font-bold">
                        {Lang.learn_at_many[lang]}
                        <span className="text-purple-700"> {Lang.training_modules[lang]}.</span>
                    </div>
                    <p className="text-gray-500 text-2xl my-4 text-center lg:text-left">
                        {Lang.home_section1_text[lang]}
                    </p>
                </div>
                <div className="w-full lg:flex-1 lg:pr-14">
                    <SectionContainer
                        url="/formations"
                        content={FORMATIONS}
                        title={Lang.see_all_formations[lang]}
                        headerTop
                    />
                </div>
            </div>
            <div className="flex container px-7 mx-auto flex-col justify-center items-center lg:flex-row lg:space-x-10">
                <div className="w-full lg:flex-none lg:w-3/5 lg:pl-40">
                    <SectionContainer
                        url="/tutoriels"
                        content={TUTORIELS}
                        title={Lang.see_all_tutoriels[lang]}
                        color="red"
                    />
                </div>
                <div className="w-full lg:flex-none lg:w-4/12">
                    <SectionContainer
                        url="/forum"
                        content={POSTS}
                        title={Lang.see_all_latest_posts[lang]}
                        color="blue"
                    />
                </div>
            </div>
        </div>
    )
}

export const SectionContainer = (props) => {
    const { url = '', content, title, headerTop = false, color = '' } = props
    const router = useRouter()
    return (
        <div className="w-full py-5 relative section-container">
            <div className="section-container-content mx-auto py-3">
                {content.map((item, i) => (
                    <SectionContainerItem item={item} showBorder={i < content.length - 1} key={i} />
                ))}
            </div>
            <button
                onClick={() => router.push(url)}
                className={`absolute ${
                    headerTop ? 'top-0' : 'top-0 lg:top-auto lg:bottom-0'
                } left-0 flex justify-center w-full`}
            >
                <div className={`section-cainter-header py-2 px-4 font-medium text-lg whitespace-nowrap ${color}`}>
                    {title}
                </div>
            </button>
        </div>
    )
}

export const SectionContainerItem = (props) => {
    const { item, showBorder = false } = props
    return (
        <div className="transition duration-300 mx-2 px-8 cursor-default hover:bg-gray-100 rounded-lg">
            <div className={`py-4 ${showBorder ? 'border-b-2' : ''} flex flex-row space-x-4`}>
                {item.img ? (
                    <div className="w-12 h-12 flex-none">
                        <img className="w-full h-full" src={item.img} alt={item.title} />
                    </div>
                ) : (
                    <></>
                )}
                <div className="space-y-2">
                    <div className="text-xl text-gray-800">{item.title}</div>
                    <div className="text-sm text-gray-400">{item.subTitle}</div>
                </div>
            </div>
        </div>
    )
}
