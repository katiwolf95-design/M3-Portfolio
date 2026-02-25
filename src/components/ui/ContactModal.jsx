import { useEffect } from 'react'

function ContactModal({ open, onClose }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
        }

        window.addEventListener('keydown', handleKey)
            return () => window.removeEventListener('keydown', handleKey)
    }, [onClose])

    if (!open) return null

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">

            {/* Hintergrund */}
            <div 
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className={`
                relative z-10 bg-white text-gray-800 
                rounded-2xl shadow-xl w-[90%] max-w-md p-8
                transition-all duration-300 
                ${open ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
            `}>
                <h3 className="text-2xl font-semibold mb-4">
                    Get in touch
                </h3>

                <form
                    onSubmit={(e)=>{
                        e.preventDefault()

                        const form = e.target

                        const data = {
                            name: form.name.value,
                            email: form.email.value,
                            message: form.message.value
                        }

                        console.log("Form submitted", data)
                        onClose()
                    }}
                    className="flex flex-col gap-4"
                >
                    <input 
                        name='name'
                        type="text"
                        placeholder="Your Name"
                        className="
                            border border-gray-300 rounded-lg px-4 py-2 
                            focus:outline-none focus:ring-2 
                            focus:ring-brand-purple/40 focus:border-brand-purple"
                    />

                    <input
                        name='email'
                        type="email"
                        placeholder="Your email"
                        className=" 
                            border border-gray-300 rounded-lg px-4 py-2 
                            focus:outline-none focus:ring-2 
                            focus:ring-brand-purple/40 focus:border-brand-purple"
                    />

                    <textarea
                        name='message'
                        placeholder="Message"
                        className="
                            border border-gray-300 rounded-lg px-4 py-2 
                            focus:outline-none focus:ring-2 
                            focus:ring-brand-purple/40 focus:border-brand-purple"
                    />

                    <button
                        type="submit"
                        className="
                            mt-2 px-5 py-3 rounded-lg
                            bg-gradient-to-br from-brand-pink via-brand-purple 
                            to-brand-indigo text-white
                            hover:opacity-90 transition"
                    >
                        Send 
                    </button>
                </form>

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute top-3 right-4 text-gray-900 hover:text-black text-xl"
                >
                    x
                </button>

            </div>
        </div>
    )
}

export default ContactModal