// Email template for Listing Inquiry
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
              TakeOff Motors
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
              TakeOff Motors
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
}
