# Modern Data Analyst Portfolio

A stunning, fully responsive portfolio website for a Data Analyst with animated entrance page and professional sections.

## Features

- 🎨 Animated entrance page with data visualization effects
- 📱 Fully responsive design for all devices
- ⚡ Smooth transitions and hover effects
- 🎯 Professional sections: About, Skills, Projects, Education, Contact
- 🌟 Modern dark theme with blue/gold neon accents
- 📊 Interactive skill progress bars and project showcases

## Tech Stack

- React 18 with TypeScript
- Tailwind CSS for styling
- Lucide React for icons
- Vite for build tooling

## Getting Started

### Prerequisites
- Node.js 18 or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone <your-repo-url>
cd data-analyst-portfolio
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Build for production
```bash
npm run build
```

## Deployment to Netlify

### Option 1: Drag and Drop
1. Run `npm run build`
2. Drag the `dist` folder to Netlify's deploy interface

### Option 2: Git Integration
1. Push your code to GitHub/GitLab
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`
5. Deploy!

### Option 3: Netlify CLI
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

## Customization

### Personal Information
Update the following files with your information:
- `src/components/HeroSection.tsx` - Name and title
- `src/components/AboutSection.tsx` - Personal description
- `src/components/ContactSection.tsx` - Contact details
- `src/components/ProjectsSection.tsx` - Your projects
- `src/components/EducationSection.tsx` - Education and certifications

### Colors and Styling
- Main colors are defined in `src/index.css`
- Tailwind configuration in `tailwind.config.js`
- Custom animations in `src/index.css`

## Project Structure

```
src/
├── components/
│   ├── EntrancePage.tsx      # Animated landing page
│   ├── Portfolio.tsx         # Main portfolio container
│   ├── Header.tsx           # Navigation header
│   ├── HeroSection.tsx      # Hero/intro section
│   ├── AboutSection.tsx     # About me section
│   ├── SkillsSection.tsx    # Skills with progress bars
│   ├── ProjectsSection.tsx  # Project showcase
│   ├── EducationSection.tsx # Education timeline
│   └── ContactSection.tsx   # Contact form and info
├── App.tsx                  # Main app component
├── main.tsx                # App entry point
└── index.css               # Global styles and animations
```

## License

This project is open source and available under the [MIT License](LICENSE).