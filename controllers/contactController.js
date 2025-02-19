const Inquiry = require("../models/Inquiry");
const nodemailer = require("nodemailer");

exports.sendInquiry = async (req, res) => {
  const { name, email, message } = req.body;
  await Inquiry.create({ name, email, message });

  // Send Email Notification
  const transporter = nodemailer.createTransport({ service: "Gmail", auth: { user: process.env.EMAIL, pass: process.env.PASSWORD } });
  await transporter.sendMail({ from: process.env.EMAIL, to: email, subject: "Inquiry Received", text: "We will get back to you soon!" });

  res.json({ message: "Inquiry submitted successfully" });
};
