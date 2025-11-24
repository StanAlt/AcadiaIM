/**
 * Google Apps Script for Momentum Weekly Newsletter Subscriptions
 * 
 * SETUP INSTRUCTIONS:
 * 1. Go to https://script.google.com
 * 2. Create a new project
 * 3. Copy this code into the script editor
 * 4. Click "Deploy" > "New deployment"
 * 5. Select type: "Web app"
 * 6. Execute as: "Me (stanalt@gmail.com)"
 * 7. Who has access: "Anyone"
 * 8. Click "Deploy" and copy the Web App URL
 * 9. Replace YOUR_SCRIPT_ID in Newsletter.jsx with the script ID from the URL
 * 
 * The script will automatically create a Google Sheet named "Momentum Weekly Subscribers"
 * in your Google Drive (stanalt@gmail.com) with columns: Timestamp, Name, Email
 */

function doPost(e) {
  try {
    // Parse the incoming data
    const data = JSON.parse(e.postData.contents);
    const name = data.name;
    const email = data.email;
    const timestamp = new Date();
    
    // Get or create the spreadsheet
    const spreadsheetName = 'Momentum Weekly Subscribers';
    let spreadsheet = getSpreadsheetByName(spreadsheetName);
    
    if (!spreadsheet) {
      // Create new spreadsheet if it doesn't exist
      spreadsheet = SpreadsheetApp.create(spreadsheetName);
      const sheet = spreadsheet.getActiveSheet();
      
      // Add headers
      sheet.appendRow(['Timestamp', 'Name', 'Email']);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 3);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#FF6B4A'); // Acadia coral color
      headerRange.setFontColor('#FFFFFF');
      
      // Set column widths
      sheet.setColumnWidth(1, 180); // Timestamp
      sheet.setColumnWidth(2, 200); // Name
      sheet.setColumnWidth(3, 250); // Email
    }
    
    const sheet = spreadsheet.getActiveSheet();
    
    // Check if email already exists
    const emailColumn = sheet.getRange(2, 3, sheet.getLastRow() - 1, 1).getValues();
    const emailExists = emailColumn.some(row => row[0] === email);
    
    if (emailExists) {
      return ContentService.createTextOutput(JSON.stringify({
        'status': 'error',
        'message': 'Email already subscribed'
      })).setMimeType(ContentService.MimeType.JSON);
    }
    
    // Add new subscriber
    sheet.appendRow([timestamp, name, email]);
    
    // Optional: Send confirmation email
    // MailApp.sendEmail({
    //   to: email,
    //   subject: 'Welcome to Momentum Weekly!',
    //   body: `Hi ${name},\n\nThanks for subscribing to Momentum Weekly! You'll receive your first issue next Monday morning.\n\nBest regards,\nThe Acadia.im Team`
    // });
    
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'success',
      'message': 'Subscription successful'
    })).setMimeType(ContentService.MimeType.JSON);
    
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({
      'status': 'error',
      'message': error.toString()
    })).setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput(JSON.stringify({
    'status': 'success',
    'message': 'Momentum Weekly Subscription API is running'
  })).setMimeType(ContentService.MimeType.JSON);
}

// Helper function to get spreadsheet by name
function getSpreadsheetByName(name) {
  const files = DriveApp.getFilesByName(name);
  if (files.hasNext()) {
    const file = files.next();
    return SpreadsheetApp.openById(file.getId());
  }
  return null;
}
