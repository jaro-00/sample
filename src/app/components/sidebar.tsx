// Sidebar.tsx
export default function Sidebar() {
  return (
    <div className="h-screen w-48 bg-gray-900 text-white fixed top-0 left-0 flex flex-col">
      <div className="text-xl font-bold p-4 border-b border-gray-700">
        My Portfolio
      </div>
      <nav className="flex flex-col gap-2 p-4">
        <a href="#home" className="hover:bg-gray-800 p-2 rounded">Home</a>
        <a href="#about" className="hover:bg-gray-800 p-2 rounded">About</a>
        <a href="#projects" className="hover:bg-gray-800 p-2 rounded">Projects</a>
        <a href="#contact" className="hover:bg-gray-800 p-2 rounded">Contact</a>
      </nav>
    </div>
  );
}
