import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
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
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center py-20 md:py-32 bg-gradient-to-b from-off-white to-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50" />
        </div>
        <div className="container relative z-10">
          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
            variants={staggerContainer}
            initial="hidden"
            animate="show"
          >
            <motion.div className="space-y-8" variants={fadeInUp}>
              <motion.img 
                src="/ChatGPT Image May 11, 2025 at 02_01_04 AM.png"
                alt="Mills Revenue Partners"
                className="w-64 md:w-96 mx-auto lg:mx-0"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
              <h1 className="heading-xl text-navy text-center lg:text-left">
                High-Ticket Closing for Founders Who Want Results, Not Maybes.
              </h1>
              <p className="text-xl md:text-2xl text-slate text-center lg:text-left">
                Elite-level remote closing. Commission-only. Revenue guaranteed or you don't pay.
              </p>
              <motion.div className="flex justify-center lg:justify-start space-x-4">
                <Link 
                  to="/contact" 
                  className="btn btn-primary text-lg px-8 py-4"
                >
                  Schedule a Call
                </Link>
                <Link
                  to="/about"
                  className="btn bg-white border-2 border-navy text-navy hover:bg-navy hover:text-white transition-colors duration-300"
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
                <div className="absolute -top-6 -left-6 w-64 h-64 bg-gold/10 rounded-full" />
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-navy/5 rounded-full" />
                <div className="bg-white p-8 rounded-xl shadow-xl relative">
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Commission-Only Model</h3>
                        <p className="text-slate">Pay only when we deliver results. No retainers.</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Enterprise Experience</h3>
                        <p className="text-slate">8+ years closing complex B2B deals</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                        <CheckCircle2 className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Proven Track Record</h3>
                        <p className="text-slate">Consistent high-ticket closings</p>
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">What We Do</h2>
            <p className="subheading">
              We help B2B founders, SaaS companies, and consultants close high-ticket deals ($5K–$50K+) 
              without the overhead of hiring an in-house sales team.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="group bg-off-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-12 w-12 bg-gold/20 rounded-lg mb-6 group-hover:bg-gold/30 transition-colors duration-300" />
              <h3 className="heading-md mb-4">Strategic Sales Expertise</h3>
              <p className="text-slate">
                Enterprise-level sales strategies tailored to your high-ticket offering, focused on value and ROI.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-off-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-12 w-12 bg-gold/20 rounded-lg mb-6 group-hover:bg-gold/30 transition-colors duration-300" />
              <h3 className="heading-md mb-4">Commission-Only Model</h3>
              <p className="text-slate">
                Pay only for results. No retainers or base fees means we're aligned with your success.
              </p>
            </motion.div>

            <motion.div 
              className="group bg-off-white p-8 rounded-lg shadow-sm hover:shadow-md transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-12 w-12 bg-gold/20 rounded-lg mb-6 group-hover:bg-gold/30 transition-colors duration-300" />
              <h3 className="heading-md mb-4">Lead-to-Revenue Pipeline</h3>
              <p className="text-slate">
                We handle the entire sales process from qualifying leads to negotiating deals and closing contracts.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Ideal Clients Section */}
      <section className="section bg-navy text-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Ideal Clients</h2>
            <p className="subheading text-slate-300">
              We specialize in closing complex, high-value deals for businesses that have a proven offering.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="border border-slate-800 bg-navy-800 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="heading-md mb-4 text-gold">SaaS Companies</h3>
              <p className="text-slate-300">
                B2B software platforms with enterprise solutions priced at $5K+ annually or with high lifetime value.
              </p>
            </motion.div>

            <motion.div 
              className="border border-slate-800 bg-navy-800 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="heading-md mb-4 text-gold">Agencies</h3>
              <p className="text-slate-300">
                Digital, marketing, and creative agencies offering premium services to mid-market and enterprise clients.
              </p>
            </motion.div>

            <motion.div 
              className="border border-slate-800 bg-navy-800 p-8 rounded-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="heading-md mb-4 text-gold">Consultants</h3>
              <p className="text-slate-300">
                Expert consultants and advisors who provide specialized knowledge and high-value transformation.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section bg-off-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Why Us</h2>
            <p className="subheading">
              Our unique approach combines enterprise sales experience with a strategic focus on trust and value.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div>
                <h3 className="heading-md mb-2">Enterprise Experience</h3>
                <p className="text-slate">
                  8+ years closing complex B2B deals with multi-stakeholder decision processes and extensive objection handling.
                </p>
              </div>
              <div>
                <h3 className="heading-md mb-2">Trust-Based Approach</h3>
                <p className="text-slate">
                  We don't use high-pressure tactics. Our process builds genuine relationships based on value and mutual benefit.
                </p>
              </div>
              <div>
                <h3 className="heading-md mb-2">Strategic Partner</h3>
                <p className="text-slate">
                  We function as an extension of your team, providing insights to improve your offering and sales process.
                </p>
              </div>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <blockquote className="space-y-4">
                <p className="text-lg italic text-navy">
                  "We don't chase deals. We close them with precision, urgency, and integrity."
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
            </motion.div>
          </div>
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
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Is This You?</h2>
            <p className="subheading">
              Our services aren't for everyone. Here's how to know if we're the right fit.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="heading-md mb-4">This is for you if:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You're generating qualified inbound leads</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You sell a $5K+ offer</span>
                </li>
                <li className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You want a closer who performs, not guesses</span>
                </li>
              </ul>
            </motion.div>

            <motion.div 
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="heading-md mb-4">This isn't for you if:</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You don't have product-market fit</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You expect a magic fix for a broken offer</span>
                </li>
                <li className="flex items-start space-x-3">
                  <XCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" />
                  <span className="text-navy">You want a junior SDR, not a strategic closer</span>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div 
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/contact" className="btn btn-primary">
              See if We're a Good Fit
            </Link>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="section bg-off-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">How It Works</h2>
            <p className="subheading">
              Our streamlined process gets us from introduction to revenue quickly and efficiently.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl">
                1
              </div>
              <h3 className="heading-md mb-4 pt-2">Intro Call</h3>
              <p className="text-slate">
                We assess if your offer and leads are a good fit for our closing process and establish expectations.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl">
                2
              </div>
              <h3 className="heading-md mb-4 pt-2">CRM Access</h3>
              <p className="text-slate">
                We integrate with your existing systems, set up tracking, and begin working your qualified leads.
              </p>
            </motion.div>

            <motion.div 
              className="bg-white p-8 rounded-lg shadow-sm relative"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="absolute -top-4 -left-4 w-12 h-12 rounded-full bg-gold flex items-center justify-center text-white font-bold text-xl">
                3
              </div>
              <h3 className="heading-md mb-4 pt-2">Closed Revenue</h3>
              <p className="text-slate">
                We execute our proven closing process and you receive regular updates as deals progress and close.
              </p>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Link to="/contact" className="group inline-flex items-center space-x-2 text-lg font-medium text-navy hover:text-gold transition-colors">
              <span>Ready to start closing more deals?</span>
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-navy text-white">
        <div className="container">
          <motion.div 
            className="max-w-3xl mx-auto text-center space-y-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="heading-lg">Start Closing More High-Ticket Deals</h2>
            <p className="text-xl text-slate-300">
              Commission-only. No retainers. Results or you don't pay.
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

export default HomePage;