'use client'

import { motion } from 'framer-motion'
import PageTransition from '../../../components/PageTransition'
import LoginForm from '../../../components/LoginForm'

export default function SignInPage() {
  return (
    <PageTransition>
      <section className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Admin Access
            </h1>
            <p className="text-gray-600">
              Sign in to manage website content
            </p>
          </motion.div>
          
          <LoginForm />
        </div>
      </section>
    </PageTransition>
  )
}
