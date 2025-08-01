'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Phone, Mail } from 'lucide-react'
import Image from 'next/image'

export default function LawyerModal({ lawyer, isOpen, onClose }) {
  if (!lawyer) return null

  const modalVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: 50,
      transition: {
        duration: 0.2
      }
    }
  }

  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-50"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={onClose}
            />

            {/* Modal */}
            <motion.div
              className="inline-block w-full max-w-2xl p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl relative"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="flex flex-col md:flex-row gap-6">
                {/* Lawyer Image */}
                <div className="flex-shrink-0">
                  <Image
                    src={lawyer.image}
                    alt={lawyer.name}
                    width={200}
                    height={250}
                    className="w-48 h-60 object-cover rounded-lg"
                    onError={(e) => {
                      e.target.src = '/assets/images/placeholder-lawyer.jpg'
                    }}
                  />
                </div>

                {/* Lawyer Details */}
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-gray-900 mb-2">
                    {lawyer.name}
                  </h2>
                  <p className="text-lg text-gray-600 mb-4">{lawyer.role}</p>

                  <div className="space-y-3 mb-6">
                    <div>
                      <h3 className="font-semibold text-gray-900">Specialization</h3>
                      <p className="text-gray-600">{lawyer.specialization}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900">Experience</h3>
                      <p className="text-gray-600">{lawyer.experience}</p>
                    </div>
                    
                    <div>
                      <h3 className="font-semibold text-gray-900">Education</h3>
                      <p className="text-gray-600">{lawyer.education}</p>
                    </div>
                  </div>

                  {/* Contact Information */}
                  <div className="flex flex-col sm:flex-row gap-3 mb-6">
                    <a
                      href={`tel:${lawyer.phone}`}
                      className="inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
                    >
                      <Phone className="w-4 h-4 mr-2" />
                      Call Now
                    </a>
                    <a
                      href={`mailto:${lawyer.email}`}
                      className="inline-flex items-center px-4 py-2 border border-gray-300 text-gray-700 rounded-md hover:bg-gray-50 transition-colors duration-200"
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Send Email
                    </a>
                  </div>
                </div>
              </div>

              {/* Detailed Description */}
              <div className="mt-6 pt-6 border-t border-gray-200">
                <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                <p className="text-gray-600 leading-relaxed">{lawyer.details}</p>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
