# Contact Form Setup - Quick Guide

Your contact form is now configured to use **Web3Forms**, a simple and reliable email service.

## Quick Setup (30 seconds)

1. **Get your free access key:**
   - Go to https://web3forms.com
   - Enter your email: `hilarygebremedhn28@gmail.com`
   - Click "Get Access Key"
   - Copy the access key you receive

2. **Add the access key:**
   
   **Option A: Using Environment Variable (Recommended)**
   - Create a file named `.env` in the `client` directory
   - Add this line:
     ```
     VITE_WEB3FORMS_ACCESS_KEY=your_access_key_here
     ```
   - Replace `your_access_key_here` with the key you got from Web3Forms
   - Restart your dev server

   **Option B: Direct in Code**
   - Open `client/src/components/Contact/Contact.tsx`
   - Find line 6: `const WEB3FORMS_ACCESS_KEY = ...`
   - Replace with: `const WEB3FORMS_ACCESS_KEY = "your_access_key_here";`

3. **Test the form:**
   - Fill out and submit the contact form
   - Check your email inbox for the message!

## That's it! 🎉

The form will now send emails directly to `hilarygebremedhn28@gmail.com` whenever someone submits it.

## Features:
- ✅ Works immediately after setup
- ✅ Free (250 submissions/month)
- ✅ No backend server needed
- ✅ Spam protection included
- ✅ Email notifications sent to your inbox

## Troubleshooting:

- **Form not sending?** Make sure you've added the access key and restarted your dev server
- **Not receiving emails?** Check your spam folder
- **Need more submissions?** Upgrade your Web3Forms plan (free tier: 250/month)

## Alternative Services:

If you prefer a different service:
- **EmailJS**: More setup required, but more customizable
- **Formspree**: Similar to Web3Forms, also free tier available

