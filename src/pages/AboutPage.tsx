import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

const AboutPage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="py-12 md:py-32 bg-gradient-to-b from-off-white to-white">
        <div className="container px-4 md:px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy">About Mills Revenue Partners</h1>
            <p className="text-lg md:text-xl text-slate max-w-2xl mx-auto">
              A boutique sales firm focused exclusively on closing high-ticket B2B deals for elite clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-12 md:py-24 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Philosophy</h2>
            <p className="text-lg md:text-xl text-slate-300">
              We don't chase deals. We close them with precision, urgency, and integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-navy-800 p-6 md:p-8 rounded-lg border border-slate-800"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gold">Precision</h3>
              <p className="text-slate-300 text-base md:text-lg">
                Our process is methodical, strategic, and tailored to each prospect's unique needs and buying journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-navy-800 p-6 md:p-8 rounded-lg border border-slate-800"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gold">Urgency</h3>
              <p className="text-slate-300 text-base md:text-lg">
                We move deals forward with appropriate pace, respecting your sales cycle while maintaining momentum.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-navy-800 p-6 md:p-8 rounded-lg border border-slate-800"
            >
              <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-gold">Integrity</h3>
              <p className="text-slate-300 text-base md:text-lg">
                We only sell what's truly valuable to the client, building trust that leads to long-term partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Ready to Transform Your Sales Results?</h2>
            <p className="text-lg md:text-xl text-slate-300">
              Let's discuss how our high-ticket closing expertise can drive revenue for your business.
            </p>
            <div>
              <Link 
                to="/contact"
                className="btn btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                Schedule Your Strategy Call
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;