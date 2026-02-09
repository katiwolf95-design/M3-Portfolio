function VerticalTimeline() {
    const items = [
        {
            date: '2011',
            title: 'Gestaltung & Kommunikation',
            text: 'Visuelle Grundlalgen, Designvrständnis und klare Kommunikation.',
        },
        {
            date: '2021',
            title: 'Marketing & Wirkung',
            text: 'Strategisches Denken, Reichweite und Markenlogik.',
        },
        {
            date: '2023',
            title: 'Mensch & Psychologie',
            text: 'Motivation, Beziehung und innere Prozesse.',
        },
        {
            date: '2026',
            title: 'Systeme & Umsetzung',
            text: 'Technische Umsetzung mit Fokus auf Struktur.',
        },
    ];

    return (
        <section className="md:hidden max-w-xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-semibold mb-12">
                Werdegang
            </h2>

            <div className="relative">
                <div className="absolute left-3 top-0 h-full w-px bg-gray-300" />

                <ul className="space-y-12">
                    {items.map((item, i) => (
                        <li key={i} className="relative pl-12">
                            <span className="
                                absolute left-0 top-2
                                w-3 h-3 rounded-full
                                bg-orange-400
                            " />

                            <span className="block text-sm font-bold text-orange-500 mb-2">
                                {item.date}
                            </span>

                            <div className="bg-white rounded-xl shadow-md p-4">
                                <h3 className="font-medium mb-1">
                                    {item.title}
                                </h3>
                                <p className="text-sm text-gray-600">
                                    {item.text}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export default VerticalTimeline