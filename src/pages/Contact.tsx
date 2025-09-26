import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageCircle, Send, Clock, Globe, Users, Circle as HelpCircle, CircleCheck as CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    subject: '',
    message: '',
    type: 'general'
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    
    // Reset form after success
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        subject: '',
        message: '',
        type: 'general'
      });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Us',
      content: 'support@agriai.com',
      description: 'Get in touch for support or questions',
      color: 'text-blue-500'
    },
    {
      icon: Phone,
      title: 'Call Us',
      content: '+1 (555) 123-4567',
      description: '24/7 support for urgent matters',
      color: 'text-green-500'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      content: 'Silicon Valley, CA',
      description: 'Agricultural Technology Hub',
      color: 'text-purple-500'
    }
  ];

  const faqs = [
    {
      question: 'How do I connect my sensors to the platform?',
      answer: 'Our platform supports most standard IoT agricultural sensors. Simply follow our setup guide or contact support for assistance with sensor integration.'
    },
    {
      question: 'How do I interpret NDVI readings?',
      answer: 'NDVI values range from -1 to 1. Values above 0.3 typically indicate healthy vegetation, while lower values may suggest stress or sparse coverage. Our dashboard provides detailed interpretations.'
    },
    {
      question: 'What file formats do you support for hyperspectral data?',
      answer: 'We support HSI, TIFF, IMG, and ENVI formats. Our system can also process CSV data from various sensor systems and spectral analysis equipment.'
    },
    {
      question: 'Is my agricultural data secure?',
      answer: 'Yes, we use end-to-end encryption, secure cloud storage, and are fully GDPR compliant. Your data remains private and is never shared without explicit consent.'
    },
    {
      question: 'Can I integrate AgriAI with my existing farm management software?',
      answer: 'Yes, we offer APIs and integrations with major farm management platforms. Contact our technical team to discuss your specific integration needs.'
    },
    {
      question: 'How accurate are the AI predictions?',
      answer: 'Our AI models typically achieve 85-95% accuracy for crop health detection and 80-90% for pest prediction, continuously improving with more data.'
    }
  ];

  const supportOptions = [
    {
      title: 'Technical Support',
      description: 'Help with platform setup, sensors, and integrations',
      icon: Users,
      action: 'Get Technical Help'
    },
    {
      title: 'Sales Inquiry',
      description: 'Pricing, demos, and commercial partnerships',
      icon: MessageCircle,
      action: 'Contact Sales'
    },
    {
      title: 'Research Collaboration',
      description: 'Academic partnerships and research projects',
      icon: Globe,
      action: 'Explore Partnership'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Get in
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
          >
            Have questions about our platform? Need technical support? Want to explore partnerships? 
            We're here to help you succeed with precision agriculture.
          </motion.p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => (
            <div key={info.title} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center">
              <div className={`p-4 rounded-full w-fit mx-auto mb-6 bg-gray-50 ${info.color}`}>
                <info.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{info.title}</h3>
              <p className="text-lg font-medium text-gray-700 mb-2">{info.content}</p>
              <p className="text-sm text-gray-600">{info.description}</p>
            </div>
          ))}
        </motion.div>

        {/* Support Options */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              How Can We Help?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the type of support that best matches your needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <div key={option.title} className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-full w-fit mb-6 group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                  <option.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{option.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{option.description}</p>
                <button className="bg-green-500 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors w-full">
                  {option.action}
                </button>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form & FAQ */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a Message</h2>
            
            {submitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Company/Organization
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                  >
                    <option value="general">General Inquiry</option>
                    <option value="technical">Technical Support</option>
                    <option value="sales">Sales & Pricing</option>
                    <option value="partnership">Partnership</option>
                    <option value="research">Research Collaboration</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors"
                    placeholder="Brief description of your inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Tell us more about your needs, questions, or how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-green-500 text-white px-6 py-4 rounded-lg hover:bg-green-600 transition-colors font-semibold flex items-center justify-center space-x-2 disabled:opacity-70"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </motion.div>

          {/* FAQ */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg"
          >
            <div className="flex items-center space-x-3 mb-6">
              <HelpCircle className="h-6 w-6 text-green-600" />
              <h2 className="text-2xl font-semibold text-gray-900">Frequently Asked Questions</h2>
            </div>
            
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 bg-green-50 rounded-lg">
              <p className="text-sm text-green-800">
                <strong>Still have questions?</strong> Our support team is available 24/7 to help you with any technical issues or platform questions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Live Chat Simulation */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-4 right-4 z-50"
      >
        <button
          onClick={() => setChatOpen(!chatOpen)}
          className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-colors"
        >
          <MessageCircle className="h-6 w-6" />
        </button>

        {chatOpen && (
          <div className="absolute bottom-16 right-0 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 p-4">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-sm font-medium text-gray-900">Live Support</span>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            
            <div className="space-y-3 mb-4">
              <div className="bg-gray-100 p-3 rounded-lg">
                <p className="text-sm text-gray-800">
                  Hi! I'm here to help with any questions about AgriAI. What can I assist you with today?
                </p>
              </div>
            </div>
            
            <div className="flex space-x-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <button className="bg-green-500 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition-colors">
                <Send className="h-4 w-4" />
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default Contact;