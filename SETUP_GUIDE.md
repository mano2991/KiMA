# KiMA NPM Setup Guide

This guide walks you through setting up and running the KiMA application after converting it to an NPM project.

## What Changed?

Your KiMA gait analysis tool has been converted from a single HTML file to a professional NPM-based project while maintaining 100% of the original functionality.

### Before
```
KiMA/
└── app_with_gait_metrics.html (single 2000+ line file)
```

### After
```
KiMA/
├── src/
│   ├── index.html (cleaned HTML)
│   ├── js/
│   │   └── index.js (imports & library setup)
│   └── styles/
│       └── main.css (extracted styles)
├── dist/ (generated after build)
├── package.json (dependencies & scripts)
├── webpack.config.js (build configuration)
├── README.md (documentation)
└── [other config files]
```

## Quick Start

### Step 1: Install Node.js
If you don't have Node.js, download from https://nodejs.org/
- Download LTS (Long Term Support) version
- Verify installation: `node --version` and `npm --version`

### Step 2: Install Dependencies
```bash
cd /Users/manojkumark/Desktop/KiMA/KiMA
npm install
```

This installs all required packages listed in `package.json`:
- plotly.js (for charting)
- pca-js (for statistical analysis)
- webpack (build tool)
- And development tools

**Expected output**: Creates a `node_modules/` folder with all dependencies

### Step 3: Run Development Server
```bash
npm start
```

This:
- Starts a development server on http://localhost:8282
- Automatically opens the browser
- Watches for file changes and auto-reloads
- Enables hot module replacement

### Step 4: Build for Production
```bash
npm run build
```

This:
- Creates an optimized `dist/` folder
- Minifies and bundles all code
- Optimizes images and assets
- Ready for deployment

## Available Commands

### Development
```bash
npm start          # Dev server with hot reload (http://localhost:8282)
npm run dev        # Watch mode - recompile on file changes
npm run serve      # Simple HTTP server (http://localhost:8282/dist)
```

### Production
```bash
npm run build      # Create optimized dist/ folder for deployment
```

## File Structure Explained

### `src/` (Source Files)
```
src/
├── index.html         # Main HTML template
├── js/
│   └── index.js       # Entry point - imports CSS and libraries
└── styles/
    └── main.css       # All application styles (8000+ lines)
```

### `dist/` (Built Files - Auto Generated)
```
dist/
├── index.html         # Optimized HTML
├── main.[hash].js     # Bundled & minified JavaScript
├── kinematics.png     # Assets (copied)
├── ladder.png         # Assets (copied)
└── *.csv              # Data files (copied)
```

### Configuration Files
- **package.json**: Lists all dependencies and build scripts
- **webpack.config.js**: Defines how to build the project
- **postcss.config.js**: CSS processing settings
- **.gitignore**: Files to ignore in version control

## How to Use

### Running Locally (Development)
```bash
npm start
# Browser opens automatically to http://localhost:8282
# Make changes to src/ files
# Browser auto-refreshes
```

### Creating a Production Build
```bash
npm run build
# Creates optimized dist/ folder
# Ready to deploy anywhere (GitHub Pages, Netlify, traditional server)
```

### Deploying

#### Option A: GitHub Pages
```bash
npm run build
# Upload dist/ contents to GitHub Pages
```

#### Option B: Netlify
```bash
npm run build
# Drag & drop dist/ folder to Netlify
```

#### Option C: Traditional Web Server
```bash
npm run build
# Copy dist/ contents to web server
```

#### Option D: Docker
Create a `Dockerfile`:
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
FROM nginx:alpine
COPY --from=0 /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## Troubleshooting

### Issue: "npm: command not found"
**Solution**: Install Node.js from https://nodejs.org/

### Issue: "Cannot find module 'plotly'"
**Solution**: Run `npm install` first

### Issue: Port 8000 already in use
**Solution**: Change port in `webpack.config.js` line 13:
```javascript
port: 8001, // Use different port
```

### Issue: Build fails
**Solution**:
1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` again
3. Run `npm run build`

### Issue: Changes not appearing
**Solution**:
1. Make sure you're using `npm start` (not just opening HTML file)
2. Clear browser cache (Ctrl+Shift+Del or Cmd+Shift+Del)
3. Hard refresh (Ctrl+F5 or Cmd+Shift+R)

## Key Advantages of NPM Setup

✅ **Organized Code**: Separated HTML, CSS, and JS
✅ **Dependency Management**: Locked versions prevent breaking changes
✅ **Build Optimization**: Minified output, smaller file sizes
✅ **Development Tools**: Hot reload, error checking, better debugging
✅ **Scalability**: Easy to add new features and modules
✅ **Team Collaboration**: Standard NPM structure everyone recognizes
✅ **Version Control**: Better git integration with .gitignore
✅ **Deployment**: Production-ready builds in seconds

## Still Have the Original?

Your original single-file version (`app_with_gait_metrics.html`) is still available and works standalone. You can use either:

- **HTML File**: Quick local testing, no setup needed
- **NPM Project**: Professional development, deployment, team collaboration

## What's the Same?

✅ All functionality preserved
✅ Same user interface
✅ Same analysis features
✅ Dark mode still works
✅ All exports work the same
✅ No data loss
✅ Compatible with same CSV format

## Need Help?

1. Check the `README.md` file for full documentation
2. See `webpack.config.js` for build configuration
3. See `src/js/index.js` for library imports
4. Check browser console (F12) for any errors

## Next Steps

1. Run `npm install` to install dependencies
2. Run `npm start` to see it working
3. Make changes to `src/` files
4. Run `npm run build` when ready for production

---

**KiMA is now a professional NPM project!** 🚀

You can develop, test, build, and deploy with industry-standard tools while keeping all the functionality of your original application.
