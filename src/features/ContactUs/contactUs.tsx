'use client';
import React from 'react';
import Link from 'next/link';
import { contactData } from './constant';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from 'react-icons/fa';
import { CiLocationOn } from 'react-icons/ci';
import { HiOutlineMail } from 'react-icons/hi';
import { MdOutlinePhoneInTalk } from 'react-icons/md';
import ListHeroSection from '../ListHeroSection/listHeroSection';
const contactDetails = [
  {
    icon: <CiLocationOn size={20} className="text-[#fff] mr-3" />,
    title: 'Address',
    text: contactData.address,
  },
  {
    icon: <HiOutlineMail size={20} className="text-[#fff] mr-3" />,
    title: 'Email',
    text: contactData.email,
  },
  {
    icon: <MdOutlinePhoneInTalk size={20} className="text-[#fff] mr-3" />,
    title: 'Phone',
    text: contactData.phone,
  },
];
const socialIcons = [
  { icon: <FaFacebookF size={24} />, label: 'Facebook' },
  { icon: <FaTwitter size={24} />, label: 'Twitter' },
  { icon: <FaInstagram size={24} />, label: 'Instagram' },
  { icon: <FaLinkedinIn size={24} />, label: 'LinkedIn' },
];
const ContactUs = () => {
  return (
    <>
      <div className="relative">
        <ListHeroSection
          backgroundImage="/assets/contact-us-bg.svg"
          image="/assets/icons.svg"
          className="bg-cover bg-center h-[400px]"
          opacity="opacity-0"
        />
        <div className="absolute top-0 left-0 w-full h-full flex items-center z-10">
          <div className="w-full flex justify-center">
            <div className="max-w-[1440px] -mt-24 md:-mt-0 w-full px-4 sm:px-8 md:px-12 lg:px-20 xl:px-24">
              <div className="text-sm text-gray-200 mb-2">
                <Link href="/" className="text-[#fff] hover:underline">
                  Home
                </Link>
                <span className="text-[#fff]"> / Contact Us</span>
              </div>
              <h1 className="text-3xl sm:text-4xl font-bold text-[#fff]">
                Contact Us
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#EFEFEF] relative z-30 ">
        <div className="bg-[#EFEFEF] pt-10 px-4 sm:px-6 lg:px-2 max-w-screen-xl mx-auto">
          <div className="w-full py-10 md:py-10 bg-[#EFEFEF] rounded-[2rem] md:px-10 -mt-44">
            <div className="w-full pt-2">
              <div className="flex flex-col md:flex-row gap-10 w-full items-start">
                <div className="md:w-[65%] w-full">
                  <h2 className="text-[18px] md:px-0 px-4 md:text-[26px] font-medium text-[#050B20] mb-2">
                    Get In Touch
                  </h2>
                  <p className="text-sm md:px-0 px-4 text-gray-600 mb-8 max-w-2xl">
                    Etiam sit amet ex pharetra, venenatis ante vehicula, gravida
                    sapien...
                  </p>
                  <form className="space-y-5">
                    {[1].map((row, rowIndex) => (
                      <div
                        key={rowIndex}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-5"
                      >
                        {['Name', 'Email'].map((label, i) => (
                          <div key={i} className="relative">
                            <label className="absolute text-sm text-gray-500 left-4 top-2 pointer-events-none">
                              {label}
                            </label>
                            <input
                              type={label === 'Email' ? 'email' : 'text'}
                              className="w-full border rounded-lg px-4 pt-8 pb-2"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                    <div className="flex flex-col">
                      <textarea
                        placeholder="Message"
                        rows={4}
                        className="input border rounded-lg px-4 py-4 mb-4"
                      />
                      <button
                        type="submit"
                        className="bg-[#FF0000] text-white text-[14px] w-[180px] px-2 py-4 rounded-[14px] mt-4 ml-0"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
                <div className="md:w-[35%] w-full bg-[#000000] rounded-2xl p-5 border space-y-6 shadow-sm">
                  <div className="space-y-2">
                    <h3 className="text-xl font-medium text-[#fff]">
                      Contact details
                    </h3>
                    <p className="text-sm text-[#fff] leading-relaxed">
                      Etiam pharetra egestas interdum blandit viverra...
                    </p>
                  </div>
                  <div className="text-sm text-[#fff] space-y-4">
                    {contactDetails.map((item, index) => (
                      <div key={index} className="mb-4 flex items-start">
                        <span className="mt-1 text-[#fff]">{item.icon}</span>
                        <div>
                          <span className="font-medium block text-[#fff]">
                            {item.title}
                          </span>
                          <span className="leading-snug">{item.text}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div>
                    <p className="text-sm text-[#fff] mb-2">Follow us</p>
                    <div className="flex gap-8 text-[#fff] items-center mt-8">
                      {socialIcons.map((item, index) => (
                        <span
                          key={index}
                          title={item.label}
                          className="cursor-pointer"
                        >
                          {item.icon}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full bg-[#EFEFEF] h-[300px] sm:h-[400px] rounded-lg overflow-hidden shadow-md">
            <iframe
              title="Dummy Map"
              src="https://www.openstreetmap.org/export/embed.html?bbox=-0.1357%2C51.4976%2C-0.127%2C51.5033&layer=mapnik&marker=51.5009%2C-0.1313"
              className="w-full h-full border-0"
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
        <div
          className="w-full h-[450px] bg-cover bg-center"
          style={{ backgroundImage: "url('/assets/contactus-bg.svg')" }}
        ></div>
      </div>
    </>
  );
};
export default ContactUs;
