import React from 'react'
import { Container, FormationDetailChapter } from '../..'
import { ChaptersContext, LangContext } from '../../../contexts'

export const Banner = ({ code_play }) => {
    const { lang } = React.useContext(LangContext)
    const { chapters } = React.useContext(ChaptersContext)

    const [current, setCurrent] = React.useState({})

    React.useEffect(() => {
        getCurrentChapter()
    }, [chapters, code_play])

    /**
     * Function to get all chapter.
     */
    function getCurrentChapter() {
        chapters.forEach((elt) => {
            let d = elt.contents.find((item) => item.code === code_play)
            if (d) setCurrent(d)
        })
    }
    return (
        <Container>
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-7 w-full">
                <div className="lg:col-span-6">
                    <div className="text-black text-2xl lg:text-5xl py-4 font-bold overflow-ellipsis whitespace-nowrap overflow-hidden">
                        {current.title}
                    </div>
                    <iframe
                        className="w-full h-52 lg:h-96"
                        src="https://www.youtube.com/embed/No9WERxXjy4"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="hidden lg:block lg:col-span-4 lg:col-start-7 pt-5">
                    <div className="text-yellow-500 text-xl py-4 font-semibold">Apprendre le JavaScrip</div>
                    <div className="overflow-y-auto border border-purple-500 bg-white bg-opacity-60 rounded-md h-96">
                        <FormationDetailChapter />
                    </div>
                </div>
            </div>
        </Container>
    )
}
