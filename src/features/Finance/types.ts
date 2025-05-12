import * as yup from 'yup';

export const applicantSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  middleName: yup.string(),
  lastName: yup.string().required('Last name is required'),
  address1: yup.string().required('Address 1 is required'),
  address2: yup.string(),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup.string().required('Zip code is required'),
  ssn: yup.string().required('Social security number is required'),
  dateOfBirth: yup.string().required('Date of birth is required'),
  driversLicense: yup.object().shape({
    number: yup.string(),
    state: yup.string(),
    expiration: yup.string(),
  }),
  phone: yup.object().shape({
    mobile: yup.string().required('Mobile phone number is required'),
    home: yup.string(),
  }),
  email: yup
    .string()
    .email('Please enter a valid email address')
    .required('Email is required'),
  residence: yup.object().shape({
    years: yup.string().required('Residence time (years) is required'),
    months: yup.string().required('Residence time (months) is required'),
    type: yup.string().required('Residence type is required'),
    payment: yup.string().required('Rent/mortgage payment is required'),
  }),
});

export const employmentSchema = yup.object().shape({
  employer: yup.string().required('Employer is required'),
  employerType: yup.string().required('Employer type is required'),
  monthlyIncome: yup.string().required('Monthly income is required'),
  occupation: yup.string().required('Occupation is required'),
  address1: yup.string().required('Address is required'),
  address2: yup.string(),
  city: yup.string().required('City is required'),
  state: yup.string().required('State is required'),
  zip: yup.string().required('Zip code is required'),
  workPhone: yup.string().required('Work phone is required'),
  timeOnJob: yup.object().shape({
    years: yup.string().required('Time on job (years) is required'),
    months: yup.string().required('Time on job (months) is required'),
  }),
});

export const vehicleSchema = yup.object().shape({
  vehicleToFinance: yup.string(),
  stockNumber: yup.string(),
  year: yup.string(),
  make: yup.string(),
  model: yup.string(),
  trim: yup.string(),
  vin: yup.string(),
  mileage: yup.string(),
});

export const financeFormSchema = yup.object().shape({
  applicant: applicantSchema,
  employment: employmentSchema,
  vehicle: vehicleSchema,
  hasCobuyer: yup.boolean().default(false),
  cobuyer: yup.object().when('hasCobuyer', {
    is: true,
    then: () => applicantSchema,
    otherwise: () => yup.object().optional(),
  }),
  cobuyerEmployment: yup.object().when('hasCobuyer', {
    is: true,
    then: () => employmentSchema,
    otherwise: () => yup.object().optional(),
  }),
  additionalComments: yup.string(),
  acknowledgment: yup
    .boolean()
    .required('Please check the box to verify acknowledgment and consent')
    .oneOf([true], 'Please check the box to verify acknowledgment and consent'),
  consent: yup
    .boolean()
    .required('You must consent to receive communications')
    .oneOf([true], 'Please check the box to verify consent'),
});

export type FinanceFormData = yup.InferType<typeof financeFormSchema>;
