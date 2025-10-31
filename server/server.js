import express from "express";
import nodemailer from "nodemailer";
import multer from "multer";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const upload = multer({ storage: multer.memoryStorage() });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/api/send-email", upload.array("file"), async (req, res) => {
  const { name, email, country, message ,category,Portfolio} = req.body;
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_APP_PASSWORD,
    },
  });

  try {
    const attachments = req.files?.map((file) => ({
      filename: file.originalname,
      content: file.buffer,
    }));
    await transporter.sendMail({
      from: `Website Form <${process.env.MY_EMAIL}>`,
      to: process.env.MY_EMAIL, 
      replyTo: email, 
      subject: `New message from ${name}`,
      text: `
Category: ${category}
From: ${name}
Email: ${email}
${country ? `Country: ${country}` : ""}
${Portfolio ? `Portfolio Link: ${Portfolio}` : ""}

${message}
  `,
      attachments,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email send error:", error);
    res.status(500).json({ success: false });
  }
});


app.post("/api/newsletter", (req, res) => {
  const { name, email } = req.body;


  // TODO: save to DB or email list service here
  res.json({ success: true });
});


app.use(cors({
  origin: "https://advertisingattitude.netlify.app", // your live frontend
  methods: "POST",
}));
