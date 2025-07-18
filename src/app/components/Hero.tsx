export default function Hero() {
  return (
    <section className="h-screen w-32 fixed top-0 right-0 flex flex-col bg-gray-200">
      
      <h1 className="text-4xl font-bold mb-4">Hello, I’m [Your Name]</h1>
      <p className="text-lg text-gray-700 mb-6">Aspiring Web Developer</p>
      <a
        href="#contact"
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700"
      >
        Contact Me
      </a>
    </section>
  );
}
