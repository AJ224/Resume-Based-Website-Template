# Abhinandan Jain - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects as a Software Engineer.

## Overview

This is a personal portfolio website built with Next.js and Tailwind CSS, featuring a clean and modern design that highlights my professional experience, technical skills, and project work.

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Interactive Sections**: About, Experience, Projects, Skills, Awards, Education, and Contact
- **Performance Optimized**: Built with Next.js for optimal performance
- **Accessible**: Follows web accessibility best practices

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

1. Clone the repository:
```bash
git clone <repository-url>
cd abhinandan-portfolio
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
abhinandan/
├── app/                 # Next.js app directory
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/         # React components
│   ├── ui/            # UI components
│   └── theme-provider.tsx
├── lib/               # Utility functions
├── public/            # Static assets
└── styles/            # Additional styles
```

## Customization

- Update personal information in `app/page.tsx`
- Modify styling in `app/globals.css` and component files
- Add new sections or modify existing ones as needed
- Update metadata in `app/layout.tsx`

## Deployment

This project is configured for deployment on Vercel. Simply connect your repository to Vercel for automatic deployments.

## License

This project is open source and available under the [MIT License](LICENSE).
