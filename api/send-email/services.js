// const axios = require('axios');

// const sendConfirmationEmail = async (userEmail) => {
//   try {
//     // ส่งอีเมลยืนยันการจองไปยังตัวเองหรือ API ที่คุณใช้
//     // ตัวอย่างนี้จะใช้ Mock API ที่ localhost:4090
//     await axios.post('http://localhost:4090/api/send-email', {
//       userEmail,
//     });
//     console.log('Confirmation email sent successfully!');
//   } catch (error) {
//     console.error('Error sending confirmation email:', error);
//     throw new Error('Failed to send confirmation email');
//   }
// };

// module.exports = {
  
//     sendConfirmationEmail
//   };

const nodemailer = require('nodemailer');

const sendConfirmationEmail = async (email) => {
  try {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "58bcdba082a617",
           pass: "176931192ff1b4"
      }
    });

    await transport.sendMail({
      from: '"Your Name" <your_email@example.com>',
      to: email,
      subject: "Booking Confirmation",
      text: "Your booking has been confirmed.",
      html: "<b>Your booking has been confirmed.</b>",
    });

    console.log('Confirmation email sent successfully!');
  } catch (error) {
    console.error('Error sending confirmation email:', error);
    throw new Error('Failed to send confirmation email');
  }
};

module.exports = {
  sendConfirmationEmail
};

  