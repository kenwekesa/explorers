const express = require('express');
const cors = require('cors');
const paypal = require('@paypal/checkout-server-sdk');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Initialize PayPal SDK with your credentials
const clientId = 'YOUR_PAYPAL_CLIENT_ID';
const clientSecret = 'YOUR_PAYPAL_CLIENT_SECRET';

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

// Define your routes for creating and capturing orders

app.post('/api/create-order', async (req, res) => {
  try {
    const request = new paypal.orders.OrdersCreateRequest();
    request.headers['prefer'] = 'return=representation';
    request.requestBody({
      intent: 'CAPTURE',
      purchase_units: [
        {
          amount: {
            currency_code: 'USD',
            value: '10.00', // Replace with the actual amount
          },
        },
      ],
    });

    const order = await client.execute(request);

    res.json({ orderId: order.result.id });
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/api/capture-order', async (req, res) => {
  try {
    const orderId = req.body.orderId;

    const request = new paypal.orders.OrdersCaptureRequest(orderId);
    request.requestBody({});

    const capture = await client.execute(request);

    res.json({ success: true });
  } catch (error) {
    console.error('Error capturing order:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
