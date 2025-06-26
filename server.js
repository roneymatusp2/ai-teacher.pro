import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import Stripe from 'stripe';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Initialize Stripe
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
  apiVersion: '2024-11-20.acacia',
});

// Middleware
app.use(cors({
  origin: ['https://ai-teachers.pro', 'http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}));

app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', message: 'Donation server is running' });
});

// Create checkout session
app.post('/create-checkout-session', async (req, res) => {
  try {
    const { amount, currency = 'brl', language = 'en' } = req.body;
    
    // Validate amount (convert from reais to centavos if needed)
    const amountInCentavos = typeof amount === 'number' ? amount : parseInt(amount);
    
    if (!amountInCentavos || amountInCentavos < 1000 || amountInCentavos > 500000) {
      return res.status(400).json({ 
        error: 'Invalid amount. Must be between R$ 10 and R$ 5,000' 
      });
    }

    const productDescription = language === 'pt' 
      ? 'Doação voluntária para apoiar conteúdo educacional com IA'
      : 'Voluntary donation to support AI-powered educational content';

    // Create Stripe checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: currency,
            product_data: {
              name: 'AI Teachers Pro - Donation',
              description: productDescription,
            },
            unit_amount: amountInCentavos,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `https://ai-teachers.pro/thanks.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `https://ai-teachers.pro/cancel.html`,
      metadata: {
        type: 'donation',
        amount: amountInCentavos.toString(),
        currency: currency
      },
      billing_address_collection: 'auto',
      payment_intent_data: {
        statement_descriptor: 'AI-Teachers.pro',
      },
    });

    res.json({ 
      url: session.url,
      sessionId: session.id 
    });

  } catch (error) {
    console.error('Error creating checkout session:', error);
    res.status(500).json({ 
      error: 'Internal server error',
      message: error.message 
    });
  }
});

// Webhook to handle completed payments (optional)
app.post('/webhook', express.raw({ type: 'application/json' }), (req, res) => {
  const sig = req.headers['stripe-signature'];
  const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET;

  if (!endpointSecret) {
    return res.status(400).send('Webhook secret not configured');
  }

  let event;

  try {
    event = stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
  } catch (err) {
    console.log(`Webhook signature verification failed.`, err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  // Handle the event
  switch (event.type) {
    case 'checkout.session.completed':
      const session = event.data.object;
      console.log('Payment successful:', session.id);
      // You can add logic here to update your database, send emails, etc.
      break;
    default:
      console.log(`Unhandled event type ${event.type}`);
  }

  res.json({ received: true });
});

app.listen(PORT, () => {
  console.log(`🚀 Donation server running on port ${PORT}`);
  console.log(`💳 Stripe configured for ${process.env.STRIPE_SECRET_KEY ? 'LIVE' : 'TEST'} mode`);
});