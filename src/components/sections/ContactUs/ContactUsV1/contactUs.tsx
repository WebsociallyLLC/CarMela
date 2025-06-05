'use client';
import React, { useState } from 'react';
import { Figtree } from 'next/font/google';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { toast } from 'sonner';
import { motion } from 'framer-motion';

const figtree = Figtree({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-figtree',
});

// Form validation schema
const contactFormSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  phone: yup.string().required('Phone number is required'),
  email: yup
    .string()
    .email('Invalid email format')
    .required('Email is required'),
  message: yup.string().required('Message is required'),
});

/**
 * Email template for contact form submissions
 * @param {any} values - Form values
 * @returns {string} - HTML email template
 */
function EmailTemplate(values: any): string {
  const { firstName, lastName, email, phone, message } = values;
  const name = `${firstName} ${lastName}`;

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
              TakeOff Motors
            </div>
            <h1>You have a new message from the Contact Us form:</h1>
            <h2>Name: <strong>${name}</strong></h2>
            <h2>Email: <strong>${email}</strong></h2>
            <h2>Phone Number: <strong>${phone}</strong></h2>
            <h2>Message: <strong>${message}</strong></h2>
            <div class="email-footer">
              TakeOff Motors
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6 },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3,
    },
  },
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      stiffness: 100,
      damping: 12,
    },
  },
};

const ContactUs: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(contactFormSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      phone: '',
      email: '',
      message: '',
    },
  });

  const onSubmit = async (formData: any) => {
    setIsSubmitting(true);
    const email = 'takeoffmotorcars@gmail.com'; // Replace with your recipient email
    const subject = `New Contact from ${formData.firstName} ${formData.lastName}`;
    const html = EmailTemplate(formData);

    try {
      const response = await fetch(
        'https://stag.api.carzoomo.com/socially/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, subject, html }),
        },
      );

      if (!response.ok) throw new Error('Failed to send message');

      toast.success('Message sent successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to send message. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeIn}
        className={`${figtree.className} relative bg-cover bg-center bg-no-repeat py-20 px-6`}
        style={{ backgroundImage: "url('/assets/contactUs-image.svg')" }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-white"
          variants={staggerContainer}
        >
          <motion.h2
            variants={slideUp}
            className="text-[40px] md:text-4xl font-bold mb-2"
          >
            Contact Us
          </motion.h2>
          <motion.p
            variants={slideUp}
            className="text-[15px] font-[400] md:text-base mb-6 max-w-5xl"
          >
            We are here to help you with your car needs. Please fill out the
            form below and we will get back to you as soon as possible.
          </motion.p>
          <motion.form
            variants={staggerContainer}
            onSubmit={handleSubmit(onSubmit)}
            className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6 text-[#050B20]"
          >
            <motion.div variants={slideUp} className="relative w-full">
              <input
                type="text"
                id="firstName"
                {...register('firstName')}
                className="peer border rounded-[10px] border-gray-300 px-4 pt-6 pb-4 w-full placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#818181]"
                placeholder="First Name"
                disabled={isSubmitting}
              />
              <label
                htmlFor="firstName"
                className="absolute left-4 top-2 text-sm text-[#818181] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#818181]"
              >
                First Name
              </label>
              {errors.firstName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.firstName.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={slideUp} className="relative w-full">
              <input
                type="text"
                id="lastName"
                {...register('lastName')}
                className="peer border rounded-[10px] border-gray-300 px-4 pt-6 pb-4 w-full placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#818181]"
                placeholder="Last Name"
                disabled={isSubmitting}
              />
              <label
                htmlFor="lastName"
                className="absolute left-4 top-2 text-sm text-[#818181] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#818181]"
              >
                Last Name
              </label>
              {errors.lastName && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.lastName.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={slideUp} className="relative w-full">
              <input
                type="text"
                id="phone"
                {...register('phone')}
                className="peer border rounded-[10px] border-gray-300 px-4 pt-6 pb-4 w-full placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#818181]"
                placeholder="Phone"
                disabled={isSubmitting}
              />
              <label
                htmlFor="phone"
                className="absolute left-4 top-2 text-sm text-[#818181] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#818181]"
              >
                Phone
              </label>
              {errors.phone && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.phone.message}
                </p>
              )}
            </motion.div>

            <motion.div variants={slideUp} className="relative w-full">
              <input
                type="email"
                id="email"
                {...register('email')}
                className="peer border rounded-[10px] border-gray-300 px-4 pt-6 pb-4 w-full placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#818181]"
                placeholder="Email"
                disabled={isSubmitting}
              />
              <label
                htmlFor="email"
                className="absolute left-4 top-2 text-sm text-[#818181] transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#818181]"
              >
                Email
              </label>
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </motion.div>

            <motion.div
              variants={slideUp}
              className="relative md:col-span-2 w-full"
            >
              <textarea
                id="message"
                {...register('message')}
                className="peer border rounded-[10px] border-gray-300 px-4 pt-6 pb-2 w-full h-32 resize-none placeholder-transparent focus:outline-none focus:ring-2 focus:ring-[#818181]"
                placeholder="Message"
                disabled={isSubmitting}
              ></textarea>
              <label
                htmlFor="message"
                className="absolute left-4 top-2 text-sm text-gray-500 transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:top-2 peer-focus:text-sm peer-focus:text-[#818181]"
              >
                Message
              </label>
              {errors.message && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.message.message}
                </p>
              )}
            </motion.div>

            <motion.button
              variants={slideUp}
              whileHover={{ scale: isSubmitting ? 1 : 1.03 }}
              whileTap={{ scale: isSubmitting ? 1 : 0.97 }}
              type="submit"
              disabled={isSubmitting}
              className={`bg-[#FF0000] hover:bg-red-700 text-white text-[15px] font-[500] py-4 px-10 rounded-[16px] w-fit transition-colors duration-200 flex items-center gap-2 ${
                isSubmitting ? 'opacity-80 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
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
                  Sending...
                </>
              ) : (
                'Send Message'
              )}
            </motion.button>
          </motion.form>
        </motion.div>
      </motion.section>
    </>
  );
};

export default ContactUs;
