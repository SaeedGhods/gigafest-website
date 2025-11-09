# Gigafest Management Group Website

A modern, responsive website built with HTML, CSS, and JavaScript.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Interactive Elements**: Hover effects, animations, and form handling
- **Mobile Menu**: Hamburger menu for mobile devices

## Getting Started

1. Open `index.html` in your web browser
2. That's it! No build process or dependencies required.

## File Structure

```
.
├── index.html      # Main HTML file
├── styles.css      # All styling
├── script.js       # JavaScript functionality
└── README.md       # This file
```

## Email Setup (Contact Form)

The contact form uses EmailJS to send emails. To enable email functionality:

1. **Create an EmailJS account**: Go to https://www.emailjs.com/ and sign up (free tier available)

2. **Set up Email Service**:
   - Go to Email Services and add a service (Gmail, Outlook, etc.)
   - Note your Service ID

3. **Create Email Template**:
   - Go to Email Templates and create a new template
   - Use these variables in your template:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{message}}` - Message content
     - `{{to_email}}` - Your email address
   - Note your Template ID

4. **Get your Public Key**:
   - Go to Account → API Keys
   - Copy your Public Key

5. **Update the code**:
   - Open `script.js`
   - Replace `YOUR_PUBLIC_KEY` on line 32 with your EmailJS Public Key
   - Replace `YOUR_SERVICE_ID` on line 58 with your Service ID
   - Replace `YOUR_TEMPLATE_ID` on line 59 with your Template ID
   - Replace `your-email@example.com` on line 64 with your actual email address

## Customization

- **Colors**: Edit the CSS variables in `styles.css` (lines 4-11)
- **Content**: Modify the HTML in `index.html`
- **Functionality**: Update `script.js` for additional features

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge).


