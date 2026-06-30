import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import fs from 'fs';
import path from 'path';

export async function POST(req: Request) {
  try {
    let data: any = {};
    const attachments: any[] = [];
    
    // Check if it's multipart form data or json
    const contentType = req.headers.get("content-type") || "";
    
    if (contentType.includes("multipart/form-data")) {
      const formData = await req.formData();
      for (const [key, value] of formData.entries()) {
        if (typeof value === "object" && value !== null && "name" in value) {
          const file = value as any;
          if (file.size > 0) {
            const buffer = Buffer.from(await file.arrayBuffer());
            attachments.push({
              filename: file.name,
              content: buffer,
            });
          }
        } else {
          data[key] = value;
        }
      }
    } else {
      data = await req.json();
    }
    
    // Read dynamic email from settings
    const settingsFilePath = path.join(process.cwd(), 'data', 'settings.json');
    let toEmail = "hello@getcatalyr.com"; // fallback
    if (fs.existsSync(settingsFilePath)) {
      const settings = JSON.parse(fs.readFileSync(settingsFilePath, 'utf8'));
      if (settings?.company?.mainEmail) toEmail = settings.company.mainEmail;
    }

    // Use SMTP configuration from environment or fallback to mock
    // For production, you must set SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS in .env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.ethereal.email',
      port: Number(process.env.SMTP_PORT) || 587,
      secure: Number(process.env.SMTP_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER || 'mock_user',
        pass: process.env.SMTP_PASS || 'mock_pass',
      },
    });

    const mailOptions = {
      from: `"Catalyr Website" <noreply@catalyr.com>`,
      to: toEmail,
      subject: `New Project Inquiry from ${data.your_name}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><strong>Name:</strong> ${data.your_name}</p>
        <p><strong>Email:</strong> ${data.your_email}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Budget:</strong> ${data.budget}</p>
        <p><strong>Message:</strong></p>
        <p>${data.your_text}</p>
      `,
      attachments,
    };

    // If no real SMTP is provided, we just log it and simulate success
    if (!process.env.SMTP_HOST) {
      console.log("Mock Email Sent:", mailOptions);
      return NextResponse.json({ success: true, message: "Mock email sent (Configure SMTP in .env)" });
    }

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true });
    
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}
