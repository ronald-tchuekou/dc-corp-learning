import React from 'react'

/**
 * Material icons.
 * @param {{variante: string, name: string, size: number}} props
 * @returns
 */
export const MaterialIcon = ({ variante = '', name = 'add', size = 10 }) => {
    return (
        <span className={`material-icons material-icons-${variante}`} style={{ fontSize: size }}>
            {name}
        </span>
    )
}
