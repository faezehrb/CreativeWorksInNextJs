import { NextResponse,NextRequest } from "next/server"
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  const { name, email, message }: any = req.body

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'froohbakhsh@gmail.com', // Your Gmail email address
        pass: '', // Your Gmail password or App Password
      },
    })
    
    await transporter.sendMail({
      from: `${email}`, // Sender email address
      to: 'froohbakhsh@gmail.com', // Your Gmail email address
      subject: 'New message from your website',
      html: `
      <p>Name: ${name}</p>
      <p>Email: ${email}</p>
      <p>Message: ${message}</p>
      `,
    })
    console.log('heloo there')

    NextResponse.json({ success: true })
  } catch (error) {
    console.error('Error sending email:', error)
    NextResponse.json({ success: false })
  }
}
