import { FinanceFormData } from '@/commonPages/FinanceApplication/Finance/types';
import { formatMoney, formatPhone, isEmployment, isPerson } from './utils';
import { PreQualifiedFormType } from '@/components/sections/PreQualifiedForm/schema';

// Listing Inquiry Email Template
export function ListingInquiryEmailTemplate({
  name,
  email,
  phone,
  message,
  listingName,
  carUrl,
  carInfo,
}: {
  name: string;
  email: string;
  phone: string;
  message: string;
  listingName: string;
  carUrl: string;
  carInfo?:
    | {
        year?: string;
        make?: string;
        model?: string;
        price?: string;
        mileage?: string;
        fuel?: string;
        transmission?: string;
        [key: string]: any;
      }
    | string;
}): string {
  let carInfoHtml = '';
  if (carInfo && typeof carInfo === 'object') {
    carInfoHtml = `
      <h2 style="margin-top:30px;">Car Details</h2>
      <table style="width:100%;border-collapse:collapse;background:#fafafa;">
        ${carInfo.year ? `<tr><td style='padding:6px 0;'><b>Year:</b></td><td>${carInfo.year}</td></tr>` : ''}
        ${carInfo.make ? `<tr><td style='padding:6px 0;'><b>Make:</b></td><td>${carInfo.make}</td></tr>` : ''}
        ${carInfo.model ? `<tr><td style='padding:6px 0;'><b>Model:</b></td><td>${carInfo.model}</td></tr>` : ''}
        ${carInfo.price ? `<tr><td style='padding:6px 0;'><b>Price:</b></td><td>${carInfo.price}</td></tr>` : ''}
        ${carInfo.mileage ? `<tr><td style='padding:6px 0;'><b>Mileage:</b></td><td>${carInfo.mileage}</td></tr>` : ''}
        ${carInfo.fuel ? `<tr><td style='padding:6px 0;'><b>Fuel:</b></td><td>${carInfo.fuel}</td></tr>` : ''}
        ${carInfo.transmission ? `<tr><td style='padding:6px 0;'><b>Transmission:</b></td><td>${carInfo.transmission}</td></tr>` : ''}
      </table>
    `;
  } else if (carInfo) {
    carInfoHtml = `<div style='margin-top:30px;'><b>Car Info:</b> ${carInfo}</div>`;
  }
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Listing Inquiry</title>
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
          .car-link {
            color: #FF0000;
            text-decoration: underline;
            font-weight: bold;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-content">
            <div class="email-header">
              Carmela
            </div>
            <h1>You have a new listing inquiry:</h1>
            <h2>Car Name: <strong>${listingName}</strong></h2>
            <h2>Car URL: <a href="${carUrl}" class="car-link">${carUrl}</a></h2>
            <h2>Name: <strong>${name}</strong></h2>
            <h2>Email: <strong>${email}</strong></h2>
            <h2>Phone Number: <strong>${phone}</strong></h2>
            <h2>Message: <strong>${message}</strong></h2>
            ${carInfoHtml}
            <div class="email-footer">
              Carmela
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
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
              <p style="margin-top: 10px;">© Carmela</p>
              </div>
          </div>
        </div>
      </body>
    </html>
  `;
}

export function PreQualifiedEmailTemplate(data: PreQualifiedFormType): string {
  const fullAddress = data.manual
    ? `${data.address}, ${data.city}, ${data.state} ${data.zipCode}`
    : data.address;
  const timeAtAddress = `${data.yearsAtAddress} years, ${data.monthsAtAddress} months`;
  const timeAtJob = `${data.yearsAtJob} years, ${data.monthsAtJob} months`;

  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>New Pre-Qualification Application</title>
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
            max-width: 700px;
            margin: 0 auto;
            padding: 20px;
          }
          .email-header {
            text-align: center;
            margin-bottom: 30px;
            padding-bottom: 20px;
            border-bottom: 2px solid #1C394F;
          }
          .email-footer {
            margin-top: 30px;
            padding-top: 20px;
            text-align: center;
            font-size: 14px;
            color: #666666;
            border-top: 1px solid #dddddd;
          }
          .section {
            margin-bottom: 30px;
          }
          .section-title {
            color: #1C394F;
            border-bottom: 2px solid #1C394F;
            padding-bottom: 10px;
            font-size: 18px;
            font-weight: bold;
            margin-bottom: 10px;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            background-color: #f8f9fa;
            border-radius: 4px;
          }
          td {
            padding: 8px;
            vertical-align: top;
          }
        </style>
      </head>
      <body>
        <div class="email-container">
          <div class="email-content">
            <div class="email-header">
              <h1 style="color: #1C394F; margin-top: 20px;">New Pre-Qualification Application</h1>
            </div>
            <div class="section">
              <div class="section-title">Personal Information</div>
              <table>
                <tr><td><strong>Name:</strong></td><td>${data.firstName} ${data.lastName}</td></tr>
                <tr><td><strong>Email:</strong></td><td>${data.email}</td></tr>
                <tr><td><strong>Phone Number:</strong></td><td>${data.phoneNumber}</td></tr>
                <tr><td><strong>Date of Birth:</strong></td><td>${data.dob}</td></tr>
              </table>
            </div>
            <div class="section">
              <div class="section-title">Residence Information</div>
              <table>
                <tr><td><strong>Address:</strong></td><td>${fullAddress}</td></tr>
                <tr><td><strong>Monthly Rent/Mortgage:</strong></td><td>$${data.monthlyRent}</td></tr>
                <tr><td><strong>Time at Address:</strong></td><td>${timeAtAddress}</td></tr>
              </table>
            </div>
            <div class="section">
              <div class="section-title">Employment Information</div>
              <table>
                <tr><td><strong>Monthly Gross Income:</strong></td><td>$${data.grossIncome}</td></tr>
                <tr><td><strong>Time at Job:</strong></td><td>${timeAtJob}</td></tr>
              </table>
            </div>
            <div class="section">
              <div class="section-title">Down Payment</div>
              <table>
                <tr><td><strong>Amount:</strong></td><td>$${data.downPayment}</td></tr>
              </table>
            </div>
            <div class="email-footer">
              <p>This pre-qualification application was submitted via the website.</p>
              <p style="margin-top: 10px;">© Carmela</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
