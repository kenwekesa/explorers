// emailSender.js
import nodemailer from 'nodemailer';

// Create a Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'kenwek1994@gmail.com',  // Your Gmail email address
    pass: 'urmbluppknnqdeow'    // Your Gmail password or an app-specific password
  }
});

// Function to send an email
export const sendEmail = async (to, subject, htmlbody) => {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'kenwek1994@gmail.com',  // Your Gmail email address
      to,
      subject,
      html:htmlbody 
    });

    console.log('Message sent: %s', info.messageId);
    return { success: true, message: 'Email sent successfully' };
  } catch (error) {
    console.error('Error sending email:', error);
    return { success: false, error: 'Internal Server Error' };
  }
};