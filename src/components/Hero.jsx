import { TypeAnimation } from 'react-type-animation'
import profileImg from '../assets/teemo.png'
import { FaGithub, FaFacebook, FaLinkedin } from 'react-icons/fa'

function Hero({ darkMode }) {
  return (
    <section className={`relative min-h-screen flex items-center px-8 md:px-40 overflow-hidden ${darkMode ? 'bg-gray-950 text-white' : 'bg-white text-gray-900'}`}>

      {/* Left Side — Text Content */}
      <div className="relative z-10 flex flex-col items-start max-w-xl w-full">
        <p className="text-blue-500 font-semibold text-sm md:text-base tracking-widest uppercase mb-3">
          Welcome to my Portfolio
        </p>
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight whitespace-nowrap">
          Hi, I am <span className="text-blue-500">John Tugano!</span> 
        </h1>
        <h2 className="text-xl md:text-4xl font-semibold mb-4">
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
        <p className={`text-sm md:text-lg leading-relaxed indent-8 max-w-lg text-justify ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
          I am a passionate Full-Stack Web Developer based in the Philippines,
          dedicated to building clean, fast, and modern web experiences.
          Through John's Forge, I craft digital solutions that help businesses
          grow and stand out online.
        </p>
        <br></br>
        <div className="flex gap-4 flex-wrap">
          <a href="#projects" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 md:px-8 rounded-full transition duration-300 text-sm md:text-base">
            View My Work
          </a>
          <a href="#contact" className="border-2 border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white font-bold py-3 px-6 md:px-8 rounded-full transition duration-300 text-sm md:text-base">
            Contact Me
          </a>
        </div>

         {/* Social Links */}
            <div className="flex gap-8 mt-13">
            
                <a href="https://github.com/JohnnRafael" target="_blank" rel="noopener noreferrer" className={`text-2xl hover:text-blue-500 transition duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <FaGithub />
                </a>
            
                <a href="https://www.facebook.com/Johnn.Tugano/" target="_blank" rel="noopener noreferrer" className={`text-2xl hover:text-blue-500 transition duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <FaFacebook />
                </a>
            
                <a href="https://linkedin.com/in/YOUR_LINKEDIN" target="_blank" rel="noopener noreferrer" className={`text-2xl hover:text-blue-500 transition duration-300 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                    <FaLinkedin />
                </a>
            </div>

      </div>

     
      {/* Right Side — Profile Photo (hidden on mobile) */}
      <div className="hidden md:flex absolute right-0 top-0 h-full w-1/2 items-center justify-center pointer-events-none">
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