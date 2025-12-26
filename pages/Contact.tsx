
import React from 'react';
import { motion } from 'framer-motion';
import ContactForm from '@/components/ContactForm';
import { Mail, Linkedin, ArrowRight, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 min-h-[80vh] flex flex-col justify-center">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 block mb-6">Let's Talk</span>
            <h1 className="text-6xl md:text-8xl font-extrabold text-black mb-10 leading-tight">
              Start a <br /> <span className="text-gray-300">conversation</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 max-w-lg leading-relaxed">
              If you’re planning to build or improve a digital product, we’d be happy to understand your requirements and suggest a clear technical approach.
            </p>
            
            <div className="space-y-8">
              <a 
                href="mailto:contact@catalyr.in" 
                className="flex items-center space-x-6 group border-b border-gray-100 pb-8 hover:border-black transition-colors"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Email us</span>
                  <span className="text-2xl font-bold">catalyr6@gmail.com</span>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </a>

              <a 
                href="https://linkedin.com/company/catalyr" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-6 group border-b border-gray-100 pb-8 hover:border-black transition-colors"
              >
                <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
                  <Linkedin size={24} />
                </div>
                <div>
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-1">Connect on</span>
                  <span className="text-2xl font-bold">LinkedIn</span>
                </div>
                <ArrowRight className="ml-auto opacity-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all" />
              </a>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-black text-white p-12 md:p-16 rounded-[3rem] shadow-2xl"
          >
            <MessageCircle className="text-gray-500 mb-8" size={48} />
            <h2 className="text-3xl font-bold mb-6">Build something reliable today.</h2>
            <p className="text-gray-400 mb-10 text-lg leading-relaxed">
              We focus on one project at a time to ensure maximum quality and focus. Get in touch to check our availability for your next milestone.
            </p>
            <ContactForm/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
