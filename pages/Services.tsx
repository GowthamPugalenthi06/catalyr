
import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Smartphone, Zap, Settings, Cpu, ChevronRight } from 'lucide-react';

const ServiceCard: React.FC<{ 
  title: string, 
  desc: string, 
  includes: string[], 
  idealFor?: string,
  tech?: string[],
  icon: React.ReactNode 
}> = ({ title, desc, includes, idealFor, tech, icon }) => (
  <motion.div 
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="p-10 border border-gray-100 rounded-[2.5rem] bg-white hover:border-black transition-all group"
  >
    <div className="mb-8 p-4 bg-gray-50 w-16 h-16 rounded-2xl flex items-center justify-center text-black group-hover:bg-black group-hover:text-white transition-all">
      {icon}
    </div>
    <h3 className="text-3xl font-extrabold mb-4">{title}</h3>
    <p className="text-gray-500 text-lg mb-8 leading-relaxed">{desc}</p>
    
    <div className="space-y-6 mb-8">
      <div>
        <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-4">Includes</h4>
        <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {includes.map((item, i) => (
            <li key={i} className="flex items-center text-sm font-medium text-gray-700">
              <ChevronRight size={14} className="mr-2 text-gray-300" /> {item}
            </li>
          ))}
        </ul>
      </div>
      
      {idealFor && (
        <div>
          <h4 className="font-bold text-sm uppercase tracking-widest text-gray-400 mb-2">Ideal For</h4>
          <p className="text-sm font-semibold">{idealFor}</p>
        </div>
      )}

      {tech && (
        <div className="flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span key={i} className="px-3 py-1 bg-gray-50 border border-gray-100 text-[10px] font-bold uppercase rounded-md">
              {t}
            </span>
          ))}
        </div>
      )}
    </div>
  </motion.div>
);

const Services: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6 bg-gray-50/50">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24 text-center max-w-3xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 block mb-6">Our Services</span>
          <h1 className="text-5xl md:text-6xl font-extrabold text-black mb-8">Full-cycle product engineering.</h1>
          <p className="text-xl text-gray-500">From initial concept to production-ready systems, we build with a focus on stability and scale.</p>
        </header>

        <div className="grid grid-cols-1 gap-8 mb-20">
          <ServiceCard 
            title="Custom Web Application Development"
            desc="We build scalable and secure web applications tailored to real business needs. Focused on performance and modular backend architecture."
            icon={<Layout size={32} />}
            includes={['Dashboards & Admin Tools', 'Backend Systems & APIs', 'Auth & Role Management', '3rd Party Integrations']}
            idealFor="Startups, SaaS products, internal tools"
          />
          <ServiceCard 
            title="Mobile Application Development"
            desc="Cross-platform mobile applications for iOS and Android with a focus on performance and maintainability."
            icon={<Smartphone size={32} />}
            includes={['iOS & Android Native Performance', 'API Integration', 'Secure Auth', 'Deployment Support']}
            tech={['Flutter', 'React Native']}
          />
          <ServiceCard 
            title="Startup MVP Development"
            desc="We help founders validate ideas by building focused, production-ready MVPs that don't need a rewrite in six months."
            icon={<Zap size={32} />}
            includes={['Web-first MVP development', 'Core Feature Focus', 'Clean Architecture', 'Clear Delivery Path']}
            idealFor="Early-stage founders validating concepts"
          />
          <ServiceCard 
            title="Business Automation Systems"
            desc="Design systems that reduce manual work and improve operational efficiency across your entire organization."
            icon={<Settings size={32} />}
            includes={['CRM & ERP Integration', 'Workflow Automation', 'Reporting Dashboards', 'POS & Event Management']}
          />
        </div>

        {/* AI Add-on Section */}
        <section className="bg-black text-white rounded-[3rem] p-12 md:p-20 overflow-hidden relative">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center space-x-2 px-4 py-1 bg-white/10 rounded-full mb-6">
                <Cpu size={16} className="text-gray-400" />
                <span className="text-xs font-bold tracking-widest uppercase">Service Add-on</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">AI Integrations</h2>
              <p className="text-gray-400 text-xl leading-relaxed mb-8">
                AI is integrated only where it adds practical value. We avoid gimmicks and focus on utility.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'WhatsApp & Web Chatbots',
                  'Workflow Automation',
                  'In-app AI Assistants',
                  'Smart Summaries & Insights'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-3 text-gray-300">
                    <div className="w-1.5 h-1.5 bg-gray-500 rounded-full"></div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 grid grid-cols-2 gap-4 w-full">
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center">
                 <div className="text-center p-6">
                    <div className="text-4xl font-bold mb-2">90%</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">Efficiency Gain</div>
                 </div>
              </div>
              <div className="aspect-square bg-white/5 rounded-3xl border border-white/10 mt-8 flex items-center justify-center">
                 <div className="text-center p-6">
                    <div className="text-4xl font-bold mb-2">24/7</div>
                    <div className="text-xs text-gray-500 uppercase tracking-widest">System Uptime</div>
                 </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
