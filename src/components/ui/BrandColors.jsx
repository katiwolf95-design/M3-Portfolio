function BrandColors() {
    const colors = [
        { name: "Yellow", hex: "#feaf7a", class: "bg-brand-yellow" },
        { name: "Pink", hex: "#f75194", class: "bg-brand-pink" },
        { name: "Purple", hex: "#bd46b1", class: "bg-brand-purple" },
        { name: "Indigo", hex: "#7567cb", class: "bg-brand-indigo" },
        { name: "Blue", hex: "#62c1eb", class: "bg-brand-blue" },
    ];

    return (
        <section className="max-w-6xl mx-auto px-6 py-24">
            <h2 className="text-2xl font-semibold mb-12">
                Brand Colors
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-5 gap-6">
                {colors.map((color) => (
                    <div 
                        key={color.hex} 
                        className="rounded-xl shadow-md overflow-hidden"
                    >
                        <div className={`h-24 ${color.class}`} />
                        <div className="p-4 text-sm">
                            <p className="font-medium">{color.name}</p>
                            <p className="text-gray-600">{color.hex}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default BrandColors