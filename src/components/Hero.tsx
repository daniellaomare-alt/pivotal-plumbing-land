import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Phone, Calendar, Clock, BadgeCheck, Zap, Users } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/hero-bg-4554c2d8-1778538245520.webp"
          alt="Premium Plumbing Service Port Harcourt"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-950/90 via-blue-900/60 to-transparent"></div>
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-600/20 text-blue-100 text-sm font-semibold border border-blue-500/30 backdrop-blur-sm mb-6">
              <Clock className="w-4 h-4 mr-2 text-blue-400" />
              Available 24/7 in Port Harcourt
            </span>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Reliable Plumbing <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-slate-200">
                Solutions for Every Need
              </span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-200 mb-10 max-w-2xl leading-relaxed">
              Experience premium plumbing services for homes and businesses. From emergency leak fixing to complete water system installations, we deliver engineering excellence at your doorstep.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button className="bg-blue-600 hover:bg-blue-500 text-white h-14 px-8 text-lg rounded-xl shadow-lg shadow-blue-900/40 group">
                <Phone className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
                Call +234 913 571 6438
              </Button>
              <Button variant="outline" className="bg-white/10 hover:bg-white/20 text-white border-white/30 h-14 px-8 text-lg rounded-xl backdrop-blur-sm">
                <Calendar className="w-5 h-5 mr-2" />
                Request Inspection
              </Button>
            </div>

            {/* Trust Badges */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-6 border-t border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Clock className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">24/7 Support</p>
                  <p className="text-slate-400 text-xs">Emergency Ready</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Expert Team</p>
                  <p className="text-slate-400 text-xs">Certified Pro's</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Fast Response</p>
                  <p className="text-slate-400 text-xs">Port Harcourt Area</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <BadgeCheck className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Quality Work</p>
                  <p className="text-slate-400 text-xs">Guaranteed</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;