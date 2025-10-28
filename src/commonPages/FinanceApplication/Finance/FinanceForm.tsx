'use client';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {
  financeFormSchema,
  type FinanceFormData,
} from '@/commonPages/FinanceApplication/Finance/types';
import { useState } from 'react';
import React from 'react';
import 'react-datepicker/dist/react-datepicker.css';
import { FinanceEmailTemplate } from '@/utils/email';
import { Input } from '@/components/UI/input';
import { toast } from 'sonner';

const states = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
];

const ErrorMessage = ({ message }: { message?: string }) =>
  message ? <span className="text-xs text-red-500">{message}</span> : null;

const SelectInput = ({
  error,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement> & { error?: string }) => (
  <div>
    <select
      {...props}
      className={`mt-1 block w-full rounded-md border-2 ${
        error ? 'border-red-400' : 'border-gray-200'
      } text-base font-medium py-3 text-gray-800 shadow-sm focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
    />
    <ErrorMessage message={error} />
  </div>
);

const yearOptions = [
  '0 Years',
  '1 Years',
  '2 Years',
  '3 Years',
  '4 Years',
  '5 Years',
  '6 Years',
  '7 Years',
  '8 Years',
  '9 Years',
  '10 Years',
  '11 Years',
  '12+ Years',
];

const monthOptions = [
  '0 Months',
  '1 Months',
  '2 Months',
  '3 Months',
  '4 Months',
  '5 Months',
  '6 Months',
  '7 Months',
  '8 Months',
  '9 Months',
  '10 Months',
  '11 Months',
];

function formatDate(date: Date): string {
  // Format as YYYY-MM-DD
  return date.toISOString().split('T')[0];
}

export function FinanceForm() {
  const [showCobuyer, setShowCobuyer] = useState(false);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FinanceFormData>({
    resolver: yupResolver(financeFormSchema) as any,
    defaultValues: {
      hasCobuyer: false,
      acknowledgment: false,
      consent: false,
      applicant: {
        firstName: '',
        lastName: '',
        address1: '',
        city: '',
        state: '',
        zip: '',
        ssn: '',
        dateOfBirth: '',
        email: '',
        phone: {
          mobile: '',
        },
        residence: {
          years: '',
          months: '',
          type: '',
          payment: '',
        },
      },
      employment: {
        employer: '',
        employerType: '',
        monthlyIncome: '',
        occupation: '',
        address1: '',
        city: '',
        state: '',
        zip: '',
        workPhone: '',
        timeOnJob: {
          years: '',
          months: '',
        },
      },
      vehicle: {
        vehicleToFinance: '',
        stockNumber: '',
        year: '',
        make: '',
        model: '',
        trim: '',
        vin: '',
        mileage: '',
      },
    },
  });

  const handleCobuyerToggle = () => {
    const newShowCobuyer = !showCobuyer;
    setShowCobuyer(newShowCobuyer);
    setValue('hasCobuyer', newShowCobuyer);
  };

  const onSubmit: SubmitHandler<FinanceFormData> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch(
        'https://api.carbacked.com/socially/send-email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            email: 'carmela@gmail.com',
            subject: `New Finance Application from ${data.applicant.firstName} ${data.applicant.lastName}`,
            html: FinanceEmailTemplate(data),
          }),
        },
      );

      if (!response.ok) {
        throw new Error('Failed to send application');
      }

      toast.success('Application submitted successfully!');
    } catch (error) {
      console.error('Error submitting application:', error);
      toast.error('Failed to submit application. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const RequiredLabel = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <label
      className={`block text-sm font-semibold text-gray-800 mb-1 ${className}`}
    >
      {children} <span className="text-[#FF0000]">*</span>
    </label>
  );

  const OptionalLabel = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className?: string;
  }) => (
    <label
      className={`block text-sm font-semibold text-gray-800 mb-1 ${className}`}
    >
      {children}
    </label>
  );

  const renderPersonInfo = (prefix: 'applicant' | 'cobuyer', title: string) => (
    <div className="space-y-5">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
        {title}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div>
          <RequiredLabel>First Name:</RequiredLabel>
          <Input
            {...register(`${prefix}.firstName` as any)}
            error={(errors[prefix] as any)?.firstName?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
        <div>
          <OptionalLabel>Middle Name:</OptionalLabel>
          <Input
            {...register(`${prefix}.middleName` as any)}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
        <div>
          <RequiredLabel>Last Name:</RequiredLabel>
          <Input
            {...register(`${prefix}.lastName` as any)}
            error={(errors[prefix] as any)?.lastName?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <RequiredLabel>Address 1:</RequiredLabel>
          <Input
            {...register(`${prefix}.address1` as any)}
            error={(errors[prefix] as any)?.address1?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
        <div>
          <OptionalLabel>Address 2:</OptionalLabel>
          <Input
            {...register(`${prefix}.address2` as any)}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div>
          <RequiredLabel>City:</RequiredLabel>
          <Input
            {...register(`${prefix}.city` as any)}
            error={(errors[prefix] as any)?.city?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
        <div>
          <RequiredLabel>State:</RequiredLabel>
          <SelectInput
            {...register(`${prefix}.state` as any)}
            error={(errors[prefix] as any)?.state?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          >
            <option value="">Select State:</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <RequiredLabel>Zip Code:</RequiredLabel>
          <Input
            {...register(`${prefix}.zip` as any)}
            error={(errors[prefix] as any)?.zip?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <RequiredLabel>Social Security Number:</RequiredLabel>
          <Input
            {...register(`${prefix}.ssn` as any)}
            error={(errors[prefix] as any)?.ssn?.message}
            type="number"
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
            placeholder="###-##-####"
          />
        </div>
        <div>
          <RequiredLabel>Date of Birth:</RequiredLabel>
          <div className="relative w-full">
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer z-10"
              onClick={() => {
                document.getElementById(`${prefix}-dateOfBirth`)?.focus();
              }}
              tabIndex={0}
              role="button"
              aria-label="Open calendar"
            ></span>
            <input
              id={`${prefix}-dateOfBirth`}
              type="date"
              {...register(`${prefix}.dateOfBirth` as any)}
              className={`pl-2 pr-4 py-3 w-full border rounded-md text-base font-medium bg-white ${
                (errors[prefix] as any)?.dateOfBirth?.message
                  ? 'border-red-400'
                  : 'border-gray-200'
              } mt-1 focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
              placeholder="mm/dd/yyyy"
            />
            {(errors[prefix] as any)?.dateOfBirth?.message && (
              <span className="text-xs text-red-500">
                {(errors[prefix] as any)?.dateOfBirth?.message}
              </span>
            )}
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <OptionalLabel>Drivers License Number:</OptionalLabel>
          <Input
            {...register(`${prefix}.driversLicense.number` as any)}
            type="number"
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
            placeholder="###-##-####"
          />
        </div>
        <div>
          <OptionalLabel>Drivers License State:</OptionalLabel>
          <SelectInput
            {...register(`${prefix}.driversLicense.state` as any)}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          >
            <option value="">Select State:</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </SelectInput>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <OptionalLabel>Drivers License Expiration:</OptionalLabel>
          <div className="relative w-full">
            <span
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 cursor-pointer z-10"
              onClick={() => {
                document
                  .getElementById(`${prefix}-driversLicenseExpiration`)
                  ?.focus();
              }}
              tabIndex={0}
              role="button"
              aria-label="Open calendar"
            ></span>
            <input
              id={`${prefix}-driversLicenseExpiration`}
              type="date"
              {...register(`${prefix}.driversLicense.expiration` as any)}
              className={`pl-2 pr-4 py-3 w-full border rounded-md text-base font-medium bg-white ${
                (errors[prefix] as any)?.driversLicense?.expiration?.message
                  ? 'border-red-400'
                  : 'border-gray-200'
              } mt-1 focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 transition-all duration-200`}
              placeholder="mm/dd/yyyy"
            />
            {(errors[prefix] as any)?.driversLicense?.expiration?.message && (
              <span className="text-xs text-red-500">
                {(errors[prefix] as any)?.driversLicense?.expiration?.message}
              </span>
            )}
          </div>
        </div>
        <div>
          <RequiredLabel>Mobile Phone:</RequiredLabel>
          <Input
            {...register(`${prefix}.phone.mobile` as any)}
            type="number"
            error={(errors[prefix] as any)?.phone?.mobile?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
            placeholder="###-###-####"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <OptionalLabel>Home Phone:</OptionalLabel>
          <Input
            {...register(`${prefix}.phone.home` as any)}
            type="number"
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
            placeholder="###-###-####"
          />
        </div>
        <div>
          <RequiredLabel>Email:</RequiredLabel>
          <Input
            {...register(`${prefix}.email` as any)}
            type="email"
            error={(errors[prefix] as any)?.email?.message}
            placeholder="example@example.com"
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      <div className="space-y-5">
        <h2 className="text-xl font-semibold pb-1 pt-3">Time at Residence</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <RequiredLabel>Years:</RequiredLabel>
            <SelectInput
              {...register(`${prefix}.residence.years` as any)}
              error={(errors[prefix] as any)?.residence?.years?.message}
              className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
            >
              <option value="">Select Years</option>
              {yearOptions.map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
            </SelectInput>
          </div>
          <div>
            <RequiredLabel>Months:</RequiredLabel>
            <SelectInput
              {...register(`${prefix}.residence.months` as any)}
              error={(errors[prefix] as any)?.residence?.months?.message}
              className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
            >
              <option value="">Select Months</option>
              {monthOptions.map((month) => (
                <option key={month} value={month}>
                  {month}
                </option>
              ))}
            </SelectInput>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div>
            <RequiredLabel>Residence Type</RequiredLabel>
            <SelectInput
              {...register(`${prefix}.residence.type` as any)}
              error={
                (errors[prefix] as any)?.residence?.type &&
                'errors.residence.type'
              }
              className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
            >
              <option value="">Select Type</option>
              <option value="rent">Rent</option>
              <option value="own">Own</option>
              <option value="livingWithFamily">Living with Family</option>
              <option value="militaryHousing">Military Housing</option>
              <option value="other">Other</option>
            </SelectInput>
          </div>
          <div>
            <RequiredLabel>Rent/Mortgage</RequiredLabel>
            <Input
              {...register(`${prefix}.residence.payment` as any)}
              type="number"
              min="0"
              step="0.01"
              error={(errors[prefix] as any)?.residence?.payment?.message}
              className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </div>
  );

  const renderEmploymentInfo = (
    prefix: 'employment' | 'cobuyerEmployment',
    title: string,
  ) => (
    <div className="space-y-5">
      <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
        {title}
      </h2>

      <div>
        <RequiredLabel>Employer</RequiredLabel>
        <Input
          {...register(`${prefix}.employer` as any, {
            required: 'Employer is required',
          })}
          error={(errors[prefix] as any)?.employer?.message}
          className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <RequiredLabel>Employer Type</RequiredLabel>
          <SelectInput
            {...register(`${prefix}.employerType` as any, {
              required: 'Employer type is required',
            })}
            error={(errors[prefix] as any)?.employerType?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          >
            <option value="">Select type</option>
            <option value="fullTime">Full-Time</option>
            <option value="partTime">Part-Time</option>
            <option value="temporary">Temporary</option>
            <option value="fixedIncome">Fixed Income</option>
            <option value="selfEmployed">Self-Employed</option>
            <option value="cashIncome">Cash Income</option>
          </SelectInput>
        </div>
        <div>
          <RequiredLabel>Monthly Income</RequiredLabel>
          <Input
            {...register(`${prefix}.monthlyIncome` as any, {
              required: 'Monthly income is required',
              min: { value: 0, message: 'Amount must be positive' },
            })}
            error={(errors[prefix] as any)?.monthlyIncome?.message}
            type="number"
            min="0"
            step="0.01"
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <RequiredLabel>Occupation</RequiredLabel>
        <Input
          {...register(`${prefix}.occupation` as any, {
            required: 'Occupation is required',
          })}
          error={(errors[prefix] as any)?.occupation?.message}
          className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <RequiredLabel>Address 1</RequiredLabel>
          <Input
            {...register(`${prefix}.address1` as any, {
              required: 'Address is required',
            })}
            error={(errors[prefix] as any)?.address1?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
        <div>
          <OptionalLabel>Address 2</OptionalLabel>
          <Input
            {...register(`${prefix}.address2` as any)}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
        <div>
          <RequiredLabel>City</RequiredLabel>
          <Input
            {...register(`${prefix}.city` as any, {
              required: 'City is required',
            })}
            error={(errors[prefix] as any)?.city?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
        <div>
          <RequiredLabel>State</RequiredLabel>
          <SelectInput
            {...register(`${prefix}.state` as any, {
              required: 'State is required',
            })}
            error={(errors[prefix] as any)?.state?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          >
            <option value="">Select state</option>
            {states.map((state) => (
              <option key={state} value={state}>
                {state}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <RequiredLabel>Zip Code</RequiredLabel>
          <Input
            {...register(`${prefix}.zip` as any, {
              required: 'ZIP code is required',
            })}
            error={(errors[prefix] as any)?.zip?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          />
        </div>
      </div>

      <div>
        <RequiredLabel>Work Phone</RequiredLabel>
        <Input
          {...register(`${prefix}.workPhone` as any, {
            required: 'Work phone is required',
          })}
          type="number"
          error={(errors[prefix] as any)?.workPhone?.message}
          placeholder="###-###-####"
          className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
        />
      </div>

      <div>
        <h2 className="text-xl font-semibold pt-3">Time on Job</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        <div>
          <RequiredLabel>Years</RequiredLabel>
          <SelectInput
            {...register(`${prefix}.timeOnJob.years` as any)}
            error={(errors[prefix] as any)?.timeOnJob?.years?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          >
            <option value="">Select years</option>
            {yearOptions.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
          </SelectInput>
        </div>
        <div>
          <RequiredLabel>Months</RequiredLabel>
          <SelectInput
            {...register(`${prefix}.timeOnJob.months` as any)}
            error={(errors[prefix] as any)?.timeOnJob?.months?.message}
            className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
          >
            <option value="">Select months</option>
            {monthOptions.map((month) => (
              <option key={month} value={month}>
                {month}
              </option>
            ))}
          </SelectInput>
        </div>
      </div>
    </div>
  );

  return (
    <form
      onSubmit={handleSubmit(onSubmit, (formErrors) => {
        console.log('Validation errors:', formErrors);
      })}
      className="space-y-6 max-w-[1440px] mx-auto"
    >
      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        {renderPersonInfo('applicant', 'Applicant Information')}
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        {renderEmploymentInfo('employment', 'Applicant Employment Information')}
      </div>

      <div className="space-y-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
          Do you have a co-buyer?
        </h2>

        <button
          type="button"
          onClick={handleCobuyerToggle}
          className="bg-[#FF0000] text-white py-3 px-6 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base font-medium transition-all duration-200"
        >
          {showCobuyer ? 'Remove Co-Buyer' : 'Add Co-Buyer'}
        </button>

        {showCobuyer && (
          <div className="space-y-6 mt-4">
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              {renderPersonInfo('cobuyer', 'Co-Buyer Information')}
            </div>
            <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
              {renderEmploymentInfo(
                'cobuyerEmployment',
                'Co-Buyer Employment Information',
              )}
            </div>
          </div>
        )}
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <div className="space-y-5">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Vehicle Information
          </h2>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <OptionalLabel>Vehicle to Finance</OptionalLabel>
              <Input
                {...register('vehicle.vehicleToFinance' as any)}
                className="mt-1 border border-gray-200 py-3 text-base font-medium w-full focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 rounded-md shadow-sm transition-all duration-200"
              ></Input>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <div className="space-y-4">
          <h2 className="text-xl md:text-2xl font-bold text-gray-900 border-b border-gray-200 pb-2">
            Additional Comments
          </h2>
          <textarea
            {...register('additionalComments' as any)}
            rows={4}
            className="mt-1 block w-full rounded-md border border-gray-200 shadow-sm focus:border-[#FF0000] focus:ring-[#FF0000] focus:ring-opacity-50 p-3 text-base transition-all duration-200"
          />
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-md border border-gray-100 p-6">
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="acknowledgment"
                {...register('acknowledgment' as any)}
                className="mt-1 rounded border-gray-300 text-[#FF0000] shadow-sm focus:border-[#FF0000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
              <label
                htmlFor="acknowledgment"
                className="text-base font-semibold text-gray-800"
              >
                ACKNOWLEDGMENT AND CONSENT
              </label>
            </div>
          </div>
          {errors.acknowledgment && (
            <span className="text-xs text-red-500">
              {errors.acknowledgment.message}
            </span>
          )}

          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              I certify that the above information is complete and accurate to
              the best of my knowledge. Creditors who receive this application
              will retain the application whether or not it is approved.
              Creditors may rely on this application to decide whether to grant
              the requested credit. False statements may subject me to criminal
              penalties. I authorize creditors to obtain credit reports about me
              on an ongoing basis during this credit transaction and to verify
              my credit and employment history on an ongoing basis during the
              term of the credit transaction. If this application is approved, I
              authorize the creditor to provide credit information about me to
              its affiliates.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex items-start space-x-2">
              <input
                type="checkbox"
                id="consent"
                {...register('consent' as any)}
                className="mt-1 rounded border-gray-300 text-[#FF0000] shadow-sm focus:border-[#FF0000] focus:ring focus:ring-red-200 focus:ring-opacity-50"
              />
              <label
                htmlFor="consent"
                className="text-base font-semibold text-gray-800"
              >
                ACKNOWLEDGMENT AND CONSENT
              </label>
            </div>
          </div>
          {errors.consent && (
            <span className="text-xs text-red-500">
              {errors.consent.message}
            </span>
          )}
          <div className="space-y-2">
            <p className="text-sm text-gray-700">
              By checking this box, I consent to receive text messages and/or
              phone calls from or on behalf of MTZ Auto Sales LLC or its
              employees at the mobile phone number I provided above. By opting
              in, I understand that message and data rates may apply. This
              acknowledgment constitutes my written consent to receive text
              messages on my mobile phone and phone calls, including
              communications sent using an autodialer or prerecorded message.
              You may withdraw your consent at any time by sending a text
              message with the word &quot;STOP&quot; or &quot;HELP&quot; for
              help. See our{' '}
              <a
                href="https://mtzautosales.com/privacy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#FF0000] hover:underline"
              >
                privacy policy
              </a>{' '}
              for more information.
            </p>
          </div>
        </div>
      </div>

      <div className="pt-2 text-center md:text-left">
        <button
          type="submit"
          className="bg-[#FF0000] text-white py-3 px-8 rounded-lg hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 text-base font-medium transition-all duration-200 shadow-md"
          disabled={loading}
        >
          {loading ? (
            <div className="flex items-center justify-center gap-2">
              <svg
                className="animate-spin h-5 w-5 text-white"
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
            </div>
          ) : (
            'Submit Credit Application'
          )}
        </button>
      </div>
    </form>
  );
}
