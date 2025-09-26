import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, 
  Users, 
  Award, 
  Lightbulb, 
  Globe, 
  Leaf,
  Code,
  Brain,
  Microscope,
  Handshake
} from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Chief Technology Officer',
      expertise: 'Hyperspectral Imaging & Machine Learning',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?w=300&h=300&fit=crop',
      description: '15+ years in agricultural technology and AI research'
    },
    {
      name: 'Michael Rodriguez',
      role: 'Head of Agriculture',
      expertise: 'Precision Farming & Crop Science',
      image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?w=300&h=300&fit=crop',
      description: 'Former agricultural consultant with 20+ years field experience'
    },
    {
      name: 'Dr. Emily Watson',
      role: 'Data Science Lead',
      expertise: 'Predictive Analytics & IoT Systems',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?w=300&h=300&fit=crop',
      description: 'PhD in Agricultural Engineering, specialist in sensor networks'
    },
    {
      name: 'James Kumar',
      role: 'Product Manager',
      expertise: 'User Experience & Product Strategy',
      image: 'https://images.pexels.com/photos/1036627/pexels-photo-1036627.jpeg?w=300&h=300&fit=crop',
      description: 'Former farmer turned tech leader, bridging agriculture and technology'
    }
  ];

  const technologies = [
    { name: 'MATLAB Hyperspectral Imaging Library', description: 'Advanced spectral analysis and processing', icon: Microscope },
    { name: 'Deep Learning Toolbox', description: 'Neural networks for pattern recognition', icon: Brain },
    { name: 'Cloud Computing Infrastructure', description: 'Scalable processing and storage', icon: Globe },
    { name: 'IoT Sensor Integration', description: 'Real-time environmental monitoring', icon: Code },
  ];

  const partners = [
    { name: 'Agricultural Research Institute', type: 'Research Partner' },
    { name: 'Global Farming Solutions', type: 'Technology Partner' },
    { name: 'University of Agricultural Sciences', type: 'Academic Partner' },
    { name: 'International Crop Science Foundation', type: 'Research Collaborator' },
    { name: 'Smart Farming Consortium', type: 'Industry Partner' },
    { name: 'Environmental Monitoring Systems', type: 'Technology Integration' }
  ];

  const values = [
    {
      icon: Target,
      title: 'Precision',
      description: 'We believe in data-driven decisions that lead to precise, effective agricultural practices.'
    },
    {
      icon: Globe,
      title: 'Sustainability',
      description: 'Our mission is to help farmers adopt sustainable practices that protect our planet.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'We continuously push the boundaries of agricultural technology and AI capabilities.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work closely with farmers, researchers, and institutions to create meaningful solutions.'
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            About
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              AgriAI
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            We're revolutionizing agriculture through artificial intelligence, helping farmers make 
            data-driven decisions that increase yields while protecting our planet's resources.
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We envision a world where precision agriculture is accessible to every farmer, 
                regardless of farm size or location. Our AI-powered platform democratizes 
                advanced agricultural insights, making cutting-edge technology available to 
                farmers worldwide.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                By combining hyperspectral imaging, IoT sensors, and machine learning, 
                we're helping farmers increase productivity while reducing environmental impact, 
                creating a more sustainable future for agriculture.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl"
            >
              <img
                src="https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?w=600&h=400&fit=crop"
                alt="Modern sustainable farming"
                className="w-full h-64 object-cover rounded-xl mb-6"
              />
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-green-600">10,000+</div>
                  <div className="text-sm text-gray-600">Farmers Served</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">50M+</div>
                  <div className="text-sm text-gray-600">Acres Analyzed</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">25%</div>
                  <div className="text-sm text-gray-600">Avg Yield Increase</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-green-600">40%</div>
                  <div className="text-sm text-gray-600">Resource Savings</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Our Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do at AgriAI
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-full w-fit mx-auto mb-6 group-hover:from-green-200 group-hover:to-emerald-200 transition-colors">
                  <value.icon className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Technology Stack
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built on industry-leading tools and cutting-edge research
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {technologies.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-3 rounded-full">
                    <tech.icon className="h-6 w-6 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{tech.name}</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">{tech.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Meet Our Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agricultural experts, data scientists, and technology leaders working together
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-lg font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-green-600 font-medium mb-2">{member.role}</p>
                <p className="text-sm text-gray-600 mb-3">{member.expertise}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Partners & Collaborators
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Working with leading institutions and organizations to advance agricultural science
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-center space-x-3 mb-2">
                  <Handshake className="h-5 w-5 text-green-600" />
                  <span className="text-sm font-medium text-green-600">{partner.type}</span>
                </div>
                <h3 className="font-semibold text-gray-900">{partner.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-500 to-emerald-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join Our Mission
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Be part of the agricultural revolution. Let's build a more sustainable future together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Join Our Team
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                Partner With Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;