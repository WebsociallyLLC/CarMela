'use client';
import React, { useState } from 'react';
import { contactData } from './constant';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { toast } from 'sonner';
import PageHeader from '@/components/sections/PageHeader/PageHeaderV1/pageHeader';
import { motion } from 'framer-motion';
import MaskedInput from 'react-text-mask';

// Phone mask for (XXX) XXX-XXXX format
const USPhoneMask = [
  '(',
  /[1-9]/,
  /\d/,
  /\d/,
  ')',
  ' ',
  /\d/,
  /\d/,
  /\d/,
  '-',
  /\d/,
  /\d/,
  /\d/,
  /\d/,
];

const contactDetails = [
  {
    icon: <FaMapMarkerAlt size={18} className="text-[#FF0000]" />,
    title: 'Address',
    text: contactData.address,
  },
  {
    icon: <HiOutlineMail size={18} className="text-[#FF0000]" />,
    title: 'Email',
    text: contactData.email,
  },
  {
    icon: <FaPhoneAlt size={16} className="text-[#FF0000]" />,
    title: 'Phone',
    text: contactData.phone,
  },
];

const socialIcons = [
  { icon: <FaFacebookF size={20} />, label: 'Facebook', color: '#1877F2' },
  { icon: <FaTwitter size={20} />, label: 'Twitter', color: '#1DA1F2' },
  { icon: <FaInstagram size={20} />, label: 'Instagram', color: '#E4405F' },
];

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 10,
      duration: 0.5,
    },
  },
};

const slideInFromLeft = {
  hidden: { x: -50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

const slideInFromRight = {
  hidden: { x: 50, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 15,
      duration: 0.5,
    },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const staggerItems = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4 },
  },
};

// Email template for the contact form
function EmailTemplate(values: any): string {
  const { name, email, phone, message } = values;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Message from Contact Us</title>
        <style>
          body {
            font-family: 'Helvetica Neue', 'Helvetica', Arial, 'Lucida Grande', sans-serif;
            background-color: #fafafa;
            margin: 0;
            padding: 0;
          }
          .email-container {
            width: 95%;
            height: 100%;
            padding: 20px;
            background-color: #fafafa;
          }
          .email-content {
            border: 1px solid #eeeeee;
            background-color: #ffffff;
            border-radius: 5px;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
          }
          .email-header img {
            max-width: 100px;
          }
          .email-header,
          .email-footer {
            text-align: center;
            margin-bottom: 20px;
          }
          .email-footer {
            margin-top: 30px;
            padding-top: 20px;
            font-weight: bold;
            color: #666666;
            border-top: 1px solid #dddddd;
          }
          .email-content h1,
          .email-content h2 {
            font-weight: 500;
            color: #111111;
          }
          .email-content h1 {
            font-size: 24px;
            margin: 20px 0 30px 0;
          }
          .email-content h2 {
            font-size: 16px;
            margin: 20px 0;
            font-weight: 200;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-content">
            <div class="email-header">
              Carmela
            </div>
            <h1>You have a new message from the Contact Us form:</h1>
            <h2>Name: <strong>${name}</strong></h2>
            <h2>Email: <strong>${email}</strong></h2>
            <h2>Phone: <strong>${phone || 'Not provided'}</strong></h2>
            <h2>Message: <strong>${message}</strong></h2>
            <div class="email-footer">
             Carmela
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

const ContactUs = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors = { ...errors };

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
      valid = false;
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
      valid = false;
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
      valid = false;
    }

    // Phone validation (optional field but if provided, must be valid)
    if (formData.phone) {
      const phoneDigits = formData.phone.replace(/\D/g, '');
      if (phoneDigits.length !== 10) {
        newErrors.phone = 'Phone number must be 10 digits';
        valid = false;
      } else if (!/^\(\d{3}\) \d{3}-\d{4}$/.test(formData.phone)) {
        newErrors.phone = 'Phone number must be in format (XXX) XXX-XXXX';
        valid = false;
      }
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      const email = 'carmela@gmail.com'; // Replace with your recipient email
      const subject = `New Contact from ${formData.name}`;
      const html = EmailTemplate(formData);

      const response = await fetch(
        'https://api.carbacked.com/socially/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, subject, html }),
        },
      );

      if (!response.ok) throw new Error('Failed to send message');

      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div initial="hidden" animate="visible" variants={fadeIn}>
      <div className="relative">
        <PageHeader
          title="Contact Us"
          description="We're here to help with any questions about our vehicles or services."
          showBreadcrumbs={true}
          currentPage="Contact Us"
          backgroundImage="/assets/contact-us-bg.svg"
        />
      </div>

      {/* Main Contact Section with Shadow and Elegant Layout */}
      <div className="bg-gradient-to-b from-white to-gray-100 relative z-30 py-8 md:py-16">
        <motion.div
          className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 -mt-16 md:-mt-32"
          variants={fadeIn}
        >
          {/* Contact Cards Section */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-6 mb-8 md:mb-16"
            variants={staggerContainer}
          >
            {contactDetails.map((item, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-lg p-4 md:p-8 flex items-start transition-all duration-300 hover:shadow-xl"
                variants={staggerItems}
                whileHover={{ y: -5 }}
              >
                <div className="bg-gray-100 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center mr-4 shadow-sm">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-md md:text-lg font-semibold text-gray-900 mb-1 md:mb-2">
                    {item.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Contact Container */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl overflow-hidden"
            variants={slideUp}
          >
            <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
              {/* Form Section - 3/5 width on desktop */}
              <motion.div
                className="col-span-1 md:col-span-3 p-4 sm:p-6 md:p-8 lg:p-12"
                variants={slideInFromLeft}
              >
                <motion.h2
                  className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2"
                  variants={fadeIn}
                >
                  Get In Touch
                </motion.h2>
                <motion.p
                  className="text-sm md:text-base text-gray-600 mb-6 md:mb-8"
                  variants={fadeIn}
                >
                  Have questions about our vehicles or services? Fill out the
                  form below and our team will get back to you promptly.
                </motion.p>

                <motion.form
                  onSubmit={handleSubmit}
                  className="space-y-4 md:space-y-6"
                  variants={staggerContainer}
                >
                  <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6"
                    variants={staggerContainer}
                  >
                    <motion.div className="relative" variants={staggerItems}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Your Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border ${
                          errors.name ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && (
                        <motion.p
                          className="mt-1 text-xs md:text-sm text-red-500"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {errors.name}
                        </motion.p>
                      )}
                    </motion.div>

                    <motion.div className="relative" variants={staggerItems}>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        disabled={isSubmitting}
                        className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border ${
                          errors.email ? 'border-red-500' : 'border-gray-300'
                        } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 ${
                          isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && (
                        <motion.p
                          className="mt-1 text-xs md:text-sm text-red-500"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </motion.div>
                  </motion.div>

                  <motion.div className="relative" variants={staggerItems}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number (Optional)
                    </label>
                    <MaskedInput
                      mask={USPhoneMask}
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      guide={true}
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      placeholder="(555) 555-5555"
                    />
                    {errors.phone && (
                      <motion.p
                        className="mt-1 text-xs md:text-sm text-red-500"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {errors.phone}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div className="relative" variants={staggerItems}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      disabled={isSubmitting}
                      className={`w-full px-3 py-2 md:px-4 md:py-3 rounded-lg border ${
                        errors.message ? 'border-red-500' : 'border-gray-300'
                      } focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-200 bg-gray-50 ${
                        isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                      rows={4}
                      placeholder="How can we help you today?"
                    ></textarea>
                    {errors.message && (
                      <motion.p
                        className="mt-1 text-xs md:text-sm text-red-500"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {errors.message}
                      </motion.p>
                    )}
                  </motion.div>

                  <motion.div variants={staggerItems}>
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className={`bg-[#FF0000] text-white font-medium px-4 py-2 md:px-6 md:py-3 rounded-lg shadow-md transition-all duration-300 w-full md:w-auto ${
                        isSubmitting
                          ? 'opacity-70 cursor-not-allowed'
                          : 'hover:bg-red-700 hover:shadow-lg'
                      }`}
                      whileHover={isSubmitting ? {} : { scale: 1.03 }}
                      whileTap={isSubmitting ? {} : { scale: 0.97 }}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-2 h-4 w-4 md:h-5 md:w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Sending Message...
                        </div>
                      ) : (
                        'Send Message'
                      )}
                    </motion.button>
                  </motion.div>
                </motion.form>
              </motion.div>

              {/* Right Side - Dark Section - 2/5 width */}
              <motion.div
                className="col-span-1 md:col-span-2 bg-gray-900 p-4 sm:p-6 md:p-8 lg:p-12 flex flex-col justify-between"
                variants={slideInFromRight}
              >
                <div>
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6"
                    variants={fadeIn}
                  >
                    Contact Information
                  </motion.h3>

                  <motion.div
                    className="space-y-4 md:space-y-6 mb-6 md:mb-10"
                    variants={staggerContainer}
                  >
                    {contactDetails.map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start"
                        variants={staggerItems}
                        whileHover={{ x: 5 }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 10,
                        }}
                      >
                        <div className="mt-1 mr-3 md:mr-4">
                          <div className="w-6 h-6 md:w-8 md:h-8 rounded-full bg-gray-800 flex items-center justify-center">
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="text-white text-xs md:text-sm font-medium">
                            {item.title}
                          </h4>
                          <p className="text-gray-400 text-sm md:text-base">
                            {item.text}
                          </p>
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>

                <div>
                  <motion.p
                    className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4"
                    variants={fadeIn}
                  >
                    Connect with us on social media
                  </motion.p>
                  <motion.div
                    className="flex items-center space-x-3 md:space-x-4"
                    variants={staggerContainer}
                  >
                    {socialIcons.map((item, index) => (
                      <motion.a
                        key={index}
                        href="#"
                        className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:text-white transition-colors duration-300"
                        variants={staggerItems}
                        whileHover={{
                          scale: 1.2,
                          backgroundColor: item.color,
                          color: '#ffffff',
                        }}
                        whileTap={{ scale: 0.9 }}
                      >
                        {item.icon}
                      </motion.a>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Map and Business Hours Section - Side by Side on Desktop */}
        <motion.div
          className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 mt-8 md:mt-16 mb-6 md:mb-10"
          variants={fadeIn}
          transition={{ delay: 0.5 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {/* Map Section */}
            <motion.div
              variants={slideInFromLeft}
              className="bg-white p-2 md:p-4 rounded-2xl shadow-lg"
            >
              <div className="rounded-xl overflow-hidden h-[250px] md:h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d89375.21425769596!2d-93.68824458602039!3d45.5709323795351!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0x52b39dc02e7381cd%3A0x59cf30ddff0ebb4!2s9626%2018th%20St%20STE%20130%2C%20Princeton%2C%20MN%2055371%2C%20United%20States!3m2!1d45.570961999999994!2d-93.60584399999999!5e0!3m2!1sen!2s!4v1760553778723!5m2!1sen!2s"
                  width="600"
                  height="450"
                  style={{ border: '0' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>

            {/* Business Hours Section */}
            <motion.div
              variants={slideInFromRight}
              className="bg-white rounded-2xl shadow-lg overflow-hidden h-full"
            >
              <div className="grid grid-cols-1">
                <div className="p-4 sm:p-6 md:p-8 lg:p-10 flex flex-col h-full">
                  <motion.h3
                    className="text-xl md:text-2xl font-bold text-gray-900 mb-2 md:mb-4"
                    variants={fadeIn}
                  >
                    Business Hours
                  </motion.h3>
                  <motion.p
                    className="text-sm md:text-base text-gray-600 mb-4 md:mb-6"
                    variants={fadeIn}
                  >
                    Visit our showroom during these hours to explore our vehicle
                    collection in person.
                  </motion.p>
                  <div className="space-y-2 md:space-y-3 mb-auto">
                    {[
                      { day: 'Monday - Friday', hours: '9:00 AM - 7:00 PM' },
                      { day: 'Saturday', hours: '10:00 AM - 6:00 PM' },
                      { day: 'Sunday', hours: 'Closed' },
                    ].map((item, index) => (
                      <motion.div
                        key={index}
                        className="flex justify-between py-1 md:py-2 border-b border-gray-100"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 + index * 0.1 }}
                      >
                        <span className="font-medium text-sm md:text-base">
                          {item.day}
                        </span>
                        <span
                          className={`text-sm md:text-base ${item.hours === 'Closed' ? 'text-red-500' : 'text-gray-600'}`}
                        >
                          {item.hours}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ContactUs;
