'use client'

import { motion } from 'framer-motion'
import { Award, Users, Target, Lightbulb } from 'lucide-react'
import PageTransition from '../../components/PageTransition'
import { siteContent } from '../../../data/content'

export default function AboutPage() {
  const { about } = siteContent

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

  const iconMap = {
    'Integrity': Award,
    'Excellence': Target,
    'Client Focus': Users,
    'Innovation': Lightbulb
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
              {about.title}
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              {about.subtitle}
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto">
              {about.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {about.mission}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                {about.vision}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our legal practice and client relationships
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {about.values.map((value, index) => {
              const IconComponent = iconMap[value.title] || Award
              return (
                <motion.div
                  key={index}
                  className="bg-white p-6 rounded-lg shadow-lg text-center"
                  variants={itemVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Firm History */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Journey
              </h2>
              <div className="space-y-6">
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2008</h3>
                  <p className="text-gray-600">
                    Founded by Advocate Muhammad Habib with a vision to provide exceptional legal services in Pakistan.
                  </p>
                </div>
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2012</h3>
                  <p className="text-gray-600">
                    Expanded our practice areas to include corporate law and established partnerships with international firms.
                  </p>
                </div>
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2018</h3>
                  <p className="text-gray-600">
                    Reached milestone of 500+ successful cases and opened additional offices in major cities.
                  </p>
                </div>
                <div className="border-l-4 border-gray-900 pl-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">2024</h3>
                  <p className="text-gray-600">
                    Continuing to lead in legal innovation with digital services and comprehensive legal solutions.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-gray-100 rounded-lg p-8"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-2 gap-6 text-center">
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">15+</div>
                  <div className="text-gray-600">Years of Excellence</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">500+</div>
                  <div className="text-gray-600">Cases Won</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">95%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">1000+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Habib & Associates?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              We combine legal expertise with personalized service to deliver exceptional results
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
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Proven Track Record</h3>
              <p className="text-gray-300">
                Over 15 years of successful legal practice with a 95% success rate in cases handled.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-300">
                Experienced lawyers specializing in various areas of Pakistani law with deep expertise.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              variants={itemVariants}
            >
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Client-Focused</h3>
              <p className="text-gray-300">
                Personalized legal solutions tailored to meet each client's unique needs and objectives.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
