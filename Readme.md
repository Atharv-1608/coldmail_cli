# 📧 Cold Email CLI Tool

A **Node.js command-line application** that sends personalized cold emails in bulk using:

- a CSV file for contacts
- a text template for email content

The script reads contacts, fills in a Handlebars template, and sends emails **one at a time with a safe delay** to avoid spam or account blocking.

---

## ✨ Features

- 📄 Reads contacts from a CSV file  
- ✉️ Personalized emails using templates  
- 🔐 Uses environment variables for security  
- ⏳ Built-in rate limiting (7 seconds between emails)  
- 🖥️ Runs directly from the terminal  

---

## 🛠 Tech Stack

- Node.js
- Nodemailer
- csv-parser
- Handlebars
- dotenv

---

## 📁 Project Structure

project-root/
│
├── contacts.csv # List of recipients
├── template.txt # Email template
├── index.js # Main script
├── .env # Email credentials (ignored by git)
├── .gitignore
├── package.json
└── README.md


---

## 📦 Setup Instructions

### 1️⃣ Install dependencies

Make sure Node.js is installed, then run:

```bash
npm install

Environment Variables

Create a .env file in the project root:

EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password

⚠️ Important notes:


Use a Gmail App Password, not your actual Gmail password


Never commit .env to version control


Ensure .env is in .gitignore:
.env


📄 CSV Format (contacts.csv)
The CSV file must include these headers:
name,email,company
John Doe,john@example.com,Google
Jane Smith,jane@example.com,Microsoft


✍️ Email Template (template.txt)
Uses Handlebars placeholders:
Hi {{name}},

I came across {{company}} and liked what your team is working on.

Would love to connect and explore possibilities.

Best regards,
Atharv


▶️ How to Run the Script
From the project directory:
node index.js

The script will:


Load contacts from contacts.csv


Generate personalized emails


Send them one by one


Wait 7 seconds between each email



⏳ Rate Limiting
A delay is added after each email:
await new Promise((r) => setTimeout(r, 7000));

This helps:


Prevent Gmail blocking


Reduce spam risk


Improve email deliverability



❗ Common Issues
Emails not sending


Check .env values


Verify App Password is correct


Ensure internet connection


Emails going to spam


Avoid spammy subject lines


Personalize content


Increase delay if needed



⚠️ Disclaimer
This tool is for responsible outreach only.
Do not use it for spam or in violation of email service provider policies.

👨‍💻 Author
Built by Atharv
A simple, practical cold email automation tool built for learning and real use.

---

If you want next:
- cleaner **folder config**
- CLI arguments (`node index.js --csv`)
- logging sent / failed emails
- HTML email support  

Just say the word 🔥
