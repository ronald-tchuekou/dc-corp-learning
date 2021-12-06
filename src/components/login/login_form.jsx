import React from 'react'

export const LoginForm = (props) => {
    const { signIn } = props

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [is_show, show] = React.useState(false)

    return (
        <div className="w-full h-full">
            <div className="pt-20 pb-10 text-3xl text-purple-700 font-bold w-full text-center">CONNEXION</div>

            <div className="w-full px-10 relative">
                <svg
                    className="absolute top-2"
                    style={{ left: 50 }}
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M15 2.4375C8.1 2.4375 2.5 8.0375 2.5 14.9375C2.5 21.8375 8.1 27.4375 15 27.4375H21.25V24.9375H15C9.575 24.9375 5 20.3625 5 14.9375C5 9.5125 9.575 4.9375 15 4.9375C20.425 4.9375 25 9.5125 25 14.9375V16.725C25 17.7125 24.1125 18.6875 23.125 18.6875C22.1375 18.6875 21.25 17.7125 21.25 16.725V14.9375C21.25 11.4875 18.45 8.6875 15 8.6875C11.55 8.6875 8.75 11.4875 8.75 14.9375C8.75 18.3875 11.55 21.1875 15 21.1875C16.725 21.1875 18.3 20.4875 19.425 19.35C20.2375 20.4625 21.6375 21.1875 23.125 21.1875C25.5875 21.1875 27.5 19.1875 27.5 16.725V14.9375C27.5 8.0375 21.9 2.4375 15 2.4375ZM15 18.6875C12.925 18.6875 11.25 17.0125 11.25 14.9375C11.25 12.8625 12.925 11.1875 15 11.1875C17.075 11.1875 18.75 12.8625 18.75 14.9375C18.75 17.0125 17.075 18.6875 15 18.6875Z"
                        fill="#7000FF"
                    />
                </svg>
                <input
                    className="w-full bg-purple-700 bg-opacity-10 pl-12 pr-4 py-2 rounded-md text-xl"
                    type="email"
                    value={email}
                    placeholder="Adresse e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="w-full px-10 mt-4 relative">
                <svg
                    className="absolute top-2 left-14"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M16 21H18M25 17V15C25 14.4696 24.7893 13.9609 24.4142 13.5858C24.0391 13.2107 23.5304 13 23 13H3C2.46957 13 1.96086 13.2107 1.58579 13.5858C1.21071 13.9609 1 14.4696 1 15V27C1 27.5304 1.21071 28.0391 1.58579 28.4142C1.96086 28.7893 2.46957 29 3 29H23C23.5304 29 24.0391 28.7893 24.4142 28.4142C24.7893 28.0391 25 27.5304 25 27V25V17ZM25 17H17C15.9391 17 14.9217 17.4214 14.1716 18.1716C13.4214 18.9217 13 19.9391 13 21C13 22.0609 13.4214 23.0783 14.1716 23.8284C14.9217 24.5786 15.9391 25 17 25H25V17ZM25 17C26.0609 17 27.0783 17.4214 27.8284 18.1716C28.5786 18.9217 29 19.9391 29 21C29 22.0609 28.5786 23.0783 27.8284 23.8284C27.0783 24.5786 26.0609 25 25 25V17ZM7 13V7C7 5.4087 7.63214 3.88258 8.75736 2.75736C9.88258 1.63214 11.4087 1 13 1C14.5913 1 16.1174 1.63214 17.2426 2.75736C18.3679 3.88258 19 5.4087 19 7V13H7ZM24 21H26H24ZM20 21H22H20Z"
                        stroke="#7000FF"
                        strokeWidth="1.6"
                    />
                </svg>
                <svg
                    onClick={() => show((s) => !s)}
                    className="absolute top-2 right-14 cursor-pointer"
                    width="30"
                    height="30"
                    viewBox="0 0 30 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    {!is_show ? (
                        <>
                            <path
                                d="M29.0059 14.6812C27.9032 11.829 25.989 9.36245 23.4997 7.58633C21.0105 5.81021 18.0554 4.80241 14.9996 4.6875C11.9438 4.80241 8.98872 5.81021 6.49948 7.58633C4.01024 9.36245 2.096 11.829 0.993351 14.6812C0.918883 14.8872 0.918883 15.1128 0.993351 15.3188C2.096 18.171 4.01024 20.6375 6.49948 22.4137C8.98872 24.1898 11.9438 25.1976 14.9996 25.3125C18.0554 25.1976 21.0105 24.1898 23.4997 22.4137C25.989 20.6375 27.9032 18.171 29.0059 15.3188C29.0803 15.1128 29.0803 14.8872 29.0059 14.6812ZM14.9996 23.4375C10.0309 23.4375 4.78085 19.7531 2.87773 15C4.78085 10.2469 10.0309 6.5625 14.9996 6.5625C19.9684 6.5625 25.2184 10.2469 27.1215 15C25.2184 19.7531 19.9684 23.4375 14.9996 23.4375Z"
                                fill="#7000FF"
                            />
                            <path
                                d="M15 9.375C13.8875 9.375 12.7999 9.7049 11.8749 10.323C10.9499 10.9411 10.2289 11.8196 9.80318 12.8474C9.37744 13.8752 9.26604 15.0062 9.48309 16.0974C9.70013 17.1885 10.2359 18.1908 11.0225 18.9775C11.8092 19.7641 12.8115 20.2999 13.9026 20.5169C14.9938 20.734 16.1248 20.6226 17.1526 20.1968C18.1804 19.7711 19.0589 19.0501 19.677 18.1251C20.2951 17.2001 20.625 16.1125 20.625 15C20.625 13.5082 20.0324 12.0774 18.9775 11.0225C17.9226 9.96763 16.4918 9.375 15 9.375ZM15 18.75C14.2583 18.75 13.5333 18.5301 12.9166 18.118C12.2999 17.706 11.8193 17.1203 11.5355 16.4351C11.2516 15.7498 11.1774 14.9958 11.3221 14.2684C11.4668 13.541 11.8239 12.8728 12.3484 12.3483C12.8728 11.8239 13.541 11.4667 14.2684 11.3221C14.9958 11.1774 15.7498 11.2516 16.4351 11.5355C17.1203 11.8193 17.706 12.2999 18.118 12.9166C18.5301 13.5333 18.75 14.2583 18.75 15C18.75 15.9946 18.3549 16.9484 17.6517 17.6516C16.9484 18.3549 15.9946 18.75 15 18.75Z"
                                fill="#7000FF"
                            />
                        </>
                    ) : (
                        <>
                            <path
                                d="M17.65 17.65C17.3067 18.0184 16.8927 18.3139 16.4327 18.5189C15.9727 18.7239 15.4761 18.8341 14.9726 18.843C14.4691 18.8518 13.969 18.7592 13.502 18.5706C13.0351 18.382 12.6109 18.1013 12.2548 17.7452C11.8987 17.3891 11.618 16.9649 11.4294 16.498C11.2408 16.031 11.1482 15.5309 11.157 15.0274C11.1659 14.5239 11.2761 14.0273 11.4811 13.5673C11.6861 13.1073 11.9816 12.6933 12.35 12.35M22.425 22.425C20.2882 24.0538 17.6864 24.9561 15 25C6.25 25 1.25 15 1.25 15C2.80486 12.1024 4.96142 9.57076 7.575 7.575L22.425 22.425ZM12.375 5.3C13.2354 5.0986 14.1163 4.99792 15 5C23.75 5 28.75 15 28.75 15C27.9912 16.4195 27.0863 17.7559 26.05 18.9875L12.375 5.3Z"
                                stroke="#7000FF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M1.25 1.25L28.75 28.75"
                                stroke="#7000FF"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </>
                    )}
                </svg>
                <input
                    className="w-full bg-purple-700 bg-opacity-10 pl-12 pr-4 py-2 rounded-md text-xl"
                    type={is_show ? 'text' : 'password'}
                    value={pass}
                    placeholder="Mot de passe"
                    onChange={(e) => setPass(e.target.value)}
                />
            </div>

            <div className="w-full flex justify-center items-center mt-7">
                <button className="transition duration-300 bg-purple-700 text-white font-semibold text-lg rounded-full px-8 py-1 hover:bg-purple-800 hover:shadow">
                    Me connecter
                </button>
            </div>

            <div className="w-full px-10 mt-7">
                <button className="flex flex-row justify-center items-center hover:bg-gray-600 hover:text-white w-full transition duration-300 bg-white text-gray-600 font-semibold text-lg rounded-md px-8 py-1  shadow-md">
                    <svg
                        className="mr-10"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15 0C6.715 0 0 6.71625 0 15C0 23.2838 6.715 30 15 30C23.2838 30 30 23.2838 30 15C30 6.71625 23.2838 0 15 0ZM15.175 23.7725C10.34 23.7725 6.425 19.8475 6.425 15C6.425 10.1525 10.34 6.2275 15.175 6.2275C17.5375 6.2275 19.5125 7.09875 21.0275 8.51375L18.56 10.9862V10.9812C17.6412 10.1038 16.4762 9.65375 15.175 9.65375C12.2875 9.65375 9.94125 12.0988 9.94125 14.995C9.94125 17.8888 12.2875 20.3413 15.175 20.3413C17.795 20.3413 19.5775 18.8387 19.945 16.7762H15.175V13.355H23.4062C23.5163 13.9425 23.575 14.555 23.575 15.1975C23.575 20.21 20.2288 23.7725 15.175 23.7725Z"
                            fill="#FF7575"
                        />
                    </svg>
                    <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Me connecter avec Google
                    </span>
                </button>
            </div>

            <div className="w-full px-10 mt-5">
                <button className="flex flex-row justify-center items-center hover:bg-gray-600 hover:text-white w-full transition duration-300 bg-white text-gray-600 font-semibold text-lg rounded-md px-8 py-1  shadow-md">
                    <svg
                        className="mr-10"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M15 0C6.7125 0 0 6.7125 0 15C0 21.6375 4.29375 27.2437 10.2563 29.2313C11.0063 29.3625 11.2875 28.9125 11.2875 28.5188C11.2875 28.1625 11.2688 26.9813 11.2688 25.725C7.5 26.4188 6.525 24.8062 6.225 23.9625C6.05625 23.5312 5.325 22.2 4.6875 21.8438C4.1625 21.5625 3.4125 20.8687 4.66875 20.85C5.85 20.8313 6.69375 21.9375 6.975 22.3875C8.325 24.6562 10.4812 24.0187 11.3438 23.625C11.475 22.65 11.8688 21.9937 12.3 21.6187C8.9625 21.2437 5.475 19.95 5.475 14.2125C5.475 12.5813 6.05625 11.2313 7.0125 10.1813C6.8625 9.80625 6.3375 8.26875 7.1625 6.20625C7.1625 6.20625 8.41875 5.8125 11.2875 7.74375C12.4875 7.40625 13.7625 7.2375 15.0375 7.2375C16.3125 7.2375 17.5875 7.40625 18.7875 7.74375C21.6562 5.79375 22.9125 6.20625 22.9125 6.20625C23.7375 8.26875 23.2125 9.80625 23.0625 10.1813C24.0188 11.2313 24.6 12.5625 24.6 14.2125C24.6 19.9688 21.0938 21.2437 17.7563 21.6187C18.3 22.0875 18.7688 22.9875 18.7688 24.3937C18.7688 26.4 18.75 28.0125 18.75 28.5188C18.75 28.9125 19.0312 29.3813 19.7812 29.2313C22.759 28.2259 25.3465 26.3121 27.1796 23.7592C29.0127 21.2063 29.9991 18.1429 30 15C30 6.7125 23.2875 0 15 0Z"
                            fill="currentColor"
                        />
                    </svg>
                    <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Me connecter avec Github
                    </span>
                </button>
            </div>

            <div className="w-full px-10 mt-5">
                <button className="flex flex-row justify-center items-center hover:bg-gray-600 hover:text-white w-full transition duration-300 bg-white text-gray-600 font-semibold text-lg rounded-md px-8 py-1  shadow-md">
                    <svg
                        className="mr-10"
                        width="30"
                        height="30"
                        viewBox="0 0 30 30"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0 15.0838C0 22.5413 5.41625 28.7425 12.5 30V19.1663H8.75V15H12.5V11.6663C12.5 7.91625 14.9163 5.83375 18.3337 5.83375C19.4163 5.83375 20.5837 6 21.6663 6.16625V10H19.75C17.9163 10 17.5 10.9163 17.5 12.0837V15H21.5L20.8337 19.1663H17.5V30C24.5837 28.7425 30 22.5425 30 15.0838C30 6.7875 23.25 0 15 0C6.75 0 0 6.7875 0 15.0838Z"
                            fill="#27A8E0"
                        />
                    </svg>
                    <span className="whitespace-nowrap overflow-hidden overflow-ellipsis">
                        Me connecter avec Facebook
                    </span>
                </button>
            </div>

            <div className="w-full px-10 mt-7">
                <button className="text-red-700">Mot de passe oubié</button>
                <button onClick={signIn} className="ml-7 text-purple-700">
                    S’inscrire
                </button>
            </div>
        </div>
    )
}
