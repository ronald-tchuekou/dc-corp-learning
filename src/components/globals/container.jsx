import React from 'react'

export const Container = (props) => {
    return (
        <div className="flex container pt-10 px-7 mx-auto justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
            {props.children}
        </div>
    )
}
