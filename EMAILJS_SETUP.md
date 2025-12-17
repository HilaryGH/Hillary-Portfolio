# EmailJS Setup Guide

The contact form now uses EmailJS to send emails directly from the frontend without needing a backend server.

## Quick Setup Steps

1. **Create a free EmailJS account**
   - Go to https://www.emailjs.com/
   - Sign up for a free account (200 emails/month free)

2. **Add an Email Service**
   - Go to "Email Services" in the dashboard
   - Click "Add New Service"
   - Choose your email provider (Gmail, Outlook, etc.)
   - Follow the setup instructions
   - Copy your **Service ID**

3. **Create an Email Template**
   - Go to "Email Templates" in the dashboard
   - Click "Create New Template"
   - Use this template structure:
     ```
     Subject: New Contact Form Message from {{from_name}}
     
     From: {{from_name}}
     Email: {{from_email}}
     
     Message:
     {{message}}
     ```
   - Save the template and copy your **Template ID**

4. **Get your Public Key**
   - Go to "Account" → "General"
   - Copy your **Public Key**

5. **Update the Contact Component**
   - Open `client/src/components/Contact/Contact.tsx`
   - Replace these values at the top of the file:
     ```typescript
     const EMAILJS_SERVICE_ID = "YOUR_SERVICE_ID"; // Replace with your Service ID
     const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID"; // Replace with your Template ID
     const EMAILJS_PUBLIC_KEY = "YOUR_PUBLIC_KEY"; // Replace with your Public Key
     ```

6. **Test the form**
   - Fill out and submit the contact form
   - Check your email inbox for the message

## Alternative: Environment Variables (Recommended for Production)

For better security, you can use environment variables:

1. Create a `.env` file in the `client` directory:
   ```
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

2. Update `Contact.tsx` to use environment variables:
   ```typescript
   const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
   const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
   const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
   ```

## Troubleshooting

- **"Email service not configured"**: Make sure you've replaced all three placeholder values
- **Email not received**: Check your spam folder and verify the EmailJS service is connected correctly
- **Rate limit errors**: Free tier allows 200 emails/month. Upgrade for more.

## Need Help?

Visit the EmailJS documentation: https://www.emailjs.com/docs/

