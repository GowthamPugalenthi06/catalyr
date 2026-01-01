import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ message: "Method not allowed" });
    }

    try {
        const { name, email, message } = req.body || {};

        if (!name || !email || !message) {
            return res.status(400).json({ message: "All fields required" });
        }

        await resend.emails.send({
            from: "Catalyr <contact@catalyr.com>",
            to: ["catalyr06@gmail.com"], 
            subject: `New Contact — ${name}`,
            html: `
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
        });

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error(err);
        return res.status(500).json({ message: "Email failed" });
    }
}
