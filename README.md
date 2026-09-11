# 🎓 React Student Directory & Route Manager

A clean, modern, beginner-friendly React web application created to practice core React concepts including reusable components, client-side routing, form state management, props, and responsive CSS styling.

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-Modern-1572B6?style=for-the-badge&logo=css3&logoColor=white)

---

## ✨ Features

- 🎨 **Modern & Professional UI**: Soft light slate theme, crisp white cards, vibrant blue accents, and subtle box shadows.
- 🧭 **Multi-Page Routing**: Smooth client-side navigation between pages using `react-router-dom`.
- 👤 **Personal Details & Profile Card**: Interactive form to edit profile details with live preview card updating and skill badges.
- 📩 **Contact Page**: Contact form with submission feedback alongside saved profile data cards.
- 📱 **Fully Responsive**: Mobile-friendly navigation toggle and responsive grid layouts for desktop, tablet, and mobile screens.

---

## 📂 Project Structure

```text
practical1/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Reusable Header Nav with active link highlighting & mobile toggle
│   │   ├── Footer.jsx           # Footer component with quick links & copyright
│   │   ├── Home.jsx             # Hero section, feature checklist & practice cards grid
│   │   ├── PersonalDetails.jsx  # Personal details form & live profile preview card
│   │   └── Contact.jsx          # Contact form, direct contact info & saved data card
│   ├── App.css                  # Extra component utility styles
│   ├── index.css                # Global CSS reset & theme variables
│   ├── main.jsx                 # Application entry point
│   ├── StudentPage.css          # Main layout, card, button & responsive CSS rules
│   └── StudentPage.jsx          # Main layout wrapper managing routes & state
├── index.html                   # HTML template
├── package.json                 # Project dependencies & scripts
└── vite.config.js               # Vite build configuration
```

---

## 🛠️ Concepts Practiced

| Concept | Description |
| --- | --- |
| **Components** | Building reusable UI components like `Navbar`, `Footer`, and page views. |
| **React Router** | Multi-page routing (`/`, `/personal`, `/contact`) using `BrowserRouter`, `Routes`, `Route`, and `NavLink`. |
| **State Management** | Managing form input state with `useState` and passing state across components via `props`. |
| **Form Handling** | Capturing input data, handling `onSubmit` events, and preventing page refreshes. |
| **Responsive CSS** | Clean layout design using CSS Flexbox, Grid, custom CSS variables, and `@media` queries. |

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (v18 or higher) installed on your machine.

### Installation & Local Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/hemalsinghdev/React-Student-Directory-Route-Manager.git
   ```

2. **Navigate into the project directory**:
   ```bash
   cd React-Student-Directory-Route-Manager/practical1
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Start the development server**:
   ```bash
   npm run dev
   ```

5. **Open in Browser**:
   Visit [http://localhost:5173/](http://localhost:5173/) to view the application live.

---

## 📜 Available Scripts

In the `practical1` project directory, you can run:

- `npm run dev` — Runs the app in development mode with HMR.
- `npm run build` — Builds the app for production in the `dist` folder.
- `npm run preview` — Locally previews the production build.

---

## 👤 Author

- **Hemal Singh** — GitHub: [@hemalsinghdev](https://github.com/hemalsinghdev)

---

⭐ *If you found this practice project helpful, feel free to give it a star on GitHub!*
