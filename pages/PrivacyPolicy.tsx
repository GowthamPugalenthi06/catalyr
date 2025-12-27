import React from "react";
import { motion } from "framer-motion";

const PrivacyPolicy: React.FC = () => {
  return (
    <div className="bg-white px-6 pt-32 pb-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-10 text-black">
            Privacy Policy
          </h1>

          <p className="text-lg text-gray-500 mb-12">
            At <strong>Catalyr</strong>, we respect your privacy and are committed
            to protecting any personal information you share with us. This
            Privacy Policy explains what data we collect, how we use it, and
            your rights regarding that information.
          </p>

          {/* Section */}
          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Information We Collect
            </h2>
            <p className="text-gray-500">
              We only collect information that you voluntarily provide to us.
              This typically includes:
            </p>
            <ul className="list-disc pl-6 text-gray-500 space-y-2">
              <li>Your name</li>
              <li>Email address</li>
              <li>Project or business-related information</li>
              <li>Any details you submit through our contact forms</li>
            </ul>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              How We Use Your Information
            </h2>
            <p className="text-gray-500">
              The information you share is used strictly for professional
              communication purposes, such as:
            </p>
            <ul className="list-disc pl-6 text-gray-500 space-y-2">
              <li>Responding to inquiries</li>
              <li>Discussing project requirements</li>
              <li>Providing proposals or estimates</li>
              <li>Maintaining professional correspondence</li>
            </ul>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Cookies & Tracking
            </h2>
            <p className="text-gray-500">
              We do <strong>not</strong> use cookies, tracking pixels, analytics
              tools, or advertising trackers on our website at this time.
            </p>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Data Sharing
            </h2>
            <p className="text-gray-500">
              We do not sell, rent, or share your personal information with third
              parties. Your data remains confidential and is used only for
              legitimate business communication.
            </p>
          </section>

          <section className="space-y-6 mb-14">
            <h2 className="text-2xl font-bold text-black">
              Data Security
            </h2>
            <p className="text-gray-500">
              We take reasonable technical and organizational measures to
              protect your information against unauthorized access, loss, or
              misuse.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-black">
              Contact Us
            </h2>
            <p className="text-gray-500">
              If you have any questions regarding this Privacy Policy, you may
              contact us at:
            </p>
            <p className="text-gray-700 font-medium">
              catalyr6@gmail.com
            </p>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
