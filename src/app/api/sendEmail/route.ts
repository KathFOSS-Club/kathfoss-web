
import { Resend } from 'resend';
import { z } from 'zod';
import { contactSchema } from '@/utils/contactSchema';

const resend = new Resend(process.env.RESEND_API_KEY!);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const formData = contactSchema.parse(body);
    // Construct the email content
    const emailContent = `
      <p><strong>Name:</strong> ${formData.name}</p>
      <p><strong>Phone:</strong> ${formData.phone}</p>
      <p><strong>Email:</strong> ${formData.email}</p>
      <p><strong>Message:</strong></p>
      <p>${formData.message}</p>
    `;

    // Send the email
    const result = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'kathfoss@kathford.edu.np',
      subject: `New Contact Form Submission from ${formData.name}`,
      html: emailContent,
    });

    return new Response(JSON.stringify({ message: 'Email sent successfully', result }), { status: 200 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return new Response(JSON.stringify({ error: error.errors }), { status: 400 });
    }
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { status: 500 });
  }
}