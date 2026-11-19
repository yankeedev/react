# Beginner Projects

A collection of introductory React projects built to learn the fundamentals of React, Vite, and modern frontend development.

---

## 📁 Projects Overview

This repository contains 2 beginner-level projects:

| Project | Tech Stack | Description |
|---------|------------|-------------|
| **[hello.app](#helloapp)** | React (Create React App) | A simple React app bootstrapped with Create React App |
| **[simple counter](#simple-counter)** | React + Vite | A counter application with increment, decrement, and reset functionality |

---

## 🚀 hello.app

**Location:** `hello.app/`  
**Built with:** Create React App (React 19)

### Description
A starter React application created using Create React App. This project served as the first step in learning React fundamentals, including component structure, JSX, and the React component lifecycle.

### Project Structure
```
hello.app/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   ├── reportWebVitals.js
│   └── setupTests.js
├── .gitignore
├── package.json
└── package-lock.json
```

### Commit History

| Commit | Date | Description |
|--------|------|-------------|
| `1fe91d0` | 2026-11-19 | **feat: initialize react project** - Created the initial Create React App structure with all essential files |
| `ab1d5e1` | 2026-11-19 | **chore : add a hello world** - Added Hello.md to demo basic markdown |
| `60becfe` | 2026-11-19 | **chore: update main.jsx** - Minor update to main.jsx |

### Setup & Run

```bash
cd hello.app
npm install
npm start
```

The app will run at `http://localhost:3000`.

---

## ⏲️ simple counter

**Location:** `simple counter/countrt/`  
**Built with:** Vite + React (React 19)

### Description
A functional counter application built with React and Vite. Features include:
- **Increment** - Increase the count by 1
- **Decrement** - Decrease the count by 1
- **Reset** - Reset count to 0

This project demonstrates React hooks (specifically `useState`), event handling, and component-based architecture.

### Project Structure
```
simple counter/
└── countrt/
    ├── public/
    │   ├── favicon.svg
    │   └── icons.svg
    ├── src/
    │   ├── assets/
    │   │   ├── hero.png
    │   │   ├── javascript.svg
    │   │   └── vite.svg
    │   ├── counter.jsx       # Counter component with useState hook
    │   ├── main.jsx          # Entry point
    │   └── style.css         # Full styling with dark mode support
    ├── index.html
    ├── package.json
    ├── package-lock.json
    └── vite.config.js
```

### Key Features

**Counter Component** (`src/counter.jsx`):
- Uses React `useState` hook to manage count state
- Three action buttons: Increment, Decrement, Reset
- Component-based architecture for reusability

**Main Entry Point** (`src/main.jsx`):
- Renders the Counter component into the DOM
- Uses ReactDOM.createRoot for React 18+ concurrent rendering

**Styling** (`src/style.css`):
- CSS custom properties (variables) for theming
- Dark mode support via `prefers-color-scheme` media query
- Responsive design with media queries
- Modern CSS features (flexbox, transitions, animations)

### Commit History

| Commit | Date | Description |
|--------|------|-------------|
| `1fe91d0` | 2026-11-19 | **feat: initialize react project** - Initial Vite + React setup with boilerplate |
| `fbbf14e` | 2026-11-19 | **feat: add a react counter-app** - Added the core counter functionality and styles |
| `ce4ff2c` | 2026-11-19 | **feat: migrate to jsx** - Migrated from .js to .jsx files |
| `3e712f0` | 2026-11-19 | **feat : add vite config** - Added Vite configuration |
| `b606439` | 2026-11-19 | **chore: rewire main.jsx** - Minor updates to main.jsx |
| `60becfe` | 2026-11-19 | **chore: update main.jsx** - Final updates to main.jsx |

### Setup & Run

```bash
cd simple counter/countrt
npm install
npm run dev
```

The app will run at `http://localhost:5173` (Vite default port).

---

## 🛠️ Technical Skills Demonstrated

| Skill | Projects |
|-------|----------|
| **React** | ✅ hello.app, ✅ simple counter |
| **React Hooks** | useState (simple counter) |
| **JSX** | ✅ hello.app, ✅ simple counter |
| **Component Composition** | ✅ hello.app, ✅ simple counter |
| **State Management** | ✅ simple counter (useState) |
| **Vite** | ✅ simple counter |
| **Create React App** | ✅ hello.app |
| **CSS Styling** | ✅ simple counter (CSS variables, dark mode) |
| **Git** | ✅ All commits tracked |

---

## 📊 Project Statistics

| Project | Commits | Lines Added | Lines Deleted | Files Added |
|---------|---------|-------------|---------------|-------------|
| hello.app | 3 | ~17,679 | - | 18 |
| simple counter | 6 | ~1,370 | - | 12 |

---

## 🎯 Learning Objectives Achieved

1. ✅ Setting up a React project (CRA & Vite)
2. ✅ Understanding component structure and JSX
3. ✅ Managing component state with `useState`
4. ✅ Handling user events and click handlers
5. ✅ Styling components with CSS
6. ✅ Using Git for version control
7. ✅ Following semantic commit conventions

---

## 📜 License

This project is for educational purposes. All content created as part of learning React fundamentals.

---

*Last updated: 2026-11-20*
