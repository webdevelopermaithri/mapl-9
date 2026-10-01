# Maithri Aquatech — Combined Project

One Vite + React + Tailwind app combining:

- **Navbar** (`react-router-dom`, dropdowns for R&D/Products, mobile
  hamburger, "Design Your Water System" CTA button)
- **Technology page** (`/technology`) — the MEGHDOOT® landing page
- **Philosophy page** (`/philosophy`) — the real single-scroll Philosophy
  build (Hero, Story, Journey Timeline, Values, Leadership, Manifesto,
  CTA), now wired in as a route instead of a placeholder
- **Design Your Water System** (`/design-your-water-system`)
- Plus the remaining placeholder pages (R&D, Products, Applications,
  Projects, Impact, Media House)

## One shared Footer & FloatingButtons

Previously the Philosophy, Technology and Design-Your-Water-System
sections each shipped their own `Footer.jsx` / `FloatingButtons.jsx`.
Those are now consolidated into **one** copy of each:

```
src/components/Footer/Footer.jsx
src/components/FloatingButtons/FloatingButtons.jsx
```

`App.jsx` renders `<Navbar />` once, then `<Routes>`, then `<Footer />`
and `<FloatingButtons />` once — so every page automatically gets the
same navbar, footer and contact buttons without repeating them per
page. The footer's link columns use real `<Link>` routes (`/technology`,
`/philosophy`, `/products`, etc.) instead of dead `#` anchors.

## Images — local assets only

The Philosophy page's images (hero "water sphere" + manifesto triptych)
now come from local files instead of external `picsum.photos` URLs:

```
src/assets/philosophy/
  hero-sphere.jpg
  manifesto-air.jpg
  manifesto-dandelion.jpg
  manifesto-redefined.jpg
```

They're imported in one place — `src/config/images.js` — and referenced
by component (e.g. `images.heroSphere`). **These four files are
brand-toned placeholder gradients** (generated locally, since this
sandbox has no network access to fetch real photography). Swap in your
real photos by replacing the files in `src/assets/philosophy/` — no
code changes needed elsewhere, as long as the filenames match, or you
repoint the `import` lines in `images.js`.

## Run it

```bash
npm install
npm run dev      # local dev server
npm run build    # production build -> dist/
```

## Folder structure

```
src/
  main.jsx                        entry point (BrowserRouter + App)
  App.jsx                         Navbar + Routes + Footer + FloatingButtons
  index.css                       Tailwind + global resets + Philosophy design tokens
  config/
    images.js                      Philosophy page image imports (local assets only)
  data/
    faqs.js / offices.js           Design-Your-Water-System copy
    philosophy-content.js          all Philosophy page copy
  hooks/
    useScrollReveal.js             IntersectionObserver hook (Philosophy reveal animations)
  assets/
    philosophy/                    local images for the Philosophy page
  components/
    Navbar/                        sticky nav, dropdowns, hamburger
    Footer/                        ONE shared footer, used on every page
    FloatingButtons/                ONE shared WhatsApp/Chat buttons, used on every page
    PageShell.jsx                  shared layout for the minimal placeholder pages
    Technology/                    MEGHDOOT® page building blocks
    DesignWaterSystem/              Contact / Offices / FAQ sections
    Philosophy/                    Hero, StorySection, JourneyTimeline, ValuesSection,
                                    LeadershipSection, ManifestoSection, CTASection, Icons
  pages/
    Home.jsx, Technology.jsx, RnD.jsx, Products.jsx, Applications.jsx,
    Projects.jsx, Impact.jsx, MediaHouse.jsx, Philosophy.jsx, DesignSystem.jsx
```

## Routes

| Route                        | Page          |
| ----------------------------| ------------- |
| `/`                          | Home          |
| `/technology`                | MEGHDOOT® (full landing page) |
| `/philosophy`                | Philosophy (full single-scroll page) |
| `/rnd`                       | R&D           |
| `/products`                  | Products      |
| `/applications`              | Applications  |
| `/projects`                  | Projects      |
| `/impact`                    | Impact        |
| `/media-house`               | Media House   |
| `/design-your-water-system`  | Design Your Water System |

## Contact form (Design Your Water System page)

The contact form in `src/components/DesignWaterSystem/ContactSection.jsx`
sends submissions by email using **EmailJS** (no backend needed — see
inline comments at the top of that file). It's already wired up with a
live account and sends to **info@maithriaqua.co.in**, collecting: name,
email, phone number, location, company/organisation, daily drinking
water requirement (Liters), how they heard about us, and their message.
Name, email, phone, location, company, and water requirement are
required; the rest are optional.

If you ever need to reconnect it to a different EmailJS account or
inbox, update the three constants near the top of `ContactSection.jsx`
(`EMAILJS_SERVICE_ID`, `EMAILJS_TEMPLATE_ID`, `EMAILJS_PUBLIC_KEY`) and
`RECIPIENT_EMAIL`, and make sure the EmailJS template's Content box
includes `{{from_name}}`, `{{from_email}}`, `{{phone}}`, `{{location}}`,
`{{company}}`, `{{water_requirement}}`, `{{hear_about_us}}`,
`{{submitted_at}}`, and `{{message}}` so the submitted details actually
appear in the email body.

## Notes on the merge

- Philosophy's plain-CSS class `.container` was renamed to
  `.phi-container` throughout, because Tailwind ships its own built-in
  `.container` utility — keeping the original name would have caused a
  layout conflict site-wide. Nothing else in Philosophy's markup or
  styling changed.
- Philosophy's design tokens (`--navy-*`, `--gold-*`, fonts, keyframes,
  `.reveal` scroll animations) were merged into the shared
  `src/index.css`, after the Tailwind directives, so they apply only
  where used and don't fight Tailwind's resets.
- Config files you asked not to touch (`package.json`, `vite.config.js`,
  `tailwind.config.js`, `postcss.config.js`, `index.html`,
  `.gitignore`) are unchanged from what you uploaded.
