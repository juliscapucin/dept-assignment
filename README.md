## Description

This is a project assigned by DEPT® to Juli Scapucin for recruitment process purposes. Check Next Steps session below for points of improvement.

It uses:

1 [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

2 Wordpress back-end, hosted at http://dept.wordpresssites.host/wp-admin

3 Apollo GraphQL (https://www.apollographql.com/)

4 Sass CSS using BEM methodology (or at least tried :))

4 Front-end hosted at http://dept.juliscapucin.com/ on Digital Ocean

5 Maison Neue Trial font from Milieu Grotesque (https://www.milieugrotesque.com/)

6 Transfonter (https://transfonter.org/)

7 Favicon Generator (https://realfavicongenerator.net/)

8 PerfectPixel Chrome extension (https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Production process

## Step 1

Wordpress setup > Plugins: Custom Post Type UI, Advanced Custom Fields, WPGraphQL, WPGraphQL for Advanced Custom Fields, Post Types Order

## Step 2

Next.js, component and jsx implementation and integration with backend using Apollo GraphQL (https://www.apollographql.com/)

## Step 3

Transform fonts to woff formats using Transfonter (https://transfonter.org/)

## Step 4

Styling and responsiveness

## Step 5

Deployment to Digital Ocean and testing on different devices

## Step 6

Pixel perfect styling fixes with PerfectPixel Chrome extension (https://chrome.google.com/webstore/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi) and improved responsiveness

## Next Steps

1 Implement scroll-activated top navigation

2 Implement :hover state on menu links on Sidebar

3 Set max-width for main container

4 Organize components in a better folder structure (BEM?)

5 Review GraphQL structure

6 Implement backend for country select menu

7 Implement logos as svg components to avoid img tags

8 Implement page transitions with Framer Motion

9 Refine / fix styles & line breaks & font-weights

10 Check scroll bug on mobile

11 Fix scroll to top button

12 Check if logo order matters on mobile

13 Implement form functionality

14 Add social media icons to footer

15 Improve Sidemenu animation
