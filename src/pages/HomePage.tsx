import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight, Target, DollarSign, PieChart } from 'lucide-react';

// Animation variants
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

// Container variant for smooth staggered animations
const containerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

// Card variant for smooth individual card animations
const cardVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

// List container variant
const listContainerVariant = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// List item variant
const listItemVariant = {
  hidden: { opacity: 0, x: -20 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      ease: "easeOut",
      duration: 0.5
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
                High-Ticket Remote Closing for Founders Who Want Results, Not Maybes.
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
      <section className="section bg-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg">What We Do</h2>
            <p className="subheading">
              We help B2B founders, SaaS companies, and consultants close high-ticket deals ($5K+) 
              without the overhead of hiring an in-house sales team.
            </p>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            <motion.div 
              className="group bg-off-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              variants={cardVariant}
            >
              <div className="flex items-center justify-center h-12 w-12 bg-gold/20 rounded-lg mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                <Target className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-md mb-4">Strategic Sales Expertise</h3>
              <p className="text-slate">
                Enterprise-level sales strategies tailored to your high-ticket offering, focused on value and ROI.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-off-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              variants={cardVariant}
            >
              <div className="flex items-center justify-center h-12 w-12 bg-gold/20 rounded-lg mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                <DollarSign className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-md mb-4">Commission-Only Model</h3>
              <p className="text-slate">
                Pay only for results. No retainers or base fees means we're aligned with your success.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-off-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              variants={cardVariant}
            >
              <div className="flex items-center justify-center h-12 w-12 bg-gold/20 rounded-lg mb-6 group-hover:bg-gold/30 transition-colors duration-300">
                <PieChart className="w-6 h-6 text-gold" />
              </div>
              <h3 className="heading-md mb-4">Lead-to-Revenue Pipeline</h3>
              <p className="text-slate">
                We handle the entire sales process from qualifying leads to negotiating deals and closing contracts.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Is This You Section */}
      <section className="section bg-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="heading-lg">Is This You?</h2>
            <p className="subheading">
              Our services aren't for everyone. Here's how to know if we're the right fit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              variants={listContainerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="heading-md mb-4">This is for you if:</h3>
              <motion.ul className="space-y-4" variants={listContainerVariant}>
                <motion.li 
                  className="flex items-start space-x-3"
                  variants={listItemVariant}
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You're generating qualified inbound leads</span>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-3"
                  variants={listItemVariant}
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You sell a $5K+ offer</span>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-3"
                  variants={listItemVariant}
                >
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You want a closer who performs, not guesses</span>
                </motion.li>
              </motion.ul>
            </motion.div>

            <motion.div 
              className="space-y-6"
              variants={listContainerVariant}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <h3 className="heading-md mb-4">This isn't for you if:</h3>
              <motion.ul className="space-y-4" variants={listContainerVariant}>
                <motion.li 
                  className="flex items-start space-x-3"
                  variants={listItemVariant}
                >
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You don't have product-market fit</span>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-3"
                  variants={listItemVariant}
                >
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You expect a magic fix for a broken offer</span>
                </motion.li>
                <motion.li 
                  className="flex items-start space-x-3"
                  variants={listItemVariant}
                >
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You want a junior SDR, not a strategic closer</span>
                </motion.li>
              </motion.ul>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Link to="/contact" className="btn btn-primary">
              See if We're a Good Fit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-12 md:py-24 bg-white">
        <div className="container px-4 md:px-6">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-8 md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4">How It Works</h2>
            <p className="text-lg md:text-xl text-slate">
              Our streamlined process gets us from introduction to revenue quickly and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <motion.div 
              className="bg-off-white p-6 md:p-8 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-lg md:text-xl">
                1
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 pt-2">Intro Call</h3>
              <p className="text-slate text-base md:text-lg">
                We assess if your offer and leads are a good fit for our closing process and establish expectations.
              </p>
            </motion.div>

            <motion.div 
              className="bg-off-white p-6 md:p-8 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-lg md:text-xl">
                2
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 pt-2">CRM Access</h3>
              <p className="text-slate text-base md:text-lg">
                We integrate with your existing systems, set up tracking, and begin working your qualified leads.
              </p>
            </motion.div>

            <motion.div 
              className="bg-off-white p-6 md:p-8 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute -top-4 -left-4 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-lg md:text-xl">
                3
              </div>
              <h3 className="text-lg md:text-xl font-bold mb-3 pt-2">Closed Revenue</h3>
              <p className="text-slate text-base md:text-lg">
                We execute our proven closing process and you receive regular updates as deals progress and close.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href="https://calendly.com/zachm98/30min"
              target="_blank"
              rel="noopener noreferrer" 
              className="group inline-flex items-center space-x-2 text-lg font-medium text-navy hover:text-gold transition-colors"
            >
              <span>Ready to start closing more deals?</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
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