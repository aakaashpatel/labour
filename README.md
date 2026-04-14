Frontend/
├── public/
│
├── src/
│   ├── app/                  # Redux store
│   │   └── store.js
│
│   ├── features/             # Feature based modules
│   │   ├── auth/             # Login / Signup
│   │   │   ├── authSlice.js
│   │   │   ├── authAPI.js
│   │   │   ├── Login.jsx
│   │   │   └── Register.jsx
│   │   │
│   │   ├── labour/           # Labour related
│   │   │   ├── labourSlice.js
│   │   │   ├── labourAPI.js
│   │   │   ├── LabourList.jsx
│   │   │   ├── LabourCard.jsx
│   │   │   └── LabourDetails.jsx
│   │   │
│   │   └── category/         # Categories (builder, plumber etc.)
│   │       ├── categorySlice.js
│   │       └── CategoryList.jsx
│
│   ├── pages/                # Route pages
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── Profile.jsx
│   │   └── NotFound.jsx
│
│   ├── components/           # Reusable UI components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Button.jsx
│   │   ├── Loader.jsx
│   │   └── LanguageToggle.jsx   # EN / HI switch
│
│   ├── routes/               # Routing
│   │   ├── AppRoutes.jsx
│   │   └── ProtectedRoute.jsx
│
│   ├── services/             # API config
│   │   └── api.js
│
│   ├── hooks/                # Custom hooks
│   │   └── useAuth.js
│
│   ├── i18n/                 # Multi-language
│   │   ├── index.js
│   │   ├── en.json
│   │   └── hi.json
│
│   ├── utils/                # Helpers
│   │   ├── constants.js
│   │   └── helpers.js
│
│   ├── styles/               # Global styles
│   │   └── global.css
│
│   ├── App.jsx
│   └── main.jsx
│
├── package.json
└── vite.config.js