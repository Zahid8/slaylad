# Deploy SLAY'LAD to Vercel

This guide explains every step required to deploy the SLAY'LAD digital business card from GitHub to Vercel and keep it updated automatically.

## Project deployment details

Use these exact settings for this repository:

| Setting | Value |
| --- | --- |
| GitHub repository | `https://github.com/Zahid8/slaylad` |
| Production branch | `main` |
| Framework preset | `Other` |
| Root directory | `./` or leave unchanged |
| Install command | Leave empty |
| Build command | Leave empty |
| Output directory | Leave empty |
| Environment variables | None required |

The project is a static website made from `index.html`, `styles.css`, and `script.js`. It does not use Node.js, React, Next.js, or a build process.

## Part 1: Check the website locally

### Step 1: Open a terminal in the project directory

```bash
cd /home/zahid/Projects/Zahid/slaylad
```

### Step 2: Start a local web server

```bash
python3 -m http.server 4173
```

### Step 3: Open the local website

Visit:

```text
http://localhost:4173
```

Check the following items:

1. The page displays correctly on desktop and mobile.
2. **Order a single meal** opens the SLAY'LAD Zomato page.
3. **Planning a bulk order?** opens WhatsApp with a prepared message.
4. The call, Instagram, website, save-contact and bulk-menu buttons work.

### Step 4: Stop the local server

Return to the terminal and press:

```text
Ctrl+C
```

## Part 2: Push the project to GitHub

Vercel can only deploy the latest GitHub version after the changes have been pushed. A commit that exists only on your computer will not update Vercel.

### Step 1: Confirm the Git branch

```bash
git branch --show-current
```

The result should be:

```text
main
```

### Step 2: Review the changed files

```bash
git status
```

### Step 3: Add the project files to the commit

```bash
git add index.html styles.css script.js vercel.json README.md deploy.md .agent/CONTINUITY.md graphify-out
```

The uploaded reference image is not used by the deployed site. Add it separately only if you want to keep it in GitHub:

```bash
git add ref.jpeg
```

### Step 4: Create a commit

```bash
git commit -m "Add SLAY'LAD digital business card"
```

If Git reports `nothing to commit`, the latest files are already committed and you can continue.

### Step 5: Push the commit to GitHub

```bash
git push origin main
```

### Step 6: Confirm the files on GitHub

Open:

<https://github.com/Zahid8/slaylad>

Confirm that `index.html`, `styles.css`, `script.js`, `vercel.json`, and `deploy.md` are visible on the `main` branch.

## Part 3: Create the Vercel deployment

### Step 1: Sign in to Vercel

1. Open <https://vercel.com>.
2. Select **Log In** or **Sign Up**.
3. Choose **Continue with GitHub**.
4. Sign in to the GitHub account that has access to `Zahid8/slaylad`.
5. Approve the Vercel GitHub integration if GitHub asks for permission.

### Step 2: Start a new Vercel project

1. Open the Vercel dashboard.
2. Select **Add New...**.
3. Select **Project**.
4. Find the repository named **slaylad**.
5. Select **Import** next to `Zahid8/slaylad`.

If the repository is not listed:

1. Select **Adjust GitHub App Permissions** or **Configure GitHub App**.
2. In GitHub, allow Vercel to access the `slaylad` repository.
3. Return to Vercel and refresh the repository list.
4. Select **Import** next to the repository.

### Step 3: Configure the project

On the **Configure Project** screen, use these values:

1. **Project Name:** enter `slaylad` or another available name.
2. **Framework Preset:** select **Other**.
3. **Root Directory:** keep the repository root selected. It may appear as `./`.
4. Expand **Build and Output Settings**.
5. **Build Command:** leave it empty. If an override switch is enabled, disable it.
6. **Output Directory:** leave it empty. If an override switch is enabled, disable it.
7. **Install Command:** leave it empty. If an override switch is enabled, disable it.
8. Do not add environment variables because this project does not require any.

Do not enter `public`, `dist`, `build`, or another output folder. The deployable `index.html` is already in the repository root.

### Step 4: Deploy

1. Select **Deploy**.
2. Wait for the deployment to finish.
3. Vercel should display a success screen with a preview of the website.
4. Select **Continue to Dashboard**.

Vercel will provide a production address similar to:

```text
https://slaylad.vercel.app
```

The precise address depends on whether that project name is available.

## Part 4: Verify the production website

Open the Vercel production address and test all of the following:

1. The green `SLAY'LAD` logo appears at the top.
2. The page is not horizontally cropped on a phone.
3. **Order a single meal** opens:

   ```text
   https://www.zomato.com/ncr/slaylad-2-sector-43-gurgaon/order
   ```

4. **Planning a bulk order?** opens WhatsApp for `+91 99994 98579`.
5. **View bulk menu** opens the WhatsApp catalog.
6. **Instagram** opens `@slaylad_india`.
7. **Website** opens `https://www.slaylad.com`.
8. **Call** opens the phone dialler on a mobile device.
9. **Save contact** downloads `slaylad-contact.vcf`.
10. The share button opens the device share menu or copies the card link.

## Part 5: Confirm automatic GitHub deployments

After the GitHub repository has been imported, Vercel deploys Git pushes automatically.

### Production updates

Changes pushed to `main` should create a new production deployment:

```bash
cd /home/zahid/Projects/Zahid/slaylad
git add .
git commit -m "Describe the website update"
git push origin main
```

Then:

1. Open the Vercel dashboard.
2. Select the **slaylad** project.
3. Open **Deployments**.
4. Wait for the newest deployment to show **Ready**.
5. Refresh the production website.

### Preview deployments

If you push another branch, Vercel creates a preview deployment instead of replacing production:

```bash
git switch -c preview-change
git push -u origin preview-change
```

Vercel will provide a separate preview URL. Merge the branch into `main` when the change is ready for production.

### Check the production branch setting

If pushes to `main` create previews instead of updating production:

1. Open the Vercel project.
2. Open **Settings**.
3. Open **Git**.
4. Find **Production Branch**.
5. Set it to `main`.
6. Save the setting.

Official reference: [Vercel Git deployments](https://vercel.com/docs/deployments/git).

## Part 6: Connect a custom domain

### Recommended option: use `card.slaylad.com`

`www.slaylad.com` already hosts the existing SLAY'LAD website. Connecting that same domain to this digital-card project can replace or reassign the existing website. To preserve it, use a separate subdomain such as:

```text
card.slaylad.com
```

### Step 1: Add the subdomain in Vercel

1. Open the **slaylad** project in Vercel.
2. Open **Settings**.
3. Open **Domains**.
4. Enter `card.slaylad.com`.
5. Select **Add**.

### Step 2: Read the DNS instructions shown by Vercel

Vercel will show the DNS record required for the subdomain. It is normally a `CNAME` record, but use the exact record and value displayed in your Vercel dashboard.

### Step 3: Update DNS with the domain provider

1. Sign in to the company where the `slaylad.com` DNS is managed.
2. Open the DNS management page for `slaylad.com`.
3. Add the record shown by Vercel.
4. For a `card.slaylad.com` CNAME record, the host or name is normally `card`.
5. Paste the exact target value provided by Vercel.
6. Save the DNS record.

Do not delete the existing `www` or root-domain DNS records when adding the `card` subdomain.

### Step 4: Wait for verification

1. Return to **Vercel → Project → Settings → Domains**.
2. Wait for the domain to show **Valid Configuration**.
3. DNS changes can require time to propagate.
4. Open `https://card.slaylad.com` after verification succeeds.
5. Vercel will provision HTTPS automatically after the DNS configuration is valid.

Official reference: [Set up a custom domain on Vercel](https://vercel.com/docs/domains/set-up-custom-domain).

### If you intentionally want to replace `www.slaylad.com`

Only follow these steps if the digital card should replace the website currently shown at `www.slaylad.com`:

1. Add `slaylad.com` and `www.slaylad.com` under **Project → Settings → Domains**.
2. If Vercel reports that either domain belongs to another project, inspect the existing project before reassigning it.
3. Copy the exact DNS records displayed by Vercel.
4. Update the existing DNS records at the domain provider.
5. Confirm both domains show **Valid Configuration**.
6. Test both the apex and `www` addresses.

Reassigning these domains can make the existing website unavailable, so preserve its deployment details before making the change.

## Part 7: Redeploy or restore an older version

### Redeploy the current source

1. Open the Vercel project.
2. Open **Deployments**.
3. Find the deployment you want to run again.
4. Open its three-dot menu.
5. Select **Redeploy**.
6. Confirm the redeployment.

### Restore a known-good deployment

1. Open **Deployments**.
2. Find a previous deployment that worked correctly.
3. Open that deployment.
4. Use the deployment actions to promote or roll it back to production.
5. Confirm the production domain displays the restored version.

After restoring production, fix the problem in GitHub and push a new commit so the repository remains the source of truth.

Official reference: [Vercel production rollback](https://vercel.com/docs/deployments/rollback-production-deployment).

## Part 8: Optional Vercel CLI deployment

The GitHub import method above is recommended because it enables automatic deployments. The CLI can be used for testing or manual deployments.

### Step 1: Install or run the Vercel CLI

You can run the CLI without a permanent global installation:

```bash
npx vercel
```

### Step 2: Complete the first-time prompts

When prompted:

1. Log in to Vercel.
2. Confirm that the current directory should be deployed.
3. Select the correct Vercel account or team.
4. Choose whether to link to the existing `slaylad` project.
5. If the GitHub-imported project already exists, link to that existing project.

### Step 3: Create a production deployment manually

```bash
npx vercel --prod
```

The `--prod` option sends the deployment to the project's production domain.

Official reference: [Vercel CLI deploy command](https://vercel.com/docs/cli/deploy).

## Part 9: Troubleshooting

### The deployed page shows 404

Check that:

1. `index.html` exists in the repository root.
2. The Vercel root directory is `./`.
3. The output directory is empty.
4. The deployed commit contains `index.html`.

### Vercel reports a missing build command

This project does not require a build command. In **Settings → Build and Deployment**:

1. Set the framework preset to **Other**.
2. Disable the build-command override.
3. Disable the install-command override.
4. Disable the output-directory override.
5. Redeploy the latest commit.

### GitHub updates do not appear on Vercel

1. Run `git status` and confirm the change was committed.
2. Run `git push origin main`.
3. Confirm the commit appears on GitHub.
4. Open **Vercel → Project → Settings → Git**.
5. Confirm the connected repository is `Zahid8/slaylad`.
6. Confirm the production branch is `main`.
7. Open **Deployments** and inspect the latest deployment logs.

### The custom domain does not work

1. Open **Settings → Domains** in Vercel.
2. Read the exact configuration error shown for the domain.
3. Compare the Vercel-required DNS record with the record at the domain provider.
4. Remove conflicting records only after confirming they are not serving the existing website or another service.
5. Wait for DNS propagation and check again.

### The old version still appears

1. Confirm the newest deployment is marked **Ready** and **Production**.
2. Refresh the page without using the browser cache.
3. Try a private/incognito browser window.
4. Confirm the custom domain is attached to the correct Vercel project.

### A deployment fails

1. Open **Vercel → Project → Deployments**.
2. Select the failed deployment.
3. Read the build and deployment logs.
4. Confirm the deployment used the intended Git commit.
5. Correct the repository or project setting that caused the failure.
6. Push a new commit or select **Redeploy**.

## Deployment completion checklist

- [ ] The project files are committed and pushed to `origin/main`.
- [ ] `Zahid8/slaylad` is connected to the Vercel project.
- [ ] The framework preset is **Other**.
- [ ] The root directory is the repository root.
- [ ] Install, build and output-directory overrides are disabled.
- [ ] The first production deployment is marked **Ready**.
- [ ] The `.vercel.app` address loads the card correctly.
- [ ] Zomato, WhatsApp, Instagram, phone and contact-download actions work.
- [ ] The production branch is `main`.
- [ ] A safe custom domain such as `card.slaylad.com` is configured if required.
- [ ] A test commit pushed to `main` creates a new production deployment.

