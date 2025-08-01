'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, CheckCircle, Phone, Mail, Scale, Shield, Users, Building, Home, Briefcase, Calculator, CreditCard, Book, Plane, Lightbulb } from 'lucide-react'
import { notFound } from 'next/navigation'
import PageTransition from '../../../components/PageTransition'
import { siteContent } from '../../../../data/content'

const iconMap = {
  'criminal-law': Shield,
  'family-law': Users,
  'corporate-law': Building,
  'civil-litigation': Scale,
  'property-law': Home,
  'labor-law': Briefcase,
  'tax-law': Calculator,
  'banking-law': CreditCard,
  'constitutional-law': Book,
  'immigration-law': Plane,
  'intellectual-property': Lightbulb
}

export default function ServiceDetailPage({ params }) {
  const { slug } = params
  const serviceData = siteContent.serviceDetails[slug]
  
  if (!serviceData) {
    notFound()
  }

  const IconComponent = iconMap[slug] || Scale

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
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-white rounded-lg flex items-center justify-center mr-6">
                <IconComponent className="w-8 h-8 text-gray-900" />
              </div>
              <div>
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  {serviceData.title}
                </h1>
                <p className="text-xl text-gray-300">
                  {serviceData.description}
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Breadcrumb */}
      <section className="py-4 bg-gray-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center space-x-2 text-sm text-gray-600">
            <Link href="/" className="hover:text-gray-900 transition-colors duration-200">
              Home
            </Link>
            <span>/</span>
            <Link href="/services" className="hover:text-gray-900 transition-colors duration-200">
              Services
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">{serviceData.title}</span>
          </nav>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Overview</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  {serviceData.overview}
                </p>

                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Our Services Include</h3>
                <motion.div
                  className="grid grid-cols-1 md:grid-cols-2 gap-4"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {serviceData.services.map((service, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3"
                      variants={itemVariants}
                    >
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                      <span className="text-gray-700">{service}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <motion.div
                className="bg-gray-50 p-6 rounded-lg sticky top-8"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Legal Help Now</h3>
                <p className="text-gray-600 mb-6">
                  Need expert legal assistance? Contact our experienced lawyers for professional consultation.
                </p>
                
                <div className="space-y-4">
                  <a
                    href="tel:+92-42-1234-5678"
                    className="w-full flex items-center justify-center px-4 py-3 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
                  >
                    <Phone className="w-5 h-5 mr-2" />
                    Call Now
                  </a>
                  
                  <Link
                    href="/contact"
                    className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Send Message
                  </Link>
                </div>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Emergency Contact</h4>
                  <p className="text-sm text-gray-600 mb-2">24/7 Legal Support Available</p>
                  <a
                    href="tel:+92-300-1234567"
                    className="text-red-600 font-semibold hover:text-red-700 transition-colors duration-200"
                  >
                    +92-300-1234567
                  </a>
                </div>

                {/* Related Services */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <h4 className="font-semibold text-gray-900 mb-4">Related Services</h4>
                  <div className="space-y-2">
                    {siteContent.services.mainServices
                      .filter(service => service.slug !== slug)
                      .slice(0, 3)
                      .map((service) => (
                        <Link
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          className="block text-sm text-gray-600 hover:text-gray-900 transition-colors duration-200"
                        >
                          {service.title}
                        </Link>
                      ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Legal Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a systematic approach to ensure the best outcomes for our clients
            </p>
          </motion.div>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {serviceData.process.map((step, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-6"
                variants={itemVariants}
              >
                <div className="w-12 h-12 bg-gray-900 text-white rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">
                  {index + 1}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step}
                  </h3>
                  <div className="w-full h-px bg-gray-200 mt-4"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose Our Legal Team?
            </h2>
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
                <IconComponent className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Expert Knowledge</h3>
              <p className="text-gray-600">
                Deep expertise and years of experience in this specific area of Pakistani law.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
              <p className="text-gray-600">
                Track record of successful cases and satisfied clients with favorable outcomes.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Dedicated Support</h3>
              <p className="text-gray-600">
                Personalized attention and dedicated support throughout your legal journey.
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
              Contact our experienced legal team today for professional consultation and representation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+92-42-1234-5678"
                className="inline-flex items-center px-8 py-4 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +92-42-1234-5678
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-4 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:text-gray-900 transition-colors duration-200"
              >
                Get Free Consultation
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
