import { useState } from "react";
import { Menu, X} from "lucide-react";
export default function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  return (
    <div>
      <nav className="fixed top-0 w-full bg-slate-900/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Portfolio
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-slate-300 hover:text-white transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-slate-300 hover:text-white transition-colors"
              >
                Contact
              </a>
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                Resume
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-slate-300 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
            <div className="px-4 pt-2 pb-4 space-y-2">
              <a
                href="#home"
                className="block text-slate-300 hover:text-white py-2 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="block text-slate-300 hover:text-white py-2 transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="block text-slate-300 hover:text-white py-2 transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="block text-slate-300 hover:text-white py-2 transition-colors"
              >
                Contact
              </a>
              <button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:shadow-lg hover:shadow-purple-500/50 transition-all mt-2">
                Resume
              </button>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
