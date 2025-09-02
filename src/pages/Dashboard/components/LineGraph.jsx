// LineGraph.jsx
import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// base options you were exporting (kept) — we'll merge these with defaults
export const baseOptions = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "Chart.js Bar Chart",
    },
  },
};

/**
 * LineGraph (Bar) component
 * - data: chart.js data object
 * - height: number (px) height of the chart container (default 280)
 * - options: optional Chart.js options that will be merged with baseOptions
 */
export function LineGraph({ data, height = 280, options = {} }) {
  // ensure maintainAspectRatio is false so the container height is respected
  const mergedOptions = {
    ...baseOptions,
    maintainAspectRatio: false,
    ...options,
    plugins: {
      ...baseOptions.plugins,
      ...(options.plugins || {}),
    },
  };

  // If labels are empty, Chart will still render axes; optionally you can show a fallback
  const hasData =
    data &&
    Array.isArray(data.datasets) &&
    data.datasets.length > 0 &&
    Array.isArray(data.labels) &&
    data.labels.length > 0;

  return (
    <div style={{ width: "100%", height: `${height}px`, minHeight: "180px" }}>
      {hasData ? (
        <Bar data={data} options={mergedOptions} />
      ) : (
        // simple fallback instead of a blank chart
        <div
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#7f8fa6",
            background: "#fafafa",
            borderRadius: 6,
            border: "1px dashed #eee",
          }}
        >
          No chart data available
        </div>
      )}
    </div>
  );
}

export default LineGraph;
