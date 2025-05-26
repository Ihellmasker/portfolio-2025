import { type NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import Mail from "nodemailer/lib/mailer";

export async function POST(request: NextRequest) {
    const { email, name, message } = await request.json();

    const transport = nodemailer.createTransport({
        service: "gmail",
        /* 
            setting service as 'gmail' is same as providing these setings:
            host: "smtp.gmail.com",
            port: 465,
            secure: true
            If you want to use a different email provider other than gmail, you need to provide these manually.
            Or you can go use these well known services and their settings at
            https://github.com/nodemailer/nodemailer/blob/master/lib/well-known/services.json
        */
        auth: {
            user: process.env.SEND_FROM,
            pass: process.env.SEND_PASSWORD,
        },
    });

    const mailOptions: Mail.Options = {
        from: process.env.SEND_FROM,
        to: process.env.SEND_TO,
        subject: `AndysThings contact form.`,
        html: `<!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8" />
                <title>New Contact Form Submission</title>
            </head>
            <body style="margin: 0; padding: 0; background-color: #121212; font-family: Arial, sans-serif; color: #ffffff;">
                <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #121212; padding: 40px;">
                    <tr>
                        <td align="center">
                            <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; background-color: #1e1e1e; padding: 30px; border-radius: 8px;">
                                <tr>
                                <td align="center" style="font-size: 18px; font-weight: bold; color: #7fffd4; padding-bottom: 10px;">
                                    andysthings.com
                                </td>
                                </tr>
                                <tr>
                                <td align="center" style="font-size: 22px; font-weight: bold; color: #ffffff; padding-bottom: 30px;">
                                    Website Contact
                                </td>
                                </tr>
                                <tr>
                                <td style="font-size: 16px; line-height: 1.6; color: #dcdcdc; padding-bottom: 30px;">
                                    ${message.replace("\n", "<br />")}
                                    <br /><br /><strong>${name}</strong><br />
                                    <a href="mailto:${email}">${email}</a>
                                </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>
        `,
    };

    const sendMailPromise = () =>
        new Promise<string>((resolve, reject) => {
            transport.sendMail(mailOptions, function (err) {
                if (!err) {
                    resolve("Email sent");
                } else {
                    reject(err.message);
                }
            });
        });

    try {
        await sendMailPromise();
        return NextResponse.json({ message: "Email sent" });
    } catch (err) {
        return NextResponse.json({ error: err }, { status: 500 });
    }
}
