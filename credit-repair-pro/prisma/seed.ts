import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  // Create admin user
  const passwordHash = await bcrypt.hash("watson1965", 12);

  const admin = await prisma.user.upsert({
    where: { email: "twatson26" },
    update: {},
    create: {
      email: "twatson26",
      passwordHash,
      name: "Admin",
    },
  });

  console.log("Created admin user:", admin.email);

  // Seed letter templates
  const templates = [
    {
      name: "General Dispute Letter",
      description:
        "Standard dispute letter for inaccurate information on credit report. Used for general disputes with credit bureaus.",
      category: "GENERAL_DISPUTE" as const,
      content: `[DATE]

[BUREAU_NAME]
[BUREAU_ADDRESS]

Re: Dispute of Inaccurate Information

Dear Sir/Madam,

I am writing to dispute inaccurate information on my credit report. Under the Fair Credit Reporting Act (FCRA), I have the right to dispute any information that I believe to be incorrect.

My Information:
Name: [CLIENT_NAME]
Address: [CLIENT_ADDRESS]
SSN: XXX-XX-[LAST_4_SSN]
Date of Birth: [DOB]

I am disputing the following item(s):

Account Name: [ACCOUNT_NAME]
Account Number: [ACCOUNT_NUMBER]
Reason for Dispute: [DISPUTE_REASON]

This information is inaccurate because: [EXPLANATION]

Under the FCRA, you are required to:
1. Investigate this dispute within 30 days
2. Remove or correct any information that cannot be verified
3. Provide me with written notification of the results

Please investigate this matter and correct my credit report accordingly.

Sincerely,

[CLIENT_SIGNATURE]
[CLIENT_NAME]

Enclosures:
- Copy of ID
- Copy of Social Security Card
- Proof of Address`,
    },
    {
      name: "Debt Validation Letter",
      description:
        "Request for debt validation from collection agencies under FDCPA. Demands proof of debt ownership and amount.",
      category: "DEBT_VALIDATION" as const,
      content: `[DATE]

[COLLECTOR_NAME]
[COLLECTOR_ADDRESS]

Re: Debt Validation Request
Account Reference: [ACCOUNT_NUMBER]

Dear Sir/Madam,

I am writing in response to your communication regarding the above-referenced account. Under the Fair Debt Collection Practices Act (FDCPA), 15 U.S.C. § 1692g, I am requesting validation of this alleged debt.

Please provide the following:

1. Complete documentation proving I owe this debt
2. Original signed contract or agreement between myself and the original creditor
3. Complete payment history from the original creditor
4. Proof of your authority to collect this debt in my state
5. Your collection agency license number
6. Name and address of the original creditor
7. Amount of the original debt and itemization of current amount

Until you provide proper validation as requested above, please:
- Cease all collection activities
- Do not report this debt to any credit bureau
- Do not sell or transfer this debt

Be advised that if you continue collection activities without providing validation, I will file complaints with:
- Consumer Financial Protection Bureau (CFPB)
- Federal Trade Commission (FTC)
- [STATE] Attorney General's Office

This is not a refusal to pay, but a request to verify that this debt is valid and that you have the legal right to collect it.

Sincerely,

[CLIENT_NAME]
[CLIENT_ADDRESS]

Sent via Certified Mail #: _______________`,
    },
    {
      name: "Goodwill Deletion Letter",
      description:
        "Request for creditor to remove late payments as a goodwill gesture due to otherwise good payment history.",
      category: "GOODWILL" as const,
      content: `[DATE]

[CREDITOR_NAME]
[CREDITOR_ADDRESS]

Re: Goodwill Adjustment Request
Account Number: [ACCOUNT_NUMBER]

Dear Customer Relations Department,

I am writing to request a goodwill adjustment to my account. I have been a valued customer of [CREDITOR_NAME] and am hoping you will consider removing a late payment notation from my credit report.

Account Details:
Account Number: [ACCOUNT_NUMBER]
Late Payment Date(s): [LATE_PAYMENT_DATES]

The late payment(s) occurred due to [EXPLANATION - e.g., unexpected medical emergency, temporary job loss, family emergency]. Since that time, I have:
- Maintained perfect payment history
- Kept my account in good standing
- [OTHER POSITIVE ACTIONS]

I am currently working to improve my credit profile in order to [GOAL - e.g., purchase a home, refinance, qualify for better rates]. This single negative mark is significantly impacting my credit score and my ability to achieve my financial goals.

I understand this is a discretionary decision, but given my otherwise excellent payment history with your company, I am hoping you will consider this request as a gesture of goodwill.

If approved, please update my account with all three credit bureaus (Equifax, Experian, and TransUnion) to reflect the removal of the late payment notation.

Thank you for your time and consideration. I truly appreciate your review of this request.

Sincerely,

[CLIENT_NAME]
[CLIENT_ADDRESS]
[CLIENT_PHONE]
[CLIENT_EMAIL]`,
    },
    {
      name: "Pay for Delete Letter",
      description:
        "Negotiation letter offering to pay debt in exchange for removal from credit report.",
      category: "PAY_FOR_DELETE" as const,
      content: `[DATE]

[COLLECTOR/CREDITOR_NAME]
[ADDRESS]

Re: Settlement Offer with Deletion Agreement
Account Number: [ACCOUNT_NUMBER]
Original Creditor: [ORIGINAL_CREDITOR]
Claimed Balance: [CLAIMED_BALANCE]

Dear Collections Manager,

I am writing regarding the above-referenced account. I am prepared to resolve this matter and am requesting a "pay for delete" agreement.

I propose the following terms:

Settlement Amount: $[SETTLEMENT_AMOUNT]
(This represents [XX]% of the claimed balance)

In exchange for my payment, you agree to:
1. Accept $[SETTLEMENT_AMOUNT] as payment in full satisfaction of this debt
2. Delete ALL references to this account from Equifax, Experian, and TransUnion within 30 days of receiving payment
3. Not sell, assign, or transfer this account to any other party
4. Provide written confirmation of this agreement before I submit payment

Payment Terms:
- I will provide certified funds within 10 business days of receiving your written agreement
- Payment will be made via [cashier's check/money order] only
- Payment is contingent upon receiving signed agreement first

Please respond in writing with your acceptance or counter-proposal. This offer expires 30 days from the date of this letter.

IMPORTANT: I will not agree to "update to paid" or "settled" status. The only acceptable resolution is complete deletion from all credit bureaus.

Sincerely,

[CLIENT_NAME]
[CLIENT_ADDRESS]

*Do not contact me by phone. All communication must be in writing.*`,
    },
    {
      name: "Identity Theft Dispute",
      description:
        "Dispute letter for fraudulent accounts opened due to identity theft, with FTC affidavit reference.",
      category: "IDENTITY_THEFT" as const,
      content: `[DATE]

[BUREAU_NAME]
[BUREAU_ADDRESS]

Re: Identity Theft Dispute - Block of Fraudulent Information
Reference: FCRA Section 605B

Dear Fraud Department,

I am a victim of identity theft and am writing to dispute fraudulent information appearing on my credit report. Under Section 605B of the Fair Credit Reporting Act, I am requesting that you block the following fraudulent accounts from my credit file.

My Information:
Name: [CLIENT_NAME]
Address: [CLIENT_ADDRESS]
SSN: XXX-XX-[LAST_4_SSN]
Date of Birth: [DOB]

Fraudulent Account(s) to be Blocked:

Account #1:
- Creditor Name: [CREDITOR_1]
- Account Number: [ACCOUNT_1]
- Date Opened: [DATE_OPENED_1]
- Amount: [AMOUNT_1]

[REPEAT FOR ADDITIONAL ACCOUNTS]

I am enclosing the following documentation as required:

1. FTC Identity Theft Report/Affidavit
2. Copy of police report (Report #: [POLICE_REPORT_NUMBER])
3. Copy of government-issued photo ID
4. Proof of address (utility bill/bank statement)

Under Section 605B, you are required to:
- Block the fraudulent information within 4 business days
- Notify the furnishers that the information resulted from identity theft
- Not report the blocked information

This request is being sent to all three credit bureaus simultaneously.

Sincerely,

[CLIENT_NAME]

Enclosures:
- FTC Identity Theft Affidavit
- Police Report
- Copy of Driver's License/ID
- Proof of Address
- Supporting Documentation`,
    },
    {
      name: "Hard Inquiry Removal",
      description:
        "Request to remove unauthorized hard inquiries from credit report.",
      category: "INQUIRY_REMOVAL" as const,
      content: `[DATE]

[BUREAU_NAME]
[BUREAU_ADDRESS]

Re: Removal of Unauthorized Hard Inquiry

Dear Sir/Madam,

I am writing to dispute an unauthorized hard inquiry appearing on my credit report. I did not authorize this inquiry and request its immediate removal.

My Information:
Name: [CLIENT_NAME]
Address: [CLIENT_ADDRESS]
SSN: XXX-XX-[LAST_4_SSN]

Unauthorized Inquiry Details:
Company Name: [INQUIRY_COMPANY]
Date of Inquiry: [INQUIRY_DATE]

I have no knowledge of this company and did not apply for credit with them. This inquiry was made without my consent and may be evidence of attempted identity theft or fraud.

Under the Fair Credit Reporting Act:
- Section 604 limits permissible purposes for accessing credit reports
- Section 611 requires investigation of disputed items
- Unauthorized access is a violation of federal law

Please investigate this matter and remove this unauthorized inquiry from my credit report within 30 days as required by law.

Additionally, please provide me with:
1. Written confirmation of the removal
2. Documentation of what [INQUIRY_COMPANY] provided as their permissible purpose

If this inquiry was indeed unauthorized, please also provide information on how to file a complaint against the company for illegal access to my credit file.

Sincerely,

[CLIENT_NAME]
[CLIENT_ADDRESS]

Enclosures:
- Copy of ID
- Copy of Credit Report showing inquiry`,
    },
  ];

  for (const template of templates) {
    await prisma.letterTemplate.upsert({
      where: { id: template.name.toLowerCase().replace(/\s+/g, "-") },
      update: template,
      create: {
        id: template.name.toLowerCase().replace(/\s+/g, "-"),
        ...template,
      },
    });
    console.log("Created/updated template:", template.name);
  }

  console.log("Seed completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
