# EVODS Alternate Site — Static Vercel Deploy

This is a static Vercel deployment package. It contains no application server, build step, or runtime routing.

## Deploy

1. Create a new GitHub repository and upload the contents of this folder as the repository root.
2. In Vercel, choose **Add New → Project** and import the repository.
3. Set the framework preset to **Other**. Leave the build command and output directory blank.
4. Select **Deploy**.

Vercel will serve `index.html` at the domain root and the individual `.html` pages directly.

## Contents

- Website pages at the repository root
- Shared alternate-site styling and navigation
- Only images referenced by the site
- Vercel configuration
