# Momentum Weekly Newsletter Setup Instructions

## Overview

The Momentum Weekly newsletter has been integrated into your Acadia.im website with a subscription form that stores subscriber data in Google Sheets.

## Files Added

1. **src/components/Newsletter.jsx** - Main newsletter component with subscription form
2. **google-sheets-script.js** - Google Apps Script for storing subscriptions
3. **NEWSLETTER_SETUP.md** - This setup guide

## Files Modified

1. **src/App.jsx** - Added newsletter route
2. **src/components/Navigation.jsx** - Added "Newsletters" link to Resources dropdown

## Google Sheets Integration Setup

Follow these steps to connect the subscription form to your Google Sheets:

### Step 1: Create Google Apps Script

1. Go to [https://script.google.com](https://script.google.com)
2. Sign in with **stanalt@gmail.com**
3. Click **"New project"**
4. Name the project: "Momentum Weekly Subscriptions"
5. Delete any default code in the editor
6. Copy the entire contents of `google-sheets-script.js` and paste it into the editor
7. Click the **Save** icon (💾)

### Step 2: Deploy as Web App

1. In the Apps Script editor, click **"Deploy"** → **"New deployment"**
2. Click the gear icon ⚙️ next to "Select type"
3. Select **"Web app"**
4. Configure the deployment:
   - **Description**: "Momentum Weekly Subscription API"
   - **Execute as**: **Me (stanalt@gmail.com)**
   - **Who has access**: **Anyone**
5. Click **"Deploy"**
6. You may need to authorize the script:
   - Click **"Authorize access"**
   - Choose your Google account (stanalt@gmail.com)
   - Click **"Advanced"** → **"Go to Momentum Weekly Subscriptions (unsafe)"**
   - Click **"Allow"**
7. Copy the **Web App URL** (it will look like: `https://script.google.com/macros/s/SCRIPT_ID/exec`)

### Step 3: Update Newsletter Component

1. Open `src/components/Newsletter.jsx`
2. Find line 17: `const response = await fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {`
3. Replace `YOUR_SCRIPT_ID` with the actual script ID from your Web App URL
4. Save the file

### Step 4: Test the Integration

1. Start your development server: `npm run dev`
2. Navigate to the newsletter page: `http://localhost:5173/#newsletter`
3. Fill out the subscription form with test data
4. Click "Subscribe"
5. Check your Google Drive for a new spreadsheet named **"Momentum Weekly Subscribers"**
6. Verify the test subscription appears in the spreadsheet

## Google Sheet Structure

The script automatically creates a Google Sheet with the following structure:

| Timestamp | Name | Email |
|-----------|------|-------|
| 2025-11-24 10:30:00 | John Doe | john@example.com |

- **Timestamp**: Automatically recorded when someone subscribes
- **Name**: Subscriber's name
- **Email**: Subscriber's email address

The sheet will be created in your Google Drive (stanalt@gmail.com) and will have:
- Bold headers with Acadia coral background (#FF6B4A)
- Automatic duplicate email detection
- Formatted column widths for readability

## Accessing Your Subscribers

1. Go to [Google Drive](https://drive.google.com)
2. Sign in with **stanalt@gmail.com**
3. Search for **"Momentum Weekly Subscribers"**
4. Open the spreadsheet to view all subscribers

## Optional: Email Confirmation

To send automatic confirmation emails to new subscribers:

1. Open `google-sheets-script.js` in the Apps Script editor
2. Uncomment lines 60-66 (the `MailApp.sendEmail` section)
3. Customize the email subject and body as desired
4. Save and redeploy the script

## Accessing the Newsletter

Users can access the newsletter in two ways:

1. **From the homepage**: Click **Resources** → **📧 Newsletters** in the navigation menu
2. **Direct link**: `https://acadia.im/#newsletter`

## Newsletter Features

- ✅ Responsive design matching Acadia.im branding
- ✅ Subscription form with name and email fields
- ✅ Latest issue highlights with AI platforms, risk analytics, and alternative data
- ✅ Five key themes shaping institutional fintech
- ✅ Duplicate email detection
- ✅ Success/error messaging
- ✅ Mobile-friendly layout

## Troubleshooting

### "Something went wrong" message appears

- Verify the script ID in `Newsletter.jsx` is correct
- Check that the Google Apps Script is deployed as a web app
- Ensure "Who has access" is set to "Anyone"
- Check the browser console for CORS errors (expected with `mode: 'no-cors'`)

### Spreadsheet not created

- Verify you're signed in with stanalt@gmail.com in Google Apps Script
- Check that "Execute as" is set to "Me (stanalt@gmail.com)"
- Manually run the `doPost` function in the Apps Script editor to test

### Duplicate submissions

The script automatically prevents duplicate email addresses. If a user tries to subscribe with an existing email, they'll see an error message.

## Next Steps

1. Complete the Google Sheets integration setup above
2. Test the subscription form
3. Commit and push changes to GitHub
4. Deploy the updated site

## Support

For questions or issues, contact: stanalt@gmail.com
