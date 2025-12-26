
import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Brain, Layers, Users, Zap } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-24">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xs font-bold uppercase tracking-[0.4em] text-gray-400 block mb-6"
          >
            Who We Are
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl lg:text-7xl font-extrabold text-black mb-12 max-w-4xl"
          >
            Clarity, discipline, and <span className="text-gray-300">long-term thinking.</span>
          </motion.h1>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <p className="text-xl text-gray-500 leading-relaxed">
              Catalyr is a product engineering studio built around clarity, discipline, and long-term thinking. We partner with founders and teams who want dependable digital products — not rushed builds or temporary solutions.
            </p>
            <p className="text-xl text-gray-500 leading-relaxed">
              Our focus is on engineering systems that remain stable, maintainable, and scalable as businesses grow. We believe the best code is the code that lasts.
            </p>
          </motion.div>
        </div>

        {/* Beliefs Grid */}
        <div className="mb-32">
          <h2 className="text-3xl font-extrabold mb-16">Our Beliefs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-100 border border-gray-100 rounded-3xl overflow-hidden shadow-sm">
            {[
              { title: 'Clear Understanding', desc: 'Good products start with a clear understanding of the problem space, users, and constraints.', icon: <Brain /> },
              { title: 'Engineering Matters', desc: 'Engineering decisions matter long after launch. Technical choices define future speed.', icon: <Shield /> },
              { title: 'Structure First', desc: 'Speed without structure creates technical debt that eventually slows you down to zero.', icon: <Layers /> },
              { title: 'Focused Teams', desc: 'Small, highly focused teams build better, more cohesive systems than large, disjointed ones.', icon: <Users /> }
            ].map((belief, idx) => (
              <div key={idx} className="p-12 bg-white flex flex-col items-start hover:bg-gray-50 transition-colors">
                <div className="w-12 h-12 text-black mb-6">{belief.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{belief.title}</h3>
                <p className="text-gray-500 text-lg leading-relaxed">{belief.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What Makes Us Different */}
        <section className="bg-black text-white rounded-[3rem] p-12 md:p-24 overflow-hidden relative">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8">What Makes Catalyr Different</h2>
              <p className="text-gray-400 text-xl leading-relaxed">
                We aren't a traditional "agency." We are an engineering partner. We care as much about your codebase as you do.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-8">
              {[
                { title: 'Delivery-first mindset', desc: 'We focus on shipping functional, high-quality code every milestone.' },
                { title: 'No unnecessary complexity', desc: 'We solve complex problems with simple, elegant technical solutions.' },
                { title: 'Honest timelines', desc: 'No false promises. Realistic expectations and clear communication always.' },
                { title: 'Built to scale, not patch', desc: 'We build for where you are going, not just where you are today.' }
              ].map((item, idx) => (
                <div key={idx} className="border-b border-white/10 pb-6">
                  <h4 className="text-xl font-bold mb-2 flex items-center">
                    <Zap className="mr-3 text-gray-500" size={18} />
                    {item.title}
                  </h4>
                  <p className="text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
