import Button from '../ui/Button.jsx'

function Hero () {
    return (
        <section className="relative overflow-hidden">
            {/* Background */}
            <div className="absolute inset-0 bg-linear-to-b from-transparent to-gray-100" />

            <div
                className="
                absolute inset-0
                bg-[radial-gradient(circle_at_top_left,#fbcfe8,transparent_50%),
                radial-gradient(circle_at_top_right,#bae6fd,transparent_50%)]"
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 py-32">
                <h1 className="text-4xl font-semibold text-gray-900 mb-4">
                    Klar. Ruhig. Durchdacht.
                </h1>
                
                <p className="text-xl text-gray-600 mb-8">
                    Ich entwickle strukturierte, nachhaltige Interfaces mit Fokus auf 
                    Klarheit,Designsysteme und saubere Komponenten.
                </p>

                <button>
                        Kontakt aufnehmen
                </button>
            </div>
        </section>
    )
}

export default Hero