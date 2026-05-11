import React from 'react';
import { motion } from 'framer-motion';
import { Shield, CreditCard, Clock, Zap, Award, Heart } from 'lucide-react';

const reasons = [
  {
    title: 'Professional Technicians',
    description: 'Our team consists of highly trained and certified plumbing experts who handle every job with engineering precision.',
    icon: Shield,
    color: 'bg-blue-600'
  },
  {
    title: 'Affordable Pricing',
    description: 'We offer transparent, competitive pricing with no hidden costs, ensuring you get the best value for your investment.',
    icon: CreditCard,
    color: 'bg-indigo-600'
  },
  {
    title: 'Fast Emergency Response',
    description: 'With our team strategically located in Port Harcourt, we guarantee rapid response for all emergency call-outs.',
    icon: Zap,
    color: 'bg-amber-500'
  },
  {
    title: 'Quality Materials',
    description: 'We only use premium-grade materials and fixtures that meet international standards for durability and performance.',
    icon: Award,
    color: 'bg-slate-700'
  },
  {
    title: 'Reliable Service',
    description: 'Our reputation is built on reliability. We show up on time and complete the work to your total satisfaction.',
    icon: Clock,
    color: 'bg-blue-900'
  },
  {
    title: 'Customer Satisfaction Focus',
    description: 'Your peace of mind is our priority. We listen to your needs and provide tailored solutions that last.',
    icon: Heart,
    color: 'bg-rose-500'
  }
];

const WhyChooseUs = () => {
  return (
    <section className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">The Pivotal Edge</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Why Choose Pivotal Plumbing Services?
            </h2>
            <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed mb-10">
              In a city as dynamic as Port Harcourt, you need a plumbing partner you can trust. We don't just fix leaks; we build lasting infrastructure that supports your lifestyle and business operations.
            </p>
            
            <div className="flex flex-col gap-6">
              {reasons.slice(0, 3).map((item, index) => (
                <div key={index} className="flex gap-5 p-4 rounded-2xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors border border-transparent hover:border-slate-100 dark:hover:border-slate-700">
                  <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center text-white shrink-0 shadow-lg`}>
                    <item.icon className="w-7 h-7" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1">{item.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.slice(3).map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-3xl bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm"
              >
                <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center text-white mb-6 shadow-md`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4">{item.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
            {/* Visual Callout */}
            <div className="sm:col-span-2 bg-blue-900 rounded-3xl p-8 relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white mb-2">Need a Plumber Now?</h3>
                <p className="text-blue-100 mb-6">Our mobile teams are on standby across Port Harcourt.</p>
                <button className="bg-white text-blue-900 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 transition-colors shadow-lg">
                  Emergency Dispatch
                </button>
              </div>
              <Shield className="absolute -bottom-10 -right-10 w-48 h-48 text-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;