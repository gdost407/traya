traya/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js              # MongoDB connection
│   │   ├── controllers/
│   │   │   └── authController.js  # OTP login logic
│   │   ├── models/
│   │   │   └── User.js            # User schema
│   │   ├── routes/
│   │   │   └── authRoutes.js      # Login, verify OTP routes
│   │   ├── services/
│   │   │   └── otpService.js      # Generate/send OTP logic
│   │   ├── utils/
│   │   │   └── responseHandler.js # Common response helpers
│   │   ├── app.js                 # Express app
│   │   └── server.js              # App entry point
│   ├── package.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── common/            # Reusable UI (Buttons, Inputs)
│   │   │   └── auth/              # Login, OTP pages
│   │   ├── pages/
│   │   │   └── LoginPage.jsx
│   │   ├── context/
│   │   │   └── AuthContext.jsx
│   │   ├── utils/
│   │   │   └── api.js             # Axios instance
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── package.json
│   └── .env
│
└── README.md

Backend : Node js + Express + MongoDB
Frontend : React + Vite
CSS : Bootstrap