import express from 'express';
import { createServer as createViteServer } from 'vite';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // API Routes
  app.post('/api/contact', async (req, res) => {
    const { email, phone, type, message } = req.body;
    
    console.log(`New ${type} submission:`, { email, phone, message });

    // Configure nodemailer
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER || 'drawaisrabbani98@gmail.com',
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER || 'drawaisrabbani98@gmail.com',
      to: 'drawaisrabbani98@gmail.com',
      subject: `New GrowthPartnersCo ${type === 'newsletter' ? 'Newsletter Signup' : 'Consultancy Request'}`,
      text: `
        Type: ${type}
        Email: ${email}
        Phone: ${phone}
        ${message ? `Message: ${message}` : ''}
      `
    };

    try {
      if (process.env.EMAIL_PASS) {
        await transporter.sendMail(mailOptions);
        console.log('Email sent successfully');
      } else {
        console.warn('EMAIL_PASS not set. Email not sent, but submission logged.');
      }
    } catch (error) {
      console.error('Email sending failed:', error);
    }

    res.json({ success: true, message: 'Data collected successfully' });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
