function Timeline() {
    const timelineItems = [
        {
            date: '2011',
            title: 'Gestaltung & Kommunikation',
            description: 'Visuelle Grundlalgen, Designvrständnis und klare Kommunikation.',
        },
        {
            date: '2021',
            title: 'Marketing & Wirkung',
            description: 'Strategisches Denken, Reichweite und Markenlogik.',
        },
        {
            date: '2023',
            title: 'Mensch & Psychologie',
            description: 'Verständnis für Motivation, Beziehung und innere Prozesse.',
        },
        {
            date: '2026',
            title: 'Systeme & Umsetzung',
            description: 'Technische Umsetzung mit Fokus auf Struktur und Nachhaltigkeit.',
        },
    ];

    return (
        <section className="max-w-5xl mx-auto px-6 py-24">
                <h2 className="text-2xl font-semibold text-gray-900 mb-16 text-center">
                    Werdegang
                </h2>
                
                {/* Wrapper */}
                <div className="relative">
                    {/* Line */}
                    <div className="absolute left-1/2 top-0 transform -translate-x-1/2 h-full w-px bg-gray-300" />

                    <ul className="space-y-24">
                        {timelineItems.map((item, index) => (
                            <li key={index} className="relative text-center">
                                {/* Punkt */}
                                <span className="
                                    absolute left-1/2 top-0
                                    w-4 h-4 rounded-full
                                    border-2 border-gray-900 bg-white
                                    transform -translate-x-1/2 z-10
                                " />

                                {/* Inhalt */}
                                <div className="pt-8 max-w-md mx-auto">
                                    <span className="block text-sm text-gray-500 mb-1">
                                        {item.date}
                                    </span>

                                    <h3 className="text-lg font-medium text-gray-900 mb-2">
                                        {item.title}
                                    </h3>

                                    <p className="text-base text-gray-600">
                                        {item.description}
                                    </p> 
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
        );
}

export default Timeline