# 🚀 Charan S Naik — AI Engineer Portfolio

A modern, interactive, glassmorphism portfolio website showcasing my AI engineering skills, projects, and professional experience. Built with **React (Vite)** + **Tailwind CSS**.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0.0-646CFF?logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-3.4.0-38B2AC?logo=tailwind-css&logoColor=white)
![License](https://img.shields.io/badge/license-MIT-blue)

---

## ✨ Features

### 🎨 Design & UI/UX
- **Glassmorphism Design** - Modern frosted glass aesthetic with blur effects
- **Dark Theme** - Eye-friendly dark mode throughout
- **Parallax Effects** - Mouse-based parallax movement for decorative elements
- **Cursor Glow** - Interactive radial glow that follows mouse movement
- **Smooth Animations** - CSS keyframe animations for floating elements
- **Responsive Layout** - Fully responsive design for all devices

### 🔥 Interactive Elements
- **Typewriter Effect** - Animated text rotation showcasing different roles
- **Active Navigation** - Sticky header with active section underline
- **Smooth Scrolling** - Seamless navigation between sections
- **Hover Effects** - Scale transforms and transitions on interactive elements
- **Intersection Observer** - Automatic active section detection while scrolling

### 📱 Sections
1. **Hero Section** - Glassmorphic hero with typewriter animation and CTA buttons
2. **Skills Section** - Organized tech stack (AI/LLM, Backend, Full-stack)
3. **Projects Section** - Showcases major projects with descriptions and GitHub links
4. **Experience Section** - Professional work history with timelines
5. **Education & Certifications** - Academic background and certifications
6. **Contact Section** - Contact form and social media links

---

## 🛠️ Tech Stack

### **Frontend Framework**
- **React 18.2.0** - Component-based UI library
- **Vite 5.0.0** - Lightning-fast build tool and dev server

### **Styling & Design**
- **Tailwind CSS 3.4.0** - Utility-first CSS framework
- **PostCSS 8.4.0** - CSS transformation tool
- **Autoprefixer 10.4.0** - Automatic vendor prefixing
- **Custom CSS Animations** - Keyframe animations for enhanced UX

### **Core Technologies**
- JavaScript (ES6+)
- JSX (React syntax extension)
- CSS3 (with Tailwind utilities)
- HTML5

---

## 📦 Project Structure

```
portfolio_project/
│
├── index.html                    # Main HTML entry point
├── package.json                  # Project dependencies & scripts
├── package-lock.json             # Locked dependency versions
├── tailwind.config.js            # Tailwind CSS configuration
├── README.md                     # Project documentation (this file)
│
├── .vscode/                      # VS Code settings
│   └── settings.json
│
├── src/                          # Source code directory
│   ├── main.jsx                  # React entry point, renders App
│   ├── App.jsx                   # Main App component wrapper
│   ├── Portfolio.jsx             # Main portfolio component with all sections
│   └── index.css                 # Tailwind directives
│
└── node_modules/                 # Installed dependencies (auto-generated)
```

### Key Files Explained

#### **`src/Portfolio.jsx`**
The heart of the portfolio, containing:
- **Typewriter Component** - Animated text rotation with typing/deleting effect
- **Parallax Effects** - Mouse-move event listeners for 3D-like depth
- **Intersection Observer** - Tracks which section is currently in view
- **Smooth Scrolling** - Programmatic scroll behavior
- All section components (Hero, Skills, Projects, Experience, Contact)

#### **`src/App.jsx`**
Simple wrapper that renders the Portfolio component

#### **`src/main.jsx`**
React entry point that mounts the app to the DOM using `ReactDOM.createRoot`

#### **`src/index.css`**
Imports Tailwind CSS layers:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16+ recommended)
- **npm** or **yarn** package manager

### Installation

1. **Clone or download the repository**
   ```bash
   cd portfolio_project
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This will install:
   - React & React-DOM
   - Vite (dev server & build tool)
   - Tailwind CSS, PostCSS, Autoprefixer

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```
   Vite will hot-reload changes automatically!

### Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Starts Vite dev server on `http://localhost:5173` |
| `npm run build` | Builds production-ready bundle in `dist/` folder |
| `npm run preview` | Previews the production build locally |

---

## 🏗️ Build for Production

1. **Build the project**
   ```bash
   npm run build
   ```
   This creates an optimized production build in the `dist/` folder.

2. **Preview the build**
   ```bash
   npm run preview
   ```
   Opens a local server to preview the production build.

3. **Deploy**
   - Upload the `dist/` folder to any static hosting service
   - Recommended platforms: **Vercel**, **Netlify**, **GitHub Pages**, **Cloudflare Pages**

---

## 🎨 Customization Guide

### Update Personal Information

**Hero Section** (`src/Portfolio.jsx`)
```jsx
// Line 118-120: Change name and tagline
<h1 className="text-lg font-semibold leading-none">Your Name</h1>
<p className="text-xs text-gray-400">Your Title · Your Skills</p>
```

**Typewriter Roles** (`src/Portfolio.jsx`)
```jsx
// Line 10: Update the phrases array
<Typewriter phrases={["Role 1", "Role 2", "Role 3"]} />
```

### Add/Remove Projects

**Projects Section** (`src/Portfolio.jsx`, Line ~215)
```jsx
<article className="p-4 bg-white/6 backdrop-blur-lg ...">
  <h4 className="font-semibold">Project Name</h4>
  <div className="w-full h-32 bg-gray-700/40 rounded-lg mt-2 animate-pulse" />
  <p className="text-sm text-gray-300 mt-2 flex-1">Project description...</p>
  <a href="https://github.com/your-repo" ...>View on GitHub</a>
</article>
```

### Update Skills

**Skills Section** (`src/Portfolio.jsx`, Line ~185)
```jsx
<li>Your Skill or Tool</li>
```

### Modify Color Scheme

**Tailwind Colors** (`src/Portfolio.jsx`)
- Primary accent: `indigo-400`, `indigo-500`
- Secondary accent: `teal-400`, `cyan-400`
- Background: `black` with white overlays

**Glassmorphism Effect**
```jsx
style={{ 
  background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))",
  backdropFilter: "blur(18px)",
  border: "1px solid rgba(255,255,255,0.06)"
}}
```

---

## 🔧 Dependencies

### Production Dependencies
```json
{
  "react": "^18.2.0",          // UI library
  "react-dom": "^18.2.0"       // React DOM renderer
}
```

### Development Dependencies
```json
{
  "vite": "^5.0.0",            // Build tool & dev server
  "tailwindcss": "^3.4.0",     // CSS framework
  "postcss": "^8.4.0",         // CSS processor
  "autoprefixer": "^10.4.0"    // Vendor prefixing
}
```

---

## 🌐 Browser Support

- ✅ Chrome (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

---

## 📸 Features Breakdown

### 1. Typewriter Effect
- Smooth typing and deleting animations
- Configurable speed and pause duration
- Rotating phrases array
- Blinking cursor indicator

### 2. Parallax Mouse Movement
- 3D depth illusion using CSS transforms
- Multiple depth layers (`data-depth` attribute)
- Smooth transitions
- Performance-optimized

### 3. Glassmorphism
- Frosted glass aesthetic
- Backdrop blur filters
- Subtle borders and shadows
- Semi-transparent backgrounds

### 4. Smooth Navigation
- Auto-scrolling to sections
- Active section highlighting
- Sticky header on scroll
- Underline animation on active links

### 5. Intersection Observer
- Detects visible sections
- Updates navigation state
- Threshold-based detection
- Root margin for offset

---

## 🎯 Performance Optimization

- **Vite HMR** - Hot Module Replacement for instant updates
- **Code Splitting** - Automatic bundle splitting
- **Tree Shaking** - Removes unused code
- **Minification** - Optimized production builds
- **CSS Purging** - Tailwind removes unused styles
- **Lazy Loading** - Components load as needed

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Kill process on port 5173 (Windows)
netstat -ano | findstr :5173
taskkill /PID <PID> /F

# Or change port in vite.config.js
export default {
  server: { port: 3000 }
}
```

### Tailwind Classes Not Working
1. Check `tailwind.config.js` content paths
2. Ensure `index.css` imports Tailwind
3. Restart dev server: `npm run dev`

### Build Errors
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 👤 Author

**Charan S Naik**  
AI Engineer | GenAI | LLM Specialist

- 📧 Email: [charan07naik@gmail.com](mailto:charan07naik@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/charan-naik-403892294](https://linkedin.com/in/charan-naik-403892294)
- 🐙 GitHub: [github.com/Charan071](https://github.com/Charan071)
- 📞 Phone: +91 63622 97018

---

## 🙏 Acknowledgments

- **React** - UI library by Meta
- **Vite** - Next-gen frontend tooling
- **Tailwind CSS** - Utility-first CSS framework
- **Heroicons** - Icon set for UI elements

---

## 🔮 Future Enhancements

- [ ] Add project screenshots/demos
- [ ] Integrate blog section
- [ ] Add dark/light mode toggle
- [ ] Implement form backend (EmailJS/Formspree)
- [ ] Add loading states and skeleton screens
- [ ] SEO optimization with meta tags
- [ ] PWA capabilities
- [ ] i18n (internationalization) support
- [ ] Analytics integration (Google Analytics)
- [ ] Accessibility improvements (ARIA labels, keyboard navigation)

---

## 📊 Project Stats

- **Lines of Code**: ~500+ (Portfolio.jsx)
- **Components**: 8+ sections
- **Dependencies**: 4 production, 4 dev
- **Build Time**: ~2-3 seconds
- **Bundle Size**: ~150KB (minified)

---

**⭐ If you found this helpful, please star the repo!**

Made with ❤️ by [Charan S Naik](https://github.com/Charan071)
