import React from 'react';
import { ShieldCheck, Facebook, Twitter, Instagram, Linkedin, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="bg-blue-600 p-1.5 rounded-lg shadow-md">
                <ShieldCheck className="w-6 h-6 text-white" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-none text-white">PIVOTAL</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-slate-400">PLUMBING SERVICES</span>
              </div>
            </div>
            <p className="mb-8 leading-relaxed">
              Premium plumbing engineering services in Port Harcourt. Providing high-end residential and commercial solutions with 24/7 emergency support.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Our Services</h4>
            <ul className="space-y-4">
              <li><a href="#" className="hover:text-blue-400 transition-colors">Emergency Plumbing</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Leak Detection & Repair</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Bathroom Renovation</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Commercial Systems</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Water Heater Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#about" className="hover:text-blue-400 transition-colors">About Company</a></li>
              <li><a href="#gallery" className="hover:text-blue-400 transition-colors">Work Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-blue-400 transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-blue-400 transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-blue-400 transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold text-lg mb-6">Get Notified</h4>
            <p className="mb-6 text-sm">Subscribe to get tips on maintaining your plumbing system.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Your Email" 
                className="w-full bg-slate-800 border-none rounded-xl py-4 px-6 text-sm focus:ring-2 focus:ring-blue-600"
              />
              <button className="absolute right-2 top-2 bottom-2 bg-blue-600 hover:bg-blue-500 text-white px-4 rounded-lg text-xs font-bold transition-colors">
                Join
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm">© 2024 Pivotal Plumbing Services & Co Port Harcourt. All rights reserved.</p>
          <button 
            onClick={scrollToTop}
            className="flex items-center gap-2 text-sm font-bold text-white hover:text-blue-400 transition-colors group"
          >
            Back to Top
            <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:-translate-y-1 transition-transform">
              <ArrowUp className="w-4 h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;