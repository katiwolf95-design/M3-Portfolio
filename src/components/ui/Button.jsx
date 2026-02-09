function Button({children, variant = 'primary'}) {
    const base =
        'inline-flex item-center justify-center rounded-full px-6 py-3 text-sm font-medium transition';

    const variants = {
        primary: 'bg-gray-900 text-white hover:bg-gray-800',
        secondary: 'bg-white text-gray-900 border border-gray-300 hover:bg-gray-100',
    }

    return (
        <button className={`${base} ${variants[variant]}`}>
            {children}
        </button>
    )
}

export default Button