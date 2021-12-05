module.exports = {
    purge: ['./pages/**/*.{js,jsx,}', './src/components/**/*.{js,jsx,}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            boxShadow: {
                DEFAULT: '4px 4px 20px rgba(0, 0, 0, 0.1)',
            },
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
