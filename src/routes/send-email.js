const express = require('express');
const sendEmail = require('../utils/send-email');
const router = express.Router();

// POST - Used to send an email
router.post("/", async (req, res) => {
  try {
    const contactInfo = {
        name: req.body.name,
        email: req.body.email,
        subject: req.body.subject,
        message: req.body.message
    }

    await sendEmail(createEmail(contactInfo));

    res.json({success : "Success", status : 200});
  } catch (e) {
    res.json({error : "Error", status : 500});
    console.log(e);
  }
});

function createEmail({ name, email, subject, message }) {
    const emailText = `
        Name: ${name}<br/>
        Email: ${email}<br/>
        Subject: ${subject}<br/><br/>
        ${message}
    `;

    return Object.freeze({
        from: 'RJReid Contact <contact@rjreid.ca>',
        to: process.env.EMAIL_TO,
        subject: `RJReid Contact Form - ${subject}`,
        html: emailText
    });
};

module.exports = router;