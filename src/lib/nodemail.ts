import nodemailer from 'nodemailer';
import { config } from 'dotenv';

export const sendEmailVerify = async (subject: string, to: string, html: string) => {

    config();

    const transporter = nodemailer.createTransport({
        host: 'smtp.mailtrap.io',
        port: 2525,
        auth:{
            user: process.env.EMAIL_USERNAME,
            pass: process.env.EMAIL_PASSWORD
        }
    });


    const mailOptions = {
        from: 'social@ecorbero.com',
        to: to,
        subject: subject,
        html: html,
    };

    await transporter.sendMail( mailOptions );

} 