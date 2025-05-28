const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const nodemailer = require('nodemailer');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());

// PostgreSQL DB config
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'menuapp',
  password: 'qwaszx',
  port: 5432,
});

// Nodemailer transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'aminaneha3@gmail.com', 
    pass: 'rdpelpuemmkxlanp', 
  },
});

// Contact form POST route
app.post('/api/contact', async (req, res) => {
  const { name, email, subject, message } = req.body;

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Save to PostgreSQL
    const result = await pool.query(
      'INSERT INTO contacts (name, email, subject, message) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, email, subject, message]
    );

    console.log('Saved to DB:', result.rows[0]);

    // Send email to admin
    const mailOptions = {
      from: '"Website Contact" <your-email@gmail.com>',
      to: 'aminaneha3@gmail.com',
      subject: `New contact form submission: ${subject}`,
      text: `You received a new message from ${name} (${email}):\n\n${message}`,
    };

    transporter.sendMail(mailOptions, (err, info) => {
      if (err) {
        console.error('Email error:', err);
        return res.status(500).json({ error: 'Failed to send email' });
      } else {
        console.log('Email sent:', info.response);
        res.json({ message: 'Contact form saved and email sent!' });
      }
    });
  } catch (err) {
    console.error('DB Error:', err);
    res.status(500).json({ error: 'Failed to save contact form' });
  }
});

// Optional: Add GET endpoint for pagination
app.get('/api/contacts', async (req, res) => {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const offset = (page - 1) * limit;

  try {
    const result = await pool.query(
      'SELECT * FROM contacts ORDER BY created_at DESC LIMIT $1 OFFSET $2',
      [limit, offset]
    );
    res.json({
      page,
      limit,
      data: result.rows
    });
  } catch (error) {
    console.error('DB Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Backend is running at http://localhost:${PORT}`);
});
