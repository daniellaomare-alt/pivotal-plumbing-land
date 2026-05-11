import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Fred',
    role: 'Homeowner',
    content: 'Great job and professional service. They fixed my bathroom leak in less than an hour. Highly recommended in Port Harcourt.',
    rating: 5
  },
  {
    name: 'Fabian',
    role: 'Estate Manager',
    content: 'Reliable and responsive plumbing experts. We use them for all our maintenance work across the estate. Quality is always consistent.',
    rating: 5
  },
  {
    name: 'Customer Review',
    role: 'Business Owner',
    content: 'Very satisfied with the workmanship and fast response. They arrived on time and handled our commercial plumbing issue professionally.',
    rating: 5
  },
  {
    name: 'Client Feedback',
    role: 'Resident',
    content: 'Excellent communication and quality work. They explained the problem clearly and provided a lasting solution with metallic fittings.',
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="py-24 bg-slate-900 text-white overflow-hidden relative">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 blur-[100px] rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-800/10 blur-[100px] rounded-full"></div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-blue-400 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <p className="text-slate-400 text-lg">
              We take pride in our work and the relationships we build with our customers across Port Harcourt.
            </p>
          </div>
          <div className="hidden md:flex gap-4">
            <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 cursor-pointer transition-colors">
              ←
            </div>
            <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-500 cursor-pointer transition-colors shadow-lg shadow-blue-900/40">
              →
            </div>
          </div>
        </div>

        <div className="flex gap-6 animate-scroll md:hover:[animation-play-state:paused]">
          {[...testimonials, ...testimonials].map((item, index) => (
            <motion.div
              key={index}
              className="min-w-[320px] md:min-w-[400px] bg-slate-800/50 backdrop-blur-md p-8 rounded-3xl border border-white/5 relative group"
            >
              <Quote className="absolute top-6 right-8 w-12 h-12 text-blue-600/20 group-hover:text-blue-600/40 transition-colors" />
              <div className="flex gap-1 mb-6">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-slate-300 italic text-lg leading-relaxed mb-8">
                "{item.content}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-900 flex items-center justify-center font-bold text-lg border border-white/10">
                  {item.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-white">{item.name}</h4>
                  <p className="text-slate-500 text-sm uppercase tracking-wider">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-400px * 4 - 24px * 4)); }
        }
        .animate-scroll {
          display: flex;
          width: max-content;
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;