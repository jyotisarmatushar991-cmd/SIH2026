# Skill Bridge — Industry-Academia-Student Collaboration Portal

A government-portal-styled static website for **Skill Bridge**, connecting AICTE-approved colleges, industry partners, and students — with a demo AI chatbot and AI skill-mapping tool. Built for the Smart India Hackathon.

## Project structure

```
skillbridge/
├── index.html          # Main single-page site (all sections)
├── css/
│   └── style.css        # Government-portal-style theme (navy/saffron)
├── js/
│   └── script.js         # Chatbot logic + AI skill-mapping demo logic
├── package.json          # Local dev server script
├── vercel.json            # Vercel static deployment config
└── README.md
```

This is a **pure static site** (HTML/CSS/JS) — no backend or build step required. The chatbot and skill-mapping features are demo/mock logic running entirely in the browser (no API keys needed).

## Running locally

You need [Node.js](https://nodejs.org) installed (for the `npx serve` command). Two options:

**Option A — using npm script**
```bash
cd skillbridge
npm install
npm start
```
This starts a local server at **http://localhost:3000**

**Option B — no install, one-liner**
```bash
cd skillbridge
npx serve . -l 3000
```

**Option C — Python (if you don't want Node.js)**
```bash
cd skillbridge
python3 -m http.server 3000
```
Then open **http://localhost:3000** in your browser.

## Deploying to Vercel (with your domain posthumanz.in)

1. **Install Vercel CLI** (one-time):
   ```bash
   npm install -g vercel
   ```

2. **Login**:
   ```bash
   vercel login
   ```

3. **Deploy** (from inside the `skillbridge` folder):
   ```bash
   cd skillbridge
   vercel
   ```
   Follow the prompts (set up and deploy → yes, link to a new project, accept defaults). This gives you a preview URL like `skill-bridge-xxxx.vercel.app`.

4. **Deploy to production**:
   ```bash
   vercel --prod
   ```

5. **Connect your custom domain (posthumanz.in)**:
   - Go to your project on [vercel.com/dashboard](https://vercel.com/dashboard)
   - Open **Settings → Domains**
   - Add `posthumanz.in` (and `www.posthumanz.in` if needed)
   - Vercel will show DNS records (an `A` record or `CNAME`) — add these in your domain registrar's DNS settings
   - Wait for DNS propagation (usually a few minutes to a few hours); Vercel auto-issues an SSL certificate once verified

Alternatively, you can skip the CLI and just drag-and-drop the `skillbridge` folder into [vercel.com/new](https://vercel.com/new), or connect a GitHub repo containing this folder for auto-deploys on every push.

## Customizing

- **Colors/branding**: edit CSS variables at the top of `css/style.css` (`--navy`, `--saffron`, `--green`).
- **Chatbot answers**: edit the `faq` array in `js/script.js`.
- **Skill mapping data**: edit the `skillDB` array in `js/script.js` to add more skill-to-project mappings.
- **Content/sections**: edit directly in `index.html` — each section has an `id` matching the nav bar links.

## Notes

- The site includes a disclaimer in the footer clarifying it's a hackathon/demo project, not an official Government of India website — keep this for compliance when deploying publicly.
- The AI features (chatbot + skill mapping) are currently rule-based demos for illustration. To make them "real" AI, you'd wire `js/script.js` to a backend (e.g., a serverless function on Vercel) that calls an LLM API — let me know if you want that added.
