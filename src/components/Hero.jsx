import { TypeAnimation } from 'react-type-animation'
import profileImg from '../assets/teemo.png'

function Hero({ darkMode }) {
  return (
    <section className={`relative min-h-screen flex items-center px-20 md:px-40 overflow-hidden ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* Left Side — Text Content */}
      <div className="relative z-10 flex flex-col items-start max-w-xl">
        <p className="text-blue-500 font-semibold text-md tracking-widest uppercase mb-3">
          Welcome to my Portfolio
        </p>
        <h1 className="text-2xl md:text-4xl font-bold mb-4 leading-tight">
          Hi, I am <span className="text-blue-500">John Tugano!</span> 👋
        </h1>
        <h2 className="text-2xl md:text-4xl font-semibold mb-8">
          I am a{' '}
          <TypeAnimation
            sequence={[
              'Full-Stack Web Developer',
              2000,
              '',
              500,
              'Back-End Specialist',
              2000,
              '',
              500,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            className="text-blue-500"
          />
        </h2>
        <p className={`text-base md:text-lg leading-relaxed mb-8 max-w-lg ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            I am a passionate Full-Stack Web Developer based in the Philippines, 
            dedicated to building clean, fast, and modern web experiences. 
            Through John's Digital Forge, I craft digital solutions that help businesses 
            grow and stand out online.
        </p>
        
        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-8 rounded-full transition duration-300">
            Contact Me
          </a>
        </div>
      </div>

      {/* Right Side — Profile Photo */}
      <div className="absolute right-0 top-0 h-full w-1/2 flex items-center justify-center pointer-events-none">
        <img
          src={profileImg}
          alt="John's profile"
          className="h-full w-full object-cover object-center"
          style={{
            opacity: 0.4,
            maskImage: darkMode
              ? 'linear-gradient(to right, transparent 0%, black 40%)'
              : 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 40%)',
            WebkitMaskImage: darkMode
              ? 'linear-gradient(to right, transparent 0%, black 40%)'
              : 'linear-gradient(to right, transparent 0%, rgba(0,0,0,0.6) 40%)',
          }}
        />
      </div>

    </section>
  )
}

export default Hero