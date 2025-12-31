# KiMA - Kinematics Motion Analysis for SCI

A professional web application for gait analysis and biomechanics assessment in Spinal Cord Injury (SCI) models. Analyze DeepLabCut data, extract gait parameters, and perform statistical comparisons.

## Features

- **Single Sample Analysis**: Load and analyze individual gait datasets
- **Multiple Sample Analysis**: Batch process multiple subjects and extract 46+ gait metrics
- **PCA & Group Separation**: Perform principal component analysis on aggregated metrics
- **Stick Figure Visualization**: Interactive 2D stick plots with frame-by-frame analysis
- **Statistical Analysis**: Box plots, violin plots, and distribution analysis
- **Dark Mode**: Professional dark theme support throughout the application
- **Export Ready**: Download high-resolution images, CSV data, and videos

## Project Structure

```
kima-app/
├── src/
│   ├── index.html          # Main HTML file
│   ├── js/
│   │   └── index.js        # Entry point and library imports
│   └── styles/
│       └── main.css        # All styling (responsive, dark mode)
├── dist/                   # Built output (generated)
├── package.json            # NPM dependencies and scripts
├── webpack.config.js       # Webpack build configuration
├── postcss.config.js       # PostCSS configuration
└── README.md              # This file
```

## Installation

```bash
# Clone or download the project
cd kima-app

# Install dependencies
npm install
```

## Usage

### Development Mode
Watch for changes and auto-reload:
```bash
npm run dev
```

### Development Server with Hot Reload
```bash
npm start
```

### Build for Production
```bash
npm run build
```

This creates an optimized version in the `dist/` folder ready for deployment.

### Quick Server
To run a simple HTTP server on port 8282:
```bash
npm run serve
```

Then visit `http://localhost:8282` in your browser.

## How to Use

1. **Home Page**: Select your analysis workflow:
   - Single Sample Analysis
   - Multiple Sample Analysis
   - PCA & Group Separation

2. **Upload Data**: Use the file upload area to load DeepLabCut CSV files
3. **Customize**: Adjust plot styling, colors, and parameters
4. **Export**: Download processed images, CSVs, or videos

## Technologies

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Visualization**: Plotly.js
- **Data Analysis**: PCA.js
- **Build Tool**: Webpack 5
- **Styling**: PostCSS

## Browser Compatibility

- Chrome/Chromium 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## File Formats

### Input
- **CSV Files**: DeepLabCut format (frame rows after two header lines)
- **Images**: PNG files for display (kinematics.png, ladder.png)

### Output
- **PNG**: High-resolution stick plots and charts
- **CSV**: Gait parameters and metrics
- **MP4/WebM**: Animated stick sequences

## Dependencies

### Production
- `plotly.js` - Interactive charting library
- `pca-js` - Principal Component Analysis

### Development
- `webpack` - Module bundler
- `webpack-cli` - CLI tool for webpack
- `webpack-dev-server` - Development server with hot reload
- `style-loader`, `css-loader` - CSS processing
- `postcss`, `postcss-loader` - PostCSS support
- `html-webpack-plugin` - HTML template processing
- `copy-webpack-plugin` - File copying during build

## Configuration Files

### webpack.config.js
Defines the build process, entry point, loaders, and plugins. Outputs optimized files to `dist/`.

### postcss.config.js
PostCSS configuration for CSS processing.

### .gitignore
Excludes node_modules, dist/, and other build artifacts from version control.

## Development Tips

1. **Hot Module Replacement**: Changes auto-reload in dev mode
2. **Source Maps**: Enabled in development for debugging
3. **Minification**: Automatic in production builds
4. **Asset Hashing**: Filenames include content hash for caching

## Deployment

### Option 1: Static Hosting (GitHub Pages, Netlify, Vercel)
```bash
npm run build
# Deploy contents of dist/ folder
```

### Option 2: Traditional Server
Copy the `dist/` folder contents to your web server

### Option 3: Docker
Create a Dockerfile to containerize the application

## Performance

- Optimized CSS and JavaScript bundles
- Image asset optimization
- Lazy loading for charts and plots
- Efficient DOM manipulation

## Support

For issues or questions, please check:
1. Console errors (F12 → Console tab)
2. Browser compatibility
3. File format requirements (CSV structure)

## License

MIT License - See LICENSE file for details

## Citation

If you use KiMA in your research, please cite:
```
KiMA - Kinematics Motion Analysis for SCI
A professional gait analysis tool for spinal cord injury models
https://github.com/your-repo
```

---

**Last Updated**: December 2024
**Version**: 1.0.0
