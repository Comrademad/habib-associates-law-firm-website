'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PlusCircle, Trash2 } from 'lucide-react'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import LawyerModal from './LawyerModal'
import AddLawyerModal from './AddLawyerModal'

export default function LawyerList({ lawyers, onUpdateLawyers }) {
  const [selectedLawyer, setSelectedLawyer] = useState(null)
  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const { data: session } = useSession()

  const handleDeleteLawyer = (lawyerId) => {
    const updatedLawyers = lawyers.filter(lawyer => lawyer.id !== lawyerId)
    onUpdateLawyers(updatedLawyers)
  }

  const handleAddLawyer = (newLawyer) => {
    const lawyerWithId = {
      ...newLawyer,
      id: Math.max(...lawyers.map(l => l.id), 0) + 1
    }
    onUpdateLawyers([...lawyers, lawyerWithId])
    setIsAddModalOpen(false)
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
        duration: 0.5
      }
    }
  }

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Our Legal Team
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            Meet our experienced legal professionals dedicated to providing exceptional legal services
          </motion.p>
          
          {/* Admin Add Button */}
          {session?.user?.isAdmin && (
            <motion.button
              onClick={() => setIsAddModalOpen(true)}
              className="mt-6 inline-flex items-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <PlusCircle className="w-5 h-5 mr-2" />
              Add Lawyer
            </motion.button>
          )}
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {lawyers.map((lawyer) => (
            <motion.div
              key={lawyer.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden group cursor-pointer relative"
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.3 }}
              onClick={() => setSelectedLawyer(lawyer)}
            >
              {/* Admin Delete Button */}
              {session?.user?.isAdmin && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    handleDeleteLawyer(lawyer.id)
                  }}
                  className="absolute top-2 right-2 z-10 p-2 bg-red-600 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-700"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}

              <div className="aspect-w-3 aspect-h-4 bg-gray-200">
                <Image
                  src={lawyer.image}
                  alt={lawyer.name}
                  width={400}
                  height={500}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    e.target.src = '/assets/images/placeholder-lawyer.jpg'
                  }}
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {lawyer.name}
                </h3>
                <p className="text-gray-600 mb-3">{lawyer.role}</p>
                <p className="text-sm text-gray-500 mb-2">
                  <strong>Specialization:</strong> {lawyer.specialization}
                </p>
                <p className="text-sm text-gray-500">
                  <strong>Experience:</strong> {lawyer.experience}
                </p>
                
                <div className="mt-4 pt-4 border-t border-gray-200">
                  <button className="text-gray-900 font-medium hover:text-gray-700 transition-colors duration-200">
                    View Profile →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Modals */}
      {selectedLawyer && (
        <LawyerModal
          lawyer={selectedLawyer}
          isOpen={!!selectedLawyer}
          onClose={() => setSelectedLawyer(null)}
        />
      )}

      {isAddModalOpen && (
        <AddLawyerModal
          isOpen={isAddModalOpen}
          onClose={() => setIsAddModalOpen(false)}
          onAdd={handleAddLawyer}
        />
      )}
    </div>
  )
}
