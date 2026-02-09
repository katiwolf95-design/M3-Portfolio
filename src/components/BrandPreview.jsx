function BrandPreview() {
    return (
        <section className="max-w-5xl mx-auto px-6 py-16">

            <h2 className="text-xl font-medium md:grid-cols-4 gap-6">
                Brand Colors
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-brand-pink h-24 rounded-lg" />
                <div className="bg-brand-blue h-24 rounded-lg" />
                <div className="bg-brand-gray h-24 rounded-lg" />
                <div className="bg-brand-dark h-24 rounded-lg" />
            </div>
        </section>
    )
}

export default BrandPreview