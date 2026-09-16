# Vyrix Beta 2 – Landing Page

**Frontend Developer Internship Assignment – Aispire Private Limited**

A pixel-close, responsive and animated recreation of the *Vyrix Beta 2* landing page from the provided Figma design, built with **React + Vite** and deployed on **Vercel**.

| | |
|---|---|
| 🔗 **Live Demo (Vercel)** | [Visit Live Demo](https://aspire-mauve-six.vercel.app/) |
| 🎨 **Figma Design** | https://www.figma.com/design/VfqBzCZPLZVkkoY5QvFDHV/Interns-Task?m=auto&t=2CnCY6AKgM65vfay-1 |
| 💻 **Source Code** | https://github.com/paritoshchauhan01/Aspire |

---

## 📋 About the Assignment

The task was to review the Figma file (which has both a **Static Design** and an **Animated Design**) and build the same webpage, replicating:

- ✅ Visual elements (colours, fonts, spacing, icons, images)
- ✅ Layout of every section
- ✅ Responsiveness (desktop → tablet → mobile)
- ✅ Animations & interactions shown in the Animated Figma page
- ✅ Deployment on Vercel with a live link

All of the above have been implemented. Details are below.

---

## 🚀 How to Run Locally

**Requirements:** Node.js 18 or newer and npm.

```bash
# 1. Clone the repository
git clone https://github.com/paritoshchauhan01/Aspire.git

# 2. Go into the project folder
cd Aspire

# 3. Install dependencies
npm install

# 4. Start the development server
npm run dev
```

Now open **http://localhost:5173** in your browser.

### Other useful commands

| Command | What it does |
|---|---|
| `npm run dev` | Starts the local dev server with hot reload |
| `npm run build` | Creates a production build in the `dist/` folder |
| `npm run preview` | Serves the production build locally to test it |
| `npm run lint` | Runs the linter (oxlint) to check code quality |

---

## 🛠️ Tech Stack

| Technology | Why it was used |
|---|---|
| **React 19** | Component-based UI – each section of the page is its own reusable component |
| **Vite 8** | Very fast dev server and optimised production build |
| **Plain CSS (CSS Variables)** | Full control over pixel values to match Figma exactly; no design library to fight against |
| **IntersectionObserver API** | Native browser API used for scroll-triggered animations (no animation library needed) |
| **oxlint** | Fast linter to keep the code clean |
| **Vercel** | Hosting / deployment |

> **No UI libraries and no animation libraries were used.** Every layout, style and animation is hand-written so it matches the Figma file as closely as possible.

---

## 📁 Project Structure

The project follows a simple **MVC-style** structure so that content, logic and UI stay separate and easy to maintain.

```
Aspire/
├── public/                  # Static files (favicon, icons)
├── src/
│   ├── assets/images/       # Logo, icons, screenshot, SVGs exported from Figma
│   ├── models/              # 📦 DATA – all text content of the page (headings, reviews, links…)
│   ├── controllers/         # ⚙️ LOGIC – custom React hooks (loading state, scroll animation)
│   ├── views/               # 🧩 PAGE – assembles all sections into the full landing page
│   ├── components/          # 🎨 UI – one folder per section/block, each with its .jsx + .css
│   │   ├── LoadingScreen/
│   │   ├── Header/
│   │   ├── Hero/
│   │   ├── AppPreview/
│   │   ├── WhatsNewSection/
│   │   ├── FeatureBlock/
│   │   ├── ReviewsSection/
│   │   ├── ReviewCard/
│   │   ├── StarRating/
│   │   ├── PlatformSection/
│   │   ├── Footer/
│   │   └── ScrollReveal/    # Reusable wrapper that fades+slides content in on scroll
│   ├── App.jsx              # Root component (shows loader, then the page)
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles + design tokens (colours, fonts)
├── index.html
├── vite.config.js
└── package.json
```

**Why this structure?**
- Want to change a heading or a review? → edit a file in `models/`, no need to touch any component.
- Want to change how a scroll animation behaves? → edit one hook in `controllers/`.
- Want to change the look of a section? → edit that section's own `.css` file.

---

## 🧱 Sections of the Page

The page is built from top to bottom exactly as in the Figma file:

| # | Section | Description |
|---|---|---|
| 0 | **Loading Screen** | Spinning ring with the "Vyrix" brand name, shown for a minimum of 0.9s then fades out |
| 1 | **Header** | Logo, navigation links (Product, What's new, Reviews, Download) and a "Contact Us" button |
| 2 | **Hero** | Big heading *"Vyrix Beta 2 just landed on campus."*, subheading, two call-to-action buttons and the decorative ring backdrop |
| 3 | **App Preview** | Large screenshot of the Vyrix app inside a rounded card with a shadow |
| 4 | **What's new in Beta 2** | 4 feature blocks (AI integration, Reworked Repository, Fresh new look, Other features) in a zig-zag layout |
| 5 | **Reviews** | 6 student review cards with star ratings, arranged in 2 columns |
| 6 | **Choose your platform** | Windows and Mac download cards with *How to install* and *Download* buttons |
| 7 | **Footer** | Contact email, social links, copyright, Privacy/Terms links and the Aispire attribution |

---

## ✨ Animations & Interactions

These were built to match the **Animated Design** page in Figma.

| Animation | Where | How it works |
|---|---|---|
| **Loading screen** | On page open | A spinning ring is shown while the page loads (min 0.9s), then fades out smoothly |
| **Scroll reveal** | Almost every section | Content is hidden (opacity 0, moved 32px down). When it scrolls into view, it fades in and slides up. Done with `IntersectionObserver` via the reusable `<ScrollReveal>` component |
| **Staggered reveal** | Hero, Reviews, Platforms | Items in a group appear one after another using small delays (100–120ms) instead of all at once |
| **Hero scroll parallax** | Hero section | As you scroll down, the hero text lifts up and fades out gradually (controlled by a CSS variable updated on scroll) |
| **Mouse parallax** | Hero background rings | The decorative ring cluster gently drifts toward the cursor as you move the mouse |
| **App preview zoom-in** | Screenshot card | The screenshot starts slightly smaller (scale 0.88) and zooms to full size when it enters the viewport |
| **Auto-hiding header** | Header | Scrolling down hides the header; scrolling up brings it back. Always visible near the top of the page |
| **Hover effects** | All buttons & links | Buttons lift slightly and change colour on hover |
| **Reduced motion support** | Everywhere | If the user's OS has "Reduce motion" enabled, all animations are turned off automatically (`prefers-reduced-motion`) |

**Performance note:** All scroll and mouse handlers are throttled with `requestAnimationFrame` and use passive event listeners, so the animations stay smooth without hurting scroll performance.

---

## 📱 Responsiveness

The page adapts to all screen sizes:

| Screen width | Changes |
|---|---|
| **Desktop** (> 900px) | Full layout exactly as in Figma |
| **Tablet** (≤ 900px) | Navigation links collapse; logo and Contact button remain |
| **Mobile** (≤ 720px) | Hero heading shrinks, buttons stack vertically, feature blocks go full-width, platform cards stack, footer becomes a single column |

Additional techniques used:
- `clamp()` for fluid font sizes that scale smoothly between screen sizes
- `100svh` for the hero so it fills the screen correctly on mobile browsers
- Flexbox everywhere with `flex-wrap` so nothing overflows

---

## 🔄 Workflow – How I Built It

1. **Studied the Figma file** – went through both the Static and Animated pages to understand every section, spacing, colour, font and animation.
2. **Extracted design tokens** – picked out all colours and font families from Figma and stored them as CSS variables in `index.css` so they're used consistently everywhere.
3. **Exported assets** – logo, icons, the app screenshot and the hero ring SVG were exported from Figma into `src/assets/images/`.
4. **Set up the project** – created a fresh React + Vite project and organised it into the `models / views / controllers / components` structure.
5. **Separated content from UI** – moved every piece of text (headings, reviews, links) into `models/` files so components stay clean.
6. **Built the static layout** – developed each section as its own component, one by one, matching the Figma measurements.
7. **Added animations** – wrote the `useScrollAnimation` hook and the `<ScrollReveal>` wrapper, then added the loading screen, hero parallax, auto-hiding header and hover effects to match the Animated Figma page.
8. **Made it responsive** – added media queries at 900px and 720px and tested on different screen sizes.
9. **Added accessibility** – proper `alt` text, `aria-label`s on icon links and star ratings, decorative images marked `aria-hidden`.
10. **Lint, build & deploy** – ran `npm run lint` and `npm run build`, pushed to GitHub and deployed to Vercel.

---

## ☁️ Deployment on Vercel

The site is deployed on Vercel. To deploy it yourself:

1. Push the code to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **Add New Project** → import the repository.
3. Vercel auto-detects **Vite**. Keep the defaults:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Click **Deploy**. Every future push to `main` redeploys automatically.

---

## ♿ Accessibility

- Semantic HTML (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- Star ratings have `role="img"` with a readable label like *"4 out of 5 stars"*
- Loading screen uses `role="status"` and `aria-live="polite"`
- Social icon links have `aria-label`s; decorative images are hidden from screen readers
- Animations respect the user's reduced-motion preference

---

## 👤 Author

**Paritosh Chauhan**
Submitted for the Frontend Developer Internship at **Aispire Private Limited**.
