import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, Calendar, CheckCircle2 } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const initialFormData: FormData = {
  name: '',
  email: '',
  company: '',
  message: '',
};

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      // This is just a simulation of form submission
      // In a real implementation, you would send data to your backend
      await new Promise(resolve => setTimeout(resolve, 1500));
      setIsSubmitted(true);
      setFormData(initialFormData);
    } catch (err) {
      setError('There was a problem submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <h1 className="heading-xl text-navy">Let's Close Some Deals.</h1>
            <p className="text-xl text-slate max-w-2xl mx-auto">
              If you've got qualified leads and a proven offer, we're ready to drive revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-8">
                <div>
                  <h2 className="heading-lg mb-6">Get in Touch</h2>
                  <p className="text-slate">
                    Ready to explore how Mills Revenue Partners can help drive your high-ticket sales? Use any of these channels to start the conversation:
                  </p>
                </div>

                <div className="space-y-6 mt-8">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Email</h3>
                      <a href="mailto:zach@millsrevenue.com" className="text-slate hover:text-gold transition-colors">
                        zach@millsrevenue.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Phone/Text</h3>
                      <a href="tel:+15555555555" className="text-slate hover:text-gold transition-colors">
                        (555) 555-5555
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Calendar className="w-6 h-6 text-gold flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="text-lg font-semibold mb-1">Schedule a Call</h3>
                      <a href="#" className="text-slate hover:text-gold transition-colors">
                        Book a 30-minute consultation
                      </a>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-light-gray mt-8">
                  <h3 className="heading-md mb-4">Who We Work With</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>SaaS companies with $5K+ pricing</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>Consultants and agencies with premium services</span>
                    </li>
                    <li className="flex items-start space-x-3">
                      <CheckCircle2 className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" />
                      <span>B2B founders with qualified inbound leads</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-off-white p-8 rounded-lg shadow-sm">
                <h2 className="heading-md mb-6">Send Us a Message</h2>

                {isSubmitted ? (
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="p-6 bg-white rounded-lg border border-green-200 text-center"
                  >
                    <div className="mx-auto flex items-center justify-center w-12 h-12 rounded-full bg-green-100 mb-4">
                      <CheckCircle2 className="w-6 h-6 text-green-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-navy mb-2">Message Sent!</h3>
                    <p className="text-slate">
                      Thanks for reaching out. We'll get back to you within one business day.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-1">
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-1">
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="your@email.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy mb-1">
                        Company
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="Your company name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-navy mb-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-light-gray rounded-md focus:outline-none focus:ring-2 focus:ring-gold/50"
                        placeholder="Tell us about your sales needs..."
                      ></textarea>
                    </div>

                    {error && (
                      <div className="text-red-500 text-sm">
                        {error}
                      </div>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full btn btn-primary ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section bg-off-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="heading-lg">Frequently Asked Questions</h2>
            <p className="subheading">
              Got questions about working with us? Here are answers to the most common inquiries.
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">How does the commission-only model work?</h3>
                <p className="text-slate">
                  We only get paid when you make money. No monthly retainers or upfront fees. We agree on a fair commission percentage based on your industry, price point, and sales cycle.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">What types of leads do you need?</h3>
                <p className="text-slate">
                  We work best with qualified inbound leads that have expressed interest in your solution. We can help refine your lead qualification process to ensure we're focusing on prospects most likely to convert.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">How long does it take to see results?</h3>
                <p className="text-slate">
                  Depending on your sales cycle, we typically begin closing deals within 30-60 days of starting. Complex B2B sales with multiple stakeholders may take longer, while simpler sales processes can yield results faster.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-white p-6 rounded-lg shadow-sm"
              >
                <h3 className="text-lg font-semibold mb-2">What CRM systems do you work with?</h3>
                <p className="text-slate">
                  We can work with virtually any CRM including Salesforce, HubSpot, Pipedrive, or Close. If you don't have a CRM, we can recommend and help set up a solution that fits your needs.
                </p>
              </motion.div>
            </div>
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
            <h2 className="heading-lg">Ready to Start Closing More Deals?</h2>
            <p className="text-xl text-slate-300">
              Schedule your strategy call today and let's discuss your high-ticket sales needs.
            </p>
            <div>
              <a href="#" className="btn btn-primary text-lg px-8 py-4">
                Book Your Call Now
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
};

export default ContactPage;