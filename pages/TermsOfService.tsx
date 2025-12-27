import React from "react";
import { motion } from "framer-motion";

const TermsOfService: React.FC = () => {
  return (
    <div className="bg-white px-6 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-10 text-black">
            Terms of Service
          </h1>

          <p className="text-lg text-gray-500 mb-12">
            These Terms of Service govern your use of the Catalyr website and
            services. By accessing our site or contacting us, you agree to these
            terms.
          </p>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Nature of Our Services
            </h2>
            <p className="text-gray-500">
              Catalyr is a product engineering studio providing professional
              software development, consulting, and technical services. All
              project engagements are subject to separate written agreements.
            </p>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Use of Website
            </h2>
            <p className="text-gray-500">
              You agree to use this website only for lawful purposes. You must
              not misuse the site, attempt unauthorized access, or interfere
              with its operation.
            </p>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Intellectual Property
            </h2>
            <p className="text-gray-500">
              All content on this website, including text, visuals, branding,
              and design elements, is the property of Catalyr unless otherwise
              stated. Unauthorized use or reproduction is prohibited.
            </p>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Project Engagements
            </h2>
            <p className="text-gray-500">
              Any project work, pricing, timelines, and deliverables will be
              defined through individual contracts or proposals. Website
              content does not constitute a binding offer.
            </p>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Limitation of Liability
            </h2>
            <p className="text-gray-500">
              Catalyr shall not be liable for any indirect, incidental, or
              consequential damages arising from the use of this website or
              preliminary communications.
            </p>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              External Links
            </h2>
            <p className="text-gray-500">
              Our website may contain links to third-party websites. We are not
              responsible for the content or practices of those sites.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">
              Changes to These Terms
            </h2>
            <p className="text-gray-500">
              We may update these Terms of Service from time to time. Continued
              use of the website constitutes acceptance of the revised terms.
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
