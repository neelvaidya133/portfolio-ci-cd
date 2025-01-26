import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    // Validate input
    if (!name || !email || !message) {
      return res.status(400).json({ message: "All fields are required." });
    }

    try {
      // Configure nodemailer
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Or use any other email service
        auth: {
          user: process.env.EMAIL_USER, // Your email address
          pass: process.env.EMAIL_PASS, // Your email password or app password
        },
      });

      // Email content
      const mailOptions = {
        from: `"${name}" <${email}>`, // Sender's email
        to: process.env.EMAIL_RECEIVER, // Your email address to receive messages
        subject: `New message from ${name}`,
        text: message,
        html: `
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Message:</strong> ${message}</p>
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Message sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ message: "Failed to send the message." });
    }
  } else {
    return res.status(405).json({ message: "Method not allowed." });
  }
}
