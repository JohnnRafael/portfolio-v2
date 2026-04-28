function Contact({ darkMode }) {
  return (
    <section id="contact" className={`py-24 px-8 md:px-40 ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-50 text-gray-900'}`}>
      <div className="max-w-6xl mx-auto">
        <p className="text-blue-500 text-sm font-semibold tracking-widest uppercase mb-2">Get in touch</p>
        <h2 className="text-3xl md:text-5xl font-bold mb-4">Contact</h2>
        <div className="w-16 h-1 bg-blue-500 rounded-full mb-16" />
        <p className={`${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>Coming soon...</p>
      </div>
    </section>
  )
}
export default Contact