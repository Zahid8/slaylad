# SLAY'LAD digital business card

A mobile-first static business card for SLAY'LAD. It separates the two supported order paths:

- Single meals: Zomato
- Bulk orders: WhatsApp

## Local preview

Run any static file server from this directory, for example:

```bash
python3 -m http.server 4173
```

Then open <http://localhost:4173>.

## Deploy to Vercel

This project has no build step. Import the folder or Git repository in Vercel and select **Other** as the framework preset. Leave the build command and output directory empty, then deploy.

With the Vercel CLI:

```bash
npx vercel
```

On the first prompt, choose this directory as the project root. Run `npx vercel --prod` when you are ready to publish the production deployment.
