const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 1090;

const cors = require('cors');
app.use(cors()); // Enable CORS for all origins

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Webhook endpoint
app.post('/webhook', (req, res) => {
  console.log('Received webhook:');
  console.log(JSON.stringify(req.body, null, 2)); // Log the payload for testing

  // Respond to acknowledge receipt
  res.status(200).send('Webhook received successfully');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Webhook server is running at http://localhost:${PORT}`);
});
