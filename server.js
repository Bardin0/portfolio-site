const express = require("express");
const nodemailer = require("nodemailer");
const multer = require("multer");
const upload = multer();

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.post("/send-email", upload.none(), async (req, res) => {
    const { name, email, message } = req.body;

    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your-email@gmail.com",
            pass: "your-email-password"
        }
    });

    let mailOptions = {
        from: email,
        to: "your-email@gmail.com",
        subject: `New Contact Form Submission from ${name}`,
        text: message
    };

    try {
        await transporter.sendMail(mailOptions);
        res.status(200).send("Email sent successfully");
    } catch (error) {
        res.status(500).send("Error sending email");
    }
});

app.listen(3000, () => console.log("Server running on port 3000"));