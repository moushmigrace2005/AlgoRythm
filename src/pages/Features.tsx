import React from 'react';
import { motion } from 'framer-motion';
import { Camera, Cpu, Cloud, ChartBar as BarChart3, Sprout, Globe, Bug, TrendingUp, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';

const Features = () => {
  const workflowSteps = [
    {
      number: 1,
      title: 'Data Capture',
      desc: 'Drone hyperspectral imaging and IoT sensor deployment',
      icon: Camera,
      color: 'from-blue-500 to-blue-600'
    },
    {
      number: 2,
      title: 'Preprocessing',
      desc: 'NDVI, CVI indices calculation and data normalization',
      icon: Cpu,
      color: 'from-purple-500 to-purple-600'
    },
    {
      number: 3,
      title: 'Cloud Analysis',
      desc: 'AI model processing and pattern recognition',
      icon: Cloud,
      color: 'from-green-500 to-green-600'
    },
    {
      number: 4,
      title: 'Dashboard Insights',
      desc: 'Real-time visualization and actionable recommendations',
      icon: BarChart3,
      color: 'from-orange-500 to-orange-600'
    }
  ];

  const features = [
    {
      icon: Sprout,
      title: 'Crop Health Monitoring',
      desc: 'Advanced spectral analysis reveals crop stress, disease, and nutritional deficiencies before visible symptoms appear.',
      benefits: [
        'Early disease detection',
        'Nutrient deficiency identification',
        'Growth stage monitoring',
        'Yield prediction accuracy'
      ],
      image: 'https://images.pexels.com/photos/1595104/pexels-photo-1595104.jpeg?w=400&h=300&fit=crop'
    },
    {
      icon: Globe,
      title: 'Soil & Environmental Insights',
      desc: 'Comprehensive soil analysis combining spectral data with environmental sensors for optimal growing conditions.',
      benefits: [
        'Soil pH monitoring',
        'Moisture level tracking',
        'Temperature analysis',
        'Nutrient mapping'
      ],
      image: 'https://images.pexels.com/photos/1382394/pexels-photo-1382394.jpeg?w=400&h=300&fit=crop'
    },
    {
      icon: Bug,
      title: 'Pest & Disease Prediction',
      desc: 'AI-powered analysis of environmental conditions and crop health to predict and prevent pest outbreaks.',
      benefits: [
        'Early warning system',
        'Targeted treatment zones',
        'Reduced pesticide use',
        'Integrated pest management'
      ],
      image: 'https://images.pexels.com/photos/1458916/pexels-photo-1458916.jpeg?w=400&h=300&fit=crop'
    },
    {
      icon: TrendingUp,
      title: 'Predictive Analytics',
      desc: 'Machine learning algorithms analyze historical data to predict trends and optimize farming decisions.',
      benefits: [
        'Weather impact analysis',
        'Market trend integration',
        'Resource optimization',
        'ROI maximization'
      ],
      image: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?w=400&h=300&fit=crop'
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
            Powerful Features for
            <span className="block bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Modern Agriculture
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-8"
          >
            Discover how our AI-powered platform transforms raw agricultural data into actionable insights 
            that drive better decisions and higher yields.
          </motion.p>
        </div>
      </section>

      {/* Workflow Steps */}
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
              Our Workflow Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From data capture to actionable insights in four powerful steps
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-4 gap-8">
            {workflowSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group">
                  <div className={`bg-gradient-to-r ${step.color} p-4 rounded-full w-fit mb-6 mx-auto group-hover:scale-110 transition-transform`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-center">
                    <div className={`bg-gradient-to-r ${step.color} bg-clip-text text-transparent text-3xl font-bold mb-2`}>
                      {step.number}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
                {index < workflowSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-gray-400" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Details */}
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
              Feature Deep Dive
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each feature is designed to solve specific agricultural challenges with precision and intelligence
            </p>
          </motion.div>

          <div className="space-y-24">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                  <div className="bg-gradient-to-r from-green-100 to-emerald-100 p-4 rounded-full w-fit mb-6">
                    <feature.icon className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                    {feature.title}
                  </h3>
                  <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                    {feature.desc}
                  </p>
                  <div className="space-y-3">
                    {feature.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start space-x-3">
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}>
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="w-full h-64 object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </div>
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
              Built on Cutting-Edge Technology
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our platform leverages industry-leading tools and frameworks for maximum reliability and performance
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: 'MATLAB Hyperspectral Imaging', desc: 'Advanced spectral analysis and processing' },
              { name: 'Deep Learning Toolbox', desc: 'Neural networks for pattern recognition' },
              { name: 'Cloud Computing', desc: 'Scalable processing and storage infrastructure' },
              { name: 'Real-time Analytics', desc: 'Instant data processing and visualization' },
              { name: 'IoT Integration', desc: 'Seamless sensor network connectivity' },
              { name: 'Machine Learning', desc: 'Predictive algorithms and insights' }
            ].map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{tech.name}</h3>
                <p className="text-gray-600 text-sm">{tech.desc}</p>
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
              Ready to Experience These Features?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              See how our platform can transform your agricultural operations
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-green-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Try Free Demo
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-green-600 transition-all duration-300">
                Schedule Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Features;