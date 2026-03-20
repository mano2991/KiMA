# KiMA Suite

KiMA Suite is a local-first gait-analysis web application for DeepLabCut CSV workflows in rodent locomotor studies. The current release includes dedicated modules for:

- Single Sample Analysis
- Multiple Sample Analysis
- PCA and group separation
- Foot Fall analysis
- Treadmill analysis
- CatWalk analysis

The app is intended for publication-facing use inside a lab workflow: upload DLC CSV files, review plots and videos in the browser, and export publication-ready CSV and image outputs.

## Features

- Single-sample hindlimb gait visualization and parameter export
- Multi-sample metric extraction for batch processing
- PCA workflow for group labeling and separation
- Foot Fall module with paw contact plots, timelines, and paw videos
- Treadmill module with cycle metrics, angle distributions, and playable stick video
- CatWalk module with projected paw map, stride length, and stride width
- PNG export with selectable DPI in supported modules
- CSV export with dataset-aware file names

## Supported Input

KiMA expects DeepLabCut CSV exports.

- Single Sample and Treadmill: `toe`, `mtp`, `ankle`, `knee`, `hip`, `iliac crest`
- Foot Fall and CatWalk: `RF`, `LF`, `RH`, `LH`
- PCA: aggregated metrics exported from KiMA multiple-sample analysis

Sample datasets are bundled in [`samples/csv/`](./samples/csv/).

## Local Development

```bash
npm install
npm start
```

Open `http://localhost:8282`.

## Production Build

```bash
npm run build
npm run serve
```

`npm run serve` serves the built `dist/` folder on port `8282`.

## Deployment

Netlify configuration is already included in [`netlify.toml`](./netlify.toml).

- Build command: `npm run build`
- Publish directory: `dist`
- Node version: `18`

## Project Layout

```text
KiMA/
├── src/
│   ├── images/             # Images used by the app UI
│   ├── js/                 # JavaScript entry files
│   ├── styles/             # CSS
│   └── index.html          # Main interface and analysis logic
├── samples/
│   └── csv/                # Example CSV datasets
├── legacy/                 # Archived standalone HTML version
├── docs/                   # Setup notes and older reference docs
├── package.json
├── webpack.config.js
└── postcss.config.js
```

## Release Notes

- Main app entry point: [`src/index.html`](./src/index.html)
- Archived legacy file: [`legacy/app_with_gait_metrics.html`](./legacy/app_with_gait_metrics.html)
- Build output directory: `dist/`

## Publish Checklist

- Run `npm run build`
- Check each module with its matching sample CSV
- Verify CSV export names and image DPI export
- Confirm browser video export works on the target machine/browser
- Deploy `dist/` to Netlify or serve locally in the lab environment
