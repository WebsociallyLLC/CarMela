'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';

const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-[80vh] bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="max-w-3xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Text */}
          <h1 className="text-8xl font-bold text-white mb-4">
            4
            <motion.span
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="inline-block text-red-500"
            >
              0
            </motion.span>
            4
          </h1>

          {/* Car Icon */}
          <motion.div
            animate={{ x: [-100, 100] }}
            transition={{
              repeat: Infinity,
              duration: 3,
              repeatType: 'reverse',
            }}
            className="text-4xl mb-8"
          >
            🚗
          </motion.div>

          {/* Message */}
          <h2 className="text-3xl font-semibold text-white mb-4">
            Looks like we&apos;ve hit a dead end!
          </h2>
          <p className="text-gray-300 mb-8 text-lg">
            The page you&apos;re looking for seems to have taken a wrong turn.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => router.back()}
              className="px-6 py-3 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <span>↩</span> Go Back
            </button>
            <Link
              href="/"
              className="px-6 py-3 bg-white text-gray-900 rounded-full hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <span>🏠</span> Return Home
            </Link>
          </div>

          {/* Additional Help */}
          <div className="mt-12 text-gray-400">
            <p className="mb-2">Need assistance?</p>
            <Link
              href="/contact"
              className="text-red-400 hover:text-red-300 underline transition-colors duration-300"
            >
              Contact our support team
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
