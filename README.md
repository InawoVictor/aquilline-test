This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!



## Next.js Image Editor

## Tech Stack

Next.js: Server-side rendering, routing, and API handling.

TailwindCSS: For responsive and modern UI.

TypeScript: Ensuring type safety.

LocalStorage / URL Params: To persist state across refreshes and history navigation.

## Key Features

✅ Image Listing Page

Fetch images from Lorem Pictus API with React Query for Caching.

Display images in a grid layout (custom CSS Grid, no external libraries).

Show image author.

Implement pagination.

✅ Image Editing Page

Allow users to:

Adjust height & width.

Apply greyscale filter.

Apply blur (1–10 scale).

Show a real-time preview of the edited image.

Support downloading the modified image.

Persist edits across refreshes & navigation.

## Implementation Plan

🔹 Create Image List Page (/)

🔹Fetch images from API.

🔹Render in a grid layout.

🔹Implement pagination.

🔹Clicking an image navigates to /edit/[id].

🔹 Create Image Edit Page (/edit/[id])

🔹Read id from URL.

🔹Allow editing via UI controls.

🔹Update image preview dynamically.

🔹Save state in localStorage / URL query params.

🔹Enable image download.

## Installation & Setup

Clone the repository:

git clone [https://github.com/InawoVictor/aquilline-test]
cd image-editor

Install dependencies:
```bash
npm install
```

Run the development server:

Install dependencies:
```bash
npm run dev
```

Open [http://localhost:3000] in your browser.

## Deployed on Vercel

[https://aquilline-test-git-main-inawovictors-projects.vercel.app/]

