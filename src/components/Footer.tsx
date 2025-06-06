import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, Calendar } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <Link to="/" className="block">
              <img 
                src="/MRP M.png" 
                alt="Mills Revenue Partners" 
                className="h-12 w-auto brightness-0 invert"
              />
            </Link>
            <p className="text-slate-300 max-w-xs">
              High-ticket closing for founders who want results, not maybes. Elite-level remote closing. Commission-only.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-montserrat">Navigation</h3>
            <nav className="flex flex-col space-y-2">
              <Link to="/" className="text-slate-300 hover:text-gold transition-colors">Home</Link>
              <Link to="/about" className="text-slate-300 hover:text-gold transition-colors">About</Link>
              <Link to="/contact" className="text-slate-300 hover:text-gold transition-colors">Contact</Link>
            </nav>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold font-montserrat">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5 text-gold" />
                <a href="mailto:contact@millsrevenue.com" className="text-slate-300 hover:text-gold transition-colors">
                  contact@millsrevenue.com
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+17209004934" className="text-slate-300 hover:text-gold transition-colors">
                  (720) 900-4934
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Calendar className="w-5 h-5 text-gold" />
                <a 
                  href="https://calendly.com/zachm98/30min" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-slate-300 hover:text-gold transition-colors"
                >
                  Schedule a Call
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 mt-8 border-t border-slate-800">
          <p className="text-sm text-slate-400 text-center">
            &copy; {currentYear} Mills Revenue Partners. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;