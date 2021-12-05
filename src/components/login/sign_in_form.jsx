import React from 'react'

export const SignInForm = (props) => {
    const { back } = props

    const [email, setEmail] = React.useState('')
    const [pass, setPass] = React.useState('')
    const [conf_pass, setConfPass] = React.useState('')

    return (
        <div className="w-full h-full">
            <div className="flex flex-row items-center justify-center pt-20 pb-10 text-3xl text-purple-700 font-bold w-full text-center">
                <button onClick={back}>
                    <svg
                        className="mr-5"
                        width="50"
                        height="50"
                        viewBox="0 0 50 50"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M39.584 22.9167H14.8756L22.4381 13.8333C22.7918 13.4079 22.9619 12.8594 22.9111 12.3085C22.8603 11.7576 22.5928 11.2495 22.1673 10.8958C21.7419 10.5422 21.1934 10.3721 20.6425 10.4229C20.0916 10.4737 19.5834 10.7412 19.2298 11.1667L8.81315 23.6667C8.74307 23.7661 8.6804 23.8705 8.62565 23.9792C8.62565 24.0833 8.62565 24.1458 8.47982 24.25C8.38539 24.4889 8.33595 24.7432 8.33398 25C8.33595 25.2569 8.38539 25.5111 8.47982 25.75C8.47982 25.8542 8.47982 25.9167 8.62565 26.0208C8.6804 26.1295 8.74307 26.2339 8.81315 26.3333L19.2298 38.8333C19.4257 39.0685 19.671 39.2576 19.9482 39.3873C20.2255 39.5169 20.5279 39.5838 20.834 39.5833C21.3208 39.5843 21.7925 39.4148 22.1673 39.1042C22.3783 38.9293 22.5526 38.7145 22.6805 38.4721C22.8083 38.2297 22.887 37.9645 22.9122 37.6916C22.9373 37.4187 22.9084 37.1436 22.8271 36.8819C22.7457 36.6202 22.6136 36.3772 22.4381 36.1667L14.8756 27.0833H39.584C40.1365 27.0833 40.6664 26.8638 41.0571 26.4731C41.4478 26.0824 41.6673 25.5525 41.6673 25C41.6673 24.4475 41.4478 23.9176 41.0571 23.5269C40.6664 23.1362 40.1365 22.9167 39.584 22.9167Z"
                            fill="currentColor"
                        />
                    </svg>
                </button>
                <span>INSCRIPTION</span>
            </div>
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

            <div className="w-full px-10 mt-4">
                <input
                    className="w-full bg-purple-700 bg-opacity-10 px-4 py-2 rounded-md text-xl"
                    type="password"
                    value={conf_pass}
                    placeholder="Mot de passe de confirmation"
                    onChange={(e) => setConfPass(e.target.value)}
                />
            </div>

            <div className="w-full flex justify-center items-center mt-10">
                <button className="transition duration-300 bg-purple-700 text-white font-semibold text-lg rounded-full px-8 py-1 hover:bg-purple-800 hover:shadow">
                    M’inscrire
                </button>
            </div>
        </div>
    )
}