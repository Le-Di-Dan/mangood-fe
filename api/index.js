require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const nodeMailer = require("nodemailer");
const { client, admin, render } = require("./template");

const transporter = nodeMailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    user: process.env.MAIL_SUPPORT_NAME,
    pass: process.env.MAIL_SUPPORT_PASSWORD,
  },
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

const mailOptions = {
  from: `"Mangood support" <${process.env.MAIL_SUPPORT_NAME}>`,
  to: "",
  subject: "Xin chào",
  html: "<h1>Xin chào, đây là mail được gửi tử mangood.</h1>",
};

app.post("/api/support-mail", (req, res) => {
  const { client_name, client_email, content } = req.body;
  transporter.sendMail(
    {
      ...mailOptions,
      to: process.env.MAIL_ADMIN,
      subject: "Mangood report mail.",
      html: render(admin, {
        "{{user}}": client_name,
        "{{content}}": content,
        "{{user_email}}": client_email,
      }),
    },
    (err) => {
      if (!err) {
        console.log("Mail sent to admin");
        return;
      }
      console.log(err);
      res.send("Send failed");
    }
  );
  transporter.sendMail(
    {
      ...mailOptions,
      to: client_email,
      subject: `Hi ${client_name}`,
      html: render(client, { "{{user}}": client_name }),
    },
    (err) => {
      if (!err) {
        console.log("Mail sent to client");
        res.send("Successful");
      }
      console.log(err);
      res.send("Send failed");
    }
  );
});

app.listen(5555, () => console.log("on port 5555"));

module.exports = app;
