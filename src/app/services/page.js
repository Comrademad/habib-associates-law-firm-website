'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Scale, Shield, Users, Building, Home, Briefcase, Calculator, CreditCard, Book, Plane, Lightbulb } from 'lucide-react'
import PageTransition from '../../components/PageTransition'
import { siteContent } from '../../../data/content'

export default function ServicesPage() {
  const { services } = siteContent

  const iconMap = {
    'Scale': Scale,
    'Shield': Shield,
    'Users': Users,
    'Building': Building,
    'Home': Home,
    'Briefcase': Briefcase,
    'Calculator': Calculator,
    'CreditCard': CreditCard,
    'Book': Book,
    'Plane': Plane,
    'Lightbulb': Lightbulb
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  }

  return (
    <PageTransition>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              {services.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {services.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {services.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {services.mainServices.map((service, index) => {
              const IconComponent = iconMap[service.icon] || Scale
              return (
                <motion.div
                  key={service.id}
                  className="bg-white border border-gray-200 rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 group"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-lg flex items-center justify-center mb-6 group-hover:bg-gray-800 transition-colors duration-300">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <Link
                    href={`/services/${service.slug}`}
                    className="inline-flex items-center text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200 group"
                  >
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" />
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Legal Services?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive legal solutions backed by years of experience and expertise
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Legal Representation</h3>
              <p className="text-gray-600">
                Our experienced lawyers provide expert representation across all areas of Pakistani law with proven track records.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Personalized Approach</h3>
              <p className="text-gray-600">
                We understand that every case is unique and provide tailored legal solutions to meet your specific needs.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Scale className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Commitment to Justice</h3>
              <p className="text-gray-600">
                We are dedicated to achieving the best possible outcomes for our clients while maintaining the highest ethical standards.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Legal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure the best outcomes for our clients
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Initial Consultation</h3>
              <p className="text-gray-600 text-sm">
                Free consultation to understand your legal needs and assess your case
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Case Analysis</h3>
              <p className="text-gray-600 text-sm">
                Thorough analysis of your case and development of legal strategy
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Legal Action</h3>
              <p className="text-gray-600 text-sm">
                Implementation of legal strategy with regular updates and communication
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                4
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Resolution</h3>
              <p className="text-gray-600 text-sm">
                Achieving the best possible outcome and ensuring client satisfaction
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Legal Assistance?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today for professional legal consultation and let us help you navigate your legal challenges
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                href="tel:+92-42-1234-5678"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Call Now: +92-42-1234-5678
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
