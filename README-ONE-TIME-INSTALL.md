# Merged Frontend - One-time setup

This project is a merged Landing + Dashboard frontend. I cleaned and scoped CSS so the two apps don't conflict.

## One-time install (run once)

1. Install dependencies:
   ```bash
   npm install
   ```
   This will install all dependencies listed in package.json.

2. If any peer-dependency warnings appear for MUI, run:
   ```bash
   npm install @emotion/react @emotion/styled
   ```

3. Start dev server:
   ```bash
   npm run dev
   ```
   Open the URL shown by Vite. Landing: `/` - Dashboard: `/dashboard`

## Troubleshooting

- If icons show as squares, clear browser cache or run hard reload.
- If you still see layout collisions, open `src/styles/global.css` — I've added scoped defaults.
- If a package is missing, install it once (e.g., `npm install axios react-toastify chart.js react-chartjs-2`).

If you want, I can also produce a `package-lock.json` by running `npm install` inside this environment — but I can't run `npm` here in your machine. The package.json provided should let you run `npm install` once and get everything.

