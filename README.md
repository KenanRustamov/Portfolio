# Portfolio Website @ kenanr.com


## Tech Stack

- **React 19** with TypeScript
- **Vite** for fast development and building
- **Tailwind CSS v4** for styling
- **Framer Motion** for animations
- **Swiper** for carousel components
- **Vitest** for testing

## Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Portfolio
```

2. Install dependencies:
```bash
npm install
```

## Available Scripts

### `npm run dev`

Runs the app in development mode using Vite.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload automatically when you make changes.<br />
You'll see any lint errors in the console and browser.

### `npm run build`

Builds the app for production to the `dist` folder.<br />
The build is optimized and minified for the best performance.

### `npm run preview`

Serves the production build locally for preview.<br />
Useful for testing the production build before deployment.

### `npm test`

Launches the test runner (Vitest) in watch mode.<br />
Tests will re-run automatically when files change.

### `npm run deploy`

Deploys the app to GitHub Pages.<br />
This runs the build process and deploys to the `gh-pages` branch.

## Development

This project uses:
- **Vite** for fast hot module replacement and optimized builds
- **Tailwind CSS v4** with custom glassmorphic components
- **TypeScript** for type safety
- **ESLint** for code quality

## Project Structure

```
src/
├── components/          # React components
│   ├── Glass/          # Glassmorphic UI components
│   └── icons/          # SVG icons
├── contexts/           # React contexts
├── data/              # JSON data files
├── hooks/             # Custom React hooks
├── images/            # Static images
└── constants/         # Animation and other constants
```

## Features

- **Responsive Design**: Works perfectly on all device sizes
- **Dark/Light Mode**: Toggle between themes
- **Glassmorphic UI**: Modern glass-like components with blur effects
- **Smooth Animations**: Powered by Framer Motion
- **Interactive Carousel**: Built with Swiper
- **TypeScript**: Full type safety throughout the application

## Deployment

The app is configured for deployment to GitHub Pages. Simply run:

```bash
npm run deploy
```

This will build the project and deploy it to the `gh-pages` branch.

## Learn More

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
