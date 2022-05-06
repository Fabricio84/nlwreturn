import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "81d05fd16d3342",
      pass: "86617de781277e"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
   async sendMail({ subject, body }: SendMailData) {
       await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Fabricio Souza <fabricio.abner@gmail.com>',
        subject,
        html: body
    });
   }
}