PayFlow

A modern payment dashboard frontend built with Next.js, React, Tailwind CSS, and Lucide Icons.

Features
Dashboard overview
Revenue and payment statistics
Recent payments
Payment search and status filtering
Customer search and customer details
Profile settings
Notification settings
Login and signup pages
Forgot password page
Responsive sidebar and mobile menu
Loading and 404 pages
Tech Stack
Next.js
React
TypeScript
Tailwind CSS
Lucide React
Getting Started

Clone the repository and install dependencies:

npm install


Run the development server:

npm run dev


Open:

http://localhost:3000

Project Structure
payflow/
│
├── src/
│   │
│   ├── app/
│   │   ├── customers/
│   │   │   └── page.tsx
│   │   │
│   │   ├── forgot-password/
│   │   │   └── page.tsx
│   │   │
│   │   ├── login/
│   │   │   └── page.tsx
│   │   │
│   │   ├── payments/
│   │   │   └── page.tsx
│   │   │
│   │   ├── profile/
│   │   │   └── page.tsx
│   │   │
│   │   ├── settings/
│   │   │   └── page.tsx
│   │   │
│   │   ├── signup/
│   │   │   └── page.tsx
│   │   │
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   ├── loading.tsx
│   │   ├── not-found.tsx
│   │   └── page.tsx
│   │
│   └── components/
│       │
│       └── layout/
│           ├── mobilemenu/
│           ├── sidebar/
│           └── topbar/
│
├── public/
├── package.json
├── tsconfig.json
├── next.config.ts
├── postcss.config.mjs
└── README.md

Status

Frontend complete.

Backend integration is not included in this version.

Author

Mantu-231
