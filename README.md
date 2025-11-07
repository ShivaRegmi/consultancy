# Pandey Consultant Website

A modern, professional educational consultancy website built with React, Firebase, and Tailwind CSS.

## Features

### Pages
- **Home**: Hero section with services and destinations highlights
- **About Us**: Mission, vision, team, and company story
- **Services**: Comprehensive list of consultancy services
- **Destinations**: Study abroad countries with university information
- **Courses**: Searchable course directory
- **Success Stories**: Student testimonials
- **Blog & Events**: Educational articles and updates
- **Contact**: Inquiry form with Google Maps integration
- **Admin Dashboard**: Content management system

### Key Features
- ✅ Fully responsive design (desktop, tablet, mobile)
- ✅ Bilingual support (English & Nepali) using react-i18next
- ✅ Modern, professional UI with glass-morphism navbar
- ✅ Firebase integration for data management
- ✅ Admin dashboard with authentication
- ✅ Lead collection system
- ✅ SEO-ready structure
- ✅ Professional color scheme (Blue #1E88E5, Accent #F9A825)

## Tech Stack

- **Frontend**: React with Vite
- **Styling**: Tailwind CSS
- **Backend/CMS**: Firebase (Auth, Firestore, Storage)
- **Internationalization**: react-i18next
- **UI Components**: Shadcn/UI
- **Icons**: Lucide React

## Firebase Configuration

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Authentication (Email/Password)
3. Create a Firestore database
4. Update `/app/frontend/src/firebase/config.js` with your credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

## Firestore Collections

Create the following collections:
- `blog_posts` - Blog articles
- `courses` - Course listings
- `testimonials` - Student testimonials
- `leads` - Contact form submissions

## Admin Access

1. Navigate to `/admin`
2. Login with Firebase credentials
3. Manage content (blogs, courses, testimonials, leads)

## Deployment

### Firebase Hosting
```bash
firebase init hosting
yarn build
firebase deploy
```

### Vercel
```bash
yarn build
vercel --prod
```

---

Built with ❤️ by E1 Agent
