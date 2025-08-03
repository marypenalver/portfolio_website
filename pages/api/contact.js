import { Resend } from 'resend';

const resend= new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
    if (req.method !== 'POST') {
      return res.status(405).json({ message: 'Method Not Allowed' });
    }
  
    const { name, email, message } = req.body;
  
    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ message: 'Missing required fields' });
    }
    try {
        const data = await resend.emails.send({
          from: 'Maria Penalver <contact@mariapenalver.me>',
          to: ['mariapenalverphotos@gmail.com'],
          subject: 'New Contact Form Message',
          html: `
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p>${message}</p>
          `,
        });
        return res.status(200).json({message: 'Email sent successfully',data})
    } catch(error){
        console.error(error);
        return res.status(500).json({message: 'Failed to send email', error})
    }
}
  