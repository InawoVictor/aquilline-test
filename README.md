
## Next.js Image Editor

## Tech Stack

Next.js: Server-side rendering, routing, and API handling.

TailwindCSS: For responsive and modern UI.

TypeScript: Ensuring type safety.

TanStack Query / React Query: To cache fetched data.

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

