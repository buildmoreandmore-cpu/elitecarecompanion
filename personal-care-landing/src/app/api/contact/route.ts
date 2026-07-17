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
    const { name, phone, who, help } = body as {
      name?: string;
      phone?: string;
      who?: string;
      help?: string[];
    };

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Please provide a name and phone number.' },
        { status: 400 }
      );
    }

    const helpList = Array.isArray(help) ? help.filter(Boolean) : [];

    const resend = getResendClient();
    // Lead notifications go to the Cedar Valley Investment Group inbox.
    const LEAD_TO = process.env.LEAD_EMAIL_TO || 'cedarvalleyinvestmentgroup@gmail.com';
    const { data, error } = await resend.emails.send({
      from: 'Elite Care · For Men <noreply@elitecarecompanion.com>',
      to: [LEAD_TO],
      subject: `New Care Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #FBF7F0; border-radius: 8px;">
          <div style="background-color: #1C4A57; color: white; padding: 22px; text-align: center; border-radius: 12px 12px 0 0;">
            <h1 style="margin: 0; font-size: 22px;">New Care Request</h1>
            <p style="margin: 8px 0 0 0; opacity: 0.85;">Elite Care Companion</p>
          </div>
          <div style="background-color: #FFFDF8; padding: 28px; border-radius: 0 0 12px 12px;">
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 18px;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #1C4A57; width: 34%;">Name:</td>
                <td style="padding: 8px 0; color: #51605F;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #1C4A57;">Phone:</td>
                <td style="padding: 8px 0;"><a href="tel:${phone}" style="color: #B07F1E; text-decoration: none; font-weight: bold;">${phone}</a></td>
              </tr>
              ${who ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #1C4A57;">Care is for:</td>
                <td style="padding: 8px 0; color: #51605F;">${who}</td>
              </tr>` : ''}
              ${helpList.length ? `
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #1C4A57; vertical-align: top;">Needs:</td>
                <td style="padding: 8px 0; color: #51605F;">${helpList.join(', ')}</td>
              </tr>` : ''}
            </table>
            <div style="background-color: #F3EBDC; padding: 15px; border-radius: 8px; text-align: center;">
              <p style="margin: 0; font-weight: bold; color: #1C4A57;">
                Call ${name.split(' ')[0]} back at
                <a href="tel:${phone}" style="color: #B07F1E; text-decoration: none;">${phone}</a>
              </p>
            </div>
          </div>
          <div style="text-align: center; padding: 18px 0; color: #51605F; font-size: 12px;">
            <p>Elite Care Companion · Metro Atlanta · (470) 507-8812</p>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    // Optional: text the team via a carrier email-to-SMS gateway.
    // LEAD_SMS_TO is e.g. "4706963850@mms.cricketwireless.net" — change the
    // gateway here (env) to switch carriers without a code change. Non-blocking.
    const smsTo = process.env.LEAD_SMS_TO;
    if (smsTo) {
      const smsBody = [
        `New care request`,
        `${name} ${phone}`,
        who ? `For: ${who}` : null,
        helpList.length ? helpList.join(', ') : null,
      ]
        .filter(Boolean)
        .join('\n')
        .slice(0, 300);
      try {
        await resend.emails.send({
          from: 'Elite Care Companion <noreply@elitecarecompanion.com>',
          to: [smsTo],
          subject: 'New lead',
          text: smsBody,
        });
      } catch (smsErr) {
        // Don't fail the submission if the text gateway misbehaves.
        console.error('SMS gateway send failed:', smsErr);
      }
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    );
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
