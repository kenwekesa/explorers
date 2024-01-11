
import { emailTemplate } from "../emailing/emailTemplate.js";
import { sendEmail } from "../emailing/emailSender.js";

export const createMail = async (req, res, next) => {
  try {
    // Extracting necessary data from the request body
    const { email } = req.body;

    // Generating HTML body and subject using the emailTemplate function
    //   const { subject, htmlBody } = emailTemplate();
      const { subject } = req.body
      const { message } = req.body
      const { action } = req.body
      const {img} = req.body

    // Specify the subject and HTML body directly in sendEmail function
    const emailResult = await sendEmail(email, subject, message, action, img);

    console.log(req.body);

    // Handle the result of sending the email as needed
    if (emailResult.success) {
      res.status(200).json({ success: true, message: 'Email sent successfully' });
    } else {
      res.status(500).json({ success: false, error: 'Internal Server Error' });
    }
  } catch (error) {
    console.error('Error creating and sending email:', error);
    res.status(500).json({ success: false, error: 'Internal Server Error' });
  }
};

