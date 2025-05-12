import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1]
    }
  }
};

const HomePage: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[80vh] md:min-h-[90vh] flex items-center py-12 md:py-32 bg-gradient-to-b from-off-white to-white">
        <div className="container px-4 md:px-6 relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div className="space-y-6 md:space-y-8" variants={fadeInUp}>
              <motion.img 
                src="/MRP M.png"
                alt="Mills Revenue Partners"
                className="w-48 md:w-64 lg:w-96 mx-auto lg:mx-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-navy text-center lg:text-left leading-tight">
                High-Ticket Closing for Founders Who Want Results, Not Maybes.
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-slate text-center lg:text-left">
                Elite-level remote closing. Commission-only. Revenue guaranteed or you don't pay.
              </p>
              <motion.div className="flex flex-col sm:flex-row justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
                <a 
                  href="https://calendly.com/zachm98/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary text-base md:text-lg px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto text-center"
                >
                  Schedule a Call
                </a>
                <Link
                  to="/about"
                  className="btn bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-300 w-full sm:w-auto text-center"
                >
                  Learn More
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="hidden lg:block"
              variants={fadeInUp}
            >
              <div className="relative">
                <div className="absolute -top-6 -left-6 w-48 md:w-64 h-48 md:h-64 bg-gold/10 rounded-full" />
                <div className="absolute -bottom-6 -right-6 w-32 md:w-48 h-32 md:h-48 bg-navy/5 rounded-full" />
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-xl relative">
                  <div className="space-y-4 md:space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-1">Commission-Only Model</h3>
                        <p className="text-slate text-sm md:text-base">Pay only when we deliver results. No retainers.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-1">Enterprise Experience</h3>
                        <p className="text-slate text-sm md:text-base">8+ years closing complex B2B deals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                        <CheckCircle2 className="w-5 h-5 md:w-6 md:h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-base md:text-lg mb-1">Proven Track Record</h3>
                        <p className="text-slate text-sm md:text-base">Consistent high-ticket closings</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-8 sm:py-12 md:py-24 bg-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">What We Do</h2>
            <p className="text-base md:text-lg lg:text-xl text-slate px-4 sm:px-0">
              We help B2B founders, SaaS companies, and consultants close high-ticket deals ($5K–$50K+) 
              without the overhead of hiring an in-house sales team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-6 md:px-0">
            <motion.div 
              className="group bg-off-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3 }}
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-gold/20 rounded-lg mb-4 group-hover:bg-gold/30 transition-colors duration-300" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Strategic Sales Expertise</h3>
              <p className="text-slate text-sm sm:text-base md:text-lg">
                Enterprise-level sales strategies tailored to your high-ticket offering, focused on value and ROI.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-off-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.1 }}
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-gold/20 rounded-lg mb-4 group-hover:bg-gold/30 transition-colors duration-300" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Commission-Only Model</h3>
              <p className="text-slate text-sm sm:text-base md:text-lg">
                Pay only for results. No retainers or base fees means we're aligned with your success.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-off-white p-5 sm:p-6 md:p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.3, delay: 0.2 }}
            >
              <div className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 bg-gold/20 rounded-lg mb-4 group-hover:bg-gold/30 transition-colors duration-300" />
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2 sm:mb-3">Lead-to-Revenue Pipeline</h3>
              <p className="text-slate text-sm sm:text-base md:text-lg">
                We handle the entire sales process from qualifying leads to negotiating deals and closing contracts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-navy text-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-4 md:space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">Start Closing More High-Ticket Deals</h2>
            <p className="text-lg md:text-xl text-slate-300">
              Commission-only. No retainers. Results or you don't pay.
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

export default HomePage;