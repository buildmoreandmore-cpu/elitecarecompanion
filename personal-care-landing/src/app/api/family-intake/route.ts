import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const getResendClient = () => {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error('RESEND_API_KEY environment variable is not set');
  }
  return new Resend(apiKey);
};

function val(v: unknown): string {
  if (Array.isArray(v)) return v.filter(Boolean).join(', ');
  return typeof v === 'string' ? v.trim() : '';
}

function row(label: string, value: string) {
  if (!value) return '';
  return `
    <tr>
      <td style="padding: 7px 0; font-weight: bold; color: #1C4A57; width: 38%; vertical-align: top;">${label}:</td>
      <td style="padding: 7px 0; color: #51605F; vertical-align: top;">${value}</td>
    </tr>`;
}

function section(title: string, rowsHtml: string) {
  if (!rowsHtml.trim()) return '';
  return `
    <h2 style="font-size: 14px; letter-spacing: .06em; text-transform: uppercase; color: #B07F1E; margin: 26px 0 8px;">${title}</h2>
    <table style="width: 100%; border-collapse: collapse;">${rowsHtml}</table>`;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as Record<string, unknown>;

    const recipientName = val(body.recipientName);
    const familyName = val(body.familyName);
    const familyPhone = val(body.familyPhone);
    const familyEmail = val(body.familyEmail);
    const acknowledgeSignature = val(body.signature);

    if (!recipientName || !familyName || !familyPhone || !familyEmail || !acknowledgeSignature) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    const html = `
      <div style="font-family: Arial, sans-serif; max-width: 640px; margin: 0 auto; padding: 20px; background-color: #FBF7F0; border-radius: 8px;">
        <div style="background-color: #1C4A57; color: white; padding: 22px; text-align: center; border-radius: 12px 12px 0 0;">
          <h1 style="margin: 0; font-size: 22px;">New Family Intake Form</h1>
          <p style="margin: 8px 0 0 0; opacity: 0.85;">Elite Care Companion</p>
        </div>
        <div style="background-color: #FFFDF8; padding: 28px; border-radius: 0 0 12px 12px;">

          ${section('A. About Him', [
            row('Full name', recipientName),
            row('Preferred name', val(body.preferredName)),
            row('Date of birth', val(body.dob)),
            row('Primary language', val(body.primaryLanguage)),
            row('Home address', val(body.homeAddress)),
          ].join(''))}

          ${section('B. Family Contact', [
            row('Name', familyName),
            row('Relationship', val(body.relationship)),
            row('Phone', familyPhone),
            row('Email', familyEmail),
            row('Best time to reach', val(body.bestContact)),
            row('Emergency contact', val(body.emergencyContact)),
          ].join(''))}

          ${section('C. When Care Is Needed', [
            row('Urgency', val(body.urgency)),
            row('Desired start date', val(body.startDate)),
            row('Hours per day', val(body.hoursPerDay)),
            row('Days per week', val(body.daysPerWeek)),
            row('Preferred times', val(body.preferredTimes)),
            row('Shift type', val(body.shiftType)),
            row('Transportation needed', val(body.transportation)),
          ].join(''))}

          ${section('D. Daily Living & Care Needs', [
            row('Care needs', val(body.careNeeds)),
            row('Other / things to avoid', val(body.otherTasks)),
          ].join(''))}

          ${section('E. Health Snapshot', [
            row('Diagnoses', val(body.diagnoses)),
            row('Allergies', val(body.allergies)),
            row('Dietary restrictions', val(body.dietaryRestrictions)),
            row('Mobility aids', val(body.mobilityAids)),
            row('Physician', val(body.physician)),
            row('Pharmacy', val(body.pharmacy)),
            row('Medications', val(body.medications)),
          ].join(''))}

          ${section('F. Getting To Know Him', [
            row('Hobbies & interests', val(body.hobbies)),
            row('Daily routines', val(body.routines)),
            row('Favorite foods', val(body.favoriteFoods)),
            row('Music / shows / movies', val(body.media)),
            row('Faith / spiritual practices', val(body.faith)),
            row('Former career', val(body.career)),
            row('Family / pets / people', val(body.family)),
            row('Temperament', val(body.temperament)),
            row('Triggers to avoid', val(body.triggers)),
          ].join(''))}

          ${section('G. Payment & Billing', [
            row('Preferred payment method', val(body.paymentMethod)),
            row('Billing frequency', val(body.billingFrequency)),
            row('Estimated weekly hours', val(body.estimatedHours)),
            row('Billing email', val(body.billingEmail)),
          ].join(''))}

          ${section('Acknowledgment', [
            row('Private-pay acknowledged & signed by', acknowledgeSignature),
          ].join(''))}

          <div style="background-color: #F3EBDC; padding: 15px; border-radius: 8px; text-align: center; margin-top: 20px;">
            <p style="margin: 0; font-weight: bold; color: #1C4A57;">
              Call ${familyName.split(' ')[0]} back at
              <a href="tel:${familyPhone}" style="color: #B07F1E; text-decoration: none;">${familyPhone}</a>
            </p>
          </div>
        </div>
        <div style="text-align: center; padding: 18px 0; color: #51605F; font-size: 12px;">
          <p>Elite Care Companion · Metro Atlanta · (470) 840-0575</p>
        </div>
      </div>
    `;

    const resend = getResendClient();
    const LEAD_TO = process.env.LEAD_EMAIL_TO || 'cedarvalleyinvestmentgroup@gmail.com';
    const { data, error } = await resend.emails.send({
      from: 'Elite Care · For Men <noreply@elitecarecompanion.com>',
      to: [LEAD_TO],
      replyTo: familyEmail,
      subject: `New Family Intake: ${recipientName} (from ${familyName})`,
      html,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }

    const smsTo = process.env.LEAD_SMS_TO;
    if (smsTo) {
      try {
        await resend.emails.send({
          from: 'Elite Care Companion <noreply@elitecarecompanion.com>',
          to: [smsTo],
          subject: 'New intake form',
          text: `New family intake for ${recipientName}, submitted by ${familyName} ${familyPhone}`.slice(0, 300),
        });
      } catch (smsErr) {
        console.error('SMS gateway send failed:', smsErr);
      }
    }

    return NextResponse.json({ message: 'Email sent successfully', id: data?.id }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
