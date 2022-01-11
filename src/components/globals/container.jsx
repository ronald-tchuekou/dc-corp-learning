import React from 'react'

export const Container = ({ children, is_phone = false }) => {
    return (
        <div
            className={`flex container ${
                is_phone ? '' : 'pt-10 px-7'
            } mx-auto justify-center flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4`}
        >
            {children}
        </div>
    )
}
