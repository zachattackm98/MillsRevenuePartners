import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItemClasses = "font-medium hover:text-gold transition-colors py-2";
  const activeItemClasses = "text-gold";

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-3'
      }`}
    >
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2"
          aria-label="Mills Revenue Partners"
        >
          <img 
            src="/MRP M.png" 
            alt="Mills Revenue Partners" 
            className="h-10 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`${navItemClasses} ${location.pathname === '/' ? activeItemClasses : ''}`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className={`${navItemClasses} ${location.pathname === '/about' ? activeItemClasses : ''}`}
          >
            About
          </Link>
          <Link 
            to="/contact" 
            className={`${navItemClasses} ${location.pathname === '/contact' ? activeItemClasses : ''}`}
          >
            Contact
          </Link>
          <a 
            href="https://calendly.com/zachm98/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Schedule a Call
          </a>
        </nav>

        {/* Mobile Nav Toggle */}
        <button 
          className="inline-flex items-center justify-center p-2 rounded-md text-navy md:hidden focus:outline-none focus:ring-2 focus:ring-gold"
          onClick={toggleMenu}
          aria-expanded={isMenuOpen}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <motion.div 
          className="md:hidden"
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="container py-4 space-y-4 bg-white">
            <Link 
              to="/" 
              className={`block ${navItemClasses} ${location.pathname === '/' ? activeItemClasses : ''}`}
            >
              Home
            </Link>
            <Link 
              to="/about" 
              className={`block ${navItemClasses} ${location.pathname === '/about' ? activeItemClasses : ''}`}
            >
              About
            </Link>
            <Link 
              to="/contact" 
              className={`block ${navItemClasses} ${location.pathname === '/contact' ? activeItemClasses : ''}`}
            >
              Contact
            </Link>
            <a 
              href="https://calendly.com/zachm98/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center btn btn-primary"
            >
              Schedule a Call
            </a>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Header;