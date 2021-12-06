import { useRouter } from 'next/router'
import React from 'react'
import { DrawerContent } from '../../scripts'
import { LoginSaly1, LoginSaly2 } from '../svg'
import { LoginForm } from './login_form'
import { SignInForm } from './sign_in_form'

export const Login = (props) => {
    const drawer_ref = React.useRef(null)
    const [drawer, setDrawer] = React.useState(undefined)

    React.useEffect(() => {
        setDrawer(new DrawerContent(drawer_ref.current))
        return () => {
            if (drawer === undefined) setDrawer(drawer_ref.current)
            else drawer.gotToItem(0)
        }
    }, [])

    const router = useRouter()
    const query = router.query

    React.useMemo(() => {
        if (query.subscribe) {
            if (drawer) drawer.next()
        } else {
            if (drawer) drawer.previous()
        }
    }, [query, drawer])

    return (
        <div className="flex justify-center items-center w-full pb-8 md:pb-16 md:pt-44">
            <div className="relative w-11/12 md:w-1/2" style={{ height: 600 }}>
                <div className="absolute -top-44 -left-32">
                    <LoginSaly1 />
                </div>
                <div className="absolute bottom-1 -right-48">
                    <LoginSaly2 />
                </div>
                <div className="absolute top-0 left-0 bottom-0 right-0" ref={drawer_ref}>
                    <div className="w-full h-full p-2">
                        <div className="w-full h-full login-container ">
                            <LoginForm
                                signIn={() => {
                                    router.push('/login?subscribe=true') /*drawer.next()*/
                                }}
                            />
                        </div>
                    </div>
                    <div className="w-full h-full p-2">
                        <div className="w-full h-full login-container ">
                            <SignInForm
                                back={() => {
                                    router.push('/login') /*.previous()*/
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
