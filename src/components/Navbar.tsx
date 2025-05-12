
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 py-3 md:py-4 flex items-center justify-between">
        <Link to="/" className="text-xl md:text-2xl font-semibold text-purple-600 font-playfair">
          НейроФото
        </Link>

        {/* Mobile menu button */}
        <button 
          onClick={toggleMenu} 
          className="md:hidden text-gray-700 focus:outline-none"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-purple-600 transition-colors">
            Главная
          </Link>
          <Link to="/gallery" className="text-gray-700 hover:text-purple-600 transition-colors">
            Портфолио
          </Link>
          <Link to="/about" className="text-gray-700 hover:text-purple-600 transition-colors">
            О нейрофотосессиях
          </Link>
          <Link to="/pricing" className="text-gray-700 hover:text-purple-600 transition-colors">
            Цены
          </Link>
          <Button className="bg-purple-600 hover:bg-purple-700">
            Записаться
          </Button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg md:hidden">
            <div className="flex flex-col px-4 py-2">
              <Link 
                to="/" 
                className="py-3 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/gallery" 
                className="py-3 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Портфолио
              </Link>
              <Link 
                to="/about" 
                className="py-3 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                О нейрофотосессиях
              </Link>
              <Link 
                to="/pricing" 
                className="py-3 text-gray-700 hover:text-purple-600 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Цены
              </Link>
              <Button 
                className="my-3 bg-purple-600 hover:bg-purple-700"
                onClick={() => setIsMenuOpen(false)}
              >
                Записаться
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
