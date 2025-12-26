
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Rocket, Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="z-10 flex flex-col items-center"
          >
            <span className="inline-flex items-center px-3 py-1 mb-8 text-xs font-bold tracking-widest text-black bg-gray-100 rounded-full uppercase border border-gray-200">
              <span className="w-2 h-2 rounded-full bg-black mr-2"></span>
              Engineering Excellence
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight text-black mb-8 leading-[1.1]">
              The First Zero-Debt <br />
              <span className="text-gray-400">Engineering Studio</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
              Catalyr is a product engineering studio focused on building reliable web and mobile applications, startup MVPs, and business systems with clarity and discipline.
            </p>
            <div className="flex flex-col items-center space-y-4">
              <Link
                to="/contact"
                className="group inline-flex items-center space-x-3 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:translate-y-[-2px]"
              >
                <span>Get Started</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
             
            </div>
          </motion.div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-gray-50 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-16"
          >
            <motion.div variants={itemVariants}>
              <h2 className="text-3xl md:text-4xl font-extrabold text-black leading-snug">
                We work with startups and growing businesses to design, build, and maintain digital products.
              </h2>
            </motion.div>
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-xl text-gray-500 leading-relaxed">
                Our approach prioritizes long-term stability, clean architecture, and realistic delivery timelines over rushed execution.
              </p>
              <p className="text-lg text-gray-400">
                Building for production-readiness, scalability, and ease of management from day one.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-400 block mb-4">Capabilities</span>
              <h2 className="text-4xl md:text-5xl font-extrabold text-black">What We Do</h2>
            </div>
            <Link to="/services" className="text-black font-bold flex items-center group">
              View all services <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Custom Web Applications', icon: <Code />, desc: 'Scalable and secure dashboards and systems.' },
              { title: 'Mobile Applications', icon: <Smartphone />, desc: 'Native-feel iOS and Android experiences.' },
              { title: 'Startup MVP Development', icon: <Rocket />, desc: 'Validating ideas with clean, focused builds.' },
              { title: 'Business Automation', icon: <Settings />, desc: 'Systems that reduce manual work efficiently.' }
            ].map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="p-8 border border-gray-100 rounded-3xl hover:border-black transition-colors group cursor-pointer"
              >
                <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center text-black mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-500">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-32 bg-black text-white px-6 overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none"></div>
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            <div>
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-gray-500 block mb-4">Workflow</span>
              <h2 className="text-4xl md:text-6xl font-extrabold mb-10 leading-tight">How We Work</h2>
              <p className="text-xl text-gray-400 mb-12">
                Engineering excellence isn't just about code. It's about process, transparency, and structure.
              </p>
              <div className="space-y-6">
                {[
                  'Clear scope before development',
                  'Realistic timelines and milestones',
                  'Clean, maintainable codebases',
                  'Transparent communication',
                  'Long-term product thinking'
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center space-x-4">
                    <CheckCircle className="text-gray-600" size={20} />
                    <span className="text-lg text-gray-300 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="bg-white/5 p-1 rounded-3xl backdrop-blur-sm border border-white/10 w-full">
                <div className="p-8 md:p-12 text-center">
                  <p className="text-2xl md:text-3xl font-bold mb-8">
                    "Built for teams who care about reliability, not shortcuts."
                  </p>
                  <Link to="/contact" className="inline-block px-10 py-5 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors">
                    Start your project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote / Closing */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-bold uppercase tracking-[0.4em] text-gray-400 mb-8">Integrity in code</p>
          <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-10 leading-tight">
            We partner with founders who prioritize stable foundations over temporary hype.
          </h2>
        </div>
      </section>
    </div>
  );
};

export default Home;
