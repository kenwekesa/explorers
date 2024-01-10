import { emailTemplate } from "../emailing/emailTemplate.js";
import { sendEmail } from "../emailing/emailSender.js";

export const createMail = async (req, res, next) => {
    const htmlBody = emailTemplate();

    const {email} = req.body

    const emailResult = await sendEmail(email, "Email Title", 
        htmlBody);
    
    // console.log(req.body)
}