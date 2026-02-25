function Hero () {
    return (
        <section className="max-w-[1200px] mx-auto pt-24">
            <div className="relative w-full rounded-tl-[60px] overflow-hidden">
                
                {/* Hero rechts ausgerichtet */}
                <div className="w-4/5 ml-auto">
                    
                    {/* Hero Card */}
                <div className=" 
                    relative w-full min-h-[420px]
                    py-14 pr-6 sm:pr-10 md:pr-16 lg:pr-0
                    rounded-tl-[3rem] 
                    overflow-hidden
                ">
                        {/* Horizontaler Verlauf */}
                        <div className="
                            absolute inset-0
                            bg-gradient-to-r
                            from-pink-100
                            via-purple-100
                            to-blue-100
                        " />
                
                        {/* Vertikaler Overlay-Verlauf */}
                        <div className="
                            absolute inset-0
                            bg-gradient-to-b
                            from-transparent
                            via-white/40
                            to-gray-200
                            blur-sm
                        " />

                        {/* Inhalt */}
                        <div className="
                            relative z-10 max-w-md ml-6 md:ml-15 text-left
                            pt-8 md:pt-6 pl-6 sm:pl-8 md:pl-12">
                            <h1 className="text-5xl font-normal md:text-6xl lg:text-7xl mb-8 tracking-normal leading-none text-gray-900">
                                DESIGNER &<br />DEVELOPER
                            </h1>
                
                            <p className="text-left text-gray-700 mb-8">
                                I design and build thoughtful digital experiences –  
                                with clarity, structure and intention.
                            </p>

                            <a
                                href="mailto:kawolf6388@gmail.com?subject=Hello%20Katharina"
                                role="button"
                                className="
                                    inline-flex items-center justify-center
                                    px-5 py-2.5 rounded-full
                                    bg-gradient-to-br 
                                    from-brand-pink via-brand-purple to-brand-indigo 
                                    text-white font-medium
                                    shadow-md
                                    hover:shadow-xl hover:scale-[1.03]
                                    focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-pink
                                    transition-all duration-300 ease-out
                                "
                            >
                                Contact me
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero