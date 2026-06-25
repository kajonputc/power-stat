// ponytail: manual entry. New screenshot -> ask Claude to read meter name + date from INSIDE the image
// (not the filename) and pixel-measure the 24-bar chart, then append an entry under the right meter.
const READINGS = {
  "Meter1": [
    {
      "date": "2026-06-23",
      "total_kwh": 25.82,
      "hourly_avg_kwh": 1.08,
      "hourly_kwh": [0.89, 1.34, 1.28, 0.76, 1.17, 1.07, 1.23, 0.71, 0.43, 0.50, 0.81, 1.10, 1.11, 1.10, 0.70, 1.14, 1.21, 0.81, 1.34, 1.59, 1.27, 1.33, 1.39, 1.54]
    },
    {
      "date": "2026-06-24",
      "total_kwh": 23.67,
      "hourly_avg_kwh": 0.99,
      "hourly_kwh": [0.93, 1.21, 1.23, 0.78, 1.17, 1.10, 1.26, 0.37, 0.41, 0.59, 0.71, 1.04, 1.05, 0.63, 0.97, 0.99, 0.97, 0.76, 1.23, 1.35, 0.87, 1.55, 1.45, 1.05]
    }
  ],
  "Meter2": [
    {
      "date": "2026-06-23",
      "total_kwh": 34.67,
      "hourly_avg_kwh": 1.44,
      "hourly_kwh": [0.80, 1.43, 2.15, 1.32, 1.72, 1.64, 1.02, 1.51, 1.25, 1.30, 1.87, 1.75, 1.43, 1.08, 1.50, 1.64, 1.04, 1.66, 1.65, 2.02, 0.99, 1.05, 1.59, 1.26]
    },
    {
      "date": "2026-06-24",
      "total_kwh": 38.05,
      "hourly_avg_kwh": 1.59,
      "hourly_kwh": [1.67, 1.74, 1.18, 1.60, 1.48, 1.49, 0.91, 1.13, 1.08, 0.71, 2.58, 2.85, 1.90, 2.52, 1.72, 1.66, 0.95, 1.62, 1.82, 1.23, 1.69, 1.36, 0.88, 2.28]
    }
  ]
};
