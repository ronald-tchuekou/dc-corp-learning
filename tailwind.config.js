module.exports = {
    purge: ['./pages/**/*.{js,jsx,}', './src/components/**/*.{js,jsx,}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            keyframes: {
                gorw: {
                    '0%': { opacity: 0, transform: 'scale(1, 0.2)' },
                    '100%': { opacity: 1, transform: 'scale(1)' },
                },
            },
            animation: {
                grow: 'gorw 200ms linear',
            },
        },
    },
    variants: {
        extend: {
            scale: ['active'],
        },
    },
    plugins: [],
}
