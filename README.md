# KiMA

KiMA is a local gait-analysis web app for working with DeepLabCut CSV data, single-sample review, multi-sample comparison, and PCA-based group separation.

## Run Locally

```bash
npm install
npm start
```

Open `http://localhost:8282`.

## Build And Serve

```bash
npm run build
npm run serve
```

`npm run serve` serves the built `dist/` folder on port `8282`.

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

## Organization Rules

- Keep app code inside `src/`.
- Keep example data inside `samples/csv/`.
- Keep backup or old versions inside `legacy/`.
- Keep notes, guides, and process docs inside `docs/`.
- Use lowercase kebab-case for new file names when possible.

## Main Commands

- `npm start` runs the dev server with hot reload on `8282`.
- `npm run build` creates the production bundle in `dist/`.
- `npm run serve` serves `dist/` locally on `8282`.

## Notes

- The current app entry point is `src/index.html`.
- The archived single-file version is `legacy/app_with_gait_metrics.html`.
- Supporting docs from version one are grouped under `docs/`.
