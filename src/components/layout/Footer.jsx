import { useState } from 'react'
import ContactModal from '../ui/ContactModal'

function Footer() {
    const [openModal, setOpenModal] = useState(false)

    return (
    <footer className="relative mt-32 bg-gradient-to-b from-black via-indigo-950 to-black text-white overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-15 md:px-20 pt-24 pb-8">

            {/* Top Bereich */}
            <div className="flex flex-col gap-5 mb-20">

                {/* Headline */}
                <h3 className="text-6xl md:text-9xl font-light tracking-tight text-brand-yellow text-left">
                    Stay connected
                </h3>
                
                {/* CTA */}
                <div className="flex justify-end">
                    <button 
                        onClick={() => setOpenModal(true)}
                        className="text-lg md:text-xl text-gray-300 hover:text-white transition-all duration-300">
                        get in touch →
                    </button>
                </div>
            </div>

            {/* Bottom Area */}
            <div className="flex items-end justify-between">
                {/* Left Text */}
                <p className="max-w-sm text-left text-gray-400 leading-relaxed">
                    I design and build digital experiences with clarity, structure,
                    and a strong sense of aesthetics.
                </p>
                
                {/* Navigation */}
                <ul className="space-y-3 text-gray-400 text-left">
                    {['About Me', 'Projects', 'FAQ', 'Imprint'].map((item, i) => (
                        <li key={item}>
                            <a
                                href="#"
                                className="hover:text-white transition-colors duration-300"
                            >
                                {item}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
      
            {/* Divider */}
            <div className="mt-20 border-t border-white/10 pt-6 text-sm text-gray-500">
                Built with React & intention © 2026, Katharina Wolf  
            </div>
        </div>

        <ContactModal
            open={openModal}
            onClose={() => setOpenModal(false)}
        />
    </footer>
  )
}

export default Footer
