const express = require('express');
const cors = require('cors'); // Correct import
const dotenv = require('dotenv'); // To load environment variables
const Stripe = require('stripe');

dotenv.config(); // Load environment variables

const stripeSecretKey = process.env.STRIPE_SECRET_KEY; // Retrieve secret key from environment
const stripe = new Stripe(stripeSecretKey);

const app = express();

app.use(cors({ origin: 'http://localhost:7501' }));
app.use(express.json()); // Ensure JSON bodies are parsed

app.post('/create-checkout-session', async (req, res) => {
  const { cartItems } = req.body;


  const line_items = cartItems.map(item => ({
    price_data: {
      currency: 'usd',
      product_data: {
        name: item.name,
      },
      unit_amount: item.price * 100,
    },
    quantity: item.units,
  }));

  try {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items,
      mode: 'payment',
      success_url: 'http://localhost:7501/update/success',
      cancel_url: 'http://localhost:7501/update/cancel',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while creating the checkout session' });
  }
});
app.post('/create-subs-session', async (req, res) => {
  const { subscriptionType } = req.body;

  let priceId;
  if (subscriptionType === 'yearly') {
    priceId = 'price_1PCW73SFJbKurQg9CL9iQVxQ'; // Yearly subscription
  } else if (subscriptionType === 'monthly') {
    priceId = 'price_1PCW4kSFJbKurQg9A00cc3mx'; // Monthly subscription
  } else {
    return res.status(400).json({ error: 'Invalid subscription type' });
  }

  try {
    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: 'http://localhost:7501/subscribe/update/success',
      cancel_url: 'http://localhost:7501/subscribe/update/cancel',
    });

    res.json({ sessionId: session.id });
  } catch (error) {
    console.error('Error creating Stripe session:', error);
    res.status(500).json({ error: 'Could not create Stripe session' });
  }
});



app.listen(3000, () => {
  console.log('Server running on port 3000');
});
