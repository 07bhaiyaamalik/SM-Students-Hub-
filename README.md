# SM Students Hub

A beginner-friendly, responsive student learning hub and installable Progressive Web App (PWA).

## Project files

- `index.html` — homepage structure
- `style.css` — responsive design and light/dark themes
- `app.js` — search, theme toggle, mobile menu and PWA registration
- `manifest.json` — app name, icon, launch URL and display settings
- `service-worker.js` — app-shell caching and basic offline fallback
- `icons/` — 192px and 512px app icons

## Publish with GitHub Pages

1. Create a GitHub repository named `sm-students-hub` (or use your chosen repository name).
2. Upload the contents of this folder to the repository root. Do not upload the ZIP itself as the only file.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**.
5. Choose branch `main` and folder `/ (root)`, then Save.
6. Wait for GitHub Pages to finish deploying.
7. Open the published HTTPS URL.

## Install on Android

1. Open the published HTTPS website in Chrome.
2. Open the browser menu.
3. Choose **Install app** or **Add to Home screen**, depending on the browser version.
4. Confirm installation.

The install prompt varies by browser and device. The site must be served over HTTPS for service workers and PWA installation.

## Work with a friend on GitHub

1. Each person should use their own GitHub account.
2. The repository owner opens **Settings → Collaborators** (sometimes shown under **Collaborators and teams**).
3. Invite the friend's GitHub username.
4. The friend accepts the invitation from their own account.
5. Both people can edit files and commit changes. Avoid editing the same file at the same time to reduce conflicts.
6. Never share account passwords or OTPs.

## Important notes

- This starter project is a front-end demonstration. It does not yet have real student accounts, cloud storage, admin uploads, or a database.
- The resource cards are starting points; actual notes, papers and learning content must be added and checked before public launch.
- The service worker caches the app shell. It does not automatically make every external PDF or future online feature available offline.
- If you change cached files and an old version remains on a device, update `CACHE_NAME` in `service-worker.js` (for example, `sm-students-hub-v2`) and reload the site.
- Before collecting student information, add a suitable privacy policy and secure backend.
