import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

// Create transporter using Brevo SMTP
const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT),
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('Email transporter verification failed:', error);
    } else {
        console.log('✅ Email server is ready to send messages');
    }
});

/**
 * Send notification email to admin when new contact form is submitted
 */
export const sendAdminNotification = async (contactData) => {
    const { name, email, phone, projectDescription } = contactData;

    const mailOptions = {
        from: `"Offshore Dev Labs Website" <${process.env.EMAIL_SENDER}>`,
        to: process.env.NOTIFICATION_EMAIL,
        subject: `🔔 New Contact Form Submission - ${name}`,
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
              padding: 15px;
              background-color: #f5f5f5;
              border-left: 4px solid #0066ff;
              border-radius: 5px;
            }
            .field-label {
              font-weight: bold;
              color: #0066ff;
              margin-bottom: 5px;
            }
            .field-value {
              color: #333;
              word-wrap: break-word;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding: 20px;
              color: #666;
              font-size: 12px;
            }
            .cta-button {
              display: inline-block;
              padding: 12px 30px;
              background-color: #0066ff;
              color: white;
              text-decoration: none;
              border-radius: 5px;
              margin-top: 20px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>🎉 New Contact Form Submission</h1>
              <p>You have received a new inquiry from your website</p>
            </div>
            <div class="content">
              <div class="field">
                <div class="field-label">👤 Name:</div>
                <div class="field-value">${name}</div>
              </div>
              
              <div class="field">
                <div class="field-label">📧 Email:</div>
                <div class="field-value"><a href="mailto:${email}">${email}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">📱 Phone:</div>
                <div class="field-value"><a href="tel:${phone}">${phone}</a></div>
              </div>
              
              <div class="field">
                <div class="field-label">📝 Project Description:</div>
                <div class="field-value">${projectDescription}</div>
              </div>
              
              <div style="text-align: center;">
                <a href="mailto:${email}" class="cta-button">Reply to ${name}</a>
              </div>
            </div>
            <div class="footer">
              <p>This email was sent from Offshore Dev Labs contact form</p>
              <p>Submitted at: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Admin notification sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Error sending admin notification:', error);
        throw error;
    }
};

/**
 * Send confirmation email to the client
 */
export const sendClientConfirmation = async (contactData) => {
    const { name, email } = contactData;

    const mailOptions = {
        from: `"Offshore Dev Labs" <${process.env.EMAIL_SENDER}>`,
        to: email,
        subject: 'Thank you for contacting Offshore Dev Labs',
        html: `
      <!DOCTYPE html>
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              background-color: #f9f9f9;
            }
            .header {
              background: linear-gradient(135deg, #0066ff 0%, #0052cc 100%);
              color: white;
              padding: 30px;
              text-align: center;
              border-radius: 10px 10px 0 0;
            }
            .content {
              background: white;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .footer {
              text-align: center;
              margin-top: 20px;
              padding: 20px;
              color: #666;
              font-size: 12px;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Thank You, ${name}! 🎉</h1>
            </div>
            <div class="content">
              <p>Dear ${name},</p>
              
              <p>Thank you for reaching out to <strong>Offshore Dev Labs</strong>. We have received your inquiry and our team will review it shortly.</p>
              
              <p>We typically respond within <strong>24 hours</strong> during business days. One of our experts will get in touch with you to discuss your project requirements in detail.</p>
              
              <p><strong>What happens next?</strong></p>
              <ul>
                <li>Our team reviews your project requirements</li>
                <li>We'll contact you via email or phone</li>
                <li>We'll schedule a consultation call</li>
                <li>We'll provide you with a detailed proposal</li>
              </ul>
              
              <p>In the meantime, feel free to explore our services and portfolio on our website.</p>
              
              <p><strong>Need immediate assistance?</strong><br>
              📞 Call us: +91 98765 43210<br>
              📧 Email: info@offshoredevlabs.com<br>
              💬 WhatsApp: +91 98765 43210</p>
              
              <p>Best regards,<br>
              <strong>The Offshore Dev Labs Team</strong></p>
            </div>
            <div class="footer">
              <p>© 2026 Offshore Dev Labs Private Limited. All rights reserved.</p>
              <p>123 Tech Park, Sector 5, Bangalore, Karnataka 560001, India</p>
            </div>
          </div>
        </body>
      </html>
    `,
    };

    try {
        const info = await transporter.sendMail(mailOptions);
        console.log('✅ Client confirmation sent:', info.messageId);
        return { success: true, messageId: info.messageId };
    } catch (error) {
        console.error('❌ Error sending client confirmation:', error);
        throw error;
    }
};

export default transporter;
