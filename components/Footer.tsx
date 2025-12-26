
import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, ArrowUpRight } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="flex flex-col mb-6">
              <img src="/img/logo.png" alt="Catalyr" width={150} className="h-12 mb-2" />
            </Link>
            <p className="text-gray-500 text-lg max-w-md leading-relaxed">
              Building reliable web and mobile applications with clarity, discipline, and long-term thinking.
            </p>
            <div className="flex space-x-6 mt-8">
              <a href="https://linkedin.com/company/catalyr" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-black transition-colors">
                <Linkedin size={20} />
              </a>
              <a href="mailto:catalyr6@gmail.com" className="text-gray-400 hover:text-black transition-colors">
                <Mail size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900 mb-6">Capabilities</h4>
            <ul className="space-y-4">
              <li className="text-gray-500 hover:text-black transition-colors cursor-pointer text-sm">Web Applications</li>
              <li className="text-gray-500 hover:text-black transition-colors cursor-pointer text-sm">Mobile Apps</li>
              <li className="text-gray-500 hover:text-black transition-colors cursor-pointer text-sm">Startup MVPs</li>
              <li className="text-gray-500 hover:text-black transition-colors cursor-pointer text-sm">Business Systems</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-sm uppercase tracking-widest text-gray-900 mb-6">Company</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="text-gray-500 hover:text-black transition-colors">About Us</Link></li>
              <li><Link to="/services" className="text-gray-500 hover:text-black transition-colors">Services</Link></li>
              <li><Link to="/process" className="text-gray-500 hover:text-black transition-colors">Our Approach</Link></li>
              <li><Link to="/contact" className="text-gray-500 hover:text-black transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-100 text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Catalyr. All rights reserved.</p>
          <div className="flex space-x-8 mt-4 md:mt-0">
            <span className="hover:text-black cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-black cursor-pointer transition-colors">Terms of Service</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
