
import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const navLinkClasses = ({ isActive }: { isActive: boolean }): string =>
    `py-2 text-lg lg:text-base transition-colors duration-300 hover:text-brand-terracotta ${isActive ? 'text-brand-blue font-semibold' : 'text-brand-dark'}`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-heading-montserrat font-bold text-brand-blue">
              DECAL MAKER
            </Link>
          </div>
          
          <nav className="hidden md:flex md:items-center md:space-x-8">
            {NAV_LINKS.map(link => (
              <NavLink key={link.path} to={link.path} className={navLinkClasses}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link to="/contact" className="px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
              Request a Quote
            </Link>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-brand-dark focus:outline-none" aria-label="Open menu">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <nav className="flex flex-col items-center space-y-4 px-4 pt-2 pb-6">
            {NAV_LINKS.map(link => (
              <NavLink key={link.path} to={link.path} className={navLinkClasses} onClick={() => setIsMenuOpen(false)}>
                {link.label}
              </NavLink>
            ))}
            <Link to="/contact" className="w-full text-center mt-4 px-6 py-3 bg-brand-blue text-white font-semibold rounded-lg shadow-md hover:bg-opacity-90 transition-all duration-300" onClick={() => setIsMenuOpen(false)}>
              Request a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;