const nodemailer = require("nodemailer");

async function sendMail({ from, to, subject, text, html }) {
  // console.log(process.env.MAIL_USER);
  // console.log(process.env.MAIL_PASS);
  let transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    secure: false,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });
  try {
    let info = await transporter.sendMail({
      from: `Sharefile ${from}`,
      to,
      subject,
      text,
      html,
    });
    console.log(info);
  } catch (err) {
    console.log(err);
  }
}

module.exports = sendMail;
