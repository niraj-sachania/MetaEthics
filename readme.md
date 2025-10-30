# MetaEthics

Educational web project raising awareness about **digital safeguarding**, **ethical AI use** and **online safety** in immersive and AI‑driven environments. Designed for young people, educators and developers.

## Features

- **Responsive design** – Mobile-first layout using Bootstrap 5.3.8
- **Hero section** – Engaging introduction with dual CTAs
- **Educational content** – Six key sections covering safeguarding, warning signs, action steps, support resources and guidance for developers/guardians
- **Interactive components** – Accordion for action steps, card layouts for warning signs
- **Accessible navigation** – Fixed navbar with auto-collapse on mobile, proper scroll offsets for anchor links
- **Custom typography** – Montserrat for headings and branding, Source Sans 3 for body text

## Brand Assets

- **Logo**: `assets/images/logo.svg` – Shield mark with ME monogram and MetaEthics wordmark
- **Favicon**: `assets/images/logo.svg` (SVG, widely supported by modern browsers)
- **Hero illustration**: `assets/images/hero.svg` – Abstract network/grid visualization

## Color Palette

| Color                            | Hex                                                                                                                                                                                                                        | Usage                                  |
| -------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| **Primary (Trust Blue)**         | <img alt="#1A2E40" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='18'><rect width='100%' height='100%' fill='%231A2E40' stroke='%23000000' stroke-width='0.5'/></svg>"> `#1A2E40` | Headings, footer background            |
| **Secondary (Ethical Teal)**     | <img alt="#2CB1A1" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='18'><rect width='100%' height='100%' fill='%232CB1A1' stroke='%23000000' stroke-width='0.5'/></svg>"> `#2CB1A1` | Icons, accents, hover states           |
| **Accent (Positive Yellow)**     | <img alt="#FFC857" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='18'><rect width='100%' height='100%' fill='%23FFC857' stroke='%23000000' stroke-width='0.5'/></svg>"> `#FFC857` | Primary CTAs, list markers, alerts     |
| **Neutral Light (Off White)**    | <img alt="#F8F9FA" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='18'><rect width='100%' height='100%' fill='%23F8F9FA' stroke='%23000000' stroke-width='0.5'/></svg>"> `#F8F9FA` | Background for light sections          |
| **Neutral Dark (Charcoal Grey)** | <img alt="#343A40" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='18'><rect width='100%' height='100%' fill='%23343A40' stroke='%23000000' stroke-width='0.5'/></svg>"> `#343A40` | Body text, inverse section backgrounds |
| **Header Background**            | <img alt="#152635" src="data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='28' height='18'><rect width='100%' height='100%' fill='%23152635' stroke='%23000000' stroke-width='0.5'/></svg>"> `#152635` | Navbar contrast                        |

## Typography

- **Headings**: Montserrat (Google Fonts) – weights 100-900
- **Body**: Source Sans 3 (Google Fonts) – weights 200-900
- **Base font size**: 1.5rem for improved readability

## Page Structure

1. **Header/Navigation** – Fixed navbar with responsive collapse menu
2. **Hero Section** – Background image with gradient overlay, intro text and CTAs
3. **About (MetaEthics)** – Card-based overview with checkmark list
4. **Safeguarding** – Educational content about digital safety in the metaverse
5. **Signs to Watch For** – Grid of warning sign cards with icons
6. **Action Steps** – Accordion with 5-step response plan
7. **Contact & Support** – List of UK safeguarding organizations (inverse style)
8. **Developers & Guardians** – Three-column card layout with implementation notes
9. **Footer** – Copyright and author attribution

## Technical Details

### Dependencies

- **Bootstrap 5.3.8** – CSS and JS via CDN
- **Font Awesome 6.x** – Icons via Kit CDN
- **Google Fonts** – Montserrat and Source Sans 3

### CSS Variables

Defined in `:root` selector in `assets/css/styles.css`:

```css
--blue-900: #1a2e40;
--teal-500: #2cb1a1;
--yellow-400: #ffc857;
--light-50: #f8f9fa;
--dark-700: #343a40;
--shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.06);
--shadow-md: 0 8px 24px rgba(0, 0, 0, 0.18);
```

### JavaScript Features

- **Mobile nav auto-collapse** – Navigation menu automatically closes when anchor links are clicked
- Implemented using Bootstrap Collapse API

### Accessibility

- Semantic HTML5 structure
- ARIA labels on navigation
- Proper heading hierarchy
- Scroll padding offset (`scroll-padding-top: 80px`) to prevent content hiding under fixed navbar
- High contrast color combinations
- Underline offset for improved link readability

## Local Development

Open `index.html` directly in a browser or use a local server:

```bash
# Python
python3 -m http.server 5173

# Node.js
npx http-server -p 5173

# PHP
php -S localhost:5173
```

Then visit `http://localhost:5173/`

## File Structure

```
MetaEthics/
├── index.html
├── readme.md
└── assets/
    ├── css/
    │   └── styles.css
    └── images/
        ├── logo.svg
        ├── favicon.svg
        └── hero.svg
```

## Credits

Created by [Niraj Sachania](https://www.linkedin.com/in/niraj-sachania) © 2025
