import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

// Initialize Resend only when needed to avoid build-time errors
const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, phone, email, location, careType, urgency, message } = body;

    // Validate required fields
    if (!firstName || !lastName || !phone || !email) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Initialize Resend client and send email to Lenny
    const resend = getResendClient();
    const { data, error } = await resend.emails.send({
      from: 'Elite Care Companion <noreply@elitecarecompanion.com>',
      to: ['lennylmonsanto@gmail.com'],
      subject: `New Care Consultation Request from ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9fafb; border-radius: 8px;">
          <div style="background-color: #1e40af; color: white; padding: 20px; text-align: center; border-radius: 8px 8px 0 0;">
            <h1 style="margin: 0; font-size: 24px;">New Care Consultation Request</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Elite Care Companion</p>
          </div>

          <div style="background-color: white; padding: 30px; border-radius: 0 0 8px 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #1e40af; margin-top: 0;">Contact Information</h2>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Name:</td>
                <td style="padding: 8px 0; color: #6b7280;">${firstName} ${lastName}</td>
              </tr>
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
                <td style="padding: 8px 0; color: #6b7280;"><a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">${phone}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
                <td style="padding: 8px 0; color: #6b7280;"><a href="mailto:${email}" style="color: #1e40af; text-decoration: none;">${email}</a></td>
              </tr>
              ${location ? `
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Location:</td>
                <td style="padding: 8px 0; color: #6b7280;">${location}</td>
              </tr>
              ` : ''}
            </table>

            <h3 style="color: #1e40af; margin-bottom: 10px;">Care Details</h3>
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              ${careType ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #374151; width: 30%;">Care Type:</td>
                <td style="padding: 8px 0; color: #6b7280;">${careType}</td>
              </tr>
              ` : ''}
              ${urgency ? `
              <tr style="background-color: #f9fafb;">
                <td style="padding: 8px 0; font-weight: bold; color: #374151;">Urgency:</td>
                <td style="padding: 8px 0; color: #6b7280;">
                  ${urgency === 'immediately' ?
                    '<span style="background-color: #dc2626; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold;">URGENT - IMMEDIATE CARE NEEDED</span>' :
                    urgency}
                </td>
              </tr>
              ` : ''}
            </table>

            ${message ? `
            <h3 style="color: #1e40af; margin-bottom: 10px;">Additional Information</h3>
            <div style="background-color: #f9fafb; padding: 15px; border-radius: 6px; border-left: 4px solid #1e40af; margin-bottom: 20px;">
              <p style="margin: 0; color: #374151; line-height: 1.6;">${message}</p>
            </div>
            ` : ''}

            <div style="background-color: #dbeafe; padding: 15px; border-radius: 6px; text-align: center; margin-top: 20px;">
              <p style="margin: 0; font-weight: bold; color: #1e40af;">
                📞 Call ${firstName} at <a href="tel:${phone}" style="color: #1e40af; text-decoration: none;">${phone}</a>
              </p>
              <p style="margin: 5px 0 0 0; font-size: 14px; color: #6b7280;">
                ${urgency === 'immediately' || urgency === 'today' ? 'PRIORITY - Contact immediately' : 'Standard follow-up within 2 hours'}
              </p>
            </div>
          </div>

          <div style="text-align: center; padding: 20px 0; color: #6b7280; font-size: 12px;">
            <p>Elite Care Companion - Professional Home Care Services</p>
            <p>Atlanta Metro Area | (470) 696-3850</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );

  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}