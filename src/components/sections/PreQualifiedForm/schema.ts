import * as yup from 'yup';
export const preQualifiedSchema = yup.object({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().email('Invalid email').required('Email is required'),
  dob: yup.string().required('Date of birth is required'),
  phoneNumber: yup.string().required('Phone number is required'),
  address: yup.string().required('Address is required'),
  city: yup.string().when('manual', {
    is: true,
    then: (schema) => schema.required('City is required'),
  }),
  state: yup.string().when('manual', {
    is: true,
    then: (schema) => schema.required('State is required'),
  }),
  zipCode: yup.string().when('manual', {
    is: true,
    then: (schema) => schema.required('ZIP code is required'),
  }),
  monthlyRent: yup
    .number()
    .typeError('Enter a valid amount')
    .required('Monthly rent/mortgage is required'),
  yearsAtAddress: yup.string().required('Select years at address'),
  monthsAtAddress: yup.string().required('Select months at address'),
  grossIncome: yup
    .number()
    .typeError('Enter a valid income')
    .required('Monthly gross income is required'),
  yearsAtJob: yup.string().required('Select years at job'),
  monthsAtJob: yup.string().required('Select months at job'),
  downPayment: yup
    .number()
    .typeError('Enter a valid amount')
    .required('Down payment is required'),
  manual: yup.boolean(),
});
export type PreQualifiedFormType = yup.InferType<typeof preQualifiedSchema>;
