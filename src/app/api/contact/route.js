import nodemailer from 'nodemailer'

export async function POST(request) {
  try {
    const { name, email, message } = await request.json()

    if (!name || !email || !message) {
      return Response.json({ error: 'Missing fields' }, { status: 400 })
    }

    const { EMAIL_SERVICE, EMAIL_USER, EMAIL_PASSWORD } = process.env
    if (!EMAIL_SERVICE || !EMAIL_USER || !EMAIL_PASSWORD) {
      console.error('Missing email env vars:', {
        EMAIL_SERVICE: Boolean(EMAIL_SERVICE),
        EMAIL_USER: Boolean(EMAIL_USER),
        EMAIL_PASSWORD: Boolean(EMAIL_PASSWORD),
      })
      return Response.json({ error: 'Email service not configured' }, { status: 500 })
    }

    const transporter = nodemailer.createTransport({
      service: EMAIL_SERVICE,
      auth: {
        user: EMAIL_USER,
        pass: EMAIL_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      replyTo: email,
      subject: `New message from ${name}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 40px; background: #0f0f0f; color: #e8e4dc;">
          <h2 style="color: #c8a96e; font-weight: 300; margin-bottom: 24px;">New Portfolio Message</h2>
          <p><strong style="color: #c8a96e;">Name:</strong> ${name}</p>
          <p><strong style="color: #c8a96e;">Email:</strong> ${email}</p>
          <hr style="border-color: rgba(255,255,255,0.1); margin: 24px 0;" />
          <p style="line-height: 1.8; white-space: pre-wrap;">${message}</p>
        </div>
      `,
    })

    return Response.json({ success: true })
  } catch (err) {
    console.error('Email error:', err)
    return Response.json({ error: 'Failed to send' }, { status: 500 })
  }
}
