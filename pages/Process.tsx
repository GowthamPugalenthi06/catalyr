
import React from 'react';
import { motion } from 'framer-motion';
import { Search, FileText, Hammer, Rocket } from 'lucide-react';

const Process: React.FC = () => {
  const steps = [
    {
      number: '01',
      title: 'Understand',
      desc: 'We start by understanding the business problem, users, and constraints before proposing solutions. We don\'t start coding until we know exactly what success looks like.',
      icon: <Search size={40} />
    },
    {
      number: '02',
      title: 'Define',
      desc: 'We define a clear scope, technical architecture, and delivery plan to avoid confusion and rework. Documentation and transparency are key at this stage.',
      icon: <FileText size={40} />
    },
    {
      number: '03',
      title: 'Build',
      desc: 'Development follows milestone-based execution with regular updates and progress visibility. You will see functional parts of your product as we build them.',
      icon: <Hammer size={40} />
    },
    {
      number: '04',
      title: 'Deliver & Support',
      desc: 'We deliver production-ready systems and provide support for stability and long-term maintenance. We stick around to ensure the transition is smooth.',
      icon: <Rocket size={40} />
    }
  ];

  return (
    <div className="pt-32 pb-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <header className="mb-24">
          <span className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 block mb-6">Our Approach</span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-black mb-12 max-w-4xl">
            A discipline-first <br /><span className="text-gray-300">delivery model.</span>
          </h1>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative group"
            >
              <div className="text-6xl md:text-8xl font-black text-gray-50 mb-8 absolute -top-12 -left-4 z-0 group-hover:text-gray-100 transition-colors">
                {step.number}
              </div>
              <div className="relative z-10 pt-8">
                <div className="text-4xl mb-6">{step.icon}</div>
                <h3 className="text-2xl font-bold mb-6">{step.title}</h3>
                <p className="text-gray-500 leading-relaxed text-lg">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Optional Domains Section */}
        <section className="mt-40 border-t border-gray-100 pt-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl font-extrabold mb-8">Where We Work</h2>
              <p className="text-xl text-gray-500 mb-12">
                We are industry-agnostic but expertise-driven. We've built solutions for founders across various domains.
              </p>
              <div className="flex flex-wrap gap-3">
                {[
                  'Startups & SaaS',
                  'Internal Business Tools',
                  'Education & Training',
                  'Event Operations',
                  'Service Businesses'
                ].map((domain, i) => (
                  <span key={i} className="px-6 py-3 bg-gray-50 rounded-full font-bold text-sm text-gray-800 border border-gray-100">
                    {domain}
                  </span>
                ))}
              </div>
            </div>
            <div className="relative p-12 bg-gray-900 rounded-[3rem] text-white">
              <h3 className="text-2xl font-bold mb-6">Ready to build?</h3>
              <p className="text-gray-400 mb-8 leading-relaxed">
                Join the teams who trust Catalyr with their most critical engineering projects.
              </p>
              <div className="space-y-4">
                <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                    className="h-full bg-white"
                  ></motion.div>
                </div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest text-gray-500">
                  <span>Planning</span>
                  <span>Engineering</span>
                  <span>Scale</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Process;
