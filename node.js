window.ethereum
const express = require('express');
const app = express();

app.use(express.json());

// Your webhook endpoint
app.post('/webhook', (req, res) => {
  try {
    // Process the incoming request
    const data = req.body;
    console.log('Received data:', data);
    res.status(200).send('Webhook received');
  } catch (error) {
    console.error('Error processing webhook:', error);
    res.status(500).send('Internal Server Error');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
