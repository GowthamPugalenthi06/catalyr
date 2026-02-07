
import React, { Suspense, lazy, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Smartphone, Rocket, Settings, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import SpeedMeter from '../components/SpeedMeter';

const Spline = lazy(() => import('@splinetool/react-spline'));

const Home: React.FC = () => {
  // Remove Spline watermark and handle scrolling
  useEffect(() => {
    const removeWatermark = () => {
      // Target all links that point to spline.design
      const splineLinks = document.querySelectorAll('a[href*="spline.design"], a[href*="spline"][target="_blank"]');
      splineLinks.forEach(link => {
        (link as HTMLElement).style.display = 'none';
        link.remove();
      });

      // Target watermark elements by common patterns
      const watermarks = document.querySelectorAll('[id*="watermark"], [class*="watermark"]');
      watermarks.forEach(el => {
        if (el.tagName !== 'CANVAS') {
          (el as HTMLElement).style.display = 'none';
        }
      });
    };

    // Prevent zoom on Spline but allow page scrolling
    const handleSplineScroll = (e: WheelEvent) => {
      const splineContainer = document.querySelector('.spline-container');
      if (splineContainer && splineContainer.contains(e.target as Node)) {
        // Prevent the default wheel behavior on Spline (which causes zoom)
        e.preventDefault();
        e.stopPropagation();

        // Manually scroll the page instead
        window.scrollBy({
          top: e.deltaY,
          behavior: 'auto'
        });
      }
    };

    // Add event listener to intercept wheel events
    document.addEventListener('wheel', handleSplineScroll, { passive: false, capture: true });

    // Run watermark removal immediately and periodically
    removeWatermark();
    const interval = setInterval(removeWatermark, 1000);

    // Cleanup
    return () => {
      clearInterval(interval);
      document.removeEventListener('wheel', handleSplineScroll, { capture: true });
    };
  }, []);

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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden pt-32 pb-20 px-6 bg-gradient-to-br from-gray-50 to-white">

        {/* Spline 3D Scene Background - Hidden on mobile/tablet */}
        {/* <div className="absolute inset-0 w-full h-full z-0 spline-container">
          <Suspense fallback={<div className="w-full h-full bg-gradient-to-br from-gray-50 to-gray-100"></div>}>
            <Spline
              scene="/scene.splinecode"
              onLoad={(spline) => {
                // Set fixed zoom level - adjusted to 2.1 to be more zoomed in
                if (spline && spline.setZoom) {
                  spline.setZoom(1.6);
                }
                // Disable all camera controls
                if (spline && spline._camera) {
                  spline._camera.enableZoom = false;
                }
                // Set background color to white to hide any grid/lines
                if (spline && spline.setBackgroundColor) {
                  spline.setBackgroundColor('#ffffff');
                }

                // Access the Three.js scene directly to remove grid helpers
                if (spline && spline._scene) {
                  const scene = spline._scene;

                  // Remove all grid helpers and background objects
                  scene.traverse((child: any) => {
                    // Hide grid helpers
                    if (child.type === 'GridHelper' || child.type === 'PolarGridHelper') {
                      child.visible = false;
                    }
                    // Hide planes that might be the background grid
                    if (child.type === 'Mesh' && child.geometry && child.geometry.type === 'PlaneGeometry') {
                      // Check if it's a large plane (likely background)
                      if (child.scale && (child.scale.x > 100 || child.scale.y > 100 || child.scale.z > 100)) {
                        child.visible = false;
                      }
                    }
                    // Hide objects with grid-related names
                    if (child.name && (
                      child.name.toLowerCase().includes('grid') ||
                      child.name.toLowerCase().includes('background') ||
                      child.name.toLowerCase().includes('floor') ||
                      child.name.toLowerCase().includes('plane')
                    )) {
                      child.visible = false;
                    }
                  });

                  // Set scene background to white
                  if (scene.background) {
                    scene.background = null;
                  }
                }

                // Hide background grid/environment elements by name
                const backgroundElements = ['Background', 'Grid', 'Environment', 'Floor', 'Plane', 'grid', 'background'];
                backgroundElements.forEach(name => {
                  const obj = spline.findObjectByName(name);
                  if (obj) {
                    obj.visible = false;
                  }
                });

                // Find and reposition the key objects
                // Find and reposition the key objects individually
                // We define offsets for each object to create the desired layout
                // Adjust these X/Y values to swap positions or fine-tune
                const keyPositions: Record<string, { x: number, y: number }> = {
                  'Keyboard3': { x: -790, y: -10 },    // Left Key
                  'Keyboard3 3': { x: 500, y: 90 },   // Top Right Key
                  'Keyboard3 4': { x: 80, y: -30 }   // Bottom Right Key
                };

                Object.entries(keyPositions).forEach(([name, offset]) => {
                  const obj = spline.findObjectByName(name);
                  if (obj) {
                    obj.position.x += offset.x; // Add offset to original position
                    obj.position.y += offset.y;
                  }
                });
              }}
            />
          </Suspense>
        </div> */}

        <div className="max-w-5xl mx-auto w-full text-center relative z-10 pointer-events-none">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
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
                className="group inline-flex items-center space-x-3 bg-black text-white px-10 py-4 rounded-full font-bold hover:bg-gray-800 transition-all shadow-xl shadow-black/10 hover:translate-y-[-2px] pointer-events-auto"
              >
                <span>Get Started</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </Link>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Engineering Gap Comparison Section - Table Style */}
      <section className="py-24 px-6 bg-black relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold tracking-widest text-white bg-white/5 rounded-full uppercase border border-white/10">
              Technical Comparison
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Why Your Business Deserves <br />
              <span className="text-gray-400">
                an Engine, Not a Template
              </span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto mb-12">
              Understanding the technical and business cost of choosing the wrong foundation
            </p>
          </motion.div>

          {/* Table-Style Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white/5 border-2 border-white/10 rounded-2xl md:rounded-3xl overflow-hidden backdrop-blur-sm"
          >
            {/* Header Row - Hidden on mobile, shown as labels in each row instead */}
            <div className="hidden md:grid grid-cols-3 border-b-2 border-white/10">
              <div className="p-6 md:p-8 border-r border-white/10">
                <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider">Category</h3>
              </div>
              <div className="p-6 md:p-8 bg-gray-900/30 border-r border-white/5">
                <h3 className="text-lg font-bold text-gray-400 uppercase tracking-wider">Standard Templates</h3>
                <p className="text-xs text-gray-600 mt-1">WordPress • Wix • Squarespace</p>
              </div>
              <div className="p-6 md:p-8 bg-white/5">
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">Catalyr Engine</h3>
                <p className="text-xs text-gray-400 mt-1">Custom React • Zero Debt</p>
              </div>
            </div>

            {/* Performance Row */}
            <div className="border-b border-white/5">
              {/* Mobile: Simple Cards */}
              <div className="md:hidden p-4 space-y-3">
                <h3 className="text-xl font-bold text-white mb-4">Performance</h3>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Templates</p>
                  <p className="text-white font-bold text-lg">4s+ Load</p>
                </div>

                <div className="bg-white/5 border border-white/20 rounded-xl p-4">
                  <p className="text-xs text-gray-300 font-bold uppercase mb-1">Catalyr</p>
                  <p className="text-white font-bold text-lg">0.1s Latency</p>
                </div>
              </div>

              {/* Desktop: Table Layout */}
              <div className="hidden md:grid grid-cols-3 hover:bg-white/5 transition-colors">
                <div className="p-6 md:p-8 border-r border-white/10">
                  <h4 className="text-xl font-bold text-white mb-2">Performance</h4>
                  <p className="text-sm text-gray-500">Speed & Efficiency</p>
                </div>
                <div className="p-6 md:p-8 bg-gray-900/20 border-r border-white/5">
                  <p className="text-gray-400 leading-relaxed">
                    Bloated with 20+ plugins. Heavy JavaScript.
                  </p>
                  <p className="text-white font-bold mt-2">4s+ Load Time</p>
                </div>
                <div className="p-6 md:p-8 bg-white/5">
                  <p className="text-gray-300 leading-relaxed">
                    Clean React/Vite architecture. Zero Bloat.
                  </p>
                  <p className="text-white font-bold mt-2">0.1s Interaction Latency</p>
                </div>
              </div>
            </div>

            {/* Ownership Row */}
            <div className="border-b border-white/5">
              {/* Mobile: Simple Cards */}
              <div className="md:hidden p-4 space-y-3">
                <h3 className="text-xl font-bold text-white mb-4">Ownership</h3>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Templates</p>
                  <p className="text-white font-bold text-lg">You Rent It</p>
                </div>

                <div className="bg-white/5 border border-white/20 rounded-xl p-4">
                  <p className="text-xs text-gray-300 font-bold uppercase mb-1">Catalyr</p>
                  <p className="text-white font-bold text-lg">You Own It</p>
                </div>
              </div>

              {/* Desktop: Table Layout */}
              <div className="hidden md:grid grid-cols-3 hover:bg-white/5 transition-colors">
                <div className="p-6 md:p-8 border-r border-white/10">
                  <h4 className="text-xl font-bold text-white mb-2">Ownership</h4>
                  <p className="text-sm text-gray-500">Asset vs Liability</p>
                </div>
                <div className="p-6 md:p-8 bg-gray-900/20 border-r border-white/5">
                  <p className="text-gray-400 leading-relaxed">
                    Locked into a platform. You rent your site.
                  </p>
                  <p className="text-white font-bold mt-2">Subscription Debt</p>
                </div>
                <div className="p-6 md:p-8 bg-white/5">
                  <p className="text-gray-300 leading-relaxed">
                    No monthly vendor fees. You own your asset.
                  </p>
                  <p className="text-white font-bold mt-2">Proprietary Codebase</p>
                </div>
              </div>
            </div>

            {/* Scalability Row */}
            <div>
              {/* Mobile: Simple Cards */}
              <div className="md:hidden p-4 space-y-3">
                <h3 className="text-xl font-bold text-white mb-4">Scalability</h3>

                <div className="bg-gray-900/50 border border-gray-700 rounded-xl p-4">
                  <p className="text-xs text-gray-400 font-bold uppercase mb-1">Templates</p>
                  <p className="text-white font-bold text-lg">Limited</p>
                </div>

                <div className="bg-white/5 border border-white/20 rounded-xl p-4">
                  <p className="text-xs text-gray-300 font-bold uppercase mb-1">Catalyr</p>
                  <p className="text-white font-bold text-lg">Unlimited</p>
                </div>
              </div>

              {/* Desktop: Table Layout */}
              <div className="hidden md:grid grid-cols-3 hover:bg-white/5 transition-colors">
                <div className="p-6 md:p-8 border-r border-white/10">
                  <h4 className="text-xl font-bold text-white mb-2">Scalability</h4>
                  <p className="text-sm text-gray-500">Future-Proofing</p>
                </div>
                <div className="p-6 md:p-8 bg-gray-900/20 border-r border-white/5">
                  <p className="text-gray-400 leading-relaxed">
                    Breaks when you add custom features.
                  </p>
                  <p className="text-white font-bold mt-2">Hard to integrate AI</p>
                </div>
                <div className="p-6 md:p-8 bg-white/5">
                  <p className="text-gray-300 leading-relaxed">
                    API-First design. Unlimited scalability.
                  </p>
                  <p className="text-white font-bold mt-2">Ready for AI, Blockchain, Enterprise</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-flex items-center space-x-4 bg-white/5 border border-white/10 rounded-full px-8 py-4 backdrop-blur-sm">
              <span className="text-gray-300 font-medium">See the difference yourself</span>
              <Link
                to="/contact"
                className="bg-white text-black px-6 py-2 rounded-full font-bold hover:bg-gray-200 transition-colors inline-flex items-center space-x-2 group"
              >
                <span>Start Building</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
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

      {/* Engine Selection Section */}
      <section className="py-32 bg-black text-white px-6 overflow-hidden relative">
        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold tracking-widest text-white bg-white/5 rounded-full uppercase border border-white/10">
              Engine Selection
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
              Choose Your <span className="text-gray-400">Performance Tier</span>
            </h2>
            <p className="text-xl text-gray-500 max-w-3xl mx-auto">
              We handle both speed and scale. Select the engine that matches your business requirements.
            </p>
          </motion.div>

          {/* Engine Comparison Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {/* Engine A: Managed CMS (WordPress) */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative group"
            >
              <div className="relative border-2 border-gray-800 bg-gray-900/50 backdrop-blur-sm p-8 md:p-10 rounded-3xl hover:border-gray-700 transition-all">
                <div className="mb-8">
                  <span className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-3 block">Engine A</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Rapid Launch Engine
                  </h3>
                  <p className="text-gray-400 mb-6">Managed CMS (WordPress)</p>
                </div>

                <div className="bg-black/30 p-6 rounded-2xl border border-gray-800 mb-6">
                  <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Best For</h4>
                  <p className="text-gray-400 leading-relaxed">
                    Marketing sites, Portfolios, and Blogs
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    High-speed deployment for brands that need to move fast. Fully customizable, SEO-optimized, and built on professional architecture that your team can manage without coding.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Specs</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-gray-300">48-Hour Deployment</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-gray-300">No-Code Content Management</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-gray-300">Integrated SEO</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center bg-white/10 text-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition-colors border border-white/20"
                >
                  Select Rapid Launch
                </Link>
              </div>
            </motion.div>

            {/* Engine B: Proprietary React */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="relative group"
            >
              <div className="relative border-2 border-white bg-white/5 backdrop-blur-sm p-8 md:p-10 rounded-3xl hover:border-white/80 transition-all hover:shadow-2xl hover:shadow-white/10">
                <div className="mb-8">
                  <span className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-3 block">Engine B</span>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Elite Performance Engine
                  </h3>
                  <p className="text-gray-400 mb-6">Proprietary React (Next.js/MERN)</p>
                </div>

                <div className="bg-white/5 p-6 rounded-2xl border border-white/10 mb-6">
                  <h4 className="text-sm font-bold text-white mb-3 uppercase tracking-wider">Best For</h4>
                  <p className="text-gray-300 leading-relaxed">
                    SaaS, Dashboards, and Enterprise-grade E-commerce
                  </p>
                </div>

                <div className="mb-8">
                  <p className="text-gray-300 leading-relaxed">
                    Custom-coded from the ground up. Sub-second interaction latency and zero technical debt. For businesses that require unlimited scalability and total code ownership.
                  </p>
                </div>

                <div className="space-y-3 mb-8">
                  <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-4">Key Specs</h4>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-white font-medium">Sub-100ms Load Times</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-white font-medium">API-First Architecture</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-1 h-1 bg-white rounded-full"></div>
                    <span className="text-white font-medium">Lifetime Ownership</span>
                  </div>
                </div>

                <Link
                  to="/contact"
                  className="block w-full text-center bg-white text-black px-6 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors"
                >
                  Select Elite Performance
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Catalyr? (Philosophy) Section */}
      <section className="py-32 bg-white text-black px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold tracking-widest text-black bg-gray-100 rounded-full uppercase border border-gray-200">
              Philosophy
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              The Zero-Debt <span className="text-gray-400">Philosophy</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* No Vendor Lock-in */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="border-2 border-gray-100 rounded-3xl p-8 hover:border-black transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">No Vendor Lock-in</h3>
              <p className="text-gray-600 leading-relaxed">
                You own the code. If we build it, it's yours. <span className="text-black font-bold">Period.</span>
              </p>
            </motion.div>

            {/* Performance First */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="border-2 border-gray-100 rounded-3xl p-8 hover:border-black transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">Performance First</h3>
              <p className="text-gray-600 leading-relaxed">
                Every millisecond is money. We optimize for speed at the <span className="text-black font-bold">database and UI levels.</span>
              </p>
            </motion.div>

            {/* Agentic Logic */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="border-2 border-gray-100 rounded-3xl p-8 hover:border-black transition-colors"
            >
              <h3 className="text-2xl font-bold mb-4">Agentic Logic</h3>
              <p className="text-gray-600 leading-relaxed">
                As AI & Data Science experts, we build sites that don't just sit there—<span className="text-black font-bold">they process data and drive growth.</span>
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Engines (Portfolio) Section */}
      <section className="py-32 bg-gray-50 text-black px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <span className="inline-flex items-center px-3 py-1 mb-6 text-xs font-bold tracking-widest text-black bg-white rounded-full uppercase border border-gray-200">
              Featured Engines
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-black mb-6 leading-tight">
              Portfolio of <span className="text-gray-400">Proprietary Systems</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl">
              High-intent builds engineered for performance, scalability, and ownership.
            </p>
          </motion.div>

          {/* Portfolio Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Catalyr HRMS',
                subtitle: 'Proprietary Enterprise Management',
                description: 'Full-stack employee management system with real-time analytics'
              },
              {
                title: 'Catalyr EC',
                subtitle: 'Single-Vendor Retail Engine',
                description: 'Razorpay-integrated e-commerce with zero subscription debt'
              },

              {
                title: 'Stealth Project',
                subtitle: 'Custom Next.js Landing Page',
                description: 'High-conversion landing page with sub-100ms load times'
              },
              {
                title: 'AgentOS',
                subtitle: 'AI Workflow Automation',
                description: 'Autonomous task management powered by machine learning'
              },
              {
                title: 'DataCore API',
                subtitle: 'GraphQL Backend Infrastructure',
                description: 'Scalable API architecture for complex data operations'
              },
              {
                title: 'StreamFlow',
                subtitle: 'Real-time Event Processing',
                description: 'WebSocket-based event streaming for live applications'
              }
            ].map((project, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: idx * 0.1 }}
                className="bg-white border-2 border-gray-100 rounded-3xl p-8 hover:border-black transition-all group cursor-pointer"
              >
                <div className="mb-4">
                  <h3 className="text-2xl font-bold mb-2 group-hover:translate-x-1 transition-transform">
                    {project.title}
                  </h3>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-wider">
                    {project.subtitle}
                  </p>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  {project.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pull CTA Section */}
      <section className="py-32 bg-black text-white px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-tight">
              Ready to Upgrade Your <span className="text-gray-400">Infrastructure?</span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 leading-relaxed">
              Most websites are liabilities. Ours are assets. Let's audit your current site and show you the performance gap.
            </p>
            <Link
              to="/contact"
              className="inline-block bg-white text-black px-12 py-5 rounded-full font-bold text-lg hover:bg-gray-200 transition-colors"
            >
              Start Your Audit
            </Link>
          </motion.div>
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

      {/* Speed Meter */}
      <SpeedMeter />
    </div>
  );
};

export default Home;
