import React from 'react'

export const LoginForm = (props) => {
    const { signIn } = props

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')

    return (
        <div className="w-full h-full">
            <div className="pt-20 pb-10 text-3xl text-purple-700 font-bold w-full text-center">CONNEXION</div>
            <div className="w-full px-10">
                <input
                    className="w-full bg-purple-700 bg-opacity-10 px-4 py-2 rounded-md text-xl"
                    type="email"
                    value={email}
                    placeholder="Adresse e-mail"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="w-full px-10 mt-4">
                <input
                    className="w-full bg-purple-700 bg-opacity-10 px-4 py-2 rounded-md text-xl"
                    type="password"
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
