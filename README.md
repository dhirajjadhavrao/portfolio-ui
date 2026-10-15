# 🌐 Dhiraj Jadhavrao Portfolio Platform

Monorepo root containing separate Git repositories for the standalone Frontend UI and Backend Service.

---

## 📁 Repository Structure

```
porfolio/
├── portfolio-ui/        # [Git Repo 1] Standalone React 19 + TypeScript + Vite + Tailwind CSS
└── portfolio-backend/   # [Git Repo 2] Spring Boot 3.3.5 / Java 21 REST API Backend
```

---

## 🚀 Running the Standalone UI (Frontend Clone)

The UI runs completely standalone with full dark/light theme switching, interactive code card, all portfolio sections, and local PDF resume downloads.

```bash
cd portfolio-ui
npm run dev
```

Visit the local development server at `http://localhost:5173`.

### Production Build
```bash
cd portfolio-ui
npm run build
npm run preview
```

---

## ☕ Backend Architecture (Planned & Initialized)

The backend is initialized as an enterprise Spring Boot 3 / Java 21 service ready for contact messaging, dynamic profile configuration, and analytics endpoints.

```bash
cd portfolio-backend
mvn spring-boot:run
```
