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
      <section className="py-20 md:py-32 bg-gradient-to-b from-off-white to-white">
        <div className="container">
          <motion.div
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-xl text-navy">About Mills Revenue Partners</h1>
            <p className="text-xl text-slate max-w-2xl mx-auto">
              A boutique sales firm focused exclusively on closing high-ticket B2B deals for elite clients.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-w-4 aspect-h-5 bg-light-gray rounded-lg overflow-hidden">
                <div className="w-full h-full bg-navy/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 rounded-full bg-navy mx-auto flex items-center justify-center">
                      <span className="text-2xl text-gold font-bold">ZM</span>
                    </div>
                    <p className="mt-4 text-navy font-semibold">Zach Mills</p>
                    <p className="text-slate text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gold/10 rounded-lg -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6"
            >
              <h2 className="heading-lg">Zach Mills</h2>
              <div className="space-y-4 text-slate">
                <p>
                  Zach Mills is a seasoned B2B sales expert with over 8 years of experience closing high-ticket deals in industrial, safety, and compliance sectors.
                </p>
                <p>
                  He's built multi-million dollar accounts, led nationwide training initiatives, and managed vendor/distributor relationships across North America.
                </p>
                <p>
                  Now, he brings that enterprise-level expertise to startups, SaaS firms, and agencies that want revenue without building a bloated sales team.
                </p>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="btn btn-primary">
                  Work With Zach
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section bg-navy text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-lg">Our Philosophy</h2>
            <p className="subheading text-slate-300">
              We don't chase deals. We close them with precision, urgency, and integrity.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-navy-800 p-8 rounded-lg border border-slate-800"
            >
              <h3 className="heading-md mb-4 text-gold">Precision</h3>
              <p className="text-slate-300">
                Our process is methodical, strategic, and tailored to each prospect's unique needs and buying journey.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-navy-800 p-8 rounded-lg border border-slate-800"
            >
              <h3 className="heading-md mb-4 text-gold">Urgency</h3>
              <p className="text-slate-300">
                We move deals forward with appropriate pace, respecting your sales cycle while maintaining momentum.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="bg-navy-800 p-8 rounded-lg border border-slate-800"
            >
              <h3 className="heading-md mb-4 text-gold">Integrity</h3>
              <p className="text-slate-300">
                We only sell what's truly valuable to the client, building trust that leads to long-term partnerships.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="section bg-off-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-6 order-2 lg:order-1"
            >
              <h2 className="heading-lg">Our Approach</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Value-Based Selling</h3>
                    <p className="text-slate">
                      We focus on the tangible business outcomes your solution delivers, not just features and benefits.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Consultative Process</h3>
                    <p className="text-slate">
                      We take time to understand prospect challenges then position your solution as the ideal answer.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <CheckCircle2 className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">Data-Driven</h3>
                    <p className="text-slate">
                      We track every aspect of the sales process to optimize conversions and continuously improve results.
                    </p>
                  </div>
                </div>
              </div>
              <div className="pt-4">
                <Link to="/contact" className="group inline-flex items-center space-x-2 text-lg font-medium text-navy hover:text-gold transition-colors">
                  <span>Learn how we can help you</span>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-w-4 aspect-h-3 bg-white p-8 rounded-lg shadow-sm">
                <blockquote className="flex flex-col justify-center h-full space-y-4">
                  <p className="text-xl italic text-navy leading-relaxed">
                    "Our mission is to deliver predictable revenue growth for founders without the overhead and complexity of building an in-house sales department."
                  </p>
                  <footer className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-navy rounded-full flex items-center justify-center">
                      <span className="text-gold font-bold">ZM</span>
                    </div>
                    <div>
                      <p className="font-semibold">Zach Mills</p>
                      <p className="text-slate">Founder, Mills Revenue Partners</p>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center space-y-6"
          >
            <h2 className="heading-lg">Ready to Transform Your Sales Results?</h2>
            <p className="text-xl text-slate-300">
              Let's discuss how our high-ticket closing expertise can drive revenue for your business.
            </p>
            <div>
              <Link to="/contact" className="btn btn-primary text-lg px-8 py-4">
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