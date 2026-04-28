import kcoopLogo from '../assets/logo-kcoop.png'
import colegioLogo from '../assets/teresa.jpg'
import amaLogo from '../assets/ama.jpg'
import JohnResume from '../assets/John Tugano.pdf'

function About({ darkMode }) {
  const skills = [
    'React.js', 'JavaScript', 'HTML', 'CSS',
    'Ruby on Rails', 'Java', 'VB.NET',
    'MySQL', 'PostgreSQL', 'WordPress',
    'Ubuntu', 'GitHub', 'Internal APIs'
  ]

  return (
    <section id="about" className={`min-h-screen py-24 px-8 md:px-40 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
        <div className="max-w-6xl mx-auto">

            {/* Section Title */}
                <div className="mb-16">
                <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-2">Get to know me</p>
                    <h2 className="text-3xl md:text-5xl font-bold">About Me</h2>
                    <div className="w-16 h-1 bg-blue-500 mt-4 rounded-full" />
                </div>  

            {/* Bio */}
                <div className="mb-16 max-w-3xl">   
                    <p className={`text-lg leading-relaxed indent-8 text-justify ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        I am a dedicated Full-Stack Web Developer from the Philippines with a strong passion for
                        building efficient, scalable, and visually compelling web applications. With hands-on
                        experience in both front-end and back-end technologies, I bring ideas to life through
                        clean code and thoughtful design. Through <span className="text-orange-500 font-semibold">John's Digital Forge</span>,
                        I help businesses and individuals craft powerful digital experiences that make a real impact.
                    </p>
                </div>

            {/* Skills */}
                <div className="mb-16">
                    <h3 className="text-2xl font-bold mb-6">Skills & Technologies</h3>
                    <div className="flex flex-wrap gap-4">
                        {[
                            { name: 'React.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
                            { name: 'JavaScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
                            { name: 'HTML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
                            { name: 'CSS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
                            { name: 'HAML', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/haml/haml-original.svg' },
                            { name: 'Ruby on Rails', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain.svg' },
                            { name: 'Java', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg' },
                            { name: 'VB.NET', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original.svg' },
                            { name: 'MySQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' },
                            { name: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
                            { name: 'WordPress', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg' },
                            { name: 'Ubuntu', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ubuntu/ubuntu-plain.svg' },
                            { name: 'GitHub', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
                            { name: 'Postman', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg' },
                            { name: 'Bash', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg' },
                            { name: 'Sidekiq', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
                            ].map((skill) => (
                            <div
                                key={skill.name}
                                className={`flex items-center gap-2 px-4 py-2 rounded-full border-2 border-blue-500 hover:bg-blue-500 hover:text-white transition duration-300 cursor-default ${darkMode ? 'bg-transparent text-white' : 'bg-white text-gray-900'}`}
                            >
                                <img
                                src={skill.icon}
                                alt={skill.name}
                                className="w-5 h-5 object-contain"
                                />
                                <span className="text-sm font-semibold">{skill.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

            {/* Experience & Education side by side */}
                <div className="grid md:grid-cols-2 gap-12 mb-16">

                {/* Experience */}
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Experience</h3>
                        <div className="relative pl-6 border-l-2 border-blue-500">
                            <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 rounded-full" />
                                <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">Sept 2023 — Present</p>

                            {/* Logo + Title side by side */}
                            <div className="flex items-center gap-4 mb-3">
                                {/* Left — Company Logo */}
                                <img src={kcoopLogo} alt="KCOOP logo" className="h-12 w-12 object-contain rounded-md"/>

                                {/* Right — Title + Company */}
                                <div>
                                    <h4 className="text-lg font-bold">System Developer — Full Stack</h4>
                                    <p className={`text-sm font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>KCOOP</p>
                                </div>
                            </div>

                            {/* Description below */}
                            <ul className={`text-sm leading-relaxed list-disc list-inside space-y-2 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                                <li>Design, develop, and implement new website modules using Ruby on Rails following the MVC architecture.</li>
                                <li>Work primarily with Ruby on Rails, with additional front-end support using React, HAML, and JavaScript.</li>
                                <li>Maintain and update existing modules to ensure optimal functionality, security, and compatibility.</li>
                                <li>Develop and consume internal APIs within the system to support module features and data integration.</li>
                                <li>Identify, troubleshoot, and resolve bugs to maintain stable and efficient system performance.</li>
                                <li>Manage system error tickets and implement effective fixes to ensure smooth module operation.</li>
                            </ul>
                        </div>
                    </div>

                {/* Education */}
                <div>
                    <h3 className="text-2xl font-bold mb-6">Education</h3>
                    {/* College */}
                    <div className="relative pl-6 border-l-2 border-blue-500 mb-8">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 rounded-full" />
                            <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">2019 — 2023</p>

                            <div className="flex items-center gap-4 mb-3">
                                <img src={colegioLogo} alt="Colegio logo" className="h-12 w-12 object-contain rounded-md"/>
                            <div>
                                <h4 className="text-lg font-bold">Bachelor of Science in Information Technology</h4>
                                <p className={`text-sm font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>
                                    Colegio De Sta. Teresa De Avila
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Senior High */}
                    <div className="relative pl-6 border-l-2 border-blue-500">
                        <div className="absolute -left-2 top-1 w-4 h-4 bg-blue-500 rounded-full" />
                            <p className="text-blue-500 text-sm font-semibold uppercase tracking-widest mb-3">2016 — 2018</p>

                            <div className="flex items-center gap-4 mb-3">
                                <img src={amaLogo} alt="AMA logo" className="h-12 w-12 object-contain rounded-md"/>
                            <div>
                                <h4 className="text-lg font-bold">Senior High School (ICT) </h4>
                                <p className={`text-sm font-semibold ${darkMode ? 'text-orange-400' : 'text-orange-500'}`}>
                                    AMA Fairview College
                                </p>
                            </div>
                        </div>
                    </div>
                
            
                </div>

                </div>

            {/* Download Resume Button */}
            <div>
                
                <a href={JohnResume} download className="inline-flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full transition duration-300">
                    Download Resume
                </a>
                {/* <p className={`text-xs mt-3 ${darkMode ? 'text-gray-500' : 'text-gray-400'}`}>
                    Place your resume.pdf inside the /public folder
                </p> */}
            </div>
      </div>

    </section>
  )
}

export default About