'use client';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { preQualifiedSchema, PreQualifiedFormType } from './schema';
import { InputFieldProps, OptionType, SelectFieldProps } from './types';
import ContactHighlights from './contactHighlights';
import { MONTHS_OPTIONS, YEARS_OPTIONS } from './constants';
import { toast } from 'sonner';
import { PreQualifiedEmailTemplate } from '@/utils/email';

const InputField: React.FC<InputFieldProps> = ({
  type = 'text',
  placeholder,
  error,
  register,
  name,
}) => (
  <div className="w-full relative">
    <input
      {...register(name)}
      type={type === 'date' ? 'text' : type}
      placeholder={placeholder}
      onFocus={(e) => {
        if (type === 'date') e.currentTarget.type = 'date';
      }}
      className={`peer w-full border-b px-1 py-2 bg-transparent placeholder:text-gray-600 transition-all focus:outline-none ${
        error ? 'border-red-500' : 'border-gray-400 focus:border-red-500'
      }`}
    />
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

const SelectField: React.FC<SelectFieldProps> = ({
  label,
  options = [],
  error,
  register,
  name,
}) => (
  <div className="w-full">
    <select
      {...register(name)}
      className={`w-full border-b pt-3 px-1 py-2 bg-transparent text-gray-600 focus:outline-none ${
        error ? 'border-red-500' : 'border-gray-400 focus:border-red-500'
      }`}
      defaultValue=""
    >
      <option value="">{label}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
    {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
  </div>
);

export default function PreQualifiedForm() {
  const [showManualAddress, setShowManualAddress] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    control,
    reset,
  } = useForm<PreQualifiedFormType>({
    resolver: yupResolver(preQualifiedSchema) as any,
    defaultValues: {
      manual: false,
    },
  });
  React.useEffect(() => {
    setValue('manual', showManualAddress);
  }, [showManualAddress, setValue]);

  const onSubmit = async (data: PreQualifiedFormType) => {
    setIsSubmitting(true);
    const email = 'proabdulbasit.me@gmail.com';
    const subject = `Pre-Qualification Application from ${data.firstName} ${data.lastName}`;
    const html = PreQualifiedEmailTemplate(data);

    try {
      const response = await fetch(
        'https://api.carzoomo.com/socially/send-email',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, subject, html }),
        },
      );

      if (!response.ok) throw new Error('Failed to send application');

      toast.success('Pre-qualification application submitted successfully!');
      reset();
    } catch (error) {
      toast.error('Failed to submit application. Please try again.');
      console.error('Error sending email:', error);
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-10">
      <h2 className="text-3xl font-semibold text-gray-900 mb-8">
        Get <span className="text-[#F20000]">Pre</span>-Qualified
      </h2>
      <ContactHighlights />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full max-w-5xl bg-white p-6 rounded shadow grid grid-cols-1 md:grid-cols-2 gap-4"
      >
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <InputField
            placeholder="First Name"
            register={register}
            name="firstName"
            error={errors.firstName?.message}
          />
          <InputField
            placeholder="Last Name"
            register={register}
            name="lastName"
            error={errors.lastName?.message}
          />
          <InputField
            type="email"
            placeholder="Email"
            register={register}
            name="email"
            error={errors.email?.message}
          />
        </div>
        <InputField
          type="date"
          placeholder="Date of Birth"
          register={register}
          name="dob"
          error={errors.dob?.message}
        />
        <InputField
          type="tel"
          placeholder="Phone Number"
          register={register}
          name="phoneNumber"
          error={errors.phoneNumber?.message}
        />
        <div className="col-span-1 md:col-span-2 border-b border-gray-300 pb-2 text-lg font-semibold text-gray-700">
          Residence
        </div>
        <div className="md:col-span-2">
          <div className="flex border-b border-gray-400 focus-within:border-red-500 items-center">
            <input
              {...register('address')}
              type="text"
              placeholder={showManualAddress ? 'Street' : 'Address'}
              className={`w-full px-1 py-2 bg-transparent placeholder:text-gray-600 focus:outline-none ${
                errors.address ? 'border-b border-red-500' : ''
              }`}
            />
            <span
              onClick={() => setShowManualAddress(!showManualAddress)}
              className="text-red-600 text-sm font-medium cursor-pointer whitespace-nowrap px-2"
            >
              {showManualAddress ? 'Auto Fill' : 'Enter Manually'}
            </span>
          </div>
          {errors.address && (
            <p className="text-red-500 text-xs mt-1">
              {errors.address.message}
            </p>
          )}
        </div>
        {showManualAddress && (
          <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
            <InputField
              placeholder="City"
              register={register}
              name="city"
              error={errors.city?.message}
            />
            <InputField
              placeholder="State"
              register={register}
              name="state"
              error={errors.state?.message}
            />
            <InputField
              placeholder="ZIP Code"
              register={register}
              name="zipCode"
              error={errors.zipCode?.message}
            />
          </div>
        )}
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative w-full">
            <div
              className={`flex items-center border-b ${
                errors.monthlyRent
                  ? 'border-red-500'
                  : 'border-gray-400 focus-within:border-red-500'
              }`}
            >
              <span className="pl-2 pr-1 text-gray-600 select-none">$</span>
              <input
                {...register('monthlyRent')}
                type="text"
                inputMode="decimal"
                placeholder="Monthly Rent/Mortgage"
                className="flex-1 py-2 bg-transparent placeholder:text-gray-600 focus:outline-none"
                pattern="^\d*(\.\d{0,2})?$"
              />
            </div>
            {errors.monthlyRent && (
              <p className="text-red-500 text-xs mt-1">
                {errors.monthlyRent.message}
              </p>
            )}
          </div>
          <SelectField
            label="Years at Address"
            options={YEARS_OPTIONS}
            register={register}
            name="yearsAtAddress"
            error={errors.yearsAtAddress?.message}
          />
          <SelectField
            label="Months at Address"
            options={MONTHS_OPTIONS}
            register={register}
            name="monthsAtAddress"
            error={errors.monthsAtAddress?.message}
          />
        </div>
        <div className="col-span-1 md:col-span-2 border-b border-gray-300 pb-2 text-lg font-semibold text-gray-700">
          Employment
        </div>
        <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="relative w-full">
            <div
              className={`flex items-center border-b ${
                errors.grossIncome
                  ? 'border-red-500'
                  : 'border-gray-400 focus-within:border-red-500'
              }`}
            >
              <span className="pl-2 pr-1 text-gray-600 select-none">$</span>
              <input
                {...register('grossIncome')}
                type="text"
                inputMode="decimal"
                placeholder="Monthly Gross Income"
                className="flex-1 py-2 bg-transparent placeholder:text-gray-600 focus:outline-none"
                pattern="^\d*(\.\d{0,2})?$"
              />
            </div>
            {errors.grossIncome && (
              <p className="text-red-500 text-xs mt-1">
                {errors.grossIncome.message}
              </p>
            )}
          </div>
          <SelectField
            label="Years at Job"
            options={YEARS_OPTIONS}
            register={register}
            name="yearsAtJob"
            error={errors.yearsAtJob?.message}
          />
          <SelectField
            label="Months at Job"
            options={MONTHS_OPTIONS}
            register={register}
            name="monthsAtJob"
            error={errors.monthsAtJob?.message}
          />
        </div>
        <div className="col-span-1 md:col-span-2 border-b border-gray-300 pb-2 text-lg font-semibold text-gray-700">
          Down Payment
        </div>
        <div className="relative w-full">
          <div
            className={`flex items-center border-b ${
              errors.downPayment
                ? 'border-red-500'
                : 'border-gray-400 focus-within:border-red-500'
            }`}
          >
            <span className="pl-2 pr-1 text-gray-600 select-none">$</span>
            <input
              {...register('downPayment')}
              type="text"
              inputMode="decimal"
              placeholder="Amount"
              className="flex-1 py-2 bg-transparent placeholder:text-gray-600 focus:outline-none"
              pattern="^\d*(\.\d{0,2})?$"
            />
          </div>
          {errors.downPayment && (
            <p className="text-red-500 text-xs mt-1">
              {errors.downPayment.message}
            </p>
          )}
        </div>
        <div className="col-span-1 md:col-span-2 flex justify-center mt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className={`bg-[#F20000] hover:bg-[#CF3535] text-white font-bold py-3 px-10 rounded flex items-center gap-2 ${
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
                Submitting...
              </>
            ) : (
              'REVIEW'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
