import { FinanceFormData } from '@/features/Finance/types';

function formatMoney(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}

function formatPhone(phone: string): string {
  return phone.replace(/(\d{3})(\d{3})(\d{4})/, '$1-$2-$3');
}

function isPerson(obj: any): obj is {
  firstName: string;
  lastName: string;
  [key: string]: any;
} {
  return (
    obj && typeof obj === 'object' && 'firstName' in obj && 'lastName' in obj
  );
}

function isEmployment(obj: any): obj is {
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

export function FinanceEmailTemplate(data: FinanceFormData): string {
  const renderPersonInfo = (prefix: 'applicant' | 'cobuyer', title: string) => {
    const person = data[prefix];
    if (!isPerson(person)) return '';

    return `
      <div style="margin-bottom: 30px;">
        <h2 style="color: #0A4B8F; border-bottom: 2px solid #0A4B8F; padding-bottom: 10px;">${title}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; width: 33%;"><strong>Name:</strong> ${person.firstName} ${person.middleName || ''} ${person.lastName}</td>
            <td style="padding: 8px; width: 33%;"><strong>SSN:</strong> ${person.ssn}</td>
            <td style="padding: 8px; width: 33%;"><strong>DOB:</strong> ${person.dateOfBirth}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Address:</strong> ${person.address1}</td>
            <td style="padding: 8px;">${person.address2 || ''}</td>
            <td style="padding: 8px;">${person.city}, ${person.state} ${person.zip}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Mobile:</strong> ${formatPhone(person.phone.mobile)}</td>
            <td style="padding: 8px;"><strong>Home:</strong> ${person.phone.home ? formatPhone(person.phone.home) : 'N/A'}</td>
            <td style="padding: 8px;"><strong>Email:</strong> ${person.email}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Residence Type:</strong> ${person.residence.type}</td>
            <td style="padding: 8px;"><strong>Monthly Payment:</strong> ${formatMoney(Number(person.residence.payment))}</td>
            <td style="padding: 8px;"><strong>Time at Residence:</strong> ${person.residence.years}, ${person.residence.months}</td>
          </tr>
          ${
            person.driversLicense.number
              ? `
          <tr>
            <td style="padding: 8px;"><strong>Driver's License:</strong> ${person.driversLicense.number}</td>
            <td style="padding: 8px;"><strong>State:</strong> ${person.driversLicense.state}</td>
            <td style="padding: 8px;"><strong>Expiration:</strong> ${person.driversLicense.expiration}</td>
          </tr>
          `
              : ''
          }
        </table>
      </div>
    `;
  };

  const renderEmploymentInfo = (
    prefix: 'employment' | 'cobuyerEmployment',
    title: string,
  ) => {
    const employment = data[prefix];
    if (!isEmployment(employment)) return '';

    return `
      <div style="margin-bottom: 30px;">
        <h2 style="color: #0A4B8F; border-bottom: 2px solid #0A4B8F; padding-bottom: 10px;">${title}</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px; width: 33%;"><strong>Employer:</strong> ${employment.employer}</td>
            <td style="padding: 8px; width: 33%;"><strong>Type:</strong> ${employment.employerType}</td>
            <td style="padding: 8px; width: 33%;"><strong>Monthly Income:</strong> ${formatMoney(Number(employment.monthlyIncome))}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Occupation:</strong> ${employment.occupation}</td>
            <td style="padding: 8px;"><strong>Work Phone:</strong> ${formatPhone(employment.workPhone)}</td>
            <td style="padding: 8px;"><strong>Time on Job:</strong> ${employment.timeOnJob.years}, ${employment.timeOnJob.months}</td>
          </tr>
          <tr>
            <td style="padding: 8px;"><strong>Address:</strong> ${employment.address1}</td>
            <td style="padding: 8px;">${employment.address2 || ''}</td>
            <td style="padding: 8px;">${employment.city}, ${employment.state} ${employment.zip}</td>
          </tr>
        </table>
      </div>
    `;
  };

  const renderVehicleInfo = () => {
    const vehicle = data.vehicle;
    if (
      !vehicle.vehicleToFinance &&
      !vehicle.year &&
      !vehicle.make &&
      !vehicle.model
    )
      return '';

    return `
      <div style="margin-bottom: 30px;">
        <h2 style="color: #0A4B8F; border-bottom: 2px solid #0A4B8F; padding-bottom: 10px;">Vehicle Information</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px;"><strong>Vehicle to Finance:</strong> ${vehicle.vehicleToFinance || 'N/A'}</td>
          
          </tr>
        </table>
      </div>
    `;
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Finance Application</title>
        <style>
          body {
            font-family: 'Helvetica Neue', 'Helvetica', Arial, 'Lucida Grande', sans-serif;
            background-color: #fafafa;
            margin: 0;
            padding: 0;
            color: #333333;
          }
          .email-container {
            width: 95%;
            padding: 20px;
            background-color: #fafafa;
          }
          .email-content {
            border: 1px solid #eeeeee;
            background-color: #ffffff;
            border-radius: 5px;
            max-width: 900px;
            margin: 0 auto;
            padding: 20px;
          }
          .email-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #0A4B8F;
          }
          .email-header img {
            max-width: 200px;
          }
          .email-footer {
            margin-top: 30px;
            padding-top: 20px;
            text-align: center;
            font-size: 14px;
            color: #666666;
            border-top: 1px solid #dddddd;
          }
          table {
            background-color: #f8f9fa;
            border-radius: 4px;
          }
          td {
            vertical-align: top;
          }
          .comments {
            margin: 20px 0;
            padding: 15px;
            background-color: #f8f9fa;
            border-radius: 4px;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-content">
            <div class="email-header">

              <h1 style="color: #0A4B8F; margin-top: 20px;">New Finance Application</h1>
            </div>

            ${renderPersonInfo('applicant', 'Applicant Information')}
            ${renderEmploymentInfo('employment', 'Employment Information')}
            
            ${
              data.hasCobuyer
                ? `
              ${renderPersonInfo('cobuyer', 'Co-Buyer Information')}
              ${renderEmploymentInfo('cobuyerEmployment', 'Co-Buyer Employment Information')}
            `
                : ''
            }

            ${renderVehicleInfo()}

            ${
              data.additionalComments
                ? `
              <div class="comments">
                <h2 style="color: #0A4B8F; border-bottom: 2px solid #0A4B8F; padding-bottom: 10px;">Additional Comments</h2>
                <p style="white-space: pre-wrap;">${data.additionalComments}</p>
              </div>
            `
                : ''
            }

            <div class="email-footer">
              <p>This application was submitted with acknowledgment and consent to the terms and conditions.</p>
              <p style="margin-top: 10px;">© TakeOff Motors</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
