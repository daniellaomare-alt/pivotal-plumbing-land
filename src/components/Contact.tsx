import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent! We will contact you shortly.');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-800/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <span className="text-blue-600 font-bold uppercase tracking-[0.2em] text-sm mb-4 block">Get In Touch</span>
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 dark:text-white mb-8">
              Available 24/7 For Your <br />Plumbing Emergencies
            </h2>
            
            <div className="space-y-8 mb-10">
              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center text-blue-600 shrink-0 border border-slate-100 dark:border-slate-800">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Our Location</h4>
                  <p className="text-slate-600 dark:text-slate-400">11 Freedom Avenue, Aker Rd, Iwofe, Port Harcourt, Rivers State, Nigeria</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center text-blue-600 shrink-0 border border-slate-100 dark:border-slate-800">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Phone Number</h4>
                  <p className="text-slate-600 dark:text-slate-400">+234 913 571 6438</p>
                </div>
              </div>

              <div className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white dark:bg-slate-900 shadow-md flex items-center justify-center text-blue-600 shrink-0 border border-slate-100 dark:border-slate-800">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-lg">Business Hours</h4>
                  <p className="text-slate-600 dark:text-slate-400">Open 24 Hours / 7 Days a week</p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl overflow-hidden h-[300px] shadow-lg border border-white dark:border-slate-700">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3975.8778848412154!2d6.9205556!3d4.8055556!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069d03155555555%3A0x1234567890abcdef!2s11%20Freedom%20Ave%2C%20Aker%20Rd%2C%20Iwofe%2C%20Port%20Harcourt!5e0!3m2!1sen!2sng!4v1620000000000!5m2!1sen!2sng" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-800">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2 text-center md:text-left">Send Us a Message</h3>
            <p className="text-slate-500 mb-8 text-center md:text-left">Fill out the form below and we'll get back to you immediately.</p>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Full Name</label>
                  <Input placeholder="John Doe" className="bg-slate-50 dark:bg-slate-800 border-none h-12 rounded-xl focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Phone Number</label>
                  <Input placeholder="+234..." className="bg-slate-50 dark:bg-slate-800 border-none h-12 rounded-xl focus:ring-2 focus:ring-blue-500" required />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Service Type</label>
                <select className="w-full bg-slate-50 dark:bg-slate-800 border-none h-12 rounded-xl px-4 focus:ring-2 focus:ring-blue-500 text-slate-600 dark:text-slate-400">
                  <option>Emergency Repair</option>
                  <option>New Installation</option>
                  <option>Leak Detection</option>
                  <option>Maintenance</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-slate-700 dark:text-slate-300">Message</label>
                <Textarea placeholder="How can we help you?" className="bg-slate-50 dark:bg-slate-800 border-none min-h-[150px] rounded-xl focus:ring-2 focus:ring-blue-500" required />
              </div>

              <Button type="submit" className="w-full bg-blue-900 hover:bg-blue-800 text-white h-14 rounded-xl text-lg font-bold shadow-xl transition-all hover:scale-[1.02]">
                <Send className="w-5 h-5 mr-2" />
                Send Request
              </Button>

              <div className="relative flex items-center justify-center py-2">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-slate-100 dark:border-slate-800"></span>
                </div>
                <span className="relative bg-white dark:bg-slate-900 px-4 text-xs font-bold text-slate-400 uppercase tracking-widest">Or Chat via</span>
              </div>

              <Button type="button" variant="outline" className="w-full border-green-500 text-green-600 dark:text-green-400 hover:bg-green-50 h-14 rounded-xl text-lg font-bold flex items-center justify-center gap-2">
                <MessageCircle className="w-5 h-5 fill-green-500/20" />
                WhatsApp Us
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;