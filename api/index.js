require("dotenv").config();
const bodyParser = require("body-parser");
const cors = require("cors");
const express = require("express");
const nodeMailer = require("nodemailer");

const transporter = nodeMailer.createTransport({
  host: "smtp.forwardemail.net",
  port: 465,
  secure: true,
  service: "gmail",
  auth: {
    // TODO: replace `user` and `pass` values from <https://forwardemail.net>
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
      to: "didanle74@gmail.com",
      subject: "Mangood report mail.",
      html: `<h1>Người dùng ${client_name} đã gửi nội dung '${content} from ${client_email}'.</h1>`,
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
      subject: `Xin chào ${client_name}`,
      html: `"<h1>Xin chào ${client_name}, đây là mail được gửi từ mangood.</h1>"`,
    },
    (err) => {
      if (!err) {
        console.log("Mail sent to admin");
        res.send("Successful");
      }
      console.log(err);
      res.send("Send failed");
    }
  );
});
// const port = process.env.BE_PORT || 5000;
// app.listen(port, () => console.log(`start server on port ${port}`));

module.exports = app;
