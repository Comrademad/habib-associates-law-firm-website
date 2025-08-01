# Google OAuth Setup Guide for Habib & Associates Website

## Step-by-Step Instructions for Admin Login

### 📋 Prerequisites
- A Google account (Gmail)
- Access to Google Cloud Console
- Basic understanding of web development

### 🔧 Step 1: Create Google Cloud Project

1. **Go to Google Cloud Console**
   - Visit: https://console.cloud.google.com/
   - Sign in with your Google account

2. **Create a New Project**
   - Click "Select a project" at the top
   - Click "New Project"
   - Name it: `habib-associates-website`
   - Click "Create"

### 🔧 Step 2: Enable Google+ API

1. **Enable the API**
   - In the left sidebar, go to "APIs & Services" → "Library"
   - Search for "Google+ API"
   - Click on "Google+ API"
   - Click "Enable"

### 🔧 Step 3: Create OAuth 2.0 Credentials

1. **Go to Credentials**
   - In the left sidebar, go to "APIs & Services" → "Credentials"

2. **Create OAuth Client ID**
   - Click "Create Credentials" → "OAuth client ID"
   - If prompted, configure the OAuth consent screen:
     - Choose "External" for user type
     - Fill in app name: "Habib & Associates"
     - Add your email
     - Add authorized domains: `localhost` (for development) and your domain (for production)

3. **Configure OAuth Client**
   - **Application type:** Web application
   - **Name:** Habib & Associates Website
   - **Authorized redirect URIs:**
     - For development: `http://localhost:8000/api/auth/callback/google`
     - For production: `https://yourdomain.com/api/auth/callback/google`
   - Click "Create"

4. **Save Your Credentials**
   - Copy the **Client ID** and **Client Secret**
   - You'll need these for the .env.local file

### 🔧 Step 4: Update Environment Variables

1. **Open .env.local file**
   ```bash
   # Replace with your actual credentials
   GOOGLE_CLIENT_ID=your-actual-client-id.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=your-actual-client-secret
   NEXTAUTH_URL=http://localhost:8000  # Change for production
   NEXTAUTH_SECRET=your-secret-key-here
   ADMIN_EMAIL=habibadvocate71@gmail.com
   ```

2. **Example .env.local:**
   ```env
   GOOGLE_CLIENT_ID=123456789012-abcdefghijklmnopqrstuvwxyz.apps.googleusercontent.com
   GOOGLE_CLIENT_SECRET=GOCSPX-YourActualSecretHere
   NEXTAUTH_URL=http://localhost:8000
   NEXTAUTH_SECRET=your-very-secure-secret-key-here
   ADMIN_EMAIL=habibadvocate71@gmail.com
   ```

### 🔧 Step 5: Test the Setup

1. **Restart the development server**
   ```bash
   npm run dev
   ```

2. **Test the login**
   - Go to http://localhost:8000
   - Click "Admin Login" in the header
   - Click "Continue with Google"
   - Sign in with habibadvocate71@gmail.com
   - You should be redirected back and see admin features

### 🔧 Step 6: Production Setup

1. **For Vercel Deployment:**
   - Go to your Vercel dashboard
   - Navigate to your project settings
   - Add environment variables:
     - `GOOGLE_CLIENT_ID`
     - `GOOGLE_CLIENT_SECRET`
     - `NEXTAUTH_URL` (your production URL)
     - `NEXTAUTH_SECRET`
     - `ADMIN_EMAIL`

2. **Update redirect URIs:**
   - Add production redirect URI in Google Cloud Console:
   - `https://yourdomain.com/api/auth/callback/google`

### 🔧 Step 7: Troubleshooting

**If login fails:**
1. **Check credentials** - Ensure Client ID and Secret are correct
2. **Verify redirect URIs** - Must match exactly in Google Console
3. **Check email restriction** - Only habibadvocate71@gmail.com will work
4. **Clear browser cache** - Sometimes helps with OAuth issues

**Common Error Messages:**
- **"Access denied"** - Wrong email or credentials
- **"Invalid redirect URI"** - URI mismatch in Google Console
- **"OAuth consent screen"** - Not configured properly

### 🔧 Quick Setup Checklist

- [ ] Google Cloud project created
- [ ] Google+ API enabled
- [ ] OAuth 2.0 credentials created
- [ ] Redirect URIs configured
- [ ] .env.local updated with real credentials
- [ ] Development server restarted
- [ ] Admin login tested

### 📞 Support

If you encounter issues:
1. Double-check all credentials are copied correctly
2. Ensure redirect URIs match exactly
3. Verify the admin email is exactly: habibadvocate71@gmail.com
4. Check browser console for specific error messages

The website is now ready for admin login once you complete these steps!
