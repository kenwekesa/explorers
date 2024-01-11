//emailSender.js
import nodemailer from 'nodemailer';
import { emailTemplate } from './emailTemplate.js';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kenwek1994@gmail.com',
    pass: 'urmbluppknnqdeow'
  }
});

export const sendEmail = async (to, subject, message, action, img) => {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'kenwek1994@gmail.com',
      to: Array.isArray(to) ? to.join(', ') : to,
      subject:subject,
      // html: emailTemplate(subject, htmlBody)
      html: message,
      action: action,
      img: img
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Internal Server Error' };
  }
};
