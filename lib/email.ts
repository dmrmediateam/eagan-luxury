import sgMail from '@sendgrid/mail';

// Initialize SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY || '');

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export interface HomeValuationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  zipCode: string;
  propertyType: string;
  bedrooms: string;
  bathrooms: string;
  squareFeet: string;
  yearBuilt: string;
  message: string;
}

/**
 * Send Contact Form Email
 */
export async function sendContactFormEmail(data: ContactFormData) {
  const { name, email, phone, message } = data;

  const emailContent = {
    to: process.env.CONTACT_FORM_EMAIL || 'arohm@dmrmedia.org',
    from: {
      email: process.env.SENDGRID_FROM_EMAIL || 'noreply@sendgrid.net',
      name: process.env.SENDGRID_FROM_NAME || 'Cheryl Towey - Real Estate',
    },
    replyTo: email, // Allow direct reply to the sender
    subject: `New Contact Form Submission from ${name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #b89649 0%, #a27e2d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; }
            .field { margin-bottom: 20px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 5px; }
            .value { color: #111; font-size: 16px; }
            .message-box { background: #f9f9f9; padding: 20px; border-left: 4px solid #b89649; margin-top: 20px; }
            .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
            .divider { height: 1px; background: #e5e5e5; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>📧 New Contact Form Submission</h1>
            </div>
            <div class="content">
              <p style="color: #666; margin-bottom: 30px;">You have received a new contact form submission from your website.</p>
              
              <div class="field">
                <div class="label">Name</div>
                <div class="value">${name}</div>
              </div>
              
              <div class="field">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${email}" style="color: #b89649; text-decoration: none;">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="label">Phone</div>
                <div class="value"><a href="tel:${phone}" style="color: #b89649; text-decoration: none;">${phone || 'Not provided'}</a></div>
              </div>
              
              <div class="divider"></div>
              
              <div class="field">
                <div class="label">Message</div>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              
              <div class="divider"></div>
              
              <div class="field">
                <div class="label">Submitted</div>
                <div class="value">${new Date().toLocaleString('en-US', { 
                  dateStyle: 'full', 
                  timeStyle: 'short' 
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from the contact form on realestatebycherylnj.com</p>
              <p style="color: #b89649; font-weight: 600;">Reply directly to this email to respond to ${name}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone || 'Not provided'}

Message:
${message}

Submitted: ${new Date().toLocaleString()}
    `,
  };

  try {
    await sgMail.send(emailContent);
    return { success: true };
  } catch (error: any) {
    console.error('SendGrid Error:', error.response?.body || error);
    throw new Error('Failed to send email');
  }
}

/**
 * Send Home Valuation Email
 */
export async function sendHomeValuationEmail(data: HomeValuationData) {
  const {
    firstName,
    lastName,
    email,
    phone,
    address,
    city,
    state,
    zipCode,
    propertyType,
    bedrooms,
    bathrooms,
    squareFeet,
    yearBuilt,
    message,
  } = data;

  const fullAddress = `${address}, ${city}, ${state} ${zipCode}`;

  const emailContent = {
    to: process.env.VALUATION_FORM_EMAIL || 'arohm@dmrmedia.org',
    from: {
      email: process.env.SENDGRID_FROM_EMAIL || 'noreply@sendgrid.net',
      name: process.env.SENDGRID_FROM_NAME || 'Cheryl Towey - Real Estate',
    },
    replyTo: email,
    subject: `New Home Valuation Request - ${address}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 700px; margin: 0 auto; padding: 20px; }
            .header { background: linear-gradient(135deg, #b89649 0%, #a27e2d 100%); color: white; padding: 30px; text-align: center; border-radius: 8px 8px 0 0; }
            .header h1 { margin: 0; font-size: 28px; font-weight: 300; }
            .header p { margin: 10px 0 0 0; opacity: 0.9; }
            .content { background: #ffffff; padding: 30px; border: 1px solid #e5e5e5; border-top: none; }
            .section { margin-bottom: 30px; }
            .section-title { color: #b89649; font-size: 14px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; border-bottom: 2px solid #b89649; padding-bottom: 8px; }
            .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: 600; color: #666; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 5px; }
            .value { color: #111; font-size: 16px; }
            .property-highlight { background: #f9f9f9; padding: 20px; border-left: 4px solid #b89649; margin: 20px 0; }
            .property-highlight .address { font-size: 20px; color: #111; font-weight: 600; margin-bottom: 10px; }
            .message-box { background: #f9f9f9; padding: 20px; border-radius: 4px; margin-top: 10px; }
            .footer { background: #f9f9f9; padding: 20px; text-align: center; font-size: 12px; color: #666; border-radius: 0 0 8px 8px; }
            .divider { height: 1px; background: #e5e5e5; margin: 25px 0; }
            @media (max-width: 600px) {
              .grid { grid-template-columns: 1fr; }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🏡 Home Valuation Request</h1>
              <p>New seller inquiry from your website</p>
            </div>
            <div class="content">
              
              <!-- Property Address Highlight -->
              <div class="property-highlight">
                <div class="address">${fullAddress}</div>
                <div style="color: #666; font-size: 14px;">${propertyType.replace('-', ' ').toUpperCase()}</div>
              </div>

              <!-- Client Information -->
              <div class="section">
                <div class="section-title">Client Information</div>
                <div class="grid">
                  <div class="field">
                    <div class="label">Name</div>
                    <div class="value">${firstName} ${lastName}</div>
                  </div>
                  <div class="field">
                    <div class="label">Email</div>
                    <div class="value"><a href="mailto:${email}" style="color: #b89649; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="field">
                    <div class="label">Phone</div>
                    <div class="value"><a href="tel:${phone}" style="color: #b89649; text-decoration: none;">${phone}</a></div>
                  </div>
                </div>
              </div>

              <div class="divider"></div>

              <!-- Property Details -->
              <div class="section">
                <div class="section-title">Property Details</div>
                <div class="grid">
                  <div class="field">
                    <div class="label">Property Type</div>
                    <div class="value">${propertyType.replace('-', ' ')}</div>
                  </div>
                  <div class="field">
                    <div class="label">Year Built</div>
                    <div class="value">${yearBuilt || 'Not specified'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Bedrooms</div>
                    <div class="value">${bedrooms || 'Not specified'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Bathrooms</div>
                    <div class="value">${bathrooms || 'Not specified'}</div>
                  </div>
                  <div class="field">
                    <div class="label">Square Feet</div>
                    <div class="value">${squareFeet ? Number(squareFeet).toLocaleString() + ' sq ft' : 'Not specified'}</div>
                  </div>
                </div>
              </div>

              ${message ? `
              <div class="divider"></div>
              <div class="section">
                <div class="section-title">Additional Information</div>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>
              ` : ''}

              <div class="divider"></div>

              <div class="field">
                <div class="label">Submitted</div>
                <div class="value">${new Date().toLocaleString('en-US', { 
                  dateStyle: 'full', 
                  timeStyle: 'short' 
                })}</div>
              </div>
            </div>
            <div class="footer">
              <p>This valuation request was submitted from the Sellers page on realestatebycherylnj.com</p>
              <p style="color: #b89649; font-weight: 600;">Reply directly to this email to respond to ${firstName} ${lastName}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Home Valuation Request

PROPERTY ADDRESS:
${fullAddress}

CLIENT INFORMATION:
Name: ${firstName} ${lastName}
Email: ${email}
Phone: ${phone}

PROPERTY DETAILS:
Property Type: ${propertyType}
Bedrooms: ${bedrooms || 'Not specified'}
Bathrooms: ${bathrooms || 'Not specified'}
Square Feet: ${squareFeet || 'Not specified'}
Year Built: ${yearBuilt || 'Not specified'}

${message ? `ADDITIONAL INFORMATION:\n${message}\n` : ''}

Submitted: ${new Date().toLocaleString()}
    `,
  };

  try {
    await sgMail.send(emailContent);
    return { success: true };
  } catch (error: any) {
    console.error('SendGrid Error:', error.response?.body || error);
    throw new Error('Failed to send email');
  }
}


