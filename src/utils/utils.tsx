// Finance Email Template Utils

export function formatMoney(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

export function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

export function isPerson(obj: any): obj is {
  firstName: string;
  lastName: string;
  [key: string]: any;
} {
  return (
    obj && typeof obj === 'object' && 'firstName' in obj && 'lastName' in obj
  );
}

export function isEmployment(obj: any): obj is {
  employer: string;
  employerType: string;
  monthlyIncome: string;
  occupation: string;
  address1: string;
  city: string;
  state: string;
  zip: string;
  workPhone: string;
  timeOnJob: { years: string; months: string };
  [key: string]: any;
} {
  return (
    obj && typeof obj === 'object' && 'employer' in obj && 'occupation' in obj
  );
}
