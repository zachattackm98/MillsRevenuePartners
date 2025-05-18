import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle2, Briefcase, GraduationCap, Award } from 'lucide-react';

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

      {/* Bio Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative max-w-md mx-auto lg:max-w-none"
            >
              <div className="aspect-w-4 aspect-h-5 bg-light-gray rounded-lg overflow-hidden">
                <div className="w-full h-full bg-navy/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-navy mx-auto flex items-center justify-center">
                      <span className="text-xl md:text-2xl text-gold font-bold">ZM</span>
                    </div>
                    <p className="mt-4 text-navy font-semibold">Zach Mills</p>
                    <p className="text-slate text-sm">Founder & CEO</p>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 md:w-48 h-32 md:h-48 bg-gold/10 rounded-lg -z-10"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4 md:space-y-6"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Zach Mills</h2>
              <div className="space-y-3 md:space-y-4 text-slate text-base md:text-lg">
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
                <a 
                  href="https://calendly.com/zachm98/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Work With Zach
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-12 md:py-24 bg-off-white">
        <div className="container px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-12 md:mb-16"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">Our Team</h2>
            <p className="text-lg text-slate">
              Meet the experts behind our successful high-ticket closing operations.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-navy">SM</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Sarah Mitchell</h3>
              <p className="text-gold font-medium mb-3">Head of Sales Operations</p>
              <p className="text-slate mb-4">
                10+ years optimizing B2B sales processes and managing enterprise client relationships.
              </p>
              <div className="flex items-center text-slate">
                <Briefcase className="w-4 h-4 mr-2" />
                <span className="text-sm">Sales Operations</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-navy">DR</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">David Rodriguez</h3>
              <p className="text-gold font-medium mb-3">Senior Sales Strategist</p>
              <p className="text-slate mb-4">
                Expert in SaaS and technology sales with a proven track record of closing 6-figure deals.
              </p>
              <div className="flex items-center text-slate">
                <Award className="w-4 h-4 mr-2" />
                <span className="text-sm">Strategic Planning</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-sm"
            >
              <div className="w-16 h-16 rounded-full bg-navy/10 flex items-center justify-center mb-4">
                <span className="text-lg font-semibold text-navy">AK</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Alex Kumar</h3>
              <p className="text-gold font-medium mb-3">Client Success Manager</p>
              <p className="text-slate mb-4">
                Specialized in client onboarding and ensuring smooth sales transitions for enterprise accounts.
              </p>
              <div className="flex items-center text-slate">
                <GraduationCap className="w-4 h-4 mr-2" />
                <span className="text-sm">Client Relations</span>
              </div>
            </motion.div>
          </div>
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
              <a 
                href="https://calendly.com/zachm98/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4"
              >
                Schedule Your Strategy Call
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default AboutPage;