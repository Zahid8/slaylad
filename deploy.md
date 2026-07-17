# Deploy SLAY'LAD to Vercel with a Hostinger Domain

This guide covers the complete deployment of the SLAY'LAD digital business card from GitHub to Vercel. The domain is registered and managed through Hostinger.

The recommended public address is:

```text
https://card.slaylad.com
```

Using `card.slaylad.com` keeps the current website at `www.slaylad.com` unchanged.

## Project deployment details

Use these exact settings:

| Setting | Value |
| --- | --- |
| GitHub repository | `https://github.com/Zahid8/slaylad` |
| Production branch | `main` |
| Framework preset | `Other` |
| Root directory | `./` |
| Install command | Empty |
| Build command | Empty |
| Output directory | Empty |
| Environment variables | None |
| Recommended domain | `card.slaylad.com` |
| DNS provider | Hostinger |

This is a static HTML, CSS and JavaScript project. It does not need Node.js, React, Next.js, an installation command or a build process.

## Part 1: Check the website locally

### Step 1: Open the project directory

```bash
cd /home/zahid/Projects/Zahid/slaylad
```

### Step 2: Start the local server

```bash
python3 -m http.server 4173
```

### Step 3: Open the local website

Open this address in a browser:

```text
http://localhost:4173
```

Check that:

1. The card displays correctly on a phone, tablet and desktop.
2. **Order a single meal** opens Zomato.
3. **Planning a bulk order?** opens WhatsApp.
4. Call, Instagram, website, bulk-menu and save-contact actions work.

### Step 4: Stop the server

Return to the terminal and press:

```text
Ctrl+C
```

## Part 2: Push the project to GitHub

### Step 1: Confirm the current branch

```bash
git branch --show-current
```

The result should be:

```text
main
```

### Step 2: Review the changes

```bash
git status
```

### Step 3: Add every change

```bash
git add .
```

### Step 4: Commit the changes

```bash
git commit -m "Update SLAY'LAD digital business card"
```

If Git reports `nothing to commit`, the files are already committed.

### Step 5: Push to GitHub

```bash
git push origin main
```

A commit stored only on the computer cannot trigger Vercel. The commit must be pushed to GitHub.

### Step 6: Confirm the GitHub repository

Open:

<https://github.com/Zahid8/slaylad>

Confirm that `index.html`, `styles.css`, `script.js`, `vercel.json` and `deploy.md` appear on the `main` branch.

## Part 3: Import the project into Vercel

### Step 1: Sign in to Vercel

1. Open <https://vercel.com>.
2. Select **Log In** or **Sign Up**.
3. Select **Continue with GitHub**.
4. Sign in to the GitHub account that can access `Zahid8/slaylad`.
5. Approve the Vercel GitHub integration if GitHub asks for authorization.

### Step 2: Create the Vercel project

1. Open the Vercel dashboard.
2. Select **Add New...**.
3. Select **Project**.
4. Find `Zahid8/slaylad` in the Git repository list.
5. Select **Import** beside the repository.

If `Zahid8/slaylad` is not listed:

1. Select **Configure GitHub App** or **Adjust GitHub App Permissions**.
2. Allow Vercel to access the `slaylad` repository.
3. Return to Vercel.
4. Refresh the repository list.
5. Select **Import** beside `Zahid8/slaylad`.

Official reference: [Import a project into Vercel](https://vercel.com/docs/getting-started-with-vercel/import).

### Step 3: Configure the project

On the **Configure Project** screen, enter the following:

1. **Project Name:** `slaylad` or another available name.
2. **Framework Preset:** select **Other**.
3. **Root Directory:** keep `./`, which is the repository root.
4. Expand **Build and Output Settings**.
5. **Build Command:** leave this empty.
6. If Vercel automatically fills a build command, enable its override and clear the field so the final value is empty.
7. **Output Directory:** leave this empty and do not enter `public`, `dist` or `build`.
8. **Install Command:** leave this empty.
9. Do not add environment variables.

The deployable `index.html` is already in the repository root. Vercel does not need to generate an output folder.

Official reference: [Configure a Vercel build](https://vercel.com/docs/builds/configure-a-build).

### Step 4: Deploy the project

1. Select **Deploy**.
2. Wait while Vercel creates the deployment.
3. The deployment should finish with a success message.
4. Select **Continue to Dashboard**.
5. Open the generated Vercel address.

The initial address will look similar to:

```text
https://slaylad.vercel.app
```

The exact name can differ if `slaylad.vercel.app` is already assigned.

## Part 4: Verify the Vercel deployment

Do not change the Hostinger DNS records until the `.vercel.app` website works correctly.

Open the Vercel address and verify:

1. The green `SLAY'LAD` wordmark appears without an icon above it.
2. The card is not horizontally cropped on a phone or tablet.
3. **Order a single meal** opens:

   ```text
   https://www.zomato.com/ncr/slaylad-2-sector-43-gurgaon/order
   ```

4. **Planning a bulk order?** opens WhatsApp for `+91 99994 98579`.
5. **View bulk menu** opens the WhatsApp catalogue.
6. **Instagram** opens `@slaylad_india`.
7. **Website** opens `https://www.slaylad.com`.
8. **Call** opens a phone dialler on a mobile device.
9. **Save contact** downloads `slaylad-contact.vcf`.
10. The share button opens the device share interface or copies the card URL.

Continue only after these checks pass.

## Part 5: Add `card.slaylad.com` to Vercel

### Step 1: Open the domain settings

1. Open the Vercel dashboard.
2. Select the **slaylad** project.
3. Open **Settings**.
4. Open **Domains**.

### Step 2: Add the subdomain

1. Enter:

   ```text
   card.slaylad.com
   ```

2. Select **Add**.
3. Vercel will report that the DNS configuration must be updated.
4. Keep this page open.

Vercel will show the exact CNAME target required for the domain. Copy the value shown in your own Vercel dashboard. Do not guess or replace that target with a value from another project.

Official reference: [Set up a custom domain on Vercel](https://vercel.com/docs/domains/set-up-custom-domain).

## Part 6: Open the DNS Zone Editor in Hostinger

The correct Hostinger navigation depends on whether the account has a web-hosting plan or only the domain.

### Option A: The account has a Hostinger hosting plan

1. Sign in at <https://hpanel.hostinger.com>.
2. Open **Websites**.
3. Select the website associated with `slaylad.com`.
4. Open **Advanced**.
5. Select **DNS Zone Editor**.

The interface may also display the path as:

```text
Websites → Dashboard → Advanced → DNS Zone Editor
```

### Option B: The account contains only the domain

1. Sign in at <https://hpanel.hostinger.com>.
2. Open **Domains**.
3. Select `slaylad.com`.
4. Open **DNS / Nameservers**.
5. Open the **DNS records** section.

### Confirm that Hostinger controls the active DNS

Before editing records, confirm the domain uses Hostinger nameservers. If the domain uses nameservers from another provider, DNS changes made in Hostinger will not become active; make the CNAME change at the provider named by the active nameservers instead.

Official reference: [Hostinger DNS Zone Editor](https://www.hostinger.com/support/how-to-use-hostingers-dns-zone-editor/).

## Part 7: Create the CNAME record in Hostinger

### Step 1: Check for an existing `card` record

1. Search the DNS record list for `card`.
2. If no record named `card` exists, create a new record.
3. If a `card` record already exists, edit that record or remove only that conflicting record before creating the new CNAME.

Do not remove the root `@` record, `www` record, MX records or email-related TXT/CNAME records.

### Step 2: Enter the CNAME record

In **Manage DNS Records**, enter:

| Hostinger field | Exact value |
| --- | --- |
| Type | `CNAME` |
| Name / Host | `card` |
| Target / Points to | The exact target displayed by Vercel |
| TTL | Leave the Hostinger default, normally `14400` |

Important rules:

1. Enter only `card` in **Name / Host**. Hostinger automatically appends `.slaylad.com`.
2. Do not enter `card.slaylad.com` in the Name field.
3. Do not include `https://` in the Target field.
4. Do not add a slash at the end of the Target.
5. The target must be a hostname, not a full web URL.

### Step 3: Save the record

1. Select **Add Record** or **Save**.
2. Confirm that a CNAME record for `card` now appears in the DNS list.
3. Do not change Hostinger nameservers merely to connect the Vercel subdomain.

Official reference: [Manage CNAME records at Hostinger](https://www.hostinger.com/support/4738777-how-to-manage-cname-records-at-hostinger/).

## Part 8: Verify the domain and HTTPS

### Step 1: Return to Vercel

1. Open **Vercel → slaylad → Settings → Domains**.
2. Find `card.slaylad.com`.
3. Select **Refresh** if that action is available.
4. Wait for the domain to show **Valid Configuration**.

### Step 2: Allow DNS propagation

Hostinger states that DNS changes can take up to 24 hours to propagate globally. The change may appear sooner, but do not repeatedly replace the correct record while propagation is in progress.

### Step 3: Confirm HTTPS

After Vercel reports a valid configuration, open:

```text
https://card.slaylad.com
```

Vercel provisions the HTTPS certificate after the DNS configuration is valid. Confirm the browser shows a secure connection and does not display a certificate warning.

### Step 4: Repeat the functional checks

Test the Zomato, WhatsApp, call, Instagram, website, bulk-menu, contact-download and share actions again on the custom domain.

## Part 9: Confirm automatic deployments

Vercel deploys new pushes from the connected GitHub repository automatically.

For every future change, run:

```bash
cd /home/zahid/Projects/Zahid/slaylad
git add .
git commit -m "Describe the website change"
git push origin main
```

Then:

1. Open the Vercel dashboard.
2. Select the **slaylad** project.
3. Open **Deployments**.
4. Wait for the latest deployment to show **Ready** and **Production**.
5. Refresh `https://card.slaylad.com`.

If a push to `main` produces only a preview deployment:

1. Open **Vercel → slaylad → Settings → Git**.
2. Confirm the connected repository is `Zahid8/slaylad`.
3. Find **Production Branch**.
4. Set it to `main`.
5. Save the setting.

Official reference: [Vercel Git deployments](https://vercel.com/docs/deployments/git).

## Part 10: Replacing the existing main website

Skip this part when using `card.slaylad.com`.

Only follow it if the digital card should intentionally replace the existing website at both:

```text
https://slaylad.com
https://www.slaylad.com
```

Replacing the root and `www` DNS records can make the existing website unavailable.

### Step 1: Add the domains in Vercel

Under **Vercel → slaylad → Settings → Domains**, add:

```text
slaylad.com
www.slaylad.com
```

### Step 2: Record Vercel's required values

Vercel will normally request an A record for the root domain and a CNAME record for `www`. Use the exact values shown in the Vercel dashboard.

### Step 3: Change only the conflicting Hostinger records

In the Hostinger DNS Zone Editor:

1. Find the website records for `@` and `www`.
2. Preserve all MX and email-authentication records.
3. Replace only the conflicting website records with the exact Vercel values.
4. If Hostinger CDN is enabled, disable it before changing the main website records because it can control or recreate those records.

Do not perform this replacement merely to create `card.slaylad.com`. The `card` subdomain requires only its own CNAME record.

## Part 11: Troubleshooting

### Vercel displays a 404 page

1. Confirm `index.html` exists in the GitHub repository root.
2. Confirm the Vercel Root Directory is `./`.
3. Confirm Build Command is empty.
4. Confirm Output Directory is empty.
5. Redeploy the latest `main` commit.

### Vercel reports a missing build command

1. Open **Vercel → slaylad → Settings → Build and Deployment**.
2. Set Framework Preset to **Other**.
3. Enable the Build Command override if necessary.
4. Clear the Build Command field so it is empty.
5. Save and redeploy.

### `card.slaylad.com` shows an invalid configuration

1. Open **Vercel → slaylad → Settings → Domains**.
2. Copy the required CNAME target again.
3. Open the Hostinger DNS Zone Editor.
4. Confirm the record type is `CNAME`.
5. Confirm the Name is only `card`.
6. Confirm the Target exactly matches the Vercel value.
7. Remove only duplicate or conflicting records named `card`.
8. Allow up to 24 hours for DNS propagation.

### Hostinger will not accept the CNAME record

1. Search for an existing A, AAAA or CNAME record named `card`.
2. Edit or remove that conflicting `card` record.
3. Do not delete records with other names.
4. Add the Vercel CNAME again.

### Hostinger DNS changes have no effect

Check the active nameservers. If they belong to another DNS provider, make the change at that provider rather than in Hostinger. Registering the domain at Hostinger does not guarantee that Hostinger currently hosts its DNS zone.

### GitHub updates do not appear in production

1. Run `git status` and confirm the change was committed.
2. Run `git push origin main`.
3. Confirm the commit appears at <https://github.com/Zahid8/slaylad>.
4. Confirm Vercel is connected to `Zahid8/slaylad`.
5. Confirm the Vercel Production Branch is `main`.
6. Open the newest deployment and read its logs.

### The old page still appears

1. Confirm the latest Vercel deployment is **Ready** and **Production**.
2. Refresh without using the browser cache.
3. Test in a private or incognito window.
4. Confirm `card.slaylad.com` is assigned to the correct Vercel project.

## Deployment completion checklist

- [ ] All project changes are committed and pushed to `origin/main`.
- [ ] `Zahid8/slaylad` is connected to Vercel.
- [ ] Framework Preset is **Other**.
- [ ] Root Directory is `./`.
- [ ] Install, build and output directory fields are empty.
- [ ] The first `.vercel.app` deployment is **Ready**.
- [ ] Every card action works on the Vercel address.
- [ ] `card.slaylad.com` is added to the Vercel project.
- [ ] Hostinger contains one correct CNAME record named `card`.
- [ ] The root, `www` and email DNS records remain unchanged.
- [ ] Vercel reports **Valid Configuration**.
- [ ] `https://card.slaylad.com` opens securely.
- [ ] The Production Branch is `main`.
- [ ] A new push to `main` creates a production deployment automatically.

