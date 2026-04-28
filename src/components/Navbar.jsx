function Navbar({ darkMode, setDarkMode }) {
  return (
    <nav className={`fixed top-0 left-0 w-full z-50 px-8 py-4 flex items-center justify-between ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'} shadow-md`}>

      {/* Left — Logo */}
     <div className="flex items-center">
        <img
            src="/src/assets/logo.png"
            // alt="John's Forge"
            className="h-10 w-auto"
        />
    </div>


      {/* Middle — Nav Links */}
      <div className="absolute left-1/2 transform -translate-x-1/2 flex gap-8 text-sm font-semibold">
        <a href="#about" className="hover:text-blue-500 transition">About</a>
        <a href="#projects" className="hover:text-blue-500 transition">Projects</a>
        <a href="#skills" className="hover:text-blue-500 transition">Skills</a>
        <a href="#contact" className="hover:text-blue-500 transition">Contact</a>
      </div>

      {/* Right — Dark/Light Toggle */}
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">{darkMode ? '🌙' : '☀️'}</span>
        <div
          onClick={() => setDarkMode(!darkMode)}
          className={`w-12 h-6 flex items-center rounded-full cursor-pointer transition-colors duration-300 ${darkMode ? 'bg-blue-600' : 'bg-gray-300'}`}
        >
          <div className={`w-5 h-5 bg-white rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-1'}`} />
        </div>
      </div>

    </nav>
  )
}

export default Navbar