import React from 'react';
import { Link } from 'react-router-dom';
import { NAV_LINKS } from '../constants';
import { Icon } from './Icon';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Column 1: Logo & Tagline */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-heading-montserrat font-bold text-white mb-2">
              DECAL MAKER
            </h3>
            <p className="text-gray-400 text-sm">Artistry Fired to Perfection.</p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading-poppins font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map(link => (
                <li key={link.path}>
                  <Link to={link.path} className="text-gray-300 hover:text-brand-terracotta transition-colors duration-300">{link.label}</Link>
                </li>
              ))}
               <li>
                  <Link to="/contact" className="text-gray-300 hover:text-brand-terracotta transition-colors duration-300">Contact Us</Link>
                </li>
            </ul>
          </div>
          
          {/* Column 3: Contact Info */}
          <div>
            <h4 className="font-heading-poppins font-semibold text-lg mb-4">Contact Us</h4>
            <address className="not-italic space-y-2 text-gray-300 text-sm">
              <p>583, Gali Number 1, Shiva Colony, Palla, Faridabad, Haryana 121003</p>
              <p><a href="tel:+918920531526" className="hover:text-brand-terracotta transition-colors duration-300">Phone: +91 89205 31526</a></p>
              <p><a href="tel:+917557445050" className="hover:text-brand-terracotta transition-colors duration-300">Phone: +91 75574 45050</a></p>
              <p><a href="mailto:decalmaker@proton.me" className="hover:text-brand-terracotta transition-colors duration-300">Email: decalmaker@proton.me</a></p>
            </address>
          </div>
          
          {/* Column 4: Social Media */}
          <div>
            <h4 className="font-heading-poppins font-semibold text-lg mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-300 hover:text-brand-terracotta transition-colors duration-300"><Icon type="facebook" /></a>
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-brand-terracotta transition-colors duration-300"><Icon type="instagram" /></a>
              <a href="#" aria-label="LinkedIn" className="text-gray-300 hover:text-brand-terracotta transition-colors duration-300"><Icon type="linkedin" /></a>
            </div>
          </div>
          
        </div>
      </div>
      <div className="bg-black/20 py-4">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Decal Maker. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;