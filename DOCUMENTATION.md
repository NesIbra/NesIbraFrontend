# Cloud AI - Project Documentation

## Table of Contents
1. [Project Overview](#project-overview)
2. [Running on Another PC](#running-on-another-pc)
3. [Backend Integration Guide](#backend-integration-guide)
4. [Project Structure](#project-structure)
5. [Environment Variables](#environment-variables)

---

## Project Overview

- **Frontend:** React 19 + Vite
- **Styling:** CSS Variables (dark theme + glassmorphism)
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM v7
- **Notifications:** React Hot Toast

---

## Running on Another PC

### Prerequisites
- Node.js v18+ installed (https://nodejs.org)
- npm or yarn

### Steps

```bash
# 1. Copy the project folder to the new PC (USB, Git, zip, etc.)

# 2. Open terminal and navigate to the frontend folder
cd /path/to/nesre/frontend

# 3. Install dependencies
npm install

# 4. Start dev server
npm run dev -- --port 3300 --host

# 5. Open in browser
# http://localhost:3300
```

### Running on Local Network (access from phone/other devices)
```bash
npm run dev -- --port 3300 --host
```
Then open `http://<your-pc-ip>:3300` from any device on the same WiFi.
Find your IP with:
- Linux: `hostname -I`
- Mac: `ifconfig | grep inet`
- Windows: `ipconfig`

### Production Build
```bash
# Build for production
npm run build

# Preview production build locally
npm run preview -- --port 3300

# The 'dist' folder contains static files you can deploy anywhere
# (Vercel, Netlify, Nginx, Apache, etc.)
```

---

## Backend Integration Guide

The frontend currently uses mock data from `src/data/mockData.js`. To connect to a real backend API, follow these steps:

### Step 1: Create API Service

Create a file `src/api/client.js`:

```js
const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

async function request(endpoint, options = {}) {
  const token = localStorage.getItem('admin_token');

  const res = await fetch(`${API_BASE}${endpoint}`, {
    headers: {
      'Content-Type': 'application/json',
      ...(token && { Authorization: `Bearer ${token}` }),
      ...options.headers,
    },
    ...options,
  });

  if (!res.ok) {
    const error = await res.json().catch(() => ({ message: res.statusText }));
    throw new Error(error.message || 'Request failed');
  }

  return res.json();
}

export const api = {
  // Projects
  getProjects: () => request('/projects'),
  getProject: (id) => request(`/projects/${id}`),
  createProject: (data) => request('/projects', { method: 'POST', body: JSON.stringify(data) }),
  updateProject: (id, data) => request(`/projects/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteProject: (id) => request(`/projects/${id}`, { method: 'DELETE' }),

  // Developers
  getDevelopers: () => request('/developers'),
  getDeveloper: (id) => request(`/developers/${id}`),
  createDeveloper: (data) => request('/developers', { method: 'POST', body: JSON.stringify(data) }),
  updateDeveloper: (id, data) => request(`/developers/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteDeveloper: (id) => request(`/developers/${id}`, { method: 'DELETE' }),

  // Articles
  getArticles: () => request('/articles'),
  getArticle: (id) => request(`/articles/${id}`),
  createArticle: (data) => request('/articles', { method: 'POST', body: JSON.stringify(data) }),
  updateArticle: (id, data) => request(`/articles/${id}`, { method: 'PUT', body: JSON.stringify(data) }),
  deleteArticle: (id) => request(`/articles/${id}`, { method: 'DELETE' }),

  // Contact
  submitContact: (data) => request('/contacts', { method: 'POST', body: JSON.stringify(data) }),
  getContacts: () => request('/contacts'),

  // Auth
  login: (email, password) => request('/auth/login', { method: 'POST', body: JSON.stringify({ email, password }) }),
};
```

### Step 2: Add Environment Variable

Create `frontend/.env`:
```
VITE_API_URL=http://localhost:5000/api
```

For production, set this to your real backend URL.

### Step 3: Replace Mock Data in Pages

**Example — Projects page (`src/pages/Projects.jsx`):**

Replace:
```js
import { projects } from '../data/mockData';
```

With:
```js
import { useState, useEffect, useMemo } from 'react';
import { api } from '../api/client';

// Inside the component:
const [projects, setProjects] = useState([]);
const [loading, setLoading] = useState(true);

useEffect(() => {
  api.getProjects()
    .then(data => setProjects(data))
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
}, []);
```

Apply the same pattern to:
| Page | Import to replace | API call |
|------|------------------|----------|
| `Home.jsx` | `projects, services, developers` | `api.getProjects()`, `api.getDevelopers()` |
| `Projects.jsx` | `projects` | `api.getProjects()` |
| `ProjectDetail.jsx` | `projects` | `api.getProject(id)` |
| `Developers.jsx` | `developers` | `api.getDevelopers()` |
| `Blog.jsx` | `articles` | `api.getArticles()` |
| `ArticleDetail.jsx` | `articles` | `api.getArticle(id)` |
| `Contact.jsx` | (mock timeout) | `api.submitContact(form)` |

### Step 4: Expected Backend API Endpoints

Your Node.js backend should implement these REST endpoints:

```
GET    /api/projects          → list all projects
GET    /api/projects/:id      → single project
POST   /api/projects          → create (admin)
PUT    /api/projects/:id      → update (admin)
DELETE /api/projects/:id      → delete (admin)

GET    /api/developers        → list all developers
GET    /api/developers/:id    → single developer
POST   /api/developers        → create (admin)
PUT    /api/developers/:id    → update (admin)
DELETE /api/developers/:id    → delete (admin)

GET    /api/articles           → list published articles
GET    /api/articles/:id       → single article
POST   /api/articles           → create (admin)
PUT    /api/articles/:id       → update (admin)
DELETE /api/articles/:id       → delete (admin)

POST   /api/contacts           → submit contact form (public)
GET    /api/contacts           → list contacts (admin)

POST   /api/auth/login         → admin login → returns { token }
```

### Step 5: Expected JSON Response Formats

**Project:**
```json
{
  "id": "uuid",
  "title": "AI Analytics Platform",
  "description": "Full description...",
  "tech_stack": ["React", "Python", "TensorFlow"],
  "image_url": "https://...",
  "category": "AI/ML",
  "featured": true,
  "created_at": "2024-12-15T00:00:00Z"
}
```

**Developer:**
```json
{
  "id": "uuid",
  "name": "Alex Chen",
  "role": "CEO & Full-Stack Developer",
  "skills": ["React", "Node.js", "Python"],
  "image_url": "https://...",
  "bio": "Short bio text",
  "social_links": { "github": "https://...", "linkedin": "https://..." }
}
```

**Article:**
```json
{
  "id": "uuid",
  "title": "Article Title",
  "content": "Full markdown content...",
  "excerpt": "Short summary",
  "author": "Author Name",
  "cover_image": "https://...",
  "tags": ["AI", "Technology"],
  "created_at": "2024-12-15T00:00:00Z"
}
```

**Contact:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "I need a website..."
}
```

**Login Response:**
```json
{
  "token": "jwt-token-here",
  "user": { "id": "uuid", "email": "admin@cloudai.com", "name": "Admin" }
}
```

### Step 6: Supabase Database Schema

Run this SQL in Supabase SQL Editor:

```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  tech_stack TEXT[] DEFAULT '{}',
  image_url TEXT,
  category VARCHAR(100),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE developers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  role VARCHAR(255) NOT NULL,
  skills TEXT[] DEFAULT '{}',
  image_url TEXT,
  bio TEXT,
  social_links JSONB DEFAULT '{}',
  display_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author VARCHAR(255) NOT NULL,
  cover_image TEXT,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) DEFAULT 'unread',
  created_at TIMESTAMPTZ DEFAULT NOW()
);
```

---

## Project Structure

```
nesre/
└── frontend/
    ├── public/
    ├── src/
    │   ├── api/            ← create this for backend integration
    │   │   └── client.js
    │   ├── components/
    │   │   ├── Navbar.jsx
    │   │   └── Footer.jsx
    │   ├── data/
    │   │   └── mockData.js  ← replace with API calls
    │   ├── pages/
    │   │   ├── Home.jsx
    │   │   ├── Projects.jsx
    │   │   ├── ProjectDetail.jsx
    │   │   ├── Developers.jsx
    │   │   ├── Blog.jsx
    │   │   ├── ArticleDetail.jsx
    │   │   └── Contact.jsx
    │   ├── App.jsx
    │   ├── main.jsx
    │   └── index.css
    ├── .env                 ← create this
    ├── package.json
    └── vite.config.js
```

---

## Environment Variables

| Variable | Where | Purpose |
|----------|-------|---------|
| `VITE_API_URL` | `frontend/.env` | Backend API base URL |
| `PORT` | Backend `.env` | Backend server port |
| `SUPABASE_URL` | Backend `.env` | Supabase project URL |
| `SUPABASE_ANON_KEY` | Backend `.env` | Supabase anon/public key |
| `SUPABASE_SERVICE_KEY` | Backend `.env` | Supabase service role key |
| `JWT_SECRET` | Backend `.env` | Secret for signing JWT tokens |

---

## Quick Checklist for Backend Integration

- [ ] Set up Supabase project at https://supabase.com
- [ ] Run the SQL schema above in Supabase SQL Editor
- [ ] Build Node.js/Express backend with the endpoints listed above
- [ ] Create `frontend/src/api/client.js` (code provided above)
- [ ] Create `frontend/.env` with `VITE_API_URL`
- [ ] Replace mock data imports with `useEffect` + API calls in each page
- [ ] Add admin panel pages for CRUD management
- [ ] Deploy frontend to Vercel/Netlify, backend to Render/Railway
