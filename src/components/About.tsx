import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Availability', value: '24/7' },
    { label: 'Happy Clients', value: '150+' },
    { label: 'Response Time', value: '<30min' },
    { label: 'Services', value: 'Residential' },
  ];

  return (
    <section id="about" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/about-team-4c5f3cc6-1778538245507.webp" 
                alt="Pivotal Plumbing Team" 
                className="w-full h-full object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
            </div>
            {/* Experience Badge */}
            <div className="absolute -bottom-6 -right-6 md:right-10 bg-blue-600 p-8 rounded-2xl shadow-xl text-white">
              <p className="text-4xl font-bold mb-1 text-center">10+</p>
              <p className="text-sm font-medium uppercase tracking-wider text-center">Years of <br />Experience</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">About Our Company</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
              Premium Plumbing Services in the Heart of Port Harcourt
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg mb-8 leading-relaxed">
              Pivotal Plumbing Services & Co is a leading engineering firm based in Port Harcourt, dedicated to providing high-end plumbing solutions. We combine technical expertise with a commitment to customer satisfaction, ensuring that every project—whether residential or commercial—is handled with the utmost precision.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {[
                'Expert Engineering Approach',
                '24/7 Emergency Rapid Response',
                'Certified Professional Technicians',
                'High-Quality Metallic Materials',
                'Transparent & Competitive Pricing',
                'Guaranteed Long-lasting Repairs'
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0" />
                  <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-8 bg-slate-50 dark:bg-slate-800 rounded-3xl border border-slate-100 dark:border-slate-700">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-2xl font-bold text-blue-900 dark:text-blue-400">{stat.value}</p>
                  <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;