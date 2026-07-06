// Import styles
import '../styles/main.css';

// Import libraries
import Plotly from 'plotly.js/dist/plotly';

// Re-export for use in HTML inline scripts
window.Plotly = Plotly;

// PCA.js is loaded from CDN in the HTML file
console.log('KiMA - Kinematics Motion Analysis loaded successfully');
console.log('Libraries loaded: Plotly.js, PCA.js (from CDN)');
