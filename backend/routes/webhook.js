const express = require('express');
const router = express.Router();
const dotenv = require('dotenv');
dotenv.config();

router.post('/ticket-done', async (req, res) => {
  const secret = req.headers['x-shared-secret'];
  if (secret !== process.env.SHARED_SECRET) {
    return res.status(403).json({ message: 'Invalid shared secret' });
  }

  const { ticketId, status } = req.body;
  console.log("Ticket done webhook received:", ticketId, status);

  // Optional: confirm Mongo connection
  try {
    return res.status(200).json({ message: 'Webhook received', ticketId, status });
  } catch (err) {
    return res.status(500).json({ message: 'Internal error', err });
  }
});

module.exports = router;

