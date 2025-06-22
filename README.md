# ⚡ ReactJS + Vite + Zustand + React Query

> A scalable, production-ready React project setup using Vite, Zustand, React Query, SCSS Modules, and Storybook — fully structured by feature/domain.

---

## 🚀 Features

### 🧱 Architecture
- **Vite**: Ultra-fast dev/build environment
- **Zustand**: Global state management with `persist`
- **React Query**: Powerful data-fetching with caching, background refetching
- **Axios**: Custom instance with interceptor, refresh token queue, retry with jitter
- **Storybook**: Isolated component development and documentation
- **SCSS Modules**: Theming, mixins, breakpoints
- **PWA-ready**: Installable, offline support (planned)

---

## 📝Node Version
>v22.9.0
---

## 🗂 Folder Structure
```yaml
src/
│
├── app/ # App entry, layout, providers, routing
│ ├── App.tsx
│ ├── Router.tsx
│ └── providers/
│ ├── ReactQueryProvider.tsx
│ ├── ThemeProvider.tsx
│ └── SuspenseBoundary.tsx
│
├── features/ # Domain-specific features
│ ├── auth/
│ │ ├── components/
│ │ ├── hooks/
│ │ ├── services/
│ │ ├── pages/
│ │ └── types.ts
│ ├── dashboard/
│ └── settings/
│
├── shared/ # Shared UI, hooks, store, utils across features
│ ├── components/
│ │ ├── ui/ # Reusable UI components (Button, Modal, Spinner, ...)
│ │ ├── layout/ # Header, Footer, Sidebar
│ │ ├── feedback/ # ErrorFallback, Toast
│ │ └── loading/ # Loading components per layer (App, Route, Component)
│ ├── hooks/
│ ├── store/
│ ├── utils/
│ ├── constants/
│ ├── types/
│ └── HOC/
│
├── infra/ # Infrastructure layer
│ ├── api/ # Axios instance, interceptors
│ ├── query/ # React Query client config
│ ├── workers/ # Web Workers
│ └── i18n/ # Internationalization (optional)
│
├── styles/ # Global SCSS setup
│ ├── _variables.scss
│ ├── _mixins.scss
│ ├── _breakpoints.scss
│ ├── theme.scss
│ └── main.scss
│
├── assets/ # Images, icons, fonts
├── index.tsx # Entry point
└── ...
```
---

## 📘 Storybook

Storybook is set up for developing and documenting UI components in isolation.

### Run Storybook:

```bash
npm run storybook
```

```bash
npm run build-storybook
```
---
## 🧠 Custom Hooks & Features
useDebounce, useNetworkStatus, useFocusTab

Custom form components with controlled onChange, validation, and submission

Reusable loading states:

AppLoading, RouteLoading, ComponentSkeleton

retryWithJitter for network retry strategy

withSuspense HOC for lazy components

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Format code with Prettier
npm run format

# Lint code
npm run lint

# Run unit tests (optional)
npm run test

# Run Storybook
npm run storybook
```
---
## 📦 Tech Stack
| Purpose       | Library/Tool       |
| ------------- | ------------------ |
| Frontend      | React, Vite        |
| State Mgmt    | Zustand            |
| Data Fetching | React Query        |
| HTTP Client   | Axios              |
| Routing       | React Router       |
| Styling       | SCSS Modules       |
| Build Tool    | Vite               |
| Component Dev | Storybook          |
| Utilities     | Custom hooks/utils |
| PWA           | (Planned)          |

---
## 📈 Optimization Goals
🧩 Modular, scalable codebase

⚡ Fast loading with lazy & suspense

🔁 Offline-first (PWA), long-press and haptic-ready on mobile

🌐 Language-ready with i18n support

🧪 Extensible testing with Vitest/Jest

---
## 👤 Author
Nguyen Hoang Quan\
Web Developer\
[GitHub](https://github.com/AwV7q1) | [LinkedIn](https://www.linkedin.com/in/quan-nguyen-hoang-1977b1b0/) | [Behance](https://www.behance.net/nhquan2820)
