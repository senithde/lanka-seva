# Lanka Seva · ලංකා සේවා

**Sri Lanka Government Super App — UX Concept v1.0**  
By Senith Edirisinghe · UI/UX Designer

---

## What is this?

Lanka Seva is a speculative UX concept for a unified Sri Lanka government mobile app — one trusted platform for every citizen-facing service. This repository contains the complete **26-page wireframe case study** combining research, personas, user journeys, and ~100 mid-fidelity wireframe screens.

> **Disclaimer:** Lanka Seva is an independent UX concept project by Senith Edirisinghe. It is not affiliated with, endorsed by, or connected to ICTA, the Ministry of Digital Economy, or the Government of Sri Lanka. All government service flows are based on publicly available information.

Inspired by the [ICTA Government Super App initiative](https://www.icta.lk/projects/digital-government/government-super-app).

---

## How to open

No build step. No dependencies to install.

**Option 1 — Python (quickest):**
```bash
python3 -m http.server 8080
# Then open http://localhost:8080 in your browser
```

**Option 2 — Node / npx:**
```bash
npx serve .
# Then open the URL shown in the terminal
```

**Option 3 — VS Code Live Server:**  
Install the [Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer), right-click `index.html` → "Open with Live Server".

> **Do not open `index.html` directly as a `file://` URL** — the browser will block loading the `.jsx` scripts due to CORS restrictions. Always use a local HTTP server.

---

## Document structure

| Page | Section |
|------|---------|
| 1 | Cover — designer card, reading guide, disclaimer |
| 2 | The Problem — 6 problem cards + 3 real scenarios |
| 3 | User Research — method, 5 questions, 6 insights, FigJam synthesis |
| 4 | Three User Personas — Sampath, Anjali, Bandara |
| 5 | How Might We — 9 design questions |
| 6 | The Proposed Solution — solution statement + 8 design principles |
| 7 | App Structure — complete sitemap tree |
| 8 | User Journey — Sampath pays a traffic fine (7 stages) |
| 9 | User Journeys — Bandara health appt + Anjali bill anomaly |
| 10 | Design Constraints + Competitive Reference |
| 11 | Onboarding — O1–O8 (10 screens) |
| 12 | Authentication — A1–A6 (6 screens) |
| 13 | Home & Notifications — H1–H2 (2 screens) |
| 14 | Services: Browse & Detail — S1–S3, S7a–S7b (5 screens) |
| 15 | Services: The Payment Flow — S4–S6 (3 screens) |
| 16 | Bills & Payments — B1–B7 (7 screens) |
| 17 | QR Pay — Q1–Q8 (8 screens) |
| 18 | Profile: Identity & Documents — P1–P5d (8 screens) |
| 19 | Profile: Bank, History & Settings — P6–P14 (9 screens) |
| 20 | Locate — L1–L4 (4 screens) |
| 21 | Family & Children: Setup — F1–F11 (11 screens) |
| 22 | Family & Children: Transitions & Approval — F12–F20 (9 screens) |
| 23 | Services from Birth to Adulthood — life-stage infographic |
| 24 | Supporting & Accessibility — X1–X8 (8 screens) |
| 25 | Let's Continue This Conversation — 6 open questions |
| 26 | Closing page |

---

## Visual design system

| Token | Value | Usage |
|-------|-------|-------|
| Amber | `#E09400` / `#d97706` | Primary CTAs, child account, sticky notes |
| Blue | `#2B5FA8` | Headers, brand, adult account identity card |
| Green | `#1E9459` | Verified/auto-fill state, health |
| Red | `#c43a48` | Errors, cost scenarios |
| Paper | `#fcfaf5` | Page/phone background |
| Ink | `#1a1815` | Body text |
| Font: Kalam | — | Handwritten-style headings and content |
| Font: Caveat | — | Italic annotations and captions |
| Font: JetBrains Mono | — | Metadata, labels, overlines |
| Font: Inter | — | Logo wordmark |
| Font: Noto Sans Sinhala | — | Sinhala script content |

---

## File map

```
lanka-seva/
├── index.html              ← Open this (via a local server)
├── wireframe.css           ← Phone frame + primitives styles
├── publication.css         ← 26-page publication layout
├── publication-final.css   ← Final version overrides (annotations, life-stage, closing)
├── wf-components.jsx       ← Shared primitives: Phone, Header, TabBar, LSMark, Input…
├── logo.jsx                ← Lanka Seva logo variants (LSMonogram, LogoV1/V2/V3)
├── screens-1.jsx           ← Onboarding, Auth, Home, Services, QR, Profile, Supporting
├── screens-2.jsx           ← Locate screens
├── screens-v2.jsx          ← V2: Missing screens, Documents, Bills, Enhanced home
├── screens-v3.jsx          ← V3: Family & Children system, transitions, approval
├── pub-content.jsx         ← Publication components: Personas, HMW, Journeys, PubWfRow
├── pub-final.jsx           ← Final pub components: Cover, LifeStage, Conversation, Closing
└── assets/
    └── senith.jpg          ← Designer avatar (closing page)
```

---

## Connect

- **LinkedIn:** [linkedin.com/in/senithedirisinghe](https://www.linkedin.com/in/senithedirisinghe)
- **Email:** senithedirisinghe@gmail.com