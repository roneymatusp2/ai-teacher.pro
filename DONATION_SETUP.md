# 💝 Donation System Setup Guide

This document explains how to set up and use the donation system integrated into AI Teachers Pro.

## 🚀 Quick Start

The donation system is already configured and ready to use! Here's what you need to know:

### 1. Dependencies Already Added ✅
- `stripe` - Stripe SDK for payment processing
- `express` - Backend server
- `cors` - Cross-origin request handling
- `dotenv` - Environment variables

### 2. Environment Variables Already Set ✅
Your `.env` file contains:
```bash
STRIPE_SECRET_KEY=sk_live_51R9bBcH9d3jhR8nH...
STRIPE_PUBLISHABLE_KEY=pk_live_51R9bBcH9d3jhR8nH...
```

### 3. Components Created ✅
- `DonationSection.tsx` - English donation component
- `DonationSectionPTBR.tsx` - Portuguese donation component
- Both already added to homepages

## 🏃‍♂️ Running the System

### Start the Backend Server
```bash
npm run server
# or
npm run start-server
```
Server runs on: `http://localhost:3001`

### Start the Frontend
```bash
npm run dev
```
Frontend runs on: `http://localhost:5173`

## 💰 Donation Options

The system offers:
- **Fixed amounts**: R$ 200, R$ 500, R$ 1,000
- **Custom amounts**: R$ 10 - R$ 5,000
- **Currency**: BRL (Brazilian Real)
- **Payment methods**: Credit/Debit cards via Stripe

## 🌍 Multi-language Support

### English Version
- Component: `DonationSection`
- Props: `language="en"`
- Added to: `/src/pages/HomePage.tsx`

### Portuguese Version  
- Component: `DonationSectionPTBR`
- No props needed (Portuguese by default)
- Added to: `/src/pages/pt-br/HomePage.tsx`

## 🎨 Customization Features

### Visual Design
- 🎯 Gradient backgrounds with animations
- 💝 Beautiful form with radio buttons
- ⚡ Hover effects and smooth transitions
- 🔒 Security badges and trust indicators

### Brazilian Portuguese Extras
- 🎁 Cute donation descriptions ("Um café especial", "Um almoço generoso")
- 🇧🇷 Brazilian-themed colors and animations
- 💖 Heart emojis and warm messaging
- 🎯 Transparency section explaining fund usage

## 🔧 API Endpoints

### POST `/create-checkout-session`
Creates a Stripe checkout session for donations.

**Request Body:**
```json
{
  "amount": 20000,     // Amount in centavos (R$ 200.00)
  "currency": "brl",
  "language": "pt"     // "en" or "pt"
}
```

**Response:**
```json
{
  "url": "https://checkout.stripe.com/...",
  "sessionId": "cs_..."
}
```

### GET `/health`
Health check endpoint for monitoring.

## 📄 Success/Cancel Pages

### Success Page: `/public/thanks.html`
- 🎉 Animated thank you message
- ✨ Confetti animation
- 📧 Email confirmation notice
- 🏠 Return to homepage button

### Cancel Page: `/public/cancel.html`
- 😊 Friendly cancellation message
- 💙 Alternative ways to support
- 🔄 Try again button
- 📞 Support contact information

## 🔒 Security Features

### Environment Protection
- `.gitignore` configured to protect `.env`
- Stripe keys excluded from git
- CORS configured for specific domains

### Validation
- Amount validation (R$ 10 - R$ 5,000)
- Server-side amount conversion
- Input sanitization

## 🌐 Production URLs

The system is configured for:
- **Success URL**: `https://ai-teachers.pro/thanks.html?session_id={CHECKOUT_SESSION_ID}`
- **Cancel URL**: `https://ai-teachers.pro/cancel.html`
- **CORS Origins**: `https://ai-teachers.pro`, `http://localhost:5173`

## 🔧 Development vs Production

### Development
- Backend: `http://localhost:3001`
- Frontend: `http://localhost:5173`
- Stripe webhook URL: `http://localhost:3001/webhook`

### Production
- Update CORS origins in `server.js`
- Update frontend API calls to production backend URL
- Configure Stripe webhook endpoint in Stripe Dashboard

## 📊 Analytics & Tracking

The donation system includes:
- Session ID tracking for completed payments
- Console logging for debugging
- Webhook support for payment confirmations

## 🚨 Troubleshooting

### Common Issues
1. **"CORS Error"** - Check backend server is running
2. **"Invalid amount"** - Ensure amount is between R$ 10-5,000
3. **"Network Error"** - Verify backend URL in components

### Debug Steps
1. Check browser console for errors
2. Verify `.env` file exists and has correct keys
3. Ensure backend server is running on port 3001
4. Test with Stripe test cards for development

## 🎯 Next Steps

Optional enhancements:
- Add webhook handling for payment confirmations
- Implement donation analytics dashboard  
- Add recurring donation options
- Create donation goal tracking
- Add donor recognition features

---

**Need Help?** Check the browser console or contact support at `support@ai-teachers.pro`