import React from 'react';
import { motion } from 'framer-motion';

const images = [
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-pipes-0201ef97-1778538244482.webp',
    title: 'Pipe Installations',
    category: 'Plumbing'
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-bathroom-c64c3a00-1778538244817.webp',
    title: 'Bathroom Fittings',
    category: 'Installation'
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-commercial-eeb0dd63-1778538243546.webp',
    title: 'Commercial Project',
    category: 'Industrial'
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-water-heater-02282b1f-1778538245629.webp',
    title: 'Water Heater Setup',
    category: 'Maintenance'
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/service-leak-detection-97894127-1778538245496.webp',
    title: 'Leak Detection',
    category: 'Repair'
  },
  {
    url: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/63e6e7ed-1e0d-43dc-a8c2-5ce5c16355fa/about-team-4c5f3cc6-1778538245507.webp',
    title: 'Professional Team',
    category: 'Expertise'
  }
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Our Portfolio</span>
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Showcasing Our Work
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg max-w-2xl mx-auto">
            Take a look at some of our completed projects across residential and commercial sectors in Rivers State.
          </p>
        </div>

        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group rounded-3xl overflow-hidden cursor-pointer"
            >
              <img
                src={item.url}
                alt={item.title}
                className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-blue-400 text-xs font-bold uppercase tracking-widest mb-2">{item.category}</span>
                <h3 className="text-white text-xl font-bold">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;