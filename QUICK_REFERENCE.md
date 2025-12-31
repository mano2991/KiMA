# KiMA Quick Reference Card

## One-Time Setup

```bash
cd /Users/manojkumark/Desktop/KiMA/KiMA
npm install
```

## Daily Development Commands

```bash
# Start development server (hot reload)
npm start

# Watch mode (auto-rebuild on file changes)
npm run dev

# Build for deployment
npm run build

# Simple HTTP server
npm run serve
```

## File Locations

| File/Folder | Purpose |
|-------------|---------|
| `src/index.html` | Main HTML template |
| `src/js/index.js` | JavaScript entry point |
| `src/styles/main.css` | All styling (8000+ lines) |
| `dist/` | Production build output |
| `package.json` | Dependencies & scripts |
| `webpack.config.js` | Build configuration |

## Quick Links

- **Full Docs**: `README.md`
- **Setup Guide**: `SETUP_GUIDE.md`
- **Project Info**: `PROJECT_SUMMARY.txt`

## Browser Access

```
Development: http://localhost:8282
Production:  Upload dist/ folder
```

## Common Tasks

### Add a New Library
```bash
npm install library-name
```

### Update Dependencies
```bash
npm update
```

### Delete Build and Reinstall
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Check npm Version
```bash
npm --version
```

## Deployment Checklist

- [ ] Run `npm install`
- [ ] Test with `npm start`
- [ ] Run `npm run build`
- [ ] Upload `dist/` folder
- [ ] Test in production environment

## Original File

Still available: `app_with_gait_metrics.html`

Can be used standalone without NPM if needed.

---

**Need help?** See `SETUP_GUIDE.md` for detailed instructions.
