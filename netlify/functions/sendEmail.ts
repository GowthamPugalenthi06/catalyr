import type { Handler } from "@netlify/functions";
import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

export const handler: Handler = async (event) => {
  try {
    if (!event.body) {
      return { statusCode: 400, body: "No data" };
    }

    const data = JSON.parse(event.body);

    const userEmail = data.email;
    const projectType = data.projectType || "Not specified";

    await sgMail.send({
      to: userEmail,
      from: "contact@catalyr.in", // must be verified in SendGrid
      subject: "Thanks for contacting Catalyr 👋",
      html: `
        <div style="font-family:Arial; line-height:1.6">
          <h2>Thanks for reaching out!</h2>
          <p>We’ve received your request regarding:</p>
          <b>${projectType}</b>
          <p>Our team will get back to you shortly.</p>
          <br />
          <p>— Catalyr Team</p>
        </div>
      `,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true }),
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: "Email failed",
    };
  }
};
