#!/usr/bin/env node
const fs = require("fs");
const csv = require("csv-parser");
const Handlebars = require("handlebars");
require("dotenv").config();
const nodemailer = require("nodemailer");

// Load template
const templateContent = fs.readFileSync("template.txt", "utf-8");
const template = Handlebars.compile(templateContent);

// Store users
const users = [];

// Create transporter (recommended SMTP config)
const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD
  }
});

// Read CSV
fs.createReadStream("contacts.csv")
  .pipe(csv())
  .on("data", (row) => {
    users.push({
      name: row.name,
      email: row.email,
      company: row.company
    });
  })
  .on("end", async () => {
    console.log(`Loaded ${users.length} users`);

    for (const user of users) {
      // Render template
      const emailBody = template(user);

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: user.email,
        subject: "This is me . Hello World!",
        text: emailBody
      };

      try {
        await transporter.sendMail(mailOptions);
        console.log(` Email sent to ${user.email}`);
      } catch (err) {
        console.error(` Failed for ${user.email}`, err.message);
      }

      // ⏳ Rate limit (VERY IMPORTANT)
      await new Promise((r) => setTimeout(r, 7000)); // 7 sec delay
    }

    console.log("All emails processed");
  });
