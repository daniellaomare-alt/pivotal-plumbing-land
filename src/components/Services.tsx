import React from 'react';
import { motion } from 'framer-motion';
import { 
  Zap, 
  Search, 
  Pipette, 
  Bath, 
  Flame, 
  Building2, 
  Droplets, 
  Settings 
} from 'lucide-react';

const services = [
  {
    title: 'Emergency Plumbing',
    description: 'Round-the-clock emergency response for burst pipes, flooding, or major blockages in Port Harcourt.',
    icon: Zap,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-pipes-0201ef97-1778538244482.webp'
  },
  {
    title: 'Leak Detection',
    description: 'Advanced non-invasive technology to pinpoint hidden leaks behind walls and underground systems.',
    icon: Search,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-leak-detection-97894127-1778538245496.webp'
  },
  {
    title: 'Pipe Installation',
    description: 'Expert installation of PPR, PVC, and metallic piping systems for new constructions and renovations.',
    icon: Pipette,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-pipes-0201ef97-1778538244482.webp'
  },
  {
    title: 'Bathroom & Kitchen',
    description: 'Modern fittings installation, from luxury showers and faucets to complete bathroom remodeling.',
    icon: Bath,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-bathroom-c64c3a00-1778538244817.webp'
  },
  {
    title: 'Water Heaters',
    description: 'Installation and maintenance of storage, instant, and solar water heating systems for homes.',
    icon: Flame,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-water-heater-02282b1f-1778538245629.webp'
  },
  {
    title: 'Commercial Plumbing',
    description: 'Heavy-duty plumbing solutions for hotels, restaurants, office complexes, and industrial sites.',
    icon: Building2,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-commercial-eeb0dd63-1778538243546.webp'
  },
  {
    title: 'Drain Cleaning',
    description: 'Professional high-pressure cleaning to remove stubborn clogs and maintain healthy sewage systems.',
    icon: Droplets,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-pipes-0201ef97-1778538244482.webp'
  },
  {
    title: 'Maintenance',
    description: 'Regular inspections and preventative maintenance to avoid costly repairs and system failures.',
    icon: Settings,
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/about-team-4c5f3cc6-1778538245507.webp'
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-slate-50 dark:bg-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Expertise</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Comprehensive Plumbing Services
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
            We provide a wide range of plumbing services designed to meet the unique needs of Port Harcourt residents and businesses.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-lg border border-slate-100 dark:border-slate-800"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
                <div className="absolute inset-0 bg-blue-900/40 group-hover:bg-blue-900/20 transition-colors"></div>
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-800/90 backdrop-blur-md p-2 rounded-xl shadow-md">
                  <service.icon className="w-6 h-6 text-blue-900 dark:text-blue-400" />
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <div className="flex items-center text-blue-600 dark:text-blue-400 font-bold text-sm cursor-pointer group-hover:gap-2 transition-all">
                  Read More
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">→</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;