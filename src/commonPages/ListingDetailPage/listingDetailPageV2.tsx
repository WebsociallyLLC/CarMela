'use client';
import { useParams } from 'next/navigation';
import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck as faCircleCheckRegular } from '@fortawesome/free-regular-svg-icons';
import CarCard from '@/components/sections/CarCard/V1';
import Link from 'next/link';
import Slider from 'react-slick';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { ListingInquiryEmailTemplate } from '@/utils/email';
import CarTrade from '@/components/sections/FinanceApplicationSection/FinanceApplicationSection1';
import { toast } from 'sonner';
import { CARS_DATA } from '@/utils/data';

const ListingDetailPageV2 = () => {
  const { slug } = useParams();

  console.log(slug);

  const car = CARS_DATA.find((item) => item.slug === slug);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isModalOpen]);

  useEffect(() => {
    if (!isModalOpen) return;

    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsModalOpen(false);
      }
    };

    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [isModalOpen]);

  const handleSelect = () => {
    console.log('Car selected!');
  };

  // const sanitizedSlug = Array.isArray(slug) ? slug[0] : slug;

  // const formattedSlug = sanitizedSlug?.toLowerCase().replace(/-/g, ' ').trim();

  // const car = CARS_DATA.find(
  //   (item) => item.name.toLowerCase() === formattedSlug,
  // );

  const sliderRef = useRef<Slider>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      if (sliderRef.current && (sliderRef.current as any).innerSlider) {
        (sliderRef.current as any).innerSlider.onWindowResized();
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  // Contact form state
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState<{ [k: string]: string }>({});
  const [formStatus, setFormStatus] = useState<
    'idle' | 'sending' | 'success' | 'error'
  >('idle');

  const formRef = useRef<HTMLDivElement>(null);

  function validateForm() {
    const errors: { [k: string]: string } = {};
    if (!form.name.trim()) errors.name = 'Name is required';
    if (!form.phone.trim()) errors.phone = 'Phone is required';
    if (!form.email.trim()) errors.email = 'Email is required';
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) errors.email = 'Invalid email';
    if (!form.message.trim()) errors.message = 'Message is required';
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  }

  async function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFormStatus('idle');
    if (!validateForm()) return;
    setFormStatus('sending');
    try {
      const carUrl = typeof window !== 'undefined' ? window.location.href : '';
      const carInfo = car
        ? {
            name: car.name,
            price: car.price,
            mileage: car.mileage,
            fuel: car.fuelType,
            transmission: car.transmission,
          }
        : undefined;
      const html = ListingInquiryEmailTemplate({
        name: form.name,
        email: form.email,
        phone: form.phone,
        message: form.message,
        listingName: car?.name || '',
        carUrl,
        carInfo,
      });
      const res = await fetch(
        'https://stag.api.carzoomo.com/socially/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: 'takeoffmotorcars@gmail.com',
            subject: `Listing Inquiry: ${car?.name || ''}`,
            html,
          }),
        },
      );
      if (!res.ok) throw new Error('Failed to send');
      setFormStatus('success');
      toast.success('Your message has been sent!');
      setForm({ name: '', phone: '', email: '', message: '' });
      setFormErrors({});
    } catch (err) {
      setFormStatus('error');
      toast.error('There was an error sending your message. Please try again.');
    }
  }

  if (!car) {
    return <p>Car not found.</p>;
  }

  const visibleImages = car.images.slice(0, 4);

  return (
    <>
      <div className="listing-detail-page px-4 md:py-40 max-w-[1440px] mx-auto py-40">
        <div className="md:flex justify-between">
          <div>
            <div className="breadcrumb text-sm text-gray-600 mb-4">
              <span>
                <Link href="/listings">Listings / </Link>
              </span>
              <span className="font-semibold">{car.name}</span>
            </div>

            <div className="car-info mb-6">
              <h1 className="text-4xl font-bold">{car.name}</h1>
            </div>
          </div>

          <div className=" flex md:items-center md:justify-center  justify-start">
            <div className=" flex flex-col md:items-end  ">
              <span className="text-3xl font-semibold">
                {!car.price ||
                car.price.trim() === '' ||
                car.price.trim() === '$—'
                  ? 'Your Call'
                  : car.price}
              </span>
              <button className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="19"
                  height="19"
                  viewBox="0 0 19 19"
                  fill="none"
                >
                  <g clip-path="url(#clip0_96_2113)">
                    <path
                      d="M8.71703 18.275C8.15703 18.275 7.69703 18.095 7.33703 17.735L2.05703 12.455C1.65703 12.055 1.45703 11.585 1.45703 11.045C1.45703 10.805 1.65703 10.035 2.05703 9.63803L9.13703 2.55803C9.89703 1.79802 10.817 1.41803 11.897 1.41803H16.397C16.957 1.41803 17.427 1.61803 17.807 2.01803C18.187 2.41803 18.377 2.87803 18.377 3.39803V7.89803C18.377 8.97803 17.997 9.87802 17.237 10.595L10.097 17.735C9.73703 18.095 9.27703 18.275 8.71703 18.275ZM11.897 2.73803C11.177 2.73803 10.577 2.99803 10.097 3.51803L3.01703 10.595C2.85703 10.715 2.77703 10.865 2.77703 11.045C2.77703 11.225 2.85703 11.395 3.01703 11.555L8.23703 16.775C8.35703 16.935 8.51703 17.015 8.71703 17.015C8.91703 17.015 9.07703 16.935 9.19703 16.775L16.277 9.69803C16.797 9.21802 17.057 8.61803 17.057 7.89803V3.39803C17.057 3.23803 16.987 3.08803 16.847 2.94803C16.707 2.80803 16.557 2.73803 16.397 2.73803H11.897ZM13.577 8.13803C13.057 8.13803 12.597 7.93803 12.197 7.53803C11.797 7.13803 11.597 6.66803 11.597 6.12803C11.597 5.58803 11.797 5.12803 12.197 4.74803C12.597 4.36803 13.067 4.17803 13.607 4.17803C14.147 4.17803 14.607 4.36803 14.987 4.74803C15.367 5.12803 15.557 5.58803 15.557 6.12803C15.557 6.66803 15.367 7.13803 14.987 7.53803C14.607 7.93803 14.137 8.13803 13.577 8.13803ZM13.577 5.49803C13.417 5.49803 13.267 5.55803 13.127 5.67803C12.987 5.79803 12.917 5.94803 12.917 6.12803C12.917 6.30803 12.987 6.46802 13.127 6.60803C13.267 6.74803 13.427 6.81803 13.607 6.81803C13.787 6.81803 13.937 6.74803 14.057 6.60803C14.177 6.46802 14.237 6.30803 14.237 6.12803C14.237 5.94803 14.177 5.79803 14.057 5.67803C13.937 5.55803 13.777 5.49803 13.577 5.49803Z"
                      fill="#080B20"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_96_2113">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="matrix(1 0 0 -1 0.916992 18.875)"
                      />
                    </clipPath>
                  </defs>
                </svg>
                Make An Offer Price
              </button>
            </div>
          </div>
        </div>

        {/* Car Image */}
        <div className="flex flex-col md:flex-row gap-2 my-5">
          <div className="w-full md:w-[57%] rounded-[8px] hidden md:block">
            <div
              className="overflow-hidden rounded-[8px] cursor-pointer"
              onClick={() => {
                setIsModalOpen(true);
                setModalIndex(0);
              }}
            >
              <Image
                src={car.images[0]}
                className="object-cover w-full h-[534.375px] transition-transform duration-300 ease-in-out hover:scale-110"
                alt={'Car Image'}
                width={300}
                height={200}
              />
            </div>
          </div>

          <div className="">
            {isMobile ? (
              <div className="relative md:hidden block h-[350px]">
                {car.images && car.images.length > 0 ? (
                  <>
                    <Slider
                      ref={sliderRef}
                      {...sliderSettings}
                      className="rounded-2xl overflow-hidden h-[350px]"
                    >
                      {car.images.map((img: string, idx: number) => (
                        <div
                          key={idx}
                          className="w-full h-[350px] flex items-center justify-center bg-gray-100"
                        >
                          <Image
                            src={img}
                            alt={`Car Image ${idx + 1}`}
                            width={900}
                            height={600}
                            className="object-cover w-full h-full rounded-2xl"
                          />
                        </div>
                      ))}
                    </Slider>
                    {/* Custom Slider Arrows (Mobile Only) */}
                    <div className="flex md:hidden justify-center gap-4 mt-4 absolute left-1/2 -translate-x-1/2 bottom-2 z-10">
                      <button
                        className="bg-white rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-gray-100 transition-colors"
                        onClick={() => sliderRef.current?.slickPrev()}
                        type="button"
                      >
                        <ChevronLeft size={24} className="text-gray-700" />
                      </button>
                      <button
                        className="bg-[#FF0000] rounded-full w-10 h-10 flex justify-center items-center shadow-md hover:bg-red-700 transition-colors"
                        onClick={() => sliderRef.current?.slickNext()}
                        type="button"
                      >
                        <ChevronRight size={24} className="text-white" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="flex items-center justify-center h-full text-gray-400">
                    No images available
                  </div>
                )}
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-2">
                {visibleImages.map((img: string, index: number) => (
                  <div
                    key={`thumbnail-${index}`}
                    className="w-full h-[263.188px] overflow-hidden rounded-[8px] relative cursor-pointer"
                    onClick={() => {
                      setIsModalOpen(true);
                      setModalIndex(index);
                    }}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${index + 1}`}
                      width={300}
                      height={200}
                      className="rounded-[8px] object-cover w-full h-[263.188px] transition-transform duration-300 ease-in-out hover:scale-110"
                    />
                    {index === 3 && car.images.length > 4 && (
                      <button
                        className="absolute inset-0 bg-black/60 flex items-center justify-center text-white text-lg font-semibold rounded-[8px] transition hover:bg-black/80"
                        onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                          e.stopPropagation();
                          setIsModalOpen(true);
                          setModalIndex(0);
                        }}
                      >
                        View All Images
                      </button>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>

          <div className="md:hidden block">
            <div className="flex gap-4 mt-6 mb-8 px-2 flex-col">
              <button
                className="flex-1 py-4 rounded-lg bg-[#FF0000] text-white font-bold text-md shadow hover:bg-red-700 transition-colors duration-200"
                onClick={() =>
                  formRef.current?.scrollIntoView({ behavior: 'smooth' })
                }
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
        {isModalOpen && (
          <div
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80"
            onClick={() => setIsModalOpen(false)}
          >
            <button
              className="absolute top-6 right-6 text-white text-3xl font-bold z-20"
              onClick={() => setIsModalOpen(false)}
              aria-label="Close"
            >
              &times;
            </button>
            <div
              className="relative w-full max-w-3xl flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={car.images[modalIndex % car.images.length]}
                alt={`Gallery Image ${modalIndex + 1}`}
                width={900}
                height={600}
                className="rounded-xl object-contain max-h-[80vh] w-auto mx-auto"
              />
              <div className="flex justify-between w-full mt-4">
                <button
                  className="text-white bg-black/40 hover:bg-black/70 px-4 py-2 rounded"
                  onClick={() =>
                    setModalIndex(
                      (modalIndex - 1 + car.images.length) % car.images.length,
                    )
                  }
                  aria-label="Previous"
                >
                  &#8592; Prev
                </button>
                <span className="text-white text-sm">
                  {modalIndex + 1} / {car.images.length}
                </span>
                <button
                  className="text-white bg-black/40 hover:bg-black/70 px-4 py-2 rounded"
                  onClick={() =>
                    setModalIndex((modalIndex + 1) % car.images.length)
                  }
                  aria-label="Next"
                >
                  Next &#8594;
                </button>
              </div>
            </div>
          </div>
        )}
        <div className="flex">
          <div className="md:w-[70%]">
            {/* Car overview section  */}
            <div className="car-overview mb-8 mt-10">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                {car.attributes.map((attribute: any, index: any) => (
                  <div
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between bg-white p-4 rounded-lg shadow-sm space-y-2 sm:space-y-0"
                  >
                    <div className="flex items-center gap-3">
                      <FontAwesomeIcon
                        icon={attribute.icon}
                        className="h-5 w-5 text-gray-600 flex-shrink-0"
                      />
                      <strong className="text-gray-700 min-w-[120px]">
                        {attribute.label}:
                      </strong>
                    </div>
                    <span className="text-blue-800 font-medium break-words">
                      {attribute.value}
                    </span>
                  </div>
                ))}
              </div>

              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 border-b-2 border-blue-800 pb-2 inline-block mt-10">
                Description
              </h2>
              <p className="text-gray-600 leading-relaxed">{car.description}</p>
            </div>

            {/* Feature section  */}
            <div className="features bg-white rounded-lg my-5 p-6">
              <h2 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-blue-800 pb-2 inline-block">
                Features
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {/* Interior */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Interior
                  </h3>
                  <ul className="list-none space-y-3">
                    {car.features.interior.map((feature: any, index: any) => (
                      <li key={index} className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faCircleCheckRegular}
                          className="h-4 w-4 text-blue-800 flex-shrink-0"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Safety */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Safety
                  </h3>
                  <ul className="list-none space-y-3">
                    {car.features.safety.map((feature: any, index: any) => (
                      <li key={index} className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faCircleCheckRegular}
                          className="h-4 w-4 text-blue-800 flex-shrink-0"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Exterior */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Exterior
                  </h3>
                  <ul className="list-none space-y-3">
                    {car.features.exterior.map((feature: any, index: any) => (
                      <li key={index} className="flex items-center gap-2">
                        <FontAwesomeIcon
                          icon={faCircleCheckRegular}
                          className="h-4 w-4 text-blue-800 flex-shrink-0"
                        />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Comfort & Convenience */}
                <div>
                  <h3 className="text-xl font-semibold mb-4 text-gray-800">
                    Comfort & Convenience
                  </h3>
                  <ul className="list-none space-y-3">
                    {car.features.comfortAndConvenience.map(
                      (feature: any, index: any) => (
                        <li key={index} className="flex items-center gap-2">
                          <FontAwesomeIcon
                            icon={faCircleCheckRegular}
                            className="h-4 w-4 text-blue-800 flex-shrink-0"
                          />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
            {/* Diamention Capicity  */}
          </div>
          {/* Right: Sidebar (Desktop) */}
          <div className="hidden md:block md:w-1/3 w-full sticky top-32 self-start">
            {/* Contact Form in Sidebar */}
            <div
              ref={formRef}
              className="bg-white rounded-2xl shadow-lg p-8 mb-8 border border-gray-100"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#FF0000]">
                Get in Touch
              </h2>
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, name: e.target.value }))
                    }
                    className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.name ? 'border-red-400' : 'border-gray-200'} focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
                    placeholder="Your Name"
                  />
                  {formErrors.name && (
                    <span className="text-xs text-red-500">
                      {formErrors.name}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, phone: e.target.value }))
                    }
                    className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.phone ? 'border-red-400' : 'border-gray-200'} focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
                    placeholder="Your Phone Number"
                  />
                  {formErrors.phone && (
                    <span className="text-xs text-red-500">
                      {formErrors.phone}
                    </span>
                  )}
                </div>
                <div>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, email: e.target.value }))
                    }
                    className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.email ? 'border-red-400' : 'border-gray-200'} focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
                    placeholder="Your Email Address"
                  />
                  {formErrors.email && (
                    <span className="text-xs text-red-500">
                      {formErrors.email}
                    </span>
                  )}
                </div>
                <div>
                  <textarea
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({ ...f, message: e.target.value }))
                    }
                    className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.message ? 'border-red-400' : 'border-gray-200'} focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
                    placeholder="Your Message"
                    rows={4}
                  />
                  {formErrors.message && (
                    <span className="text-xs text-red-500">
                      {formErrors.message}
                    </span>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={formStatus === 'sending'}
                  className="w-full py-3 rounded-lg bg-[#FF0000] text-white font-bold text-lg shadow hover:bg-red-700 transition-colors duration-200 disabled:opacity-60"
                >
                  {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Mobile: Two buttons below images, form at bottom */}

        {/* Mobile: Form at bottom */}
        <div
          ref={formRef}
          className="md:hidden block max-w-xl mx-auto bg-white rounded-2xl shadow-lg p-8 mt-10 mb-16 border border-gray-100"
        >
          <h2 className="text-2xl font-bold mb-6 text-[#FF0000]">
            Get in Touch
          </h2>
          <form onSubmit={handleFormSubmit} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) =>
                  setForm((f) => ({ ...f, name: e.target.value }))
                }
                className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.name ? 'border-red-400' : 'border-gray-200'} focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
                placeholder="Your Name"
              />
              {formErrors.name && (
                <span className="text-xs text-red-500">{formErrors.name}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                value={form.phone}
                onChange={(e) =>
                  setForm((f) => ({ ...f, phone: e.target.value }))
                }
                className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.phone ? 'border-red-400' : 'border-gray-200'} focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
                placeholder="Your Phone Number"
              />
              {formErrors.phone && (
                <span className="text-xs text-red-500">{formErrors.phone}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) =>
                  setForm((f) => ({ ...f, email: e.target.value }))
                }
                className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.email ? 'border-red-400' : 'border-gray-200'} focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
                placeholder="Your Email Address"
              />
              {formErrors.email && (
                <span className="text-xs text-red-500">{formErrors.email}</span>
              )}
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) =>
                  setForm((f) => ({ ...f, message: e.target.value }))
                }
                className={`w-full px-4 py-3 rounded-lg border-2 ${formErrors.message ? 'border-red-400' : 'border-gray-200'} focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
                placeholder="Your Message"
                rows={4}
              />
              {formErrors.message && (
                <span className="text-xs text-red-500">
                  {formErrors.message}
                </span>
              )}
            </div>
            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full py-3 rounded-lg bg-[#FF0000] text-white font-bold text-lg shadow hover:bg-red-700 transition-colors duration-200 disabled:opacity-60"
            >
              {formStatus === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      <CarTrade />

      <div className="bg-[#EFEFEF] pb-4 px-6 py-5 ">
        <div className="  max-w-[1440px] mx-auto">
          <h2 className="text-3xl mb-5">More Options for you</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CARS_DATA.slice(0, 4).map((car: any) => (
              <CarCard
                key={car.id}
                images={car.images}
                mileage={car.mileage}
                fuel={car.fuel}
                transmission={car.transmission}
                name={car.name}
                price={car.price}
                onSelect={handleSelect}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingDetailPageV2;
