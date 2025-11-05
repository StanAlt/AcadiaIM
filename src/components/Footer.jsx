import React from 'react';
import { Linkedin, Mail } from 'lucide-react';
import AcadiaLogo from './AcadiaLogo';

export default function Footer() {
  return (
    <footer className="bg-acadia-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-8">
          {/* Logo and Tagline */}
          <div className="text-white">
            <AcadiaLogo className="h-10 mb-4" />
            <p className="text-gray-400 text-sm">
              Engineering growth through AI-powered content strategy for B2B FinTech.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#process" className="text-gray-400 hover:text-acadia-coral transition-colors">
                  Our Process
                </a>
              </li>
              <li>
                <a href="#services" className="text-gray-400 hover:text-acadia-coral transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#about" className="text-gray-400 hover:text-acadia-coral transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-acadia-coral transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg mb-4">Get in Touch</h4>
            <ul className="space-y-3">
              <li>
                <a 
                  href="mailto:stanalt@gmail.com" 
                  className="text-gray-400 hover:text-acadia-coral transition-colors flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  stanalt@gmail.com
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/stanalt/" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-acadia-coral transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} Acadia.im. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
