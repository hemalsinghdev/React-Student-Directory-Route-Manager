# 🎓 React Student Directory & Route Manager

A modern, responsive React web application built with **React 19**, **React Router v7**, and **Vite**. The application demonstrates core React concepts including reusable component architecture, client-side routing, shared state management via props, controlled form handling, and custom CSS design.

---

## ⚡ Tech Stack

- **Frontend Library:** [React 19](https://react.dev/)
- **Routing:** [React Router v7](https://reactrouter.com/)
- **Build Tool:** [Vite 7](https://vite.dev/)
- **Styling:** Custom CSS3 (Modern Light Slate Theme with Flexbox & Grid)

---

## ✨ Features

- 🧭 **Multi-Page Client Routing**: Dynamic seamless navigation across Home, Personal Details, and Contact pages without page reloads.
- 👤 **Shared Profile State**: Edit student profile details (Name, Age, Email, Phone, Location, Education) with instant live preview.
- 📩 **Interactive Contact & Feedback Form**: Submit messages with instant UI validation feedback and view saved profile summary cards.
- 🎨 **Modern & Responsive UI**: Responsive top navigation bar with mobile menu toggle, card grid layouts, subtle shadows, and sleek action buttons.
- 🏷️ **Dynamic Skill Badges**: Clean visual tags for technical skills and educational info.

---

## 📂 Project Structure

```text
practical1/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Top Navigation Bar with active link highlights
│   │   ├── Footer.jsx          # App footer with copyright and links
│   │   ├── Home.jsx            # Landing page with welcome overview & features grid
│   │   ├── PersonalDetails.jsx # Profile edit form & live profile preview card
│   │   └── Contact.jsx         # Contact form & saved profile detail cards
│   ├── App.css                 # Default Vite styles
│   ├── App.jsx                 # Base Vite starter template
│   ├── index.css               # Global typography and base styles
│   ├── main.jsx                # Application root entry point
│   ├── StudentPage.jsx         # Main router wrapper & central state store
│   └── StudentPage.css         # Complete app styling & design system
├── index.html                  # Main HTML entry file
├── package.json                # Dependencies and scripts
└── vite.config.js              # Vite server configuration
```

---

## 🛣️ Application Routes

| Route | Component | Description |
| :--- | :--- | :--- |
| `/` | `<Home />` | Welcome dashboard, quick navigation cards, & key features overview. |
| `/personal` | `<PersonalDetails />` | Form to edit personal/student info & real-time live preview card. |
| `/contact` | `<Contact />` | Contact message form with submission status feedback & profile summary. |

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.0.0 or higher recommended)
- **npm** or **yarn**

### Installation & Running Locally

1. **Clone or navigate to the project directory**:
   ```bash
   cd "sammar/React Student Directory & Route Manager/practical1"
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:5173/](http://localhost:5173/)

---

## 🛠️ Scripts

- `npm run dev`: Starts the Vite development server.
- `npm run build`: Builds the production bundle to `dist/`.
- `npm run preview`: Previews the production build locally.
- `npm run lint`: Runs ESLint for code analysis.

