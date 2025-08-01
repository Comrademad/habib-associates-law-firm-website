'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { AlertCircle, ArrowLeft } from 'lucide-react'
import PageTransition from '../../../components/PageTransition'

export default function AuthErrorPage() {
  return (
    <PageTransition>
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <AlertCircle className="w-8 h-8 text-red-600" />
            </div>
            
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              Authentication Error
            </h1>
            
            <p className="text-gray-600 mb-8">
              Access denied. Only authorized administrators can access admin features. 
              Please contact the system administrator if you believe this is an error.
            </p>
            
            <div className="space-y-4">
              <Link
                href="/"
                className="inline-flex items-center px-6 py-3 bg-gray-900 text-white rounded-md font-semibold hover:bg-gray-800 transition-colors duration-200"
              >
                <ArrowLeft className="w-5 h-5 mr-2" />
                Back to Home
              </Link>
              
              <div className="text-sm text-gray-500">
                <p>If you are an authorized administrator:</p>
                <p>Please ensure you are using the correct Google account</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </PageTransition>
  )
}
