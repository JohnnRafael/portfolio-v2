import { useState } from 'react'

function Navbar({ darkMode, setDarkMode }) {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-6 py-4 ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} shadow-md`}>

      {/* Top Row */}
      <div className="flex items-center justify-between">

        {/* Left — Logo */}
        <div className="flex items-center">
          <img src="/src/assets/logo.png" alt="John's Forge" className="h-8 md:h-10 w-auto" />
        </div>

        {/* Middle — Nav Links (desktop only) */}
        <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 gap-8 text-sm font-semibold">
          <a href="#about" className="hover:text-blue-500 transition">About</a>
          <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
        </div>

        {/* Right — Toggle + Hamburger */}
        <div className="flex items-center gap-4">

          {/* Dark/Light Toggle */}
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium hidden md:block">
              {darkMode ? '🌙' : '☀️'}
            </span>
            <div
              onClick={() => setDarkMode(!darkMode)}
              className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
            >
              <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
            </div>
          </div>

          {/* Hamburger Button (mobile only) */}
          <button
            className="md:hidden flex flex-col gap-1.5 cursor-pointer"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`block w-6 h-0.5 transition-all duration-300 ${darkMode ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${darkMode ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 transition-all duration-300 ${darkMode ? 'bg-white' : 'bg-gray-900'} ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>

        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ${menuOpen ? 'max-h-60 mt-4' : 'max-h-0'}`}>
        <div className={`flex flex-col gap-4 py-4 px-2 text-sm font-semibold border-t ${darkMode ? 'border-gray-800' : 'border-gray-200'}`}>
          <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">About</a>
          <a href="#projects" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">Projects</a>
          <a href="#contact" onClick={() => setMenuOpen(false)} className="hover:text-blue-500 transition">Contact</a>
        </div>
      </div>

    </nav>
  )
}

export default Navbar