import { Link } from 'react-router-dom'
import Logo from '../ui/Logo.jsx'

function Header() {
    return (
        <header className='max-w-300 mx-auto px-6 py-6 flex items-center justify-between'>

            {/* Logo / Name */}
            <Link to="/" className='flex items-center gap-4'>
                <Logo className="h-15 w-auto" />
                <span className='text-2xl font-medium  text-gray-900'>
                    KreativWolf
                </span>
            </Link>

            {/* Navigation */}
            <nav className='flex gap-8 text-sm text-gray-700'>
                <Link to="/" className='hover:text-gray-900'>
                    Home
                </Link>

                <a href="#about" className='hover:text-gray-900'>
                    About
                </a>

                <Link to="/projects" className='hover:text-gray-900'>
                    Projects
                </Link>

                <a href="mailto:kawolf6388@gmail.com?subject=Portfolio%20Inquiry" className='hover:text-gray-900'>
                    Contact
                </a>
            </nav>
        </header>
    )
}

export default Header