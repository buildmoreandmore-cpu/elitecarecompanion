import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      service,
      firstName,
      lastName,
      email,
      phone,
      propertyAddress,
      helpType,
      message,
      urgencyLevel,
      timeframe,
      currentSituation
    } = body;

    // Create the email content
    const emailHtml = `
      <h2>New ${service} Inquiry from Homeowner Support Website</h2>

      <h3>Contact Information:</h3>
      <ul>
        <li><strong>Name:</strong> ${firstName} ${lastName}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Phone:</strong> ${phone}</li>
        <li><strong>Property Address:</strong> ${propertyAddress}</li>
      </ul>

      <h3>Service Details:</h3>
      <ul>
        <li><strong>Service Requested:</strong> ${service}</li>
        <li><strong>How we can help:</strong> ${helpType}</li>
        ${urgencyLevel ? `<li><strong>Urgency Level:</strong> ${urgencyLevel}</li>` : ''}
        ${timeframe ? `<li><strong>Timeframe:</strong> ${timeframe}</li>` : ''}
        ${currentSituation ? `<li><strong>Current Situation:</strong> ${currentSituation}</li>` : ''}
      </ul>

      ${message ? `
      <h3>Additional Message:</h3>
      <p>${message}</p>
      ` : ''}

      <hr>
      <p><em>This inquiry was submitted from the Homeowner Support website.</em></p>
    `;

    const { data, error } = await resend.emails.send({
      from: 'Homeowner Support Website <noreply@homeowner-support.com>',
      to: ['martin@homeowner-support.com'],
      subject: `New ${service} Inquiry - ${firstName} ${lastName}`,
      html: emailHtml,
    });

    if (error) {
      console.error('Email send error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    return NextResponse.json({ message: 'Email sent successfully', data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}