import { useRouter } from 'next/router'
import React from 'react'
import { MaterialIcon } from '..'
import { LangContext } from '../../contexts'
import { Lang } from '../../lang'

export const Comments = ({}) => {
    const { lang } = React.useContext(LangContext)
    return (
        <div>
            <div className="text-gray-800 text-2xl lg:text-4xl py-2 font-semibold">2 {Lang.comments[lang]}</div>
            <CommentsForm />
            <CommentContent />
        </div>
    )
}

export const CommentsForm = ({}) => {
    const { lang } = React.useContext(LangContext)
    return (
        <div className="mb-5 py-4 border-t border-purple-500">
            <div className="lg:text-base text-blue-700">{Lang.enter_your_comment[lang]}</div>
            <div className="w-full mt-1 text-lg lg:w-1/2">
                <div className="pl-1 pt-2 text-gray-500">{Lang.username[lang]}</div>
                <input
                    type="text"
                    className="px-3 mt-1 py-2 w-full rounded-md border border-purple-400 bg-gray-100"
                    placeholder={Lang.username[lang]}
                />
            </div>
            <div className="w-full mt-1 text-lg">
                <div className="pl-1 pt-2 text-gray-500">{Lang.comment_content[lang]}</div>
                <textarea
                    type="text"
                    rows={4}
                    className="px-3 mt-1 py-2 w-full rounded-md border border-purple-400 bg-gray-100"
                    placeholder={Lang.what_i_have_to_say[lang]}
                ></textarea>
            </div>
            <button className="transition hover:shadow-lg mt-4 bg-purple-700 text-white text-base px-6 py-2 rounded-md">
                {Lang.send[lang]}
            </button>
        </div>
    )
}

export const CommentContent = () => {
    const [comments, setComments] = React.useState([1, 2, 3])
    return (
        <div className="mb-5 py-4 border-t border-purple-500 space-y-4">
            {comments.map((item, i) => (
                <CommentContainer answer={i === 0 ? [11, 12] : []} key={i} item={item} />
            ))}
        </div>
    )
}

export const CommentContainer = ({ item, answer = [] }) => {
    const [show_reply, setReply] = React.useState(false)
    const router = useRouter()
    function reply() {
        // TODO
        setReply(true)
        router.push(window.location.pathname + '#comment-' + item)
    }
    return (
        <div className="">
            <CommentItem handleReply={reply} key={item} />
            <div className="pl-10 space-y-1">
                <div className="my-3">
                    {answer.map((item, i) => (
                        <CommentItem key={i} is_response />
                    ))}
                </div>
                {show_reply ? (
                    <div id={`comment-${item}`}>
                        <CommentsForm />
                    </div>
                ) : (
                    <></>
                )}
            </div>
        </div>
    )
}

export const CommentItem = ({ is_response = false, handleReply }) => {
    const { lang } = React.useContext(LangContext)
    return (
        <div className="flex flex-row items-end space-x-3 mt-3">
            <div className="flex-none w-16 h-16 rounded-full overflow-hidden border-2 border-purple-700">
                <img src="/images/code_img.jpg" alt="Code image" className="w-full h-full" />
            </div>
            <div className="w-full">
                <div className="flex flex-col md:flex-row text-xl md:space-x-4 px-4">
                    <div className="text-black font-bold">Dieumerci 2315</div>
                    <div className="flex flex-row text-sm md:text-xl space-x-4">
                        <div className={`text-gray-500`}>{Lang.publish_at[lang]} 12 Jan 2020</div>
                        <button
                            onClick={handleReply}
                            className={`text-purple-700 font-semibold flex flex-row items-center px-3 ${
                                is_response ? 'hidden' : ''
                            }`}
                        >
                            <MaterialIcon size={25} name="reply" />
                            {Lang.reply[lang]}
                        </button>
                    </div>
                </div>
                <div
                    className={`p-4 rounded-lg border ${
                        !is_response ? 'bg-purple-100 border-purple-300' : 'bg-yellow-100 border-yellow-300'
                    } text-gray-600 text-lg`}
                    style={{ lineHeight: 1 }}
                >
                    {"Bonsoir chers Leaders Je m'appelle Christian, Je suis totalement noviste en ce qui concerne le " +
                        'language informatique. Je veux bien apprendre ce métier car ,il me passionne beaucoup...Je souhaite ' +
                        'vous demander de me guider par les B.A.BA afin que je puisse savoir où commencer,les premier cours à ' +
                        'apprendre,comment faire pour pouvoir être professionnel un jour.'}
                </div>
            </div>
        </div>
    )
}
